<script setup>
import { computed, ref } from 'vue'
import { useData } from 'vitepress'
const { localeIndex } = useData()

const awards = [
  {
    key: 'orient-loyalty',
    image: '/images/Awards_1.jpg',
    title: 'Loyalty Award — 7 & 10 Years',
    date: '2020 & 2023',
    issuer: 'Orient Software Development Corp.',
  },
  {
    key: 'conexus-service',
    image: '/images/Awards_2.jpg',
    title: '5+ Years Service Award',
    date: '2023',
    issuer: 'Conexus',
  },
]

const activeIndex = ref(0)

const canPrev = computed(() => activeIndex.value > 0)
const canNext = computed(() => activeIndex.value < awards.length - 1)

const prev = () => { if (canPrev.value) activeIndex.value-- }
const next = () => { if (canNext.value) activeIndex.value++ }

const offsetOf = (index) => index - activeIndex.value
const visible = computed(() => awards
  .map((award, index) => ({ ...award, index, offset: offsetOf(index) }))
  .filter(award => Math.abs(award.offset) <= 2))

const cardStyle = (offset) => {
  const distance = Math.abs(offset)
  const scale = [1, 0.82, 0.66][distance]
  return {
    transform: `translate(-50%, -50%) translateX(${offset * 58}%) scale(${scale})`,
    opacity: [1, 0.65, 0.35][distance],
    filter: distance ? `grayscale(${distance * 0.35}) brightness(0.85)` : 'none',
    zIndex: 10 - distance,
  }
}

const vi = computed(() => localeIndex.value == 'vi')
const t = (en, viText) => vi.value ? viText : en
const labels = computed(() => ({
  prev: t('Previous award', 'Giải thưởng trước'),
  next: t('Next award', 'Giải thưởng kế tiếp'),
  carousel: t('Awards gallery', 'Thư viện giải thưởng'),
  issuedBy: t('Issued by', 'Trao bởi'),
  goTo: (index) => t(`Show award ${index + 1}`, `Xem giải thưởng ${index + 1}`),
  counter: (index) => t(
    `Award ${index + 1} of ${awards.length}`,
    `Giải thưởng ${index + 1} trên ${awards.length}`
  ),
}))
</script>

<template>
  <section class="awards">
    <div
      class="awards__stage"
      tabindex="0"
      role="group"
      aria-roledescription="carousel"
      :aria-label="labels.carousel"
      @keydown.left.prevent="prev"
      @keydown.right.prevent="next"
    >
      <figure
        v-for="award in visible"
        :key="award.key"
        class="awards__card"
        :class="{ 'is-active': award.offset === 0, 'is-far': Math.abs(award.offset) === 2 }"
        :style="cardStyle(award.offset)"
        :aria-hidden="award.offset !== 0"
        @click="activeIndex = award.index"
      >
        <img :src="award.image" :alt="`${award.title} — ${award.issuer}`" loading="lazy">
        <figcaption v-if="award.offset === 0" class="awards__caption">
          <strong>{{ award.title }}</strong>
          <span>{{ labels.issuedBy }} {{ award.issuer }}</span>
          <time>{{ award.date }}</time>
        </figcaption>
      </figure>

      <button
        class="awards__nav awards__nav--prev"
        type="button"
        :aria-label="labels.prev"
        :disabled="!canPrev"
        @click="prev"
      >‹</button>
      <button
        class="awards__nav awards__nav--next"
        type="button"
        :aria-label="labels.next"
        :disabled="!canNext"
        @click="next"
      >›</button>
    </div>

    <div class="awards__dots">
      <button
        v-for="(award, index) in awards"
        :key="award.key"
        class="awards__dot"
        type="button"
        :class="{ 'is-active': index === activeIndex }"
        :aria-label="labels.goTo(index)"
        :aria-current="index === activeIndex"
        @click="activeIndex = index"
      ></button>
    </div>

    <p class="awards__counter" aria-live="polite">{{ labels.counter(activeIndex) }}</p>
  </section>
</template>

<style lang="scss" scoped>
.awards {
  margin: 1.6rem 0;
}

.awards__stage {
  position: relative;
  height: 460px;
  overflow: hidden;
  border-radius: 10px;

  &:focus-visible {
    outline: 2px solid var(--vp-c-brand-1);
    outline-offset: 4px;
  }
}

.awards__card {
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  width: min(88%, 340px);
  margin: 0;
  padding: 0.6rem;
  border: thin solid var(--vp-c-border);
  border-radius: 10px;
  background-color: var(--vp-c-bg-elv);
  box-shadow: var(--vp-shadow-3);
  cursor: pointer;
  transition: transform 0.35s ease, opacity 0.35s ease, filter 0.35s ease;

  &.is-active {
    border-color: var(--vp-c-brand-1);
    box-shadow: var(--vp-shadow-4);
    cursor: default;
  }

  img {
    width: 100%;
    height: 300px;
    object-fit: contain;
  }
}

.awards__caption {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  padding: 0.6rem 0.2rem 0.2rem;
  text-align: center;
  line-height: 1.4;

  strong {
    color: var(--vp-c-brand-1);
    font-size: 0.95rem;
  }

  span,
  time {
    color: var(--vp-c-text-2);
    font-size: 0.8rem;
  }
}

.awards__nav {
  position: absolute;
  top: 50%;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.4rem;
  height: 2.4rem;
  padding-bottom: 0.2rem;
  transform: translateY(-50%);
  border: thin solid var(--vp-c-border);
  border-radius: 50%;
  background-color: var(--vp-c-bg-elv);
  color: var(--vp-c-text-1);
  font-size: 1.6rem;
  line-height: 1;
  box-shadow: var(--vp-shadow-2);
  cursor: pointer;
  transition: background-color 0.25s ease, color 0.25s ease, opacity 0.25s ease;

  &--prev { left: 0.4rem; }
  &--next { right: 0.4rem; }

  &:hover:not(:disabled) {
    background-color: var(--vp-c-brand-1);
    color: #fff;
  }

  &:disabled {
    opacity: 0.35;
    cursor: not-allowed;
  }

  &:focus-visible {
    outline: 2px solid var(--vp-c-brand-1);
    outline-offset: 2px;
  }
}

.awards__dots {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 0.8rem;
}

.awards__dot {
  width: 0.6rem;
  height: 0.6rem;
  padding: 0;
  border: thin solid var(--vp-c-border);
  border-radius: 50%;
  background-color: var(--vp-c-bg-soft);
  cursor: pointer;
  transition: background-color 0.25s ease, transform 0.25s ease;

  &.is-active {
    background-color: var(--vp-c-brand-1);
    border-color: var(--vp-c-brand-1);
    transform: scale(1.2);
  }

  &:focus-visible {
    outline: 2px solid var(--vp-c-brand-1);
    outline-offset: 2px;
  }
}

.awards__counter {
  margin-top: 0.4rem;
  color: var(--vp-c-text-2);
  font-size: 0.8rem;
  text-align: center;
}

@media (max-width: 768px) {
  .awards__stage {
    height: 380px;
  }

  .awards__card {
    width: min(78%, 260px);

    img {
      height: 220px;
    }

    &.is-far {
      display: none;
    }
  }

  .awards__nav {
    width: 2rem;
    height: 2rem;
    font-size: 1.3rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .awards__card,
  .awards__nav,
  .awards__dot {
    transition: none;
  }
}
</style>
