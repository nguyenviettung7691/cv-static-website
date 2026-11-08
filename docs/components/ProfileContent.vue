<script lang="ts">
interface Section {
    title: string
    caption: string
}
interface Card {
    icon?: string
    title: string
    description: string
}
export interface ProfileContentData {
    intro: Section & { paragraphs: string[]; capabilitiesTitle: string; capabilities: Card[] }
    services: { title: string; cards: (Card & { id: string; caption: string })[] }
    bio: Section & { facts: { icon?: string; label: string; value: string; href?: string }[]; cv: string }
    languages: Section & {
        items: { name: string; proficiency: string; country: string }[]
        links: { label: string; href: string }[]
    }
    interests: Section & { groups: { title: string; items: string[] }[] }
}
</script>

<script setup lang="ts">
import { useData, withBase } from 'vitepress'
import ProfileContainer from './ProfileContainer.vue'

defineProps<{ data: ProfileContentData }>()
const { localeIndex } = useData()
</script>

<template>
    <div class="profile-content">
        <ProfileContainer />
        <section class="profile-section" aria-labelledby="intro">
            <div class="section-heading">
                <h2 id="intro">{{ data.intro.title }}<a class="header-anchor" href="#intro" :aria-label="data.intro.title"></a></h2>
            </div>
            <p class="section-caption">{{ data.intro.caption }}</p>
            <p v-for="(paragraph, index) in data.intro.paragraphs" :key="paragraph" :class="{ 'profile-lead': index === 0 }">{{ paragraph }}</p>
            <p class="capabilities-label">{{ data.intro.capabilitiesTitle }}</p>
            <ul class="profile-cards">
                <li v-for="card in data.intro.capabilities" :key="card.title" class="capability-card">
                    <h3><span v-if="card.icon" class="profile-heading-icon" aria-hidden="true">{{ card.icon }}</span>{{ card.title }}</h3>
                    <p>{{ card.description }}</p>
                </li>
            </ul>
        </section>
        <section class="profile-section" aria-labelledby="services">
            <div class="section-heading">
                <h2 id="services">{{ data.services.title }}<a class="header-anchor" href="#services" :aria-label="data.services.title"></a></h2>
            </div>
            <div class="profile-cards">
                <section v-for="card in data.services.cards" :key="card.id" class="service-card" :aria-labelledby="card.id">
                    <h3 :id="card.id">{{ card.title }}<a class="header-anchor" :href="`#${card.id}`" :aria-label="card.title"></a></h3>
                    <p class="section-caption">{{ card.caption }}</p>
                    <p>{{ card.description }}</p>
                </section>
            </div>
        </section>
        <div class="profile-facts">
            <section class="profile-section fact-card" aria-labelledby="bio">
                <div class="section-heading">
                    <h2 id="bio">{{ data.bio.title }}<a class="header-anchor" href="#bio" :aria-label="data.bio.title"></a></h2>
                </div>
                <p class="section-caption">{{ data.bio.caption }}</p>
                <dl class="bio-list">
                    <div v-for="fact in data.bio.facts" :key="fact.label">
                        <dt><span v-if="fact.icon" class="profile-heading-icon" aria-hidden="true">{{ fact.icon }}</span>{{ fact.label }}</dt>
                        <dd><a v-if="fact.href" :href="fact.href">{{ fact.value }}</a><template v-else>{{ fact.value }}</template></dd>
                    </div>
                </dl>
                <a class="profile-download no-icon" :href="withBase('/content/Nguyen_Viet_Tung-profile.pdf')" target="_blank" rel="noopener noreferrer">
                    {{ data.bio.cv }} <small>(PDF)</small>
                    <span class="visually-hidden"> — {{ localeIndex === 'vi' ? 'mở trong tab mới' : 'opens in a new tab' }}</span>
                </a>
            </section>
            <section class="profile-section fact-card" aria-labelledby="languages">
                <div class="section-heading">
                    <h2 id="languages">{{ data.languages.title }}<a class="header-anchor" href="#languages" :aria-label="data.languages.title"></a></h2>
                </div>
                <p class="section-caption">{{ data.languages.caption }}</p>
                <ul class="language-list">
                    <li v-for="language in data.languages.items" :key="language.name">
                        <img :src="`https://flagcdn.com/${language.country}.svg`" alt="" width="18" height="12" loading="lazy">
                        <span>{{ language.name }}</span>
                        <span class="language-level">{{ language.proficiency }}</span>
                    </li>
                </ul>
                <div class="profile-learning-links">
                    <a v-for="link in data.languages.links" :key="link.href" :href="link.href">{{ link.label }}</a>
                </div>
            </section>
            <section class="profile-section fact-card profile-interests" aria-labelledby="interests">
                <div class="section-heading">
                    <h2 id="interests">{{ data.interests.title }}<a class="header-anchor" href="#interests" :aria-label="data.interests.title"></a></h2>
                </div>
                <p class="section-caption">{{ data.interests.caption }}</p>
                <dl class="interest-list">
                    <div v-for="group in data.interests.groups" :key="group.title">
                        <dt>{{ group.title }}</dt>
                        <dd><ul><li v-for="item in group.items" :key="item">{{ item }}</li></ul></dd>
                    </div>
                </dl>
            </section>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.profile-content {
    --profile-accent: var(--vp-c-text-1);
    --profile-tint: var(--vp-c-bg-soft);
    color: var(--vp-c-text-1);
    overflow-wrap: anywhere;
    @supports (color: color-mix(in srgb, black, white)) {
        --profile-accent: color-mix(in srgb, var(--vp-c-brand-1) 40%, var(--vp-c-text-1));
        --profile-tint: color-mix(in srgb, var(--vp-c-brand-1) 12%, var(--vp-c-bg-soft));
    }
}
.profile-section { margin-top: 32px; min-width: 0; }
.section-heading { display: flex; align-items: flex-start; gap: 10px; margin-bottom: 12px; }
.profile-heading-icon { margin-right: 6px; }
.profile-content h2 { position: relative; margin: 0; padding: 0; border: 0; font-size: 22px; line-height: 1.3; }
.profile-content h3 { position: relative; margin: 0 0 8px; font-size: 16px; line-height: 1.45; letter-spacing: normal; }
.profile-content p { margin: 10px 0; }
.profile-content .section-caption { margin: 0 0 12px; color: var(--vp-c-text-2); font-size: 13px; line-height: 1.6; }
.profile-content .profile-lead { font-size: 19px; font-weight: 600; line-height: 1.6; }
.capabilities-label { font-weight: 600; }
.profile-content .profile-cards { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; margin: 16px 0 0; padding: 0; list-style: none; }
.capability-card, .service-card, .fact-card { padding: 18px; border: 1px solid var(--vp-c-divider); border-radius: 12px; background: var(--vp-c-bg-soft); min-width: 0; }
.profile-content .capability-card { margin: 0; }
.capability-card p, .service-card p { font-size: 14px; line-height: 1.65; }
.capability-card p:last-child, .service-card p:last-child { margin-bottom: 0; }
.profile-facts { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; margin-top: 32px; }
.fact-card { margin: 0; }
.profile-interests { grid-column: 1 / -1; }
.bio-list { margin: 0 0 16px; }
.bio-list > div { display: grid; grid-template-columns: minmax(0, 1fr); gap: 2px; padding: 8px 0; border-bottom: 1px solid var(--vp-c-divider); }
dt { color: var(--vp-c-text-2); font-size: 13px; }
dd { margin: 0; font-size: 14px; }
.profile-content a:not(.header-anchor) { color: var(--profile-accent); text-underline-offset: 3px; }
.profile-content a:focus-visible { outline: 3px solid var(--profile-accent); outline-offset: 3px; border-radius: 3px; }
.bio-list a { display: inline-flex; align-items: center; min-height: 44px; }
.profile-content a.profile-download {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 4px;
    min-height: 44px;
    padding: 8px 12px;
    border: 1px solid var(--profile-accent);
    border-radius: 8px;
    background: var(--profile-tint);
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;
    transition: background-color 0.2s;
}
.profile-content .language-list { margin: 0; padding: 0; list-style: none; }
.language-list li { display: flex; flex-wrap: wrap; align-items: center; gap: 6px; margin: 0; padding: 10px 0; border-bottom: 1px solid var(--vp-c-divider); font-size: 14px; }
.language-list img { flex: none; width: 18px; height: auto; }
.language-level { margin-left: auto; color: var(--vp-c-text-2); font-size: 13px; }
.profile-learning-links { display: flex; flex-wrap: wrap; gap: 0 14px; margin-top: 10px; }
.profile-learning-links a { display: inline-flex; align-items: center; min-height: 44px; font-size: 14px; }
.interest-list { margin: 0; }
.interest-list > div { display: grid; grid-template-columns: 120px minmax(0, 1fr); align-items: start; gap: 8px; margin-top: 12px; }
.interest-list dt { padding-top: 4px; font-weight: 600; }
.profile-content .interest-list ul { display: flex; flex-wrap: wrap; gap: 8px; margin: 0; padding: 0; list-style: none; }
.interest-list li { margin: 0; padding: 4px 10px; border: 1px solid var(--vp-c-divider); border-radius: 20px; background: var(--profile-tint); font-size: 13px; }
@media (hover: hover) {
    .profile-content a:not(.header-anchor):hover { color: var(--vp-c-text-1); text-decoration: underline; }
    .profile-content a.profile-download:hover { background: var(--vp-c-bg); }
}
@media (max-width: 640px) {
    .profile-content .profile-cards, .profile-facts { grid-template-columns: minmax(0, 1fr); }
    .profile-interests { grid-column: auto; }
    .capability-card, .service-card, .fact-card { padding: 16px; }
    .interest-list > div { grid-template-columns: minmax(0, 1fr); gap: 4px; }
}
@media (prefers-reduced-motion: reduce) { .profile-content a.profile-download { transition: none; } }
@media (forced-colors: active) {
    .profile-content { --profile-accent: LinkText; --profile-tint: Canvas; }
    .profile-content a:focus-visible { outline-color: Highlight; }
    .capability-card, .service-card, .fact-card, .interest-list li { border-color: CanvasText; }
}
@media print {
    .profile-content { --profile-accent: #000; --profile-tint: #fff; --vp-c-text-1: #000; --vp-c-text-2: #333; --vp-c-divider: #999; color: #000; }
    .profile-content .profile-cards, .profile-facts { display: block; }
    .capability-card, .service-card, .fact-card { background: #fff; border-color: #999; margin-bottom: 12px; break-inside: avoid; }
}
</style>
