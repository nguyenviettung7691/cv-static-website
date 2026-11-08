<script setup lang="ts">
import { computed, onMounted, ref, useId } from 'vue'
import { useData } from 'vitepress'

interface Role {
    name: string
    html: string
}

interface ExperienceItem {
    start: string
    end?: string
    title: string
    org: string
    orgUrl: string
    logo: string
    roles: Role[]
}

interface CertificationItem {
    title: string
    url?: string
    issuer: string
    issuerUrl: string
    logo: string
    issued: string
    start?: string
    expires?: string
    desc: string
}

const props = defineProps<{
    kind: 'experience' | 'certification'
    data: (ExperienceItem | CertificationItem)[]
}>()

const { localeIndex } = useData()
const vi = computed(() => localeIndex.value === 'vi')
const labels = computed(() => vi.value
    ? { details: 'Chi tiết', expandAll: 'Mở tất cả', collapseAll: 'Thu gọn tất cả', current: 'Hiện tại', present: 'Hiện tại', expired: 'Hết hạn', issued: 'Cấp' }
    : { details: 'Details', expandAll: 'Expand all', collapseAll: 'Collapse all', current: 'Current', present: 'Present', expired: 'Expired', issued: 'Issued' })

const experiences = computed(() => (props.kind === 'experience' ? props.data : []) as ExperienceItem[])
const certifications = computed(() => (props.kind === 'certification' ? props.data : []) as CertificationItem[])

const countLabel = computed(() => {
    const n = props.data.length
    if (props.kind === 'experience') return vi.value ? `${n} vị trí` : `${n} role${n === 1 ? '' : 's'}`
    return vi.value ? `${n} chứng chỉ` : `${n} certification${n === 1 ? '' : 's'}`
})

// Values derived from today's date are only rendered after mount so SSR and hydration markup match.
const now = ref<Date | null>(null)
onMounted(() => { now.value = new Date() })
const nowMonth = computed(() => now.value
    ? `${now.value.getFullYear()}-${String(now.value.getMonth() + 1).padStart(2, '0')}`
    : null)

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

function formatMonth(value: string) {
    const [year, month] = value.split('-')
    return vi.value ? `${month} / ${year}` : `${MONTHS[Number(month) - 1]} ${year}`
}

function duration(start: string, end: string) {
    const [sy, sm] = start.split('-').map(Number)
    const [ey, em] = end.split('-').map(Number)
    const total = Math.max(1, (ey * 12 + em) - (sy * 12 + sm) + 1)
    const years = Math.floor(total / 12)
    const months = total % 12
    const parts: string[] = []
    if (vi.value) {
        if (years) parts.push(`${years} năm`)
        if (months) parts.push(`${months} tháng`)
    } else {
        if (years) parts.push(`${years} yr${years === 1 ? '' : 's'}`)
        if (months) parts.push(`${months} mo${months === 1 ? '' : 's'}`)
    }
    return parts.join(' ')
}

function experienceDuration(item: ExperienceItem) {
    const end = item.end ?? nowMonth.value
    return end ? duration(item.start, end) : ''
}

const isExpired = (item: CertificationItem) => !!item.expires && !!nowMonth.value && nowMonth.value > item.expires

const baseId = `timeline-${useId()}`
const panelId = (index: number) => `${baseId}-${index}`
const expanded = ref(new Set<number>())
const isOpen = (index: number) => expanded.value.has(index)
const allOpen = computed(() => props.data.length > 0 && expanded.value.size === props.data.length)

function toggle(index: number) {
    const next = new Set(expanded.value)
    if (!next.delete(index)) next.add(index)
    expanded.value = next
}

function toggleAll() {
    expanded.value = allOpen.value ? new Set() : new Set(props.data.map((_, index) => index))
}
</script>

<template>
    <div v-if="props.data.length > 0" class="tl">
        <div class="tl-toolbar">
            <span class="tl-count">{{ countLabel }}</span>
            <button type="button" class="tl-btn" :aria-expanded="allOpen" @click="toggleAll">
                {{ allOpen ? labels.collapseAll : labels.expandAll }}
            </button>
        </div>

        <ol v-if="props.kind === 'experience'" class="timeline">
            <li v-for="(item, index) in experiences" :key="item.start"
                :class="['tl-entry', { current: !item.end, open: isOpen(index) }]">
                <span class="tl-dot" aria-hidden="true"></span>
                <div class="tl-card">
                    <div class="tl-head">
                        <div class="tl-logo"><img :src="item.logo" alt="" loading="lazy" decoding="async"></div>
                        <div class="tl-main">
                            <h3 class="tl-title">{{ item.title }}</h3>
                            <a class="tl-org no-icon" :href="item.orgUrl" target="_blank" rel="noopener noreferrer">{{ item.org }}</a>
                            <p class="tl-meta">
                                <span>
                                    <time :datetime="item.start">{{ formatMonth(item.start) }}</time> –
                                    <time v-if="item.end" :datetime="item.end">{{ formatMonth(item.end) }}</time>
                                    <template v-else>{{ labels.present }}</template>
                                </span>
                                <span v-if="experienceDuration(item)">· {{ experienceDuration(item) }}</span>
                                <span v-if="!item.end" class="tl-tag tl-tag--current">{{ labels.current }}</span>
                            </p>
                        </div>
                    </div>
                    <p class="tl-summary">{{ item.roles.map((role) => role.name).join(' · ') }}</p>
                    <div v-show="isOpen(index)" :id="panelId(index)" class="tl-body">
                        <section v-for="role in item.roles" :key="role.name" class="tl-role">
                            <h4 class="tl-role-name">{{ role.name }}</h4>
                            <div class="tl-html" v-html="role.html"></div>
                        </section>
                    </div>
                    <button type="button" class="tl-btn tl-details" :aria-expanded="isOpen(index)"
                        :aria-controls="panelId(index)" @click="toggle(index)">
                        {{ labels.details }}<span class="visually-hidden">: {{ item.title }}, {{ item.org }}</span>
                        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg>
                    </button>
                </div>
            </li>
        </ol>

        <ol v-else class="timeline">
            <li v-for="(item, index) in certifications" :key="item.title"
                :class="['tl-entry', { expired: isExpired(item), open: isOpen(index) }]">
                <span class="tl-dot" aria-hidden="true"></span>
                <div class="tl-card">
                    <div class="tl-head">
                        <div class="tl-logo"><img :src="item.logo" alt="" loading="lazy" decoding="async"></div>
                        <div class="tl-main">
                            <h3 class="tl-title">
                                <a v-if="item.url" class="no-icon" :href="item.url" target="_blank" rel="noopener noreferrer">{{ item.title }}</a>
                                <template v-else>{{ item.title }}</template>
                            </h3>
                            <a class="tl-org no-icon" :href="item.issuerUrl" target="_blank" rel="noopener noreferrer">{{ item.issuer }}</a>
                            <p class="tl-meta">
                                <span v-if="item.start || item.expires">
                                    <time :datetime="item.start ?? item.issued">{{ formatMonth(item.start ?? item.issued) }}</time> –
                                    <time :datetime="item.expires ?? item.issued">{{ formatMonth(item.expires ?? item.issued) }}</time>
                                </span>
                                <span v-else>{{ labels.issued }} <time :datetime="item.issued">{{ formatMonth(item.issued) }}</time></span>
                                <span v-if="isExpired(item)" class="tl-tag tl-tag--expired">{{ labels.expired }}</span>
                            </p>
                        </div>
                    </div>
                    <div v-show="isOpen(index)" :id="panelId(index)" class="tl-body tl-html" v-html="item.desc"></div>
                    <button type="button" class="tl-btn tl-details" :aria-expanded="isOpen(index)"
                        :aria-controls="panelId(index)" @click="toggle(index)">
                        {{ labels.details }}<span class="visually-hidden">: {{ item.title }}</span>
                        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg>
                    </button>
                </div>
            </li>
        </ol>
    </div>
</template>

<style lang="scss" scoped>
.tl {
    --tl-accent: var(--vp-c-text-1);
    --tl-hover: var(--vp-c-default-soft);
    --tl-tint: var(--vp-c-default-soft);
    --tl-rail: var(--vp-c-divider);
    margin: 16px 0 24px;

    @supports (color: color-mix(in srgb, black, white)) {
        --tl-accent: color-mix(in srgb, var(--vp-c-brand-1) 40%, var(--vp-c-text-1));
        --tl-hover: color-mix(in srgb, var(--vp-c-brand-1) 12%, var(--vp-c-bg-soft));
        --tl-tint: color-mix(in srgb, var(--vp-c-brand-1) 25%, transparent);
    }
}
.tl-toolbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    margin-bottom: 8px;
}
.tl-count {
    color: var(--vp-c-text-2);
    font-size: 14px;
}
.tl-btn {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    min-height: 44px;
    padding: 0 10px;
    border: 0;
    border-radius: 8px;
    background: none;
    color: var(--tl-accent);
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.2s, color 0.2s;

    &:focus-visible {
        outline: 3px solid var(--tl-accent);
        outline-offset: 2px;
    }
}
.vp-doc ol.timeline {
    margin: 0;
    padding: 0;
    list-style: none;
}
.vp-doc .timeline > .tl-entry {
    position: relative;
    margin: 0;
    padding: 0 0 16px 28px;

    &::before {
        content: "";
        position: absolute;
        top: 22px;
        bottom: -6px;
        left: 6px;
        width: 2px;
        background: var(--tl-rail);
    }
    &:last-child::before { display: none; }
}
.tl-dot {
    position: absolute;
    top: 16px;
    left: 0;
    width: 14px;
    height: 14px;
    border: 2px solid var(--tl-rail);
    border-radius: 50%;
    background: var(--vp-c-bg);

    .current > & {
        border-color: var(--tl-accent);
        background: var(--tl-accent);
        box-shadow: 0 0 0 4px var(--tl-tint);
    }
}
.tl-card {
    min-width: 0;
    padding: 12px 14px 4px;
    border: 1px solid var(--vp-c-divider);
    border-radius: 12px;
    background: var(--vp-c-bg-soft);
    transition: border-color 0.2s;

    .open > & { border-color: var(--tl-accent); }
}
.tl-head {
    display: flex;
    gap: 12px;
    align-items: flex-start;
}
.tl-logo {
    display: grid;
    flex: none;
    place-items: center;
    width: 48px;
    height: 48px;
    padding: 4px;
    border: 1px solid var(--vp-c-divider);
    border-radius: 8px;
    // Logos are designed for light backgrounds, so keep a light plate in both themes.
    background: #fff;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
}
.tl-main {
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
}
.vp-doc .tl-title {
    margin: 0;
    padding: 0;
    border: 0;
    color: var(--vp-c-text-1);
    font-size: 16px;
    font-weight: 700;
    line-height: 1.4;
    letter-spacing: normal;
    overflow-wrap: anywhere;

    a {
        color: inherit;
        text-decoration: underline;
        text-decoration-color: var(--tl-accent);
        text-underline-offset: 3px;
    }
}
.vp-doc a.tl-org {
    align-self: flex-start;
    color: var(--tl-accent);
    font-size: 14px;
    font-weight: 600;
    line-height: 1.5;
    text-decoration: underline;
    text-underline-offset: 3px;
    overflow-wrap: anywhere;
}
.vp-doc .tl-meta {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 2px 6px;
    margin: 2px 0 0;
    color: var(--vp-c-text-2);
    font-size: 13px;
    line-height: 1.5;
}
.tl-tag {
    padding: 0 8px;
    border: 1px solid var(--vp-c-divider);
    border-radius: 6px;
    background: var(--vp-c-bg);
    color: var(--vp-c-text-1);
    font-size: 12px;
    font-weight: 600;

    &--current {
        border-color: var(--tl-accent);
        color: var(--tl-accent);
    }
    &--expired { border-style: dashed; }
}
.vp-doc .tl-summary {
    margin: 10px 0 0;
    color: var(--vp-c-text-2);
    font-size: 14px;
    line-height: 1.5;
}
.tl-body {
    margin-top: 10px;
    padding-top: 6px;
    border-top: 1px solid var(--vp-c-divider);
}
.vp-doc .tl-role-name {
    margin: 10px 0 4px;
    padding: 0;
    color: var(--vp-c-text-1);
    font-size: 15px;
    font-weight: 600;
    line-height: 1.4;
    letter-spacing: normal;
}
.vp-doc .tl-html {
    color: var(--vp-c-text-1);
    font-size: 15px;
    line-height: 1.65;
    overflow-wrap: anywhere;

    :deep(p) { margin: 4px 0; }
    :deep(ul) { margin: 4px 0 8px; }
    :deep(li + li) { margin-top: 4px; }
}
.tl-details {
    margin: 2px 0 0 -10px;

    svg { transition: transform 0.2s; }
    &[aria-expanded="true"] svg { transform: rotate(180deg); }
}
.visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    white-space: nowrap;
}
@media (hover: hover) {
    .tl-btn:hover { background: var(--tl-hover); color: var(--vp-c-text-1); }
}
@media (max-width: 480px) {
    .vp-doc .timeline > .tl-entry { padding-left: 22px; }
    .tl-card { padding: 10px 12px 4px; }
    .tl-head { gap: 10px; }
    .tl-logo { width: 40px; height: 40px; }
}
@media (prefers-reduced-motion: reduce) {
    .tl-btn, .tl-card, .tl-details svg { transition: none; }
}
@media (forced-colors: active) {
    .tl { --tl-accent: LinkText; --tl-hover: Canvas; --tl-tint: Canvas; --tl-rail: CanvasText; }
    .tl-logo { forced-color-adjust: none; }
    .open > .tl-card { border-color: Highlight; }
    .tl-btn:focus-visible { outline-color: Highlight; }
}
@media print {
    .tl-toolbar .tl-btn, .tl-details { display: none; }
    .tl-body { display: block !important; }
    .tl-card { break-inside: avoid; }
}
</style>
