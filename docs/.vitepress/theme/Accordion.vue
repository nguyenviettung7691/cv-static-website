<script setup lang="ts">
import { computed, ref, useId, type CSSProperties } from 'vue';
import { useData, withBase } from 'vitepress';
import { icons } from '@iconify-json/simple-icons';
import { getIconData, iconToSVG, iconToHTML, replaceIDs } from '@iconify/utils';

interface Separator {
    break: true;
}

interface Skill {
    break?: false;
    title: string;
    desc?: string;
    icon?: string;
    color?: string;
    url?: string;
    wishlist?: boolean;
}

interface Category extends Skill {
    items?: (Skill | Separator)[];
}

const props = defineProps<{ data: (Category | Separator)[] }>();
const { localeIndex } = useData();
const panelId = `skillsets-${useId()}`;
const selectedTitle = ref<string>();
const labels = computed(() => localeIndex.value === 'vi'
    ? { categories: 'Nhóm kỹ năng', skills: 'công cụ', learn: 'Tìm hiểu', wishlist: 'Muốn tìm hiểu' }
    : { categories: 'Skill categories', skills: 'tools', learn: 'Learn more', wishlist: 'Wishlist' });

function isContent<T extends Skill>(entry: T | Separator): entry is T {
    return entry.break !== true;
}

function getIcon(icon?: string) {
    if (!icon) return undefined;
    const iconData = getIconData(icons, icon);
    if (!iconData) return { src: withBase(icon) };
    const rendered = iconToSVG(iconData, { height: '100%', width: '100%' });
    return { svg: iconToHTML(replaceIDs(rendered.body), rendered.attributes) };
}

function getLuminance(color: string): number {
    if (!/^#(?:[\da-f]{3}|[\da-f]{6})$/i.test(color)) {
        throw new Error(`Skill icon color must be hexadecimal (#RGB or #RRGGBB): ${color}`);
    }
    const hex = color.length === 4 ? [...color.slice(1)].map(c => c + c).join('') : color.slice(1);
    const channels = [0, 2, 4].map(offset => parseInt(hex.slice(offset, offset + 2), 16) / 255)
        .map(c => c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4);
    return channels.reduce((sum, c, i) => sum + c * [0.2126, 0.7152, 0.0722][i], 0);
}

const darkPlate = '#202127';
const lightPlate = '#f6f6f7';
const darkLuminance = getLuminance(darkPlate);
const lightLuminance = getLuminance(lightPlate);

function getIconStyle(item: Skill, image: boolean): CSSProperties {
    if (image) return { backgroundColor: lightPlate };
    if (!item.color) return {};
    const luminance = getLuminance(item.color);
    // Choose the neutral backplate with the stronger contrast, retaining the brand color.
    const darkContrast = (Math.max(luminance, darkLuminance) + 0.05) / (Math.min(luminance, darkLuminance) + 0.05);
    const lightContrast = (Math.max(luminance, lightLuminance) + 0.05) / (Math.min(luminance, lightLuminance) + 0.05);
    return { color: item.color, backgroundColor: darkContrast > lightContrast ? darkPlate : lightPlate };
}

function present(item: Skill) {
    const icon = getIcon(item.icon);
    return { ...item, artwork: icon, iconStyle: getIconStyle(item, Boolean(icon?.src)) };
}

const categories = computed(() => props.data.filter(isContent).map(category => {
    const groups: ReturnType<typeof present>[][] = [];
    let group: ReturnType<typeof present>[] = [];
    for (const item of category.items ?? []) {
        if (isContent(item)) {
            group.push(present(item));
        } else if (group.length) {
            groups.push(group);
            group = [];
        }
    }
    if (group.length) groups.push(group);
    return {
        ...present(category),
        groups,
        count: groups.reduce((count, items) => count + items.length, 0),
    };
}));
const selected = computed(() =>
    categories.value.find(category => category.title === selectedTitle.value) ?? categories.value[0]);
</script>

<template>
    <div v-if="selected" class="accordion">
        <div class="accordion-categories" role="group" :aria-label="labels.categories">
            <button v-for="category in categories" :key="category.title" type="button"
                class="accordion-category" :aria-pressed="selected.title === category.title"
                :aria-controls="panelId" @click="selectedTitle = category.title">
                <span v-if="selected.title === category.title" class="category-selected-marker" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                        <path d="m5 12 4 4 10-10" />
                    </svg>
                </span>
                <span v-if="category.artwork" class="accordion-icon category-icon"
                    :style="category.iconStyle" aria-hidden="true">
                    <span v-if="category.artwork.svg" v-html="category.artwork.svg"></span>
                    <img v-else :src="category.artwork.src" alt="" width="64" height="64">
                </span>
                <span class="accordion-category-title">{{ category.title }}</span>
                <span class="accordion-category-count">{{ category.count }} {{ labels.skills }}</span>
            </button>
        </div>
        <section :id="panelId" class="accordion-panel" :aria-labelledby="`${panelId}-title`">
            <div class="accordion-panel-header">
                <div :id="`${panelId}-title`">{{ selected.title }}</div>
                <p v-if="selected.desc" class="accordion-description" v-html="selected.desc"></p>
                <a v-if="selected.url" class="accordion-learn no-icon" :href="selected.url"
                    target="_blank" rel="noopener noreferrer">
                    {{ labels.learn }}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                        <path d="M7 17 17 7M7 7h10v10" />
                    </svg>
                </a>
            </div>
            <div v-for="(group, index) in selected.groups" :key="index" class="skill-group">
                <component :is="item.url ? 'a' : 'div'" v-for="item in group" :key="item.title"
                    class="skill-card no-icon" :href="item.url" :target="item.url ? '_blank' : undefined"
                    :rel="item.url ? 'noopener noreferrer' : undefined">
                    <span v-if="item.artwork" class="accordion-icon skill-icon"
                        :style="item.iconStyle" aria-hidden="true">
                        <span v-if="item.artwork.svg" v-html="item.artwork.svg"></span>
                        <img v-else :src="item.artwork.src" alt="" width="36" height="36">
                    </span>
                    <span class="skill-text">
                        <span class="skill-title">{{ item.title }}</span>
                        <span v-if="item.desc" class="skill-description" v-html="item.desc"></span>
                        <span v-if="item.wishlist" class="wishlist-badge">{{ labels.wishlist }}</span>
                    </span>
                    <span v-if="item.url" class="skill-link-marker" aria-hidden="true">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M7 17 17 7M7 7h10v10" />
                        </svg>
                    </span>
                </component>
            </div>
        </section>
    </div>
</template>

<style lang="scss" scoped>
.accordion {
    --accordion-accent: var(--vp-c-text-1);
    --accordion-hover: var(--vp-c-bg-soft);
    margin: 24px 0;
    color: var(--vp-c-text-1);

    @supports (color: color-mix(in srgb, black, white)) {
        --accordion-accent: color-mix(in srgb, var(--vp-c-brand-1) 40%, var(--vp-c-text-1));
        --accordion-hover: color-mix(in srgb, var(--vp-c-brand-1) 12%, var(--vp-c-bg-soft));
    }
}
.accordion-categories {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 12px;
    margin-bottom: 20px;
}
.accordion-category {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 6px;
    min-width: 0;
    min-height: 154px;
    padding: 16px 8px;
    border: 2px solid var(--vp-c-divider);
    border-radius: 14px;
    background: var(--vp-c-bg-soft);
    color: var(--vp-c-text-1);
    font: inherit;
    line-height: 1.4;
    cursor: pointer;
    transition: background-color 0.15s, border-color 0.15s;

    &[aria-pressed="true"] { border-color: var(--accordion-accent); }
}
.accordion-category-title { font-size: 16px; font-weight: 700; overflow-wrap: anywhere; }
.accordion-category-count { font-size: 13px; color: var(--vp-c-text-1); }
.category-selected-marker {
    position: absolute;
    top: 8px;
    right: 8px;
    display: grid;
    place-items: center;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background: var(--accordion-accent);
    color: var(--vp-c-bg);
    svg { width: 14px; height: 14px; }
}
.accordion-icon {
    display: grid;
    place-items: center;
    flex-shrink: 0;
    border-radius: 10px;
    background: var(--vp-c-bg);
    color: var(--vp-c-text-1);
    span, img { display: block; width: 100%; height: 100%; }
    img { object-fit: contain; }
}
.category-icon { width: 80px; height: 80px; padding: 12px; }
.skill-icon { width: 52px; height: 52px; padding: 8px; }
.accordion-panel {
    padding: 20px;
    border: 1px solid var(--vp-c-divider);
    border-radius: 14px;
    background: var(--vp-c-bg-soft);
}
.accordion-panel-header {
    div { margin: 0; font-size: 22px; line-height: 1.4; }
    p { margin: 8px 0 0; line-height: 1.6; }
}
.accordion-learn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    min-height: 44px;
    color: var(--accordion-accent);
    text-underline-offset: 3px;
    svg { width: 16px; height: 16px; }
}
.skill-group {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px;
    margin-top: 16px;
    & + & { padding-top: 16px; border-top: 1px solid var(--vp-c-divider); }
}
.skill-card {
    display: flex;
    align-items: center;
    gap: 12px;
    min-width: 0;
    min-height: 76px;
    padding: 12px;
    border: 1px solid var(--vp-c-divider);
    border-radius: 10px;
    background: var(--vp-c-bg);
    color: var(--vp-c-text-1);
    text-decoration: none;
    transition: background-color 0.15s, border-color 0.15s;
}
.skill-text { flex: 1; min-width: 0; }
.skill-title, .skill-description { display: block; overflow-wrap: anywhere; }
.skill-title { font-size: 15px; font-weight: 700; line-height: 1.5; }
.skill-description { margin-top: 2px; font-size: 13px; font-weight: 400; line-height: 1.5; }
.skill-link-marker {
    flex-shrink: 0;
    color: var(--accordion-accent);
    svg { display: block; width: 16px; height: 16px; }
}
.wishlist-badge {
    display: inline-block;
    margin-top: 6px;
    padding: 2px 8px;
    border: 1px solid var(--vp-c-divider);
    border-radius: 6px;
    background: var(--vp-c-bg-soft);
    color: var(--vp-c-text-1);
    font-size: 12px;
    font-weight: 600;
    line-height: 1.5;
}
.accordion-category:focus-visible, a.skill-card:focus-visible, .accordion-learn:focus-visible {
    outline: 3px solid var(--accordion-accent);
    outline-offset: 3px;
}
@media (hover: hover) {
    .accordion-category:hover, a.skill-card:hover {
        border-color: var(--accordion-accent);
        background: var(--accordion-hover);
        color: var(--vp-c-text-1);
    }
    a.skill-card:hover .skill-title { text-decoration: underline; text-underline-offset: 3px; }
    .accordion-learn:hover { color: var(--vp-c-text-1); }
}
@media (max-width: 600px) {
    .accordion-categories { gap: 8px; }
    .accordion-category { min-height: 134px; padding: 12px 4px; }
    .category-icon { width: 64px; height: 64px; padding: 10px; }
    .accordion-category-title { font-size: 14px; }
    .category-selected-marker { top: 4px; right: 4px; width: 18px; height: 18px; }
    .accordion-panel { padding: 14px; }
    .skill-group { grid-template-columns: minmax(0, 1fr); }
}
@media (prefers-reduced-motion: reduce) {
    .accordion-category, .skill-card { transition: none; }
}
@media (forced-colors: active) {
    .accordion { --accordion-accent: CanvasText; --accordion-hover: Canvas; }
    .accordion-category[aria-pressed="true"] { border-color: Highlight; }
    .category-selected-marker { forced-color-adjust: none; color: HighlightText; background: Highlight; }
    .accordion-icon { forced-color-adjust: none; }
    .accordion-category:focus-visible, a.skill-card:focus-visible, .accordion-learn:focus-visible {
        outline-color: Highlight;
    }
}
</style>
