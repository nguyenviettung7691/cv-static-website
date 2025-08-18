<script setup>
import { onMounted, nextTick, computed } from 'vue'
import { useData } from 'vitepress'
const { localeIndex, isDark } = useData()

const efsetUrl = computed(() => {
  let lang = localeIndex.value != 'root' ? (localeIndex.value + '/') : '';
  return `https://cert.efset.org/${lang}Yr64ri`
});

const vuejsCert = computed(() => `https://certificates.dev/.netlify/images?url=https:%2F%2Fapi.certificates.dev%2Fcertificates%2Fthumbnail%2F9cf3a5b7-fd94-4a17-ab22-6d17596e6c56${isDark.value ? '.dark' : ''}.jpg`)

onMounted(async () => {
  await nextTick();
  // Load Credly badges
  const credlyScript = document.createElement('script');
  credlyScript.src = "//cdn.credly.com/assets/utilities/embed.js";
  document.body.appendChild(credlyScript);
});
</script>

<template>
  <iframe :src="efsetUrl" style="height: 840px; width: 100%; margin-bottom: 1.6rem;"></iframe>

  <img class="certification" :src="vuejsCert" style="width: 100%; margin-bottom: 1.6rem;">
  <img class="certification" src="https://certificates.dev/.netlify/images?url=https:%2F%2Fapi.certificates.dev%2Fcertificates%2Fthumbnail%2F9f981598-89ce-4208-b545-8766a6e20fae.jpg" style="width: 100%; margin-bottom: 1.6rem;">

  <div style="display: flex; gap: 1.6rem; align-items: center; flex-direction: column;">
    <div class="certification" data-iframe-width="350" data-iframe-height="240" data-share-badge-id="605169cb-6c39-4172-8376-1b67031cf0d3" data-share-badge-host="https://www.credly.com"></div>
    <div class="certification" data-iframe-width="350" data-iframe-height="265" data-share-badge-id="b50d2d25-4689-4489-bc3b-440e985a5128" data-share-badge-host="https://www.credly.com"></div>
  </div>
</template>