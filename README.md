# CV Static Website

A static website for showcasing the CV, profile, skillsets, certifications, and portfolio of Nguyen Viet Tung. Built with [VitePress](https://vitepress.dev/) for fast, modern documentation and personal branding.

## Features

- **Profile**: Personal info, languages, interests ([docs/profile.md](docs/profile.md))
- **Resume**: Services, experiences, certifications, portfolio ([docs/resume.md](docs/resume.md))
- **Showcase**: Technical skillsets, projects, certifications ([docs/showcase.md](docs/showcase.md))
- **Multilingual**: English and Vietnamese content ([docs/vi/](docs/vi/))
- **Downloadable CV**: PDF available at `/content/CV.pdf`
- **Responsive Design**: Optimized for desktop and mobile

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Install dependencies

```sh
npm install
```

Also supports BunJS runtime for faster install time, with bun.lock file included

```sh
bun install
```

### Run development server

```sh
npm run docs:dev
```
Visit [http://localhost:4173](http://localhost:4173) to view the site.

### Build for production

```sh
npm run docs:build
```

### Preview production build

```sh
npm run docs:preview
```
Visit [http://localhost:8080](http://localhost:8080) to preview.

## Project Structure

```
docs/
  index.md           # Home page
  profile.md         # Profile section
  resume.md          # Resume section
  showcase.md        # Skillsets & projects
  vi/                # Vietnamese translations
  .vitepress/        # VitePress config & theme
public/
  content/CV.pdf     # Downloadable CV
  images/            # Icons & images
```

## Customization

- Update profile, resume, and showcase content in the respective markdown files.
- Add images/icons to `public/images/`.
- Modify theme components in `docs/.vitepress/theme/`.

## License

This project is for personal use and portfolio purposes.

---

Made by Nguyen Viet Tung