<script setup>
import { onMounted, nextTick, computed } from 'vue'
import { useData } from 'vitepress'
const { localeIndex, isDark } = useData()

const efsetUrl = computed(() => {
  let lang = localeIndex.value != 'root' ? (localeIndex.value + '/') : '';
  return `https://cert.efset.org/${lang}Yr64ri`
});

const darkSuffix = computed(() => isDark.value ? '.dark' : '')
const certificates = computed(() => [
  `https://certificates.dev/.netlify/images?url=https:%2F%2Fapi.certificates.dev%2Fcertificates%2Fthumbnail%2Fa035486e-e918-44ac-98fd-d6ef9a74bbc4${darkSuffix.value}.jpg`,
  `https://certificates.dev/.netlify/images?url=https:%2F%2Fapi.certificates.dev%2Fcertificates%2Fthumbnail%2F9cf3a5b7-fd94-4a17-ab22-6d17596e6c56${darkSuffix.value}.jpg`,
  `https://certificates.dev/.netlify/images?url=https:%2F%2Fapi.certificates.dev%2Fcertificates%2Fthumbnail%2Fa14392fa-86d6-4a2e-9154-32ccedf0f9af${darkSuffix.value}.jpg`,
  `https://certificates.dev/.netlify/images?url=https:%2F%2Fapi.certificates.dev%2Fcertificates%2Fthumbnail%2Fa0444290-62ca-4f5c-bb46-90ed9228b6ef${darkSuffix.value}.jpg`,
  `https://certificates.dev/.netlify/images?url=https:%2F%2Fapi.certificates.dev%2Fcertificates%2Fthumbnail%2F9f981598-89ce-4208-b545-8766a6e20fae${darkSuffix.value}.jpg`
])

const microsoft = computed(() => [
  `content/az-104.pdf`,
  `content/az-900.pdf`
])

const credly = computed(() => [
  'b50d2d25-4689-4489-bc3b-440e985a5128'
])

onMounted(async () => {
  await nextTick();
  // Load Credly badges
  const credlyScript = document.createElement('script');
  credlyScript.src = "//cdn.credly.com/assets/utilities/embed.js";
  document.body.appendChild(credlyScript);
});
</script>

<template>
  <div class="cert">
    <iframe :src="efsetUrl" style="height: 840px; width: 100%; margin-bottom: 1.6rem;"></iframe>

    <img v-for="cert in certificates" class="certification" :src="cert" style="width: 100%; margin-bottom: 1.6rem;">

    <div v-for="pdf in microsoft" class="pdf-container">
      <iframe :src="`${pdf}#page=1&toolbar=0&navpanes=0&scrollbar=0&view=FitH`" class="pdf"></iframe>
    </div>

    <div class="credly">
      <div v-for="cert in credly" class="certification" data-iframe-width="330" data-iframe-height="265" :data-share-badge-id="cert" data-share-badge-host="https://www.credly.com"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cert {
  .pdf-container {
    width: 100%;
    margin: 0 auto; margin-bottom: 1.6rem;
    aspect-ratio: 11 / 7.7;
    position: relative;
    overflow: hidden;
    .pdf {
      position: absolute; top: 0; left: 0;
      width: calc(100% + 20px); height: 100%;
    }
  }
  .credly {
    display: flex; gap: 1.6rem; justify-content: center;
    @media (max-width: 720px) {
      flex-direction: column; align-items: center;
    }
  } 
}
</style>