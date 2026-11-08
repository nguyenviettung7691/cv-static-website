import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import { test } from 'node:test'

const english = readFileSync(new URL('../docs/index.md', import.meta.url), 'utf8')
const vietnamese = readFileSync(new URL('../docs/vi/index.md', import.meta.url), 'utf8')
const layout = readFileSync(new URL('../docs/.vitepress/theme/Layout.vue', import.meta.url), 'utf8')

function assertHomeContent(content, { headline, experience, cta, cv, share, destinations }) {
  const hasText = (value) => content.includes(`text: ${value}`) || content.includes(`text: "${value}"`)
  assert.equal(hasText(headline), true, `Home headline must be "${headline}"`)
  assert.equal(content.includes(experience), true, 'Home tagline must convey the experience level')
  assert.equal(hasText(cta), true, `Explore action must be "${cta}"`)
  assert.equal(hasText(cv), true, `CV action must be "${cv}"`)
  assert.equal(hasText(share), true, `Share action must be "${share}"`)
  assert.match(content, /link: \/content\/Nguyen_Viet_Tung-profile\.pdf\s*\n\s*target: _blank/)

  for (const destination of destinations) {
    assert.match(content, new RegExp(`link: \\/${destination}\\s*(?:\\n|$)`))
  }
}

test('English Home presents the editorial lead and keeps all actions and destinations', () => {
  assertHomeContent(english, {
    headline: 'Building what comes next.',
    experience: '10+ years of experience',
    cta: 'Explore my work',
    cv: '⬇ Download CV',
    share: '📩 Share',
    destinations: ['profile', 'resume', 'showcase'],
  })
})

test('Vietnamese Home presents localized editorial copy and keeps all actions and destinations', () => {
  assertHomeContent(vietnamese, {
    headline: 'Xây dựng tương lai.',
    experience: 'hơn 10 năm kinh nghiệm',
    cta: 'Khám phá dự án',
    cv: '⬇ Tải xuống CV',
    share: '📩 Chia sẻ',
    destinations: ['profile', 'resume', 'showcase'],
  })
})

test('Home styling removes typing and supports focus, reduced motion, and mobile layouts', () => {
  assert.equal(/animation:\s*typing|@keyframes typing|@keyframes blink-caret/.test(layout), false, 'Home must not use the typewriter animation')
  assert.equal(/@media\s*\(prefers-reduced-motion:\s*reduce\)/.test(layout), true, 'Home must support reduced motion')
  assert.equal(/\.VPHomeHero[\s\S]*:focus-visible/.test(layout), true, 'Home actions must have focus-visible styles')
  assert.equal(/@media\s*\(max-width:\s*640px\)/.test(layout), true, 'Home must define narrow-screen styles')
  assert.equal(/\.VPHomeFeatures\s+\.item\.grid-3/.test(layout), true, 'Home destination cards must share one row at desktop widths')
})

test('Home feature cards adapt their surfaces and text to light and dark themes', () => {
  assert.match(layout, /--home-card-bg:\s*#f3f5ec/, 'Light cards must use the light editorial surface')
  assert.match(layout, /--home-card-text:\s*#26301e/, 'Light card titles must use readable editorial text')
  assert.match(layout, /--home-card-muted:\s*#4e5847/, 'Light card descriptions must use readable muted text')
  assert.match(layout, /\.dark\s+\.VPHomeFeatures\s*\{[^}]*--home-card-bg:\s*#252c21/s, 'Dark cards must retain the editorial dark surface')
  assert.match(layout, /\.VPFeature\s*\{[^}]*background-color:\s*var\(--home-card-bg\)/s, 'Card surfaces must use the theme-specific color')
})

test('Home hero follows light and dark editorial palettes', () => {
  assert.match(layout, /\.VPHomeHero\s*\{[^}]*--home-hero-bg:\s*#f3f5ec/s, 'Light hero must use the light editorial surface')
  assert.match(layout, /\.VPHomeHero\s*\{[^}]*--home-hero-title:\s*#26301e/s, 'Light hero headline must use readable editorial text')
  assert.match(layout, /\.VPHomeHero\s*\{[^}]*--home-hero-tagline:\s*#4e5847/s, 'Light hero tagline must use readable muted text')
  assert.match(layout, /\.VPHomeHero\s*\{[^}]*background:[^}]*var\(--home-hero-bg\)/s, 'Hero surface must use the active theme color')
  assert.match(layout, /\.container\s*\{[^}]*box-shadow:[^}]*var\(--home-hero-shadow\)/s, 'Hero surface must use its own shadow token')
  assert.match(layout, /\.image-src\s*\{[^}]*box-shadow:[^}]*var\(--home-hero-image-shadow\)/s, 'Portrait must use a separate image shadow token')
  assert.match(layout, /\.dark\s+\.VPHomeHero\s*\{[^}]*--home-hero-bg:\s*#1b2117/s, 'Dark hero must retain its dark editorial surface')
  assert.match(layout, /\.dark\s+\.VPHomeHero\s*\{[^}]*--home-hero-title:\s*#f5f7ef/s, 'Dark hero must retain its light text')
  assert.match(layout, /\.dark\s+\.VPHomeHero\s*\{[^}]*--home-hero-shadow:\s*rgba\(17,\s*22,\s*14,\s*0\.18\)/s, 'Dark hero must retain its restrained surface shadow')
})

test('Share actions are keyboard-focusable and bypass VitePress capture routing', () => {
  assert.equal(/text:\s*📩 Share\r?\n\s*link:\s*"#share"\r?\n\s*target: _self/.test(english), true)
  assert.equal(/text:\s*📩 Chia sẻ\r?\n\s*link:\s*"#share"\r?\n\s*target: _self/.test(vietnamese), true)
})

test('internal design documents are excluded from the generated site', () => {
  const internalPages = [
    '../docs/.vitepress/dist/superpowers/specs/2026-11-08-home-editorial-design.html',
    '../docs/.vitepress/dist/superpowers/plans/2026-11-08-home-editorial.html',
  ]

  for (const page of internalPages) {
    assert.equal(existsSync(new URL(page, import.meta.url)), false, `${page} must not be published`)
  }
})
