<script setup>
import { onMounted, onUnmounted, nextTick, computed, ref } from 'vue'
import { useData } from 'vitepress'
const { localeIndex, isDark } = useData()

const darkSuffix = computed(() => isDark.value ? '.dark' : '')
const thumbnail = (id) => `https://certificates.dev/.netlify/images?url=https:%2F%2Fapi.certificates.dev%2Fcertificates%2Fthumbnail%2F${id}${darkSuffix.value}.jpg`

const certificates = [
  { id: 'a035486e-e918-44ac-98fd-d6ef9a74bbc4', track: 'vuejs', name: 'Vue.js' },
  { id: '9cf3a5b7-fd94-4a17-ab22-6d17596e6c56', track: 'vuejs', name: 'Vue.js' },
  { id: 'a14392fa-86d6-4a2e-9154-32ccedf0f9af', track: 'javascript', name: 'JavaScript' },
  { id: 'a0444290-62ca-4f5c-bb46-90ed9228b6ef', track: 'javascript', name: 'JavaScript' },
  { id: '9f981598-89ce-4208-b545-8766a6e20fae', track: 'javascript', name: 'JavaScript' },
]

const microsoft = [
  {
    file: `images/Certs_2.png`,
    name: 'Microsoft',
    url: 'https://learn.microsoft.com/api/credentials/share/en-us/nvtung/C1C5BBCDD21770C3?sharingId=5F11ACC34CA524D'
  },
  {
    file: `images/Certs_1.png`,
    name: 'Microsoft',
    url: 'https://learn.microsoft.com/api/credentials/share/en-us/nvtung/6A08F9787FA7B1F4?sharingId=5F11ACC34CA524D'
  },
]

const credly = ['b50d2d25-4689-4489-bc3b-440e985a5128']

const efsetUrl = computed(() => {
  let lang = localeIndex.value != 'root' ? (localeIndex.value + '/') : '';
  return `https://cert.efset.org/${lang}Yr64ri`
});

const tiles = computed(() => [
  ...certificates.map(cert => ({
    key: cert.id,
    kind: 'image',
    src: thumbnail(cert.id),
    url: `https://certificates.dev/${cert.track}/certificates/${cert.id}`,
    name: cert.name,
  })),
  ...microsoft.map(cert => ({
    key: cert.url,
    kind: 'image',
    src: cert.file,
    url: cert.url,
    name: cert.name,
  })),
  ...credly.map(id => ({
    key: id,
    kind: 'credly',
    badgeId: id,
    url: `https://www.credly.com/badges/${id}/public_url`,
    name: 'Credly',
  })),
  {
    key: 'efset',
    kind: 'iframe',
    src: efsetUrl.value,
    url: efsetUrl.value,
    name: 'EF SET English',
  },
])

const ctaLabel = computed(() => localeIndex.value == 'vi' ? 'Xem chứng chỉ' : 'View certificate')
const certLabel = (tile) => localeIndex.value == 'vi'
  ? `${ctaLabel.value} ${tile.name}`
  : `${ctaLabel.value}: ${tile.name}`

// Touch devices have no hover: the first tap opens a tile, the second tap follows the link.
const activeKey = ref(null)
const closeAll = () => { activeKey.value = null }

onMounted(async () => {
  await nextTick();
  document.addEventListener('click', closeAll);
  // Load Credly badges
  const credlyScript = document.createElement('script');
  credlyScript.src = "//cdn.credly.com/assets/utilities/embed.js";
  document.body.appendChild(credlyScript);
});

onUnmounted(() => document.removeEventListener('click', closeAll));
</script>

<template>
  <ul class="cert-grid">
    <li
      v-for="tile in tiles"
      :key="tile.key"
      class="cert-tile"
      :class="{ 'is-open': activeKey === tile.key }"
      @click.stop="activeKey = tile.key"
    >
      <div class="cert-media" :class="`cert-media--${tile.kind}`">
        <img v-if="tile.kind === 'image'" :src="tile.src" :alt="`${tile.name} certificate`" loading="lazy">
        <div
          v-else-if="tile.kind === 'credly'"
          class="certification"
          data-iframe-width="330"
          data-iframe-height="265"
          :data-share-badge-id="tile.badgeId"
          data-share-badge-host="https://www.credly.com"
        ></div>
        <iframe v-else :src="tile.src" :title="`${tile.name} certificate`" loading="lazy" scrolling="no"></iframe>
      </div>

      <div class="cert-overlay">
        <a
          class="cert-cta"
          :href="tile.url"
          :aria-label="certLabel(tile)"
          target="_blank"
          rel="noopener noreferrer"
          @click.stop
        >{{ ctaLabel }}</a>
      </div>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
@mixin tile-open {
  transform: scale(1.15);
  z-index: 2;
  border-color: var(--vp-c-brand-1);
  box-shadow: var(--vp-shadow-5);

  .cert-overlay {
    opacity: 1;
    pointer-events: auto;
  }

  .cert-cta {
    transform: translateY(0);
  }
}

.cert-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 300px), 1fr));
  gap: 1.6rem;
  margin: 1.6rem 0;
  padding: 0;
  list-style: none;
}

.cert-tile {
  position: relative;
  margin: 0;
  padding: 0.6rem;
  overflow: hidden;
  border: thin solid var(--vp-c-border);
  border-radius: 12px;
  background-color: var(--vp-c-bg-elv);
  box-shadow: var(--vp-shadow-2);
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;

  &.is-open,
  &:focus-within {
    @include tile-open;
  }
}

@media (hover: hover) {
  .cert-tile:hover {
    @include tile-open;
  }
}

.cert-media {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 260px;
  overflow: hidden;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }

  // Let the tile, not the embedded document, receive hover and clicks.
  iframe,
  :deep(iframe) {
    border: 0;
    pointer-events: none;
  }
}

.cert-media--iframe {
  align-items: flex-start;

  iframe {
    flex: none;
    width: 100%;
    height: 840px;
  }
}

.cert-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 1rem;
  opacity: 0;
  pointer-events: none;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0) 55%);
  transition: opacity 0.3s ease;
}

.cert-cta {
  padding: 0.35rem 1rem;
  border-radius: 999px;
  background-color: var(--vp-c-brand-1);
  color: #fff;
  font-size: 0.8rem;
  font-weight: 600;
  text-decoration: none;
  transform: translateY(0.5rem);
  transition: transform 0.3s ease, background-color 0.25s ease;

  &:hover {
    background-color: var(--vp-c-brand-2);
  }

  &:focus-visible {
    outline: 2px solid var(--vp-c-brand-1);
    outline-offset: 2px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .cert-tile,
  .cert-overlay,
  .cert-cta {
    transition: none;
  }

  .cert-tile.is-open,
  .cert-tile:focus-within,
  .cert-tile:hover {
    transform: none;
  }
}
</style>