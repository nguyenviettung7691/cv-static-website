# Home Page Editorial Refresh Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Refresh the English and Vietnamese Home pages into the selected dark, editorial portfolio direction while retaining current actions and destinations.

**Architecture:** Keep VitePress's built-in `layout: home` hero and feature cards. Update localized page frontmatter and apply shared, scoped Home-page styling in the existing theme wrapper.

**Tech Stack:** VitePress 1.x, Vue, SCSS, Markdown frontmatter.

**Spec:** `docs/superpowers/specs/2026-11-08-home-editorial-design.md`

## Global Constraints

- Give the Home page a more distinctive, editorial portfolio feel that quickly communicates engineering leadership and makes the site's key destinations easy to explore.
- Keep the CV download, Share behavior, and Profile, Resume, and Showcase navigation available.
- Provide equivalent English and Vietnamese content and responsive layouts.
- Keep controls accessible and respect reduced-motion preferences and the site's light/dark theme.
- Do not redesign other pages or the site-wide navigation.
- Do not replace VitePress's Home layout or add dependencies.
- Do not change destinations or remove existing actions.
- Both Home pages use VitePress frontmatter for the hero and feature cards.
- Shared presentation is in `docs/.vitepress/theme/Layout.vue`; language-specific copy and labels are in `docs/index.md` and `docs/vi/index.md`.
- The existing Share action is wired by the theme and must remain functional.

## Review Focus

- Long Vietnamese hero copy must wrap without clipping or horizontal overflow; verify at a 375px viewport.
- Both locales' Explore, CV, Share, and three destination actions must still work; verify all six in both Home routes.
- The editorial surfaces must retain readable contrast in light and dark site themes; inspect both themes.
- Keyboard users must be able to focus each action and see a visible focus indicator; tab through the hero controls and cards.
- Decorative transitions must not animate when reduced motion is enabled; emulate `prefers-reduced-motion: reduce` and check the hero and cards.

---

### Task 1: Updating localized Home content

**Files:**
- Modify: `docs/index.md`
- Modify: `docs/vi/index.md`
- Test: `tests/home-content.test.mjs`

**Interfaces:**
- Consumes: Existing VitePress `layout: home` frontmatter and `themeConfig` destination routes.
- Produces: Localized hero heading and supporting copy, plus Explore, CV, and Share actions and the existing three feature destinations.

- [x] **Step 1: Write the failing localized-content tests**

Add `tests/home-content.test.mjs` using Node's built-in `node:test`. Cover the English and Vietnamese editorial headlines, Explore/CV/Share action labels, the CV PDF path and new-tab target, and all three feature destinations.

- [x] **Step 2: Run the tests and verify the expected failure**

Run: `node --test tests/home-content.test.mjs`

Expected: Both locale tests fail because the editorial headlines and Explore actions are not present yet.

- [x] **Step 3: Update both Home frontmatter blocks**

In `docs/index.md` and `docs/vi/index.md`, keep `layout: home`, the profile image, the CV target, and all three existing feature routes. Use the editorial “Building what comes next” concept and current engineering-leadership/10+ years context, naturally localized. Set the hero actions to Explore my work (`/showcase`), Download CV (existing PDF path, opening in a new tab), and Share (retain the existing share-trigger text prefix `📩` so `Layout.vue` continues to bind it).

- [x] **Step 4: Run the tests and verify they pass**

Run: `node --test tests/home-content.test.mjs`

Expected: Both locale tests pass.

- [x] **Step 5: Build the localized pages**

Run: `npm run docs:build`

Expected: VitePress completes the production build without errors for both Home routes.

### Task 2: Styling the editorial Home experience

**Files:**
- Modify: `docs/.vitepress/theme/Layout.vue`
- Modify: `docs/.vitepress/config.mts`
- Modify: `docs/index.md`
- Modify: `docs/vi/index.md`
- Test: `tests/home-content.test.mjs`

**Interfaces:**
- Consumes: VitePress `.VPHomeHero`, `.VPHomeFeatures`, and the localized frontmatter from Task 1.
- Produces: Shared responsive editorial styling, without affecting non-Home pages or changing action behavior.

- [x] **Step 1: Write and fail the editorial-style regression test**

Extend `tests/home-content.test.mjs` to assert that the typing effect is removed, reduced-motion handling is present, Home action focus styles and narrow-screen Home styles are defined, Share's fragment action bypasses VitePress capture routing, and internal design/plan documents are excluded from the generated site.

- [x] **Step 2: Verify the style test fails before the styling change**

Run: `node --test tests/home-content.test.mjs`

Expected: The existing Home content tests pass and the new styling/publication checks fail because typing is still present and internal design documents are emitted into the site.

- [x] **Step 3: Replace the typewriter treatment and style the Home components**

Scope styling to `.VPHomeHero` and `.VPHomeFeatures`. Remove typing/caret animation and forced single-line overflow. Present the name and “Building what comes next” headline without clipping; give role and experience copy readable measure and spacing. Keep the profile image prominent with a restrained treatment. Create a cohesive dark editorial surface using existing brand colors and theme variables. Differentiate Explore from CV and Share, retain visible focus states, and use restrained hover feedback. Give the Share action a `#share` link and `_self` target so it is keyboard-focusable and VitePress's capture-phase router skips it; its handler prevents default navigation. Exclude `superpowers/**` from VitePress source pages so internal design and plan documents are not published as portfolio pages.

- [x] **Step 4: Add responsive rules for narrow screens**

At mobile widths, stack hero content and actions cleanly, allow all copy to wrap, and lay feature cards out without horizontal overflow. Preserve the desktop image-and-copy hierarchy at wide viewports. Disable decorative transitions when reduced motion is requested.

- [x] **Step 5: Verify both locales and themes in the browser**

Check `/` and `/vi/` at 1280px and 375px; verify the CV link, Share activation, and all three feature links in both locales. Inspect light and dark themes, tab through the actions and cards, and emulate `prefers-reduced-motion: reduce`.

- [x] **Step 6: Run tests and the production build**

Run: `npm run docs:build`, then `node --test tests/home-content.test.mjs`

Expected: VitePress completes the production build successfully.

### Task 3: Supporting light and dark editorial palettes

**Files:**
- Modify: `docs/.vitepress/theme/Layout.vue`
- Test: `tests/home-content.test.mjs`

**Interfaces:**
- Consumes: VitePress theme class `.dark` and built-in color variables.
- Produces: Light editorial hero and feature-card colors by default, with the existing dark editorial palette under `.dark`.

- [x] **Step 1: Add a failing theme-palette regression test**

Extend `tests/home-content.test.mjs` to assert that the Home hero's surface, text, portrait frame, and action colors use semantic light-palette variables by default and receive dark-palette overrides under `.dark`. Assert that the Home card palette uses the same light editorial color family and retains explicit dark overrides.

- [x] **Step 2: Run the test and verify it fails**

Run: `node --test tests/home-content.test.mjs`

Expected: Existing Home tests pass and the new hero-palette assertion fails because the hero colors are still hard-coded dark.

- [x] **Step 3: Apply semantic light and dark palette tokens**

In `Layout.vue`, define light editorial tokens on `.VPHomeHero` and `.VPHomeFeatures`; use pale green-tinted surfaces, dark readable text, and green focus/hover accents in light mode. Override those tokens under `.dark` to preserve the established dark editorial colors. Apply the tokens consistently to the hero surface, name/headline/tagline, actions, portrait treatment, and destination cards.

- [x] **Step 4: Run regression tests and build**

Run: `node --test tests/home-content.test.mjs`, then `npm run docs:build`

Expected: All tests pass and VitePress completes the production build.

- [x] **Step 5: Verify the live page in both themes**

At `/`, inspect computed hero and card colors in light and dark modes and ensure text remains readable and actions remain distinct.
