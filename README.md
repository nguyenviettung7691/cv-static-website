# 🚀 CV Static Website

![Site preview](docs/public/preview.png)

**Personal CV and portfolio website built with [VitePress](https://vitepress.dev/)** - A modern, fast, and SEO-friendly static site for showcasing professional experience.

## ✨ Features

- **Profile**: Professional summary, services, CV, and social links
- **Resume**: Experience timeline, certifications, and portfolio grids
- **Showcase**: Skills, projects, and professional highlights
- **Bilingual**: English and Vietnamese pages
- **SEO and PWA**: Sitemap, robots file, and installable app metadata
- **Responsive theme**: Custom Vue components with dark-mode and accessibility support

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| VitePress | 1.6+ | Static site generator |
| Vue.js | 3.x | Component framework |
| Sass | Latest | Styling preprocessor |
| TypeScript | 5.x | Type safety |
| @iconify/utils | Latest | Icon processing |

## 📋 Requirements

- Node.js 18+
- npm (or Bun)

## 🚀 Quick Start

### Installation

```bash
npm install
```

**Optional**: Use Bun instead
```bash
bun install
```

### Development

Start the local development server on port 4173:
```bash
npm run docs:dev
```

### Build & Preview

Build static site for production:
```bash
npm run docs:build
```

Preview the production build locally (port 8080):
```bash
npm run docs:preview
```

Build with custom base path:
```bash
npm run docs:build -- --base "/"
```

## 📚 Content Architecture

### English Pages

| File | Description |
|------|-------------|
| [`docs/index.md`](docs/index.md) | Landing page with hero section |
| [`docs/profile.md`](docs/profile.md) | Personal profile and services |
| [`docs/resume.md`](docs/resume.md) | Experience timeline & certifications |
| [`docs/showcase.md`](docs/showcase.md) | Skills, projects, and highlights |

### Vietnamese Pages

| File | Description |
|------|-------------|
| [`docs/vi/index.md`](docs/vi/index.md) | Vietnamese landing page |
| [`docs/vi/profile.md`](docs/vi/profile.md) | Vietnamese profile section |
| [`docs/vi/resume.md`](docs/vi/resume.md) | Vietnamese resume |
| [`docs/vi/showcase.md`](docs/vi/showcase.md) | Vietnamese showcase |

## ⚙️ Configuration

### Site Settings
- **Config**: [`docs/.vitepress/config.mts`](docs/.vitepress/config.mts)
  - Site metadata, navigation structure
  - Locale settings and search configuration
  - Footer and theme options

### Theme Components

| Component | Purpose |
|-----------|---------|
| [`Layout.vue`](docs/.vitepress/theme/Layout.vue) | Site layout and theme behavior |
| [`Timeline.vue`](docs/.vitepress/theme/Timeline.vue) | Experience and certification timelines |
| [`Grid.vue`](docs/.vitepress/theme/Grid.vue) | Product, client, and employer portfolios |
| [`Accordion.vue`](docs/.vitepress/theme/Accordion.vue) | Skill categories and tools |
| [`Cert.vue`](docs/.vitepress/theme/Cert.vue) | Certification gallery |
| [`Awards.vue`](docs/.vitepress/theme/Awards.vue) | Awards carousel |
| [`ProjectsContainer.vue`](docs/components/ProjectsContainer.vue) | Project carousel |
| [`ProfileContent.vue`](docs/components/ProfileContent.vue), [`ProfileContainer.vue`](docs/components/ProfileContainer.vue) | Localized profile content and hero |

### Content conventions

- Keep translated profile text, captions, icons, and section IDs in each locale's `ProfileContentData`.
- Use `#RGB` or `#RRGGBB` for skill icon colors.
- Portfolio items use `{ img, title, url, org, orgNote?, country, countryName, desc }`. Use a lowercase [flagcdn](https://flagcdn.com) country code and localize `countryName`.
- Timeline data uses `YYYY-MM` dates: experiences have `{ start, end?, title, org, orgUrl, logo, roles }`; certifications have `{ title, issuer, logo, issued, expires? }`. Omit `end` for a current role.

## 📁 Static Assets

| Directory/File | Purpose |
|----------------|---------|
| `docs/public/content/` | Downloadable CV and professional documents |
| `docs/public/images/` | Brand icons, cloud provider logos |
| [`manifest.json`](docs/public/manifest.json) | PWA metadata for installability |
| [`robots.txt`](docs/public/robots.txt) | Search engine crawler directives |
| [`sitemap.xml`](docs/public/sitemap.xml) | SEO sitemap for better indexing |

## 🗂️ Project Structure

```
cv-static-website/
├── docs/
│   ├── .vitepress/
│   │   ├── config.mts
│   │   └── theme/
│   │       ├── index.ts
│   │       ├── Layout.vue
│   │       ├── Timeline.vue
│   │       ├── Grid.vue
│   │       ├── Accordion.vue
│   │       ├── Cert.vue
│   │       └── Awards.vue
│   ├── components/
│   ├── public/
│   │   ├── content/
│   │   ├── images/
│   │   ├── manifest.json
│   │   ├── robots.txt
│   │   └── sitemap.xml
│   ├── vi/          # Vietnamese pages
│   ├── index.md     # Homepage
│   ├── profile.md   # Profile section
│   ├── resume.md    # Resume
│   └── showcase.md  # Portfolio
├── package.json
└── tsconfig.json
```

## 📜 License

This project is licensed under the **[MIT License](LICENSE)** - see the file for details.

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing`)
5. Open a Pull Request

## 📞 Support

For questions or issues, please open an issue on GitHub.

---

**Built with ❤️ using VitePress**