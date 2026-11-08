<script setup lang="ts">
import { ref, useId } from 'vue'
import { useData } from 'vitepress'

interface GridItem {
    img: string
    title: string
    url?: string
    org?: string
    orgNote?: string
    country?: string
    countryName?: string
    desc?: string
}

const props = defineProps<{ data: GridItem[] }>()
const { localeIndex } = useData()
const baseId = `grid-${useId()}`
const expanded = ref(new Set<number>())

const panelId = (index: number) => `${baseId}-${index}`
const isOpen = (index: number) => expanded.value.has(index)

function toggle(index: number) {
    const next = new Set(expanded.value)
    if (!next.delete(index)) next.add(index)
    expanded.value = next
}

const normalize = (text: string) => text.toLocaleLowerCase().replace(/[^\p{L}\p{N}]/gu, '')

// Client/employer tiles usually repeat the company in the title; show the country instead.
function orgRepeatsTitle(item: GridItem) {
    return !!item.org && normalize(item.title).startsWith(normalize(item.org))
}
</script>

<template>
    <ul v-if="props.data.length > 0" class="portfolio-grid">
        <li v-for="(item, index) in props.data" :key="item.title" :class="['portfolio-tile', { open: isOpen(index) }]">
            <div class="portfolio-logo">
                <img :src="item.img" alt="" loading="lazy" decoding="async">
            </div>
            <div class="portfolio-body">
                <h4 class="portfolio-title">{{ item.title }}</h4>
                <p v-if="item.org || item.country" class="portfolio-org">
                    <img v-if="item.country" class="flag" :src="`https://flagcdn.com/${item.country}.svg`"
                        :alt="orgRepeatsTitle(item) || !item.org ? '' : item.countryName ?? ''"
                        width="18" height="12" loading="lazy">
                    <span v-if="item.org && !orgRepeatsTitle(item)">
                        {{ item.org }}<small v-if="item.orgNote"> ({{ item.orgNote }})</small>
                    </span>
                    <span v-else>{{ item.countryName }}</span>
                </p>
                <div v-if="item.desc" v-show="isOpen(index)" :id="panelId(index)" class="portfolio-desc" v-html="item.desc"></div>
                <div v-if="item.desc || item.url" class="portfolio-actions">
                    <button v-if="item.desc" type="button" class="portfolio-details"
                        :aria-expanded="isOpen(index)" :aria-controls="panelId(index)" @click="toggle(index)">
                        {{ localeIndex === 'vi' ? 'Chi tiết' : 'Details' }}
                        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg>
                    </button>
                    <a v-if="item.url" class="portfolio-learn no-icon" :href="item.url" target="_blank" rel="noopener noreferrer">
                        {{ localeIndex === 'vi' ? 'Tìm hiểu' : 'Learn more' }}
                        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M7 17 17 7M7 7h10v10" /></svg>
                    </a>
                </div>
            </div>
        </li>
    </ul>
</template>

<style lang="scss" scoped>
.portfolio-grid {
    --grid-accent: var(--vp-c-text-1);
    --grid-hover: var(--vp-c-default-soft);
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 12px;
    align-items: start;
    margin: 16px 0 24px;
    padding: 0;
    list-style: none;

    @supports (color: color-mix(in srgb, black, white)) {
        --grid-accent: color-mix(in srgb, var(--vp-c-brand-1) 40%, var(--vp-c-text-1));
        --grid-hover: color-mix(in srgb, var(--vp-c-brand-1) 12%, var(--vp-c-bg-soft));
    }
}
.portfolio-tile {
    display: flex;
    flex-direction: column;
    margin: 0;
    border: 1px solid var(--vp-c-divider);
    border-radius: 12px;
    background: var(--vp-c-bg-soft);
    overflow: hidden;
    transition: border-color 0.2s;

    &.open { border-color: var(--grid-accent); }
}
.portfolio-logo {
    display: grid;
    place-items: center;
    height: 112px;
    padding: 14px 18px;
    overflow: hidden;
    // Logos are designed for light backgrounds, so keep a light plate in both themes.
    background: #fff;
    border-bottom: 1px solid var(--vp-c-divider);

    img {
        display: block;
        width: 100%;
        height: 100%;
        min-height: 0;
        object-fit: contain;
    }
}
.portfolio-body {
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 12px 12px 6px;
}
.vp-doc .portfolio-title {
    margin: 0;
    padding: 0;
    color: var(--vp-c-text-1);
    font-size: 15px;
    font-weight: 700;
    line-height: 1.4;
    letter-spacing: normal;
}
.vp-doc .portfolio-org {
    display: flex;
    align-items: center;
    gap: 6px;
    margin: 0;
    color: var(--vp-c-text-2);
    font-size: 13px;
    line-height: 1.4;

    .flag {
        flex: none;
        width: 18px;
        height: auto;
        border-radius: 2px;
        box-shadow: 0 0 0 1px var(--vp-c-divider);
    }
    small { font-size: inherit; }
}
.portfolio-desc {
    margin: 6px 0 0;
    padding-top: 10px;
    border-top: 1px solid var(--vp-c-divider);
    color: var(--vp-c-text-1);
    font-size: 14px;
    line-height: 1.6;
}
.portfolio-actions {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 0 4px;
    margin-top: 2px;
}
.portfolio-details, .vp-doc a.portfolio-learn {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    min-height: 44px;
    border-radius: 8px;
    color: var(--grid-accent);
    font-size: 14px;
    font-weight: 600;
    transition: background-color 0.2s, color 0.2s;
}
.portfolio-details {
    margin-left: -8px;
    padding: 0 8px;
    border: 0;
    background: none;
    cursor: pointer;

    svg { transition: transform 0.2s; }
    &[aria-expanded="true"] svg { transform: rotate(180deg); }
}
.vp-doc a.portfolio-learn {
    text-decoration: underline;
    text-underline-offset: 3px;
}
.portfolio-details:focus-visible, .vp-doc a.portfolio-learn:focus-visible {
    outline: 3px solid var(--grid-accent);
    outline-offset: 2px;
}
@media (hover: hover) {
    .portfolio-details:hover { background: var(--grid-hover); color: var(--vp-c-text-1); }
    .vp-doc a.portfolio-learn:hover { color: var(--vp-c-text-1); }
}
@media (max-width: 960px) {
    .portfolio-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}
@media (max-width: 640px) {
    .portfolio-grid { grid-template-columns: minmax(0, 1fr); }
}
@media (prefers-reduced-motion: reduce) {
    .portfolio-tile, .portfolio-details, .portfolio-details svg, .vp-doc a.portfolio-learn { transition: none; }
}
@media (forced-colors: active) {
    .portfolio-grid { --grid-accent: LinkText; --grid-hover: Canvas; }
    .portfolio-tile.open { border-color: Highlight; }
    .portfolio-logo { forced-color-adjust: none; }
    .portfolio-details:focus-visible, .vp-doc a.portfolio-learn:focus-visible { outline-color: Highlight; }
}
</style>
