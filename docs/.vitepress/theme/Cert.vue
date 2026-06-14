<script setup>
import { onMounted, nextTick, computed } from 'vue'
import { useData } from 'vitepress'
const { localeIndex, isDark } = useData()

const darkSuffix = computed(() => isDark.value ? '.dark' : '')
const certificates = computed(() => [
  {
    file: `https://certificates.dev/.netlify/images?url=https:%2F%2Fapi.certificates.dev%2Fcertificates%2Fthumbnail%2Fa035486e-e918-44ac-98fd-d6ef9a74bbc4${darkSuffix.value}.jpg`,
    url: 'https://certificates.dev/vuejs/certificates/a035486e-e918-44ac-98fd-d6ef9a74bbc4'
  },
  {
    file: `https://certificates.dev/.netlify/images?url=https:%2F%2Fapi.certificates.dev%2Fcertificates%2Fthumbnail%2F9cf3a5b7-fd94-4a17-ab22-6d17596e6c56${darkSuffix.value}.jpg`,
    url: 'https://certificates.dev/vuejs/certificates/9cf3a5b7-fd94-4a17-ab22-6d17596e6c56'
  },
  {
    file: `https://certificates.dev/.netlify/images?url=https:%2F%2Fapi.certificates.dev%2Fcertificates%2Fthumbnail%2Fa14392fa-86d6-4a2e-9154-32ccedf0f9af${darkSuffix.value}.jpg`,
    url: 'https://certificates.dev/javascript/certificates/a14392fa-86d6-4a2e-9154-32ccedf0f9af'
  },
  {
    file: `https://certificates.dev/.netlify/images?url=https:%2F%2Fapi.certificates.dev%2Fcertificates%2Fthumbnail%2Fa0444290-62ca-4f5c-bb46-90ed9228b6ef${darkSuffix.value}.jpg`,
    url: 'https://certificates.dev/javascript/certificates/a0444290-62ca-4f5c-bb46-90ed9228b6ef'
  },
  {
    file: `https://certificates.dev/.netlify/images?url=https:%2F%2Fapi.certificates.dev%2Fcertificates%2Fthumbnail%2F9f981598-89ce-4208-b545-8766a6e20fae${darkSuffix.value}.jpg`,
    url: 'https://certificates.dev/javascript/certificates/9f981598-89ce-4208-b545-8766a6e20fae'
  },
])

const microsoft = computed(() => [
  {
    file: `images/Certs_2.png`,
    url: 'https://learn.microsoft.com/api/credentials/share/en-us/nvtung/C1C5BBCDD21770C3?sharingId=5F11ACC34CA524D'
  },
  {
    file: `images/Certs_1.png`,
    url: 'https://learn.microsoft.com/api/credentials/share/en-us/nvtung/6A08F9787FA7B1F4?sharingId=5F11ACC34CA524D'
  },
])

const credly = computed(() => [
  'b50d2d25-4689-4489-bc3b-440e985a5128'
])

const efsetUrl = computed(() => {
  let lang = localeIndex.value != 'root' ? (localeIndex.value + '/') : '';
  return `https://cert.efset.org/${lang}Yr64ri`
});

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
    <a v-for="cert in certificates" :href="cert.url" 
      target="_blank" 
      rel="noopener noreferrer">
      <img :src="cert.file" class="certification" style="width: 100%; margin-bottom: 1.6rem;">
    </a>

    <a v-for="cert in microsoft" :href="cert.url" 
      target="_blank" 
      rel="noopener noreferrer">
      <img :src="cert.file" class="certification" style="width: 100%; margin-bottom: 1.6rem;">
    </a>

    <div class="credly">
      <div v-for="cert in credly" class="certification" data-iframe-width="330" data-iframe-height="265" :data-share-badge-id="cert" data-share-badge-host="https://www.credly.com"></div>
    </div>

    <iframe :src="efsetUrl" style="height: 840px; width: 100%; margin-bottom: 1.6rem;"></iframe>
  </div>
</template>

<style lang="scss" scoped>
.cert {
  .credly {
    display: flex; gap: 1.6rem; justify-content: center;
    width: 100%; margin-bottom: 1.6rem;
    @media (max-width: 720px) {
      flex-direction: column; align-items: center;
    }
  } 
}
</style>