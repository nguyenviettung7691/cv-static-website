<script setup lang="ts">
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { nextTick, provide, onMounted } from 'vue'

const { Layout } = DefaultTheme;
const { isDark, localeIndex } = useData()

/** Transition */
const enableTransitions = () =>
  'startViewTransition' in document &&
  window.matchMedia('(prefers-reduced-motion: no-preference)').matches

provide('toggle-appearance', async ({ clientX: x, clientY: y }: MouseEvent) => {
  if (!enableTransitions()) {
    isDark.value = !isDark.value
    return
  }

  const clipPath = [
    `circle(0px at ${x}px ${y}px)`,
    `circle(${Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y)
    )}px at ${x}px ${y}px)`
  ]

  await document.startViewTransition(async () => {
    isDark.value = !isDark.value
    await nextTick()
  }).ready

  document.documentElement.animate(
    { clipPath: isDark.value ? clipPath.reverse() : clipPath },
    {
      duration: 300,
      easing: 'ease-in',
      pseudoElement: `::view-transition-${isDark.value ? 'old' : 'new'}(root)`
    }
  )
})

onMounted(() => {
  /** Web Share */
  function share() {
    if (navigator.share) {
      navigator.share({
        title: document.title,
        text: localeIndex.value == 'vi' ? "Chia sẻ CV portfolio của tôi!" : "Share my CV portfolio!",
        url: window.location.href
      }).catch(console.error);
    } else {
      alert('Web Share API is not supported in your browser.');
    }
  }
  
  const links = document.querySelectorAll('a');
  for (const link of links) {
    if (link.textContent?.trim().startsWith('📩')) {
      link.addEventListener('click', function (event) {
        event.preventDefault()
        share()
      })
      link.style.cursor = 'pointer'
      break; // only bind to the first one that matches
    }
  }
})

</script>

<template>
  <Layout></Layout>
</template>

<style lang="scss">
:root {
  --vp-c-brand-1: #9BBC23;
  --vp-c-brand-2: #8cb300;
  --vp-c-brand-3: #9cb449;
  --vp-c-brand-soft: #acba7d;
  --vp-c-tip-1: #a8b1ff;
  --vp-c-tip-soft: #646cff29;
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #8cb300, #acba7d);
  --vp-font-family-base: /* normal text font */
  'IBM Plex Sans', 'Inter', ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  --vp-font-family-mono: /* code font */
  ui-monospace, 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono',
    'Courier New', monospace;
}

::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}
::view-transition-old(root),
.dark::view-transition-new(root) {
  z-index: 1;
}
::view-transition-new(root),
.dark::view-transition-old(root) {
  z-index: 9999;
}

html {
  scrollbar-color: var(--vp-c-brand-1) var(--vp-c-bg);
  scrollbar-width: thin;
}

iframe, .certification {
  box-shadow: var(--vp-shadow-4);
  border-radius: 10px;
  border: thin solid var(--vp-c-border);
}

.VPSwitchAppearance {
  width: 22px !important;
}

.VPSwitchAppearance .check {
  transform: none !important;
}

.VPHomeHero {
  --home-hero-bg: #f3f5ec;
  --home-hero-bg-end: #f9faf5;
  --home-hero-glow: rgba(155, 188, 35, 0.12);
  --home-hero-border: #d7ddc5;
  --home-hero-name: #536b18;
  --home-hero-title: #26301e;
  --home-hero-tagline: #4e5847;
  --home-hero-focus: #536b18;
  --home-hero-image-border: #fff;
  --home-hero-image-frame-border: #cbd4b0;
  --home-hero-image-frame-bg: rgba(83, 107, 24, 0.08);
  --home-hero-shadow: rgba(39, 49, 26, 0.14);
  --home-hero-image-shadow: rgba(39, 49, 26, 0.22);
  --vp-home-hero-name-color: var(--home-hero-name);
  --vp-home-hero-name-background: linear-gradient(120deg, #536b18, #748d35);
  --vp-button-brand-bg: #536b18;
  --vp-button-brand-border: #536b18;
  --vp-button-brand-text: #fff;
  --vp-button-brand-hover-bg: #425812;
  --vp-button-brand-hover-border: #425812;
  --vp-button-brand-hover-text: #fff;
  --vp-button-brand-active-bg: #34470e;
  --vp-button-brand-active-border: #34470e;
  --vp-button-brand-active-text: #fff;
  --vp-button-alt-bg: rgba(255, 255, 255, 0.72);
  --vp-button-alt-border: #829551;
  --vp-button-alt-text: #394724;
  --vp-button-alt-hover-bg: #e7edd9;
  --vp-button-alt-hover-border: #829551;
  --vp-button-alt-hover-text: #26301e;
  --vp-button-alt-active-bg: #dce5c5;
  --vp-button-alt-active-border: #718442;
  --vp-button-alt-active-text: #26301e;
  padding: calc(var(--vp-nav-height) + 32px) 24px 28px;

  .container {
    width: 100%;
    max-width: 1100px;
    gap: clamp(28px, 5vw, 64px);
    padding: clamp(28px, 5.5vw, 64px);
    overflow: hidden;
    border: 1px solid var(--home-hero-border);
    border-radius: 28px;
    background:
      radial-gradient(ellipse at 82% 18%, var(--home-hero-glow), transparent 38%),
      linear-gradient(135deg, var(--home-hero-bg), var(--home-hero-bg-end));
    box-shadow: 0 24px 64px var(--home-hero-shadow);
  }

  .main {
    order: 1;
    width: auto;
    min-width: 0;
    flex: 1 1 60%;
  }

  &.VPHero.has-image .main {
    max-width: none;
  }

  .name {
    display: block;
    width: auto;
    max-width: 100%;
    margin: 0;
    overflow: visible;
    border: 0;
    background: none;
    color: var(--home-hero-name);
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.14em;
    line-height: 1.5;
    text-transform: uppercase;
    white-space: normal;
    -webkit-text-fill-color: currentColor;
    animation: none;
  }

  .text {
    width: auto;
    max-width: 14ch;
    margin: 8px 0 0;
    color: var(--home-hero-title);
    font-size: clamp(42px, 5vw, 64px);
    font-weight: 700;
    letter-spacing: -0.045em;
    line-height: 1.04;
    text-wrap: balance;
  }

  .tagline {
    max-width: 52ch;
    padding-top: 16px;
    color: var(--home-hero-tagline);
    font-size: 17px;
    font-weight: 400;
    line-height: 1.65;
    overflow-wrap: anywhere;
  }

  .actions {
    gap: 8px;
    padding-top: 24px;
  }

  .action {
    padding: 4px;
  }

  .actions .VPButton {
    min-height: 44px;
    padding: 0 18px;
    border-radius: 999px;
    line-height: 42px;
    font-size: 14px;
    text-decoration: none;
    transition: color 0.2s, border-color 0.2s, background-color 0.2s, transform 0.2s;
  }

  .actions .VPButton:hover {
    transform: translateY(-1px);
  }

  .actions .VPButton:focus-visible {
    outline: 3px solid var(--home-hero-focus);
    outline-offset: 3px;
  }

  .image {
    order: 2;
    display: flex;
    flex: 0 1 36%;
    align-items: center;
    justify-content: center;
    min-height: 0;
    margin: 0;
  }

  .image-container {
    width: clamp(220px, 30vw, 320px);
    height: auto;
    aspect-ratio: 1;
    transform: none;
  }

  .image-bg {
    width: 88%;
    height: 88%;
    border: 1px solid var(--home-hero-image-frame-border);
    border-radius: 28px;
    background: var(--home-hero-image-frame-bg);
    filter: none;
  }

  .image-src {
    width: 88%;
    max-width: 280px;
    max-height: 280px;
    border: 4px solid var(--home-hero-image-border);
    border-radius: 24px;
    object-fit: cover;
    box-shadow: 0 20px 48px var(--home-hero-image-shadow);
  }
}

.VPHomeFeatures {
  --home-card-bg: #f3f5ec;
  --home-card-border: #829551;
  --home-card-text: #26301e;
  --home-card-muted: #4e5847;
  --home-card-icon-bg: #e7ecdc;
  --home-card-hover-bg: #e9eedf;
  --home-card-hover-border: #829551;
  --home-card-focus: #536b18;
  --home-card-shadow: rgba(39, 49, 26, 0.12);
  padding: 0 24px 52px;

  .container {
    max-width: 1100px;
  }

  .items {
    gap: 14px;
    margin: 0;
  }

  .item {
    padding: 0;
  }

  .VPFeature {
    height: 100%;
    border: 1px solid var(--home-card-border);
    border-radius: 18px;
    background-color: var(--home-card-bg);
    color: var(--home-card-text);
    transition: border-color 0.2s, background-color 0.2s, transform 0.2s, box-shadow 0.2s;
  }

  .VPFeature .box {
    min-height: 188px;
    padding: 24px;
  }

  .VPFeature .icon {
    border-radius: 12px;
    background-color: var(--home-card-icon-bg);
  }

  .VPFeature .title {
    color: var(--home-card-text);
    font-size: 18px;
    line-height: 1.4;
  }

  .VPFeature .details {
    color: var(--home-card-muted);
    font-size: 14px;
    line-height: 1.65;
  }

  .VPFeature.link:hover {
    transform: translateY(-3px);
    border-color: var(--home-card-hover-border);
    background-color: var(--home-card-hover-bg);
    box-shadow: 0 14px 28px var(--home-card-shadow);
  }

  .VPFeature:focus-visible {
    outline: 3px solid var(--home-card-focus);
    outline-offset: 3px;
  }
}

.dark .VPHomeFeatures {
  --home-card-bg: #252c21;
  --home-card-border: #3c4633;
  --home-card-text: #f5f7ef;
  --home-card-muted: #c7cebb;
  --home-card-icon-bg: #343d2d;
  --home-card-hover-bg: #2b3425;
  --home-card-hover-border: #84966b;
  --home-card-focus: #84966b;
  --home-card-shadow: rgba(17, 22, 14, 0.16);
}

.dark .VPHomeHero {
  --home-hero-bg: #1b2117;
  --home-hero-bg-end: #252d20;
  --home-hero-glow: rgba(155, 188, 35, 0.18);
  --home-hero-border: rgba(226, 237, 197, 0.16);
  --home-hero-name: #d6e5ad;
  --home-hero-title: #f5f7ef;
  --home-hero-tagline: #d0d5c6;
  --home-hero-focus: #d6e5ad;
  --home-hero-image-border: rgba(245, 247, 239, 0.88);
  --home-hero-image-frame-border: rgba(226, 237, 197, 0.24);
  --home-hero-image-frame-bg: rgba(214, 229, 173, 0.08);
  --home-hero-shadow: rgba(17, 22, 14, 0.18);
  --home-hero-image-shadow: rgba(8, 11, 6, 0.38);
  --vp-home-hero-name-color: #f5f7ef;
  --vp-home-hero-name-background: linear-gradient(120deg, #f5f7ef, #d6e5ad);
  --vp-button-brand-bg: #d6e5ad;
  --vp-button-brand-border: #d6e5ad;
  --vp-button-brand-text: #20251b;
  --vp-button-brand-hover-bg: #e2edc5;
  --vp-button-brand-hover-border: #e2edc5;
  --vp-button-brand-hover-text: #20251b;
  --vp-button-brand-active-bg: #c1d58f;
  --vp-button-brand-active-border: #c1d58f;
  --vp-button-brand-active-text: #20251b;
  --vp-button-alt-bg: rgba(255, 255, 255, 0.06);
  --vp-button-alt-border: rgba(226, 237, 197, 0.42);
  --vp-button-alt-text: #f5f7ef;
  --vp-button-alt-hover-bg: rgba(255, 255, 255, 0.12);
  --vp-button-alt-hover-border: rgba(226, 237, 197, 0.8);
  --vp-button-alt-hover-text: #fff;
  --vp-button-alt-active-bg: rgba(255, 255, 255, 0.16);
  --vp-button-alt-active-border: #e2edc5;
  --vp-button-alt-active-text: #fff;
}

.VPNavBarMenu {
  .VPNavBarMenuLink:not(.active):not(:hover) {
    filter: grayscale(100%);
  }
}

@media (min-width: 768px) {
  .VPHomeFeatures .item.grid-3 {
    width: calc((100% - 28px) / 3);
  }
}

@media (max-width: 640px) {
  .VPHomeHero {
    padding: calc(var(--vp-nav-height) + 20px) 16px 24px;

    .container {
      gap: 0;
      padding: 28px 20px;
      border-radius: 22px;
    }

    .main {
      width: 100%;
      flex-basis: auto;
    }

    .name {
      font-size: 12px;
      letter-spacing: 0.12em;
    }

    .text {
      max-width: 12ch;
      margin: 8px auto 0;
      font-size: clamp(38px, 11vw, 52px);
    }

    .tagline {
      max-width: 46ch;
      margin: 0 auto;
      padding-top: 14px;
      font-size: 15px;
      line-height: 1.6;
    }

    .actions {
      justify-content: center;
      gap: 4px;
      padding-top: 20px;
    }

    .actions .VPButton {
      min-height: 44px;
      padding: 0 14px;
      line-height: 42px;
      font-size: 13px;
    }

    .image {
      width: 100%;
      margin: 24px 0 0;
    }

    .image-container {
      width: clamp(176px, 58vw, 224px);
    }

    .image-src {
      max-width: 100%;
      max-height: 100%;
    }
  }

  .VPHomeFeatures {
    padding: 0 16px 36px;

    .VPFeature .box {
      min-height: 0;
      padding: 20px;
    }
  }
}

@media (prefers-reduced-motion: reduce) {
  .VPHomeHero *,
  .VPHomeFeatures * {
    animation: none !important;
    scroll-behavior: auto !important;
    transition: none !important;
  }
}
</style>