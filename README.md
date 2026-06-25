# 🚀 CV Static Website

![Site preview](docs/public/preview.png)

**Personal CV and portfolio website built with [VitePress](https://vitepress.dev/)** - A modern, fast, and SEO-friendly static site for showcasing professional experience.

## ✨ Features

- **Comprehensive Profile**: Personal bio, services, languages, and interests
- **Experience Timeline**: Interactive resume with certifications and achievements
- **Technical Showcase**: Skills matrix, projects portfolio, and professional highlights
- **Bilingual Support**: English and Vietnamese content
- **SEO Optimization**: Static assets for search engines (sitemap, robots.txt)
- **PWA Ready**: Progressive Web App metadata and manifest
- **Custom Components**: Vue-powered theme with Timeline, Grid, Accordion, and Certification cards

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
- **Layout**: [`docs/.vitepress/theme/Layout.vue`](docs/.vitepress/theme/Layout.vue) - Main layout wrapper
- **Timeline**: [`docs/.vitepress/theme/Timeline.vue`](docs/.vitepress/theme/Timeline.vue) - Experience timeline component
- **Grid**: [`docs/.vitepress/theme/Grid.vue`](docs/.vitepress/theme/Grid.vue) - Responsive grid system
- **Accordion**: [`docs/.vitepress/theme/Accordion.vue`](docs/.vitepress/theme/Accordion.vue) - Collapsible sections
- **Certification**: [`docs/.vitepress/theme/Cert.vue`](docs/.vitepress/theme/Cert.vue) - Certification card display

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
│   │       └── Cert.vue
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