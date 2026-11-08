# Home Page Editorial Refresh

## Intent

Give the Home page a more distinctive, editorial portfolio feel that quickly communicates engineering leadership and makes the site's key destinations easy to explore.

## Goals

- Apply the selected story-led direction in both themes: an engineering-focused lead message, a prominent profile image, and clearly ranked calls to action and destination cards.
- Keep the CV download, Share behavior, and Profile, Resume, and Showcase navigation available.
- Provide equivalent English and Vietnamese content and responsive layouts.
- Keep controls accessible and respect reduced-motion preferences and the site's light/dark theme, with a light editorial palette in light mode and the existing dark editorial palette in dark mode.

## Non-goals

- Redesign other pages or the site-wide navigation.
- Replace VitePress's Home layout or add dependencies.
- Change destinations or remove existing actions.

## Constraints

Both Home pages use VitePress frontmatter for the hero and feature cards. Shared presentation is in `docs/.vitepress/theme/Layout.vue`; language-specific copy and labels are in `docs/index.md` and `docs/vi/index.md`. The existing Share action is wired by the theme and must remain functional.

## Approaches

- **Restyle the existing VitePress layout (selected):** Adjust Home hero and feature-card presentation in the shared theme and update both localized page definitions. This keeps VitePress's responsive structure and existing navigation behavior.
- **Build a custom shared Vue Home component:** Provides more layout control but adds custom structure and maintenance that the selected design does not require.

The existing VitePress layout is the chosen approach because the editorial direction can be achieved without replacing working page structure or interactions.

## Implementation calls

- Use the editorial “Building what comes next” concept with the owner's name and engineering role, adapting the supporting copy for each locale.
- Give the project/explore destination and CV download strong visual hierarchy while retaining Share as a secondary action.
- Style the hero and destination cards as a cohesive editorial feature in both modes, using semantic theme variables and a light editorial palette alongside the existing dark palette rather than changing the whole site's theme.
- Make motion restrained and disable decorative transitions when reduced motion is requested.

## Success criteria

- Both Home routes render the editorial design without horizontal overflow at desktop and mobile widths in light and dark themes.
- CV download, Share, and all three destination links still work.
- Light and dark themes retain readable contrast, keyboard focus remains visible, and reduced-motion preferences are respected.
- The VitePress production build succeeds.
