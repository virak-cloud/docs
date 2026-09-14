# Contributing to VirakCloud :cloud: Documentation

- [Getting Started](#getting-started-wave)
- [Adding a New Guide Page](#adding-images-framed_picture)
- [Optimizing Images](#optimizing-images-gear)
- [Running the Development Server](#running-the-development-server-rocket)
- [Building for Production](#building-for-production)

Thank you for your interest in contributing to the VirakCloud Documentation! This guide will walk you through the steps to add new pages, use images, configure paths, and manage comments effectively.

## Getting Started :wave:

```bash
git clone <repository-url>
cd <repository-directory>
```

### install packages:

#### Using npm:

```bash
npm install
```

### Using Yarn:

```bash
yarn install
```

### Using pnpm:

```bash
pnpm i
```

### Project Structure

- **`docs/`**: Contains all the documentation files, organized by language and section.
- **`docs/.vitepress`**: Configuration files for VitePress, including themes, plugins, and customization options.

## Adding a New Guide Page :page_facing_up:

To add a new guide page:

1. **Navigate to the Appropriate Language Directory**: For example, `docs/fa/guides`.
2. **Create a Markdown File**: Add a new `.md` file with a descriptive name. For example, `new-feature.md`.
3. **Set Up Frontmatter(Optional)**:

   ```markdown
   ---
   title: عنوان صفحه
   description: توضیح کوتاه صفحه
   ---
   ```

   - **title**: Sets the page title displayed in the browser tab and used for SEO.
   - **description**: A brief description that will appear in search engines and social previews.

4. **Add Content**: Write your content in markdown. Here's a sample layout:

   ```markdown
   # Page Title

   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

   ## Second Title

   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

   ## Third Title

   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
   ```

5. **Link the Page**: If you want to add navigation to the new page, edit the sidebar configuration in `docs/.vitepress/config.mts`.

### Adding Images :framed_picture:

To add images:

1. **Place the Image File**: Save it under `docs/public/images/...`, following the existing folder structure (organized by language and section, with separate `light` and `dark` subfolders for theme-aware screenshots).

> **:warning: Note:** Images must be in WEBP format before they are committed. Use the [image optimization script](#optimizing-images-gear) below to convert and compress screenshots automatically — do not add raw `.jpg`/`.png` files to a PR.

2. **Use in Markdown**:

   ```markdown
   ![Alt text](../../images/filename.webp)
   ```

If you need different images for dark mode, use the `<DarkModeImage />` component instead of a plain Markdown image tag:

```markdown
<DarkModeImage
  dark-src="/images/guides/en/dark/section/filename.webp"
  light-src="/images/guides/en/light/section/filename.webp"
  alt="Description of the screenshot"
/>
```

## Optimizing Images :gear:

This repository includes a script, `scripts/optimize-images.mjs`, that converts screenshots to WebP and (optionally) keeps every Markdown reference to those images up to date automatically. Use it any time you add new screenshots, instead of converting images manually.

### Requirements

The script depends on [`sharp`](https://www.npmjs.com/package/sharp), already listed as a dev dependency. If you haven't run `npm install` (or the yarn/pnpm equivalent) yet, do that first.

### Basic Usage

Run it against the folder containing your new images:

```bash
npm run images:optimize
```

This runs the script with its default target (`docs/public/images/guides`) and:

- Converts every `.jpg`/`.jpeg`/`.png` file found (recursively) to **lossless** WebP.
- Keeps the original image dimensions — nothing is resized by default.
- Deletes the original file after a successful conversion.
- Automatically rewrites any `dark-src`/`light-src`/Markdown image path in `docs/**/*.md` that pointed to the old file, so you don't have to update `.md` files by hand.
- Skips any file where the WebP result would not actually be smaller than the original, leaving that file untouched.

### Running It Manually with Custom Options

If you want to convert a specific subfolder or override the defaults, call the script directly:

```bash
node scripts/optimize-images.mjs <path-to-folder> [options]
```

Available options:

| Flag                  | Description                                                                                                                 | Default                                                       |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| `--max-width=<n>`     | Resize images wider than `<n>`px before encoding.                                                                           | Disabled — original size is always kept unless you pass this. |
| `--quality=<n>`       | Use lossy WebP at quality `<n>` instead of lossless.                                                                        | Lossless                                                      |
| `--delete-original`   | Remove the source `.jpg`/`.png` after conversion.                                                                           | Off (originals are kept)                                      |
| `--update-refs=<dir>` | Scan all `.md` files under `<dir>` and rewrite image paths after conversion. Only useful together with `--delete-original`. | Off                                                           |

Example — convert only the database guide's screenshots and update every reference under `docs`:

```bash
node scripts/optimize-images.mjs docs/public/images/guides/en/dark/database \
  --delete-original --update-refs=docs
```

### Verifying the Result

After running the script:

1. Check the console output — each converted file reports its size before/after and the compression mode used (`lossless` or `quality=<n>`).
2. Run `git status` / `git diff` to confirm only the expected image and `.md` files changed.
3. Start the dev server (`npm run docs:dev`) and open the affected pages to confirm the screenshots still render correctly.

## Running the Development Server :rocket:

To start the development server, run one of the following commands based on your package manager:

### Using npm:

```bash
npm run docs:dev
```

### Using Yarn:

```bash
yarn docs:dev
```

### Using pnpm:

```bash
pnpm docs:dev
```

## Building for Production :hammer_and_wrench:

To build the project for production, use one of the following commands:

1. ### Build the Project:

   #### Using npm:

   ```bash
   npm run docs:build
   ```

   #### Using Yarn:

   ```bash
   yarn docs:build
   ```

   #### Using pnpm:

   ```bash
   pnpm docs:build
   ```

2. ### Preview the Production Build:

   #### Using npm:

   ```bash
   npm run docs:preview
   ```

   #### Using Yarn:

   ```bash
   yarn docs:preview
   ```

   #### Using pnpm:

   ```bash
   pnpm docs:preview
   ```

This will help verify that the documentation works as expected before deploying.

---

Thank you for your contributions :heart:.For questions or support, please reach out to the project maintainer or you can create discussion or leave comment in our document site.
