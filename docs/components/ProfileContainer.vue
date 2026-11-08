<script setup lang="ts">
import { computed, ref } from 'vue'
import { useData, withBase } from 'vitepress'

const { localeIndex } = useData()
const isFlipped = ref(false)
const labels = computed(() => localeIndex.value === 'vi' ? {
    roles: ['Trưởng nhóm Kỹ thuật', 'Fullstack', 'Kiến trúc sư Đám mây'],
    cv: '⬇️ TẢI XUỐNG CV',
    socials: 'Hồ sơ mạng xã hội',
    contact: 'Liên hệ',
    showPhoto: 'Xem ảnh',
    showProfile: 'Xem hồ sơ',
    save: 'Lưu ảnh',
    photoNote: 'Landmark 81 từ bên kia sông Sài Gòn · Tôi chụp, 18/02/2025.',
    photoAlt: 'Landmark 81 nhìn từ bên kia sông Sài Gòn lúc hoàng hôn',
    newTab: 'mở trong tab mới'
} : {
    roles: ['Technical Lead', 'Fullstack', 'Cloud Architect'],
    cv: '⬇️ DOWNLOAD CV',
    socials: 'Social profiles',
    contact: 'Contact',
    showPhoto: 'View photo',
    showProfile: 'Back to profile',
    save: 'Save photo',
    photoNote: 'Landmark 81 across the Sai Gon River · Taken by me, Feb 18, 2025.',
    photoAlt: 'Landmark 81 across the Sai Gon River at sunset',
    newTab: 'opens in a new tab'
})
const socials = [
    { label: 'GitHub', icon: 'github', url: 'https://github.com/nguyenviettung7691' },
    { label: 'LinkedIn', icon: 'linkedin', url: 'https://www.linkedin.com/in/nguyen-viet-tung' },
    { label: 'Hashnode', icon: 'hashnode', url: 'https://hashnode.com/@nvtung' },
    { label: 'npm', icon: 'npm', url: 'https://www.npmjs.com/~nvtung.harry' }
]

</script>

<template>
    <div class="profile-container" :class="{ 'is-flipped': isFlipped }" :style="{ '--profile-photo': `url('${withBase('/bg-profile.jpg')}')` }">
        <div class="profile-card-flipper">
            <div class="profile-card-front" :inert="isFlipped" :aria-hidden="isFlipped">
                <div class="profile-portrait-panel">
                    <img :src="withBase('/images/Profile.jpg')" alt="Nguyễn Việt Tùng" class="profile-avatar" width="112" height="112">
                </div>
                <div class="profile-card-body">
                    <div class="profile-heading">
                        <p class="profile-name">Nguyễn Việt Tùng</p>
                        <ul class="profile-roles" :aria-label="localeIndex === 'vi' ? 'Vai trò' : 'Roles'">
                            <li v-for="role in labels.roles" :key="role">{{ role }}</li>
                        </ul>
                    </div>
                    <div class="profile-contacts">
                        <div class="profile-contact-detail">
                            <p class="profile-contact-label">{{ labels.contact }}</p>
                            <a class="profile-email no-icon" href="mailto:nvtung.harry@gmail.com">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 6 9 7 9-7" /></svg>
                                <span>nvtung.harry@gmail.com</span>
                            </a>
                        </div>
                        <a class="profile-cv no-icon" :href="withBase('/content/Nguyen_Viet_Tung-profile.pdf')" target="_blank" rel="noopener noreferrer">
                            {{ labels.cv }} <span class="profile-file-type">(PDF)</span>
                            <span class="visually-hidden"> — {{ labels.newTab }}</span>
                        </a>
                    </div>
                </div>
                <div class="profile-social-footer">
                    <nav class="profile-socials" :aria-label="labels.socials">
                        <a v-for="social in socials" :key="social.label" class="no-icon" :href="social.url" target="_blank" rel="noopener noreferrer">
                            <span class="profile-brand-tile" aria-hidden="true">
                                <span :class="['profile-social-icon', `vpi-social-${social.icon}`]" :style="{ '--profile-brand-icon': `url('https://api.iconify.design/simple-icons/${social.icon}.svg')` }"></span>
                            </span>
                            {{ social.label }}
                            <svg class="profile-external-arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M7 17 17 7M7 7h10v10" /></svg>
                            <span class="visually-hidden"> — {{ labels.newTab }}</span>
                        </a>
                    </nav>
                </div>
            </div>
            <figure class="profile-card-back" :inert="!isFlipped" :aria-hidden="!isFlipped">
                <img :src="withBase('/bg-profile.jpg')" :alt="labels.photoAlt" class="profile-back-photo">
                <figcaption>{{ labels.photoNote }}</figcaption>
            </figure>
        </div>
        <div class="profile-card-controls">
            <a v-if="isFlipped" class="profile-flip-button profile-save-button no-icon" :href="withBase('/bg-profile.jpg')" download="landmark-81-sai-gon-river-2025-02-18.jpg">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M12 3v12m-4-4 4 4 4-4M4 16v5h16v-5" /></svg>
                {{ labels.save }}
            </a>
            <button class="profile-flip-button" type="button" :aria-pressed="isFlipped" @click="isFlipped = !isFlipped">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M4 8h12l-3-3M20 16H8l3 3M4 8a8 8 0 0 0 0 8M20 16a8 8 0 0 0 0-8" /></svg>
                {{ isFlipped ? labels.showProfile : labels.showPhoto }}
            </button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.profile-container {
    --profile-photo-brightness: 0.98;
    --profile-photo-hover-brightness: 1.08;
    --profile-card-accent: #060a02;
    --profile-card-text: #090909;
    --profile-card-overlay: rgba(248, 248, 248, 0.5);
    --profile-card-backdrop: blur(6px);
    --profile-card-action: #34471e;
    --profile-card-action-hover: #253415;
    --profile-card-action-text: #fff;
    position: relative;
    isolation: isolate;
    perspective: 1200px;
    margin: 24px 0 32px;
    border: 1px solid var(--vp-c-divider);
    border-radius: 16px;
    color: var(--profile-card-text);
    background: var(--vp-c-bg);
    box-shadow: var(--vp-shadow-1);
    transition: box-shadow 0.25s, border-color 0.25s;
}
.profile-card-flipper {
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.6s;
}
.is-flipped .profile-card-flipper { transform: rotateY(180deg); }
.profile-card-front {
    position: relative;
    isolation: isolate;
    display: grid;
    grid-template-columns: 148px minmax(0, 1fr);
    border-radius: 15px 15px 0 0;
    backface-visibility: hidden;
}
.profile-container::after {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;
    border-radius: inherit;
    background: var(--profile-card-overlay);
    backdrop-filter: var(--profile-card-backdrop);
    pointer-events: none;
}
.is-flipped::after { display: none; }
.profile-card-back {
    position: absolute;
    inset: 0;
    margin: 0;
    border-radius: 15px 15px 0 0;
    background: var(--vp-c-bg);
    backface-visibility: hidden;
    transform: rotateY(180deg);
}
.profile-back-photo {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    min-height: 0;
    object-fit: cover;
    border-radius: 15px 15px 0 0;
}
.profile-card-back figcaption {
    position: absolute;
    inset: auto 0 0;
    padding: 10px 16px;
    background: rgba(248, 248, 248, 0.85);
    color: #090909;
    font-size: 12px;
    line-height: 1.5;
    text-align: center;
}
:global(.dark .profile-card-back figcaption) {
    background: rgba(24, 24, 24, 0.85);
    color: #fff;
}
.profile-card-controls {
    position: relative;
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    flex-wrap: wrap;
    padding: 8px 16px;
    border-radius: 0 0 15px 15px;
}
.is-flipped .profile-card-controls { background: var(--vp-c-bg); backdrop-filter: none; }
.profile-flip-button {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    min-height: 44px;
    padding: 6px 10px;
    border: 1px solid var(--vp-c-divider);
    border-radius: 6px;
    background: var(--vp-c-bg);
    color: var(--vp-c-text-1);
    font-size: 12px;
    cursor: pointer;
}
.profile-flip-button:hover { background: var(--vp-c-bg-soft); }
.profile-flip-button:focus-visible { outline: 3px solid var(--vp-c-text-1); outline-offset: 2px; }
.profile-container a.profile-save-button { color: var(--vp-c-text-1); font-size: 12px; font-weight: 400; }
:global(.dark .profile-container) {
    --profile-photo-brightness: 0.72;
    --profile-photo-hover-brightness: 0.82;
    --profile-card-action: #c5daa1;
    --profile-card-action-hover: #d7e6bd;
    --profile-card-action-text: #24300e;
    @supports (backdrop-filter: brightness(0.75)) {
        --profile-card-accent: #e7f1d4;
        --profile-card-text: #fff;
        --profile-card-overlay: rgba(24, 24, 24, 0.5);
        --profile-card-backdrop: blur(6px) brightness(0.75);
    }
}
.profile-portrait-panel {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 32px 16px;
    border-radius: 15px 0 0 0;
}
.profile-container::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -2;
    border-radius: inherit;
    background: var(--profile-photo) center / cover;
    filter: brightness(var(--profile-photo-brightness));
    transition: filter 0.25s;
}
.profile-avatar {
    flex: none;
    width: 112px;
    height: 112px;
    object-fit: cover;
    border: 3px solid #fff;
    border-radius: 18px;
    box-shadow: 0 6px 20px #00000040;
}
.profile-card-body {
    min-width: 0;
    padding: 30px 26px 26px;
    border-radius: 0 15px 0 0;
}
.profile-heading { min-width: 0; }
.profile-container .profile-contact-label {
    margin: 0;
    font-size: 11px;
    font-weight: 600;
    line-height: 1.5;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--profile-card-text);
}
.profile-container .profile-name {
    margin: 0 0 14px;
    font-size: clamp(28px, 3vw, 36px);
    font-weight: 700;
    letter-spacing: -0.03em;
    line-height: 1.2;
    overflow-wrap: anywhere;
}
.profile-container .profile-roles {
    display: flex;
    flex-wrap: wrap;
    gap: 6px 0;
    margin: 0;
    padding: 0;
    list-style: none;
}
.profile-roles li {
    margin: 0;
    padding: 0 12px;
    color: var(--profile-card-text);
    font-size: 14px;
    line-height: 1.5;
}
.profile-roles li:first-child {
    flex-basis: 100%;
    padding: 0;
    color: var(--profile-card-accent);
    font-size: 16px;
    font-weight: 600;
}
.profile-roles li:nth-child(2) { padding-left: 0; }
.profile-roles li:nth-child(n + 3) { border-left: 1px solid var(--vp-c-divider); }
.profile-contacts {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 16px;
    margin-top: 24px;
    padding-top: 18px;
    border-top: 1px solid var(--vp-c-divider);
}
.profile-contact-detail { min-width: 0; }
.profile-container a {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    min-height: 44px;
    color: var(--profile-card-text);
    font-size: 14px;
    font-weight: 600;
    line-height: 1.5;
    text-decoration: none;
    transition: background-color 0.2s, color 0.2s;
}
.profile-email { text-underline-offset: 4px; }
.profile-email svg { flex: none; color: var(--profile-card-accent); }
.profile-email span { overflow-wrap: anywhere; }
.profile-container a.profile-cv {
    justify-content: center;
    padding: 10px 14px;
    border: 1px solid transparent;
    border-radius: 6px;
    background: var(--profile-card-action);
    color: var(--profile-card-action-text);
    font-size: 12px;
}
.profile-social-footer {
    grid-column: 1 / -1;
    padding: 16px 22px;
}
.profile-socials { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 8px; }
.profile-socials a {
    min-width: 0;
    padding: 4px 8px 4px 4px;
    border: 1px solid var(--vp-c-divider);
    border-radius: 8px;
    background: var(--vp-c-bg);
    font-size: 12px;
}
.profile-brand-tile {
    display: grid;
    place-items: center;
    flex: none;
    width: 30px;
    height: 30px;
    border-radius: 5px;
    color: var(--profile-card-accent);
    background: var(--vp-c-bg-soft);
}
.profile-social-icon {
    flex: none;
    width: 20px;
    height: 20px;
    -webkit-mask-image: var(--icon, var(--profile-brand-icon));
    mask-image: var(--icon, var(--profile-brand-icon));
}
.profile-socials a { color: var(--vp-c-text-1); }
.profile-brand-tile { color: var(--vp-c-text-1); }
.profile-external-arrow { flex: none; margin-left: auto; color: var(--vp-c-text-2); }
.profile-file-type { font-size: 12px; }
.profile-container a:focus-visible { outline: 3px solid var(--profile-card-accent); outline-offset: 3px; }
@media (hover: hover) {
    .profile-container:hover { box-shadow: var(--vp-shadow-3); border-color: var(--profile-card-accent); }
    .profile-container:hover::before { filter: brightness(var(--profile-photo-hover-brightness)); }
    .profile-container .profile-email:hover { color: var(--profile-card-accent); text-decoration: underline; }
    .profile-container a.profile-cv:hover { background: var(--profile-card-action-hover); }
    .profile-socials a:hover { background: var(--vp-c-bg-soft); text-decoration: underline; text-underline-offset: 3px; }
}
@media (max-width: 640px) {
    .profile-card-front { grid-template-columns: minmax(0, 1fr); }
    .profile-portrait-panel { height: 120px; justify-content: flex-start; align-items: center; padding: 16px 22px; border-radius: 15px 15px 0 0; }
    .profile-avatar { width: 88px; height: 88px; }
    .profile-card-body { padding: 22px; border-radius: 0; }
    .profile-socials { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .profile-social-footer { padding: 16px 22px; }
}
@media (max-width: 360px) {
    .profile-social-footer { padding-inline: 16px; }
    .profile-socials a { gap: 4px; white-space: nowrap; }
    .profile-external-arrow { display: none; }
}
.profile-container:focus-within { box-shadow: var(--vp-shadow-3); }
@media (prefers-reduced-motion: reduce) {
    .profile-container, .profile-container::before, .profile-card-flipper, .profile-container a { transition: none; }
}
@media (forced-colors: active) {
    .profile-card-back figcaption { background: Canvas; color: CanvasText; }
    .profile-container::after { background: Canvas; backdrop-filter: none; }
    .profile-container::before { display: none; }
    .profile-portrait-panel, .profile-card-body, .profile-social-footer, .profile-card-controls { background: Canvas; backdrop-filter: none; }
    .profile-container { --profile-card-accent: CanvasText; background: Canvas; color: CanvasText; border-color: CanvasText; }
    .profile-container a { color: LinkText; }
    .profile-container a.profile-cv { background: Canvas; border-color: ButtonText; color: ButtonText; }
    .profile-container a:focus-visible { outline-color: Highlight; }
    .profile-socials a { border-color: LinkText; }
}
@media print {
    .profile-container::after { display: none; }
    .profile-container::before, .profile-card-back, .profile-card-controls { display: none; }
    .profile-card-flipper, .is-flipped .profile-card-flipper { transform: none; }
    .profile-card-front { backface-visibility: visible; }
    .profile-card-body, .profile-social-footer { background: #fff; backdrop-filter: none; }
    .profile-container { --profile-card-accent: #000; background: #fff; color: #000; box-shadow: none; break-inside: avoid; }
    .profile-container:hover, .profile-container:focus-within { box-shadow: none; }
    .profile-container .profile-name,
    .profile-container .profile-contact-label,
    .profile-container .profile-roles li { color: #000; }
    .profile-portrait-panel, .profile-social-footer, .profile-brand-tile,
    .profile-container a, .profile-container a.profile-cv { background: #fff; color: #000; border-color: #999; }
    .profile-container a.profile-cv { border: 1px solid #999; }
}
</style>
