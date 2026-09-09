# Virak Cloud Documentation

The official documentation site for [Virak Cloud](https://virakcloud.com) — a cloud platform providing cloud servers, networking, object storage, managed Kubernetes, managed databases, DNS, and a public web service API.

This repository powers [docs.virakcloud.com](https://docs.virakcloud.com), built with [VitePress](https://vitepress.dev) and fully bilingual (Persian and English), including right-to-left (RTL) support for Persian content.

## Features

- **Bilingual content**: All guides are available in both Persian (`fa`) and English (`en`), each with its own sidebar, search translations, and locale-specific routing.
- **RTL support**: Persian pages are rendered right-to-left using [rtlcss](https://rtlcss.com/), with a custom font (IRANSansX) applied automatically.
- **Dark mode aware images**: Screenshots automatically switch between light and dark versions using the `<DarkModeImage />` component.
- **Local search**: Built-in VitePress local search with fully translated UI strings for the Persian locale.
- **Comments**: Page comments powered by [Remark42](https://remark42.com/).
- **Analytics**: Google Analytics integration via `vitepress-plugin-google-analytics`.
- **Image zoom**: Clickable image zoom powered by [medium-zoom](https://github.com/francoischalifour/medium-zoom).

## Tech Stack

- [VitePress](https://vitepress.dev) (Vue-powered static site generator)
- Vue 3 (`<script setup>`)
- TypeScript
- [rtlcss](https://rtlcss.com/) for RTL stylesheet generation
- dotenv for environment-based configuration

## Prerequisites

- Node.js 18 or later
- One of the following package managers: npm, Yarn, or pnpm

## Getting Started

Clone the repository and install dependencies:

```bash
git clone https://github.com/virak-cloud/docs.git
cd docs
```

Using npm:

```bash
npm install
```

Using Yarn:

```bash
yarn install
```

Using pnpm:

```bash
pnpm i
```

## Environment Configuration

This project loads environment variables from `.env.dev` (development) or `.env.master` (production), selected via the `BUILD_ENV` variable. Create the appropriate `.env` file in the project root before running the dev server or building for production. Relevant variables include:

- `VITE_SITEURL` — the site's public hostname, used for the sitemap.
- `VITE_COMMENT_URL` — the host URL for the Remark42 comment server.

## Running the Development Server

```bash
npm run docs:dev
# or
yarn docs:dev
# or
pnpm docs:dev
```

The site will be available locally, typically at `http://localhost:5173`.

## Building for Production

```bash
npm run docs:build
# or
yarn docs:build
# or
pnpm docs:build
```

To preview the production build locally:

```bash
npm run docs:preview
# or
yarn docs:preview
# or
pnpm docs:preview
```

## Project Structure

```
.
├── docs/
│   ├── .vitepress/
│   │   ├── config.mts        # Site config, locales, sidebar navigation
│   │   └── theme/            # Custom theme, components, and styles
│   ├── en/guides/             # English documentation pages
│   ├── fa/guides/             # Persian documentation pages
│   └── public/                # Static assets (images, fonts, favicon)
├── .github/workflows/         # CI/CD (build and deploy)
├── CONTRIBUTING.md            # Guide for adding and editing pages
└── package.json
```

## Contributing

Contributions are welcome. Please read [CONTRIBUTING.md](./CONTRIBUTING.md) for details on how to add a new guide page, use images (including dark-mode variants), configure frontmatter, and update the sidebar navigation.

In short:

1. Add your Markdown file under `docs/en/guides/` and/or `docs/fa/guides/`.
2. Add matching images under `docs/public/images/guides/<lang>/<light|dark>/...` in WEBP format where possible.
3. Register the new page in the sidebar configuration in `docs/.vitepress/config.mts`.
4. Open a pull request.

## License

This project is licensed under the terms specified in the [LICENSE](./LICENSE) file.

## Links

- Live site: [docs.virakcloud.com](https://docs.virakcloud.com)
- Main product: [virakcloud.com](https://virakcloud.com)
