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
        event.preventDefault(); // optional
        share()
      });
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
  box-shadow: var(--vp-shadow-1);
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
  .name {
    overflow: hidden; /* Ensures the content is not revealed until the animation */
    border-right: .15em solid var(--vp-c-brand-1); /* The typwriter cursor */
    white-space: nowrap; /* Keeps the content on a single line */
    margin: 0 auto; /* Gives that scrolling effect as the typing happens */
    animation: 
      typing 3.5s steps(40, end),
      blink-caret .75s step-end infinite;
  }
  .image-src {
    border: 1px solid #ddd;
    border-radius: 50px;
    padding: 5px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
    transition: all 0.3s ease;
    &:hover {
      filter: brightness(1.1) saturate(1.2);
      border-radius: 0;
      box-shadow: 0 0 20px var(--vp-c-brand-2);
    }
  }
}

.VPHomeFeatures {
  .VPFeature {
    transition: all 0.3s ease;
    &:hover {
      background: linear-gradient(to bottom left, var(--vp-c-brand-soft), transparent);
    }
  }
}

.VPNavBarMenu {
  .VPNavBarMenuLink:not(.active):not(:hover) {
    filter: grayscale(100%);
  }
}

/* The typing effect */
@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: var(--vp-c-brand-1); }
}
</style>