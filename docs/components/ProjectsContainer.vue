<script setup lang="ts">
import { computed, ref } from 'vue';
import { useData } from 'vitepress';

interface Project {
    key: string;
    repo: string;
    url: string;
    image: string;
}

const props = defineProps<{ data: Project[] }>();
const { localeIndex } = useData();
const activeIndex = ref(0);
const currentIndex = computed(() => Math.min(activeIndex.value, Math.max(props.data.length - 1, 0)));
const selected = computed(() => props.data[currentIndex.value]);
const labels = computed(() => localeIndex.value === 'vi' ? {
    carousel: 'Dự án',
    previous: 'Dự án trước',
    next: 'Dự án tiếp theo',
    live: 'Xem trang trực tiếp',
    view: 'Xem dự án',
    screenshot: 'Ảnh chụp màn hình',
    summary: 'Thông tin kho mã GitHub',
    slide: 'trang',
} : {
    carousel: 'Projects',
    previous: 'Previous project',
    next: 'Next project',
    live: 'View live page',
    view: 'View project',
    screenshot: 'Screenshot',
    summary: 'GitHub repository summary',
    slide: 'slide',
});

const repositoryCard = computed(() => {
    if (!selected.value) return undefined;
    const [username, repo] = selected.value.repo.split('/');
    return `https://github-stats-extended.vercel.app/api/pin/?username=${encodeURIComponent(username)}&repo=${encodeURIComponent(repo)}`;
});

function navigateHandler(direction: -1 | 1) {
    activeIndex.value = (currentIndex.value + direction + props.data.length) % props.data.length;
}
</script>

<template>
    <section v-if="selected" class="carousel" :aria-label="labels.carousel" aria-roledescription="carousel">
        <div class="carousel-header">
            <div class="carousel-project">
                <a class="carousel-repository no-icon" :href="`https://github.com/${selected.repo}`" target="_blank" rel="noopener noreferrer">
                    <span class="carousel-project-name">{{ selected.key }}</span>
                    <span class="carousel-repository-name">{{ selected.repo }}</span>
                </a>
                <a class="url" :href="selected.url" target="_blank" rel="noopener noreferrer">
                    {{ labels.live }}
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path d="M14 3h7v7M21 3l-11 11M10 3H3v18h18v-7" />
                    </svg>
                </a>
            </div>
            <object class="carousel-repo-card" type="image/svg+xml" :data="repositoryCard" :aria-label="`${labels.summary}: ${selected.repo}`" width="400" height="150">
                <a :href="`https://github.com/${selected.repo}`" target="_blank" rel="noopener noreferrer">{{ selected.repo }}</a>
            </object>
        </div>

        <div class="carousel-inner-wrapper">
            <div class="carousel-inner" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
                <div v-for="(item, index) in data" :key="item.key" class="slide"
                    role="group" :aria-roledescription="labels.slide"
                    :aria-label="`${item.key}, ${index + 1} / ${data.length}`" :aria-hidden="index !== currentIndex">
                    <img :src="item.image" :alt="`${labels.screenshot}: ${item.key}`"
                        :loading="index === currentIndex ? 'eager' : 'lazy'" decoding="async" width="1600" height="900" />
                </div>
            </div>
        </div>

        <div v-if="data.length > 1" class="carousel-controls">
            <button type="button" class="carousel-arrow left" :aria-label="labels.previous" :title="labels.previous" @click="navigateHandler(-1)">
                <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m15 6-6 6 6 6" /></svg>
            </button>
            <div class="carousel-nav" :aria-label="labels.view">
                <button v-for="(item, index) in data" :key="item.key" type="button" class="carousel-dot"
                    :aria-label="`${labels.view}: ${item.key}`" :title="item.key"
                    :aria-current="index === currentIndex ? 'true' : 'false'" @click="activeIndex = index">
                    <span aria-hidden="true"></span>
                </button>
            </div>
            <button type="button" class="carousel-arrow right" :aria-label="labels.next" :title="labels.next" @click="navigateHandler(1)">
                <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m9 6 6 6-6 6" /></svg>
            </button>
        </div>
        <p class="carousel-status" role="status" aria-live="polite" aria-atomic="true">
            {{ selected.key }} <span>{{ currentIndex + 1 }} / {{ data.length }}</span>
        </p>
    </section>
</template>

<style lang="scss" scoped>
.carousel {
    --carousel-highlight-color: var(--vp-c-text-1);
    --carousel-highlight-bg: var(--vp-c-default-2);

    @supports (color: color-mix(in srgb, black, white)) {
        --carousel-highlight-color: color-mix(in srgb, var(--vp-c-brand-1) 40%, var(--vp-c-text-1));
        --carousel-highlight-bg: color-mix(in srgb, var(--vp-c-brand-1) 20%, var(--vp-c-bg-soft));
    }

    margin-top: 24px;
    padding: 16px;
    border: 1px solid var(--vp-c-divider);
    border-radius: 16px;
    background: var(--vp-c-bg-soft);

    .carousel-header {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;
        margin-bottom: 16px;
    }

    .carousel-project {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 12px;
        width: 100%;
    }

    .carousel-repository {
        min-width: 0;
        max-width: 100%;
        text-decoration: none;
        overflow-wrap: anywhere;
    }

    .carousel-project-name {
        display: block;
        font-size: 18px;
        font-weight: 600;
    }

    .carousel-repository-name {
        display: block;
        color: var(--vp-c-text-2);
        font-size: 12px;
        line-height: 20px;
    }

    .url {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        min-height: 44px;
        padding: 8px 12px;
        border: 1px solid var(--vp-c-divider);
        border-radius: 8px;
        font-size: 14px;
        font-weight: 600;
        text-decoration: none;
        color: var(--carousel-highlight-color);
    }

    svg {
        width: 20px;
        height: 20px;
        fill: none;
        stroke: currentColor;
        stroke-width: 2;
        stroke-linecap: round;
        stroke-linejoin: round;
    }

    .carousel-repo-card {
        display: block;
        width: 100%;
        max-width: 400px;
        height: auto;
        aspect-ratio: 400 / 150;
        border-radius: 8px;
        overflow: hidden;
    }

    .carousel-inner-wrapper {
        width: 100%;
        aspect-ratio: 16 / 9;
        overflow: hidden;
        border: 1px solid var(--vp-c-divider);
        border-radius: 8px;
        background: var(--vp-c-bg);
    }

    .carousel-inner {
        display: flex;
        height: 100%;
        transition: transform 0.3s ease;
    }

    .slide {
        flex: 0 0 100%;
        min-width: 0;
        height: 100%;

        img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }

    .carousel-controls {
        display: grid;
        grid-template-columns: 44px minmax(0, 1fr) 44px;
        align-items: center;
        gap: 8px;
        margin-top: 12px;
    }

    .carousel-arrow {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 44px;
        height: 44px;
        border: 1px solid var(--vp-c-divider);
        border-radius: 8px;
        background: var(--vp-c-bg);
        color: var(--vp-c-text-1);
        cursor: pointer;
    }

    .carousel-nav {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .carousel-dot {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 44px;
        height: 44px;
        border-radius: 8px;
        cursor: pointer;

        span {
            width: 8px;
            height: 8px;
            border-radius: 99px;
            background: var(--vp-c-text-2);
            transition: width 0.2s ease, background-color 0.2s ease;
        }

        &[aria-current="true"] span {
            width: 24px;
            background: var(--carousel-highlight-color);
        }

        &:hover span {
            background: var(--carousel-highlight-color);
        }
    }

    .carousel-arrow:hover, .carousel-dot:hover, .url:hover {
        background: var(--carousel-highlight-bg);
        color: var(--vp-c-text-1);
    }

    button:focus-visible, a:focus-visible {
        outline: 2px solid var(--carousel-highlight-color);
        outline-offset: 3px;
    }

    .carousel-status {
        margin: 8px 0 0;
        text-align: center;
        font-size: 13px;
        line-height: 20px;
        color: var(--vp-c-text-2);
        overflow-wrap: anywhere;

        span {
            margin-left: 8px;
            white-space: nowrap;
            font-variant-numeric: tabular-nums;
        }
    }

    @media (max-width: 480px) {
        padding: 12px;
    }

    @media (forced-colors: active) {
        .carousel-arrow:hover:not(:focus-visible),
        .carousel-dot:hover:not(:focus-visible),
        .url:hover:not(:focus-visible) {
            outline: 2px solid CanvasText;
            outline-offset: -2px;
        }

        .carousel-dot span {
            forced-color-adjust: none;
            border: 2px solid CanvasText;
            background: Canvas;
        }

        .carousel-dot[aria-current="true"] span, .carousel-dot:hover span {
            background: CanvasText;
        }
    }

    @media (prefers-reduced-motion: reduce) {
        .carousel-inner, .carousel-dot span {
            transition: none;
        }
    }
}
</style>
