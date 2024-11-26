# Contributing to VirakCloud :cloud: Documentation

:link:

## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Adding a Guide Page](#adding-page)
- [Adding Images](#adding-images)
- [Running the Development Server](#run-on-dev)
- [Building for Production](#building-for-production)


Thank you for your interest in contributing to the VirakCloud Documentation! This guide will walk you through the steps to add new pages, use images, configure paths, and manage comments effectively.

## Getting Started :wave: { #getting-started }

To get started, clone the repository and install the dependencies. You can use your preferred package manager:

### Clone repository to your local machine

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

## Project Structure :file_folder: { #project-structure }

- **`docs/`**: Contains all the documentation files, organized by language and section.
- **`docs/.vitepress`**: Configuration files for VitePress, including themes, plugins, and customization options.


## Adding a New Guide Page :page_facing_up: { #adding-page }

To add a new guide page:

1. **Navigate to the Appropriate Language Directory**: For example, `docs/fa/guides`.
2. **Create a Markdown File**: Add a new `.md` file with a descriptive name. For example, `new-feature.md`.
3. **Set Up Frontmatter(Optional)**:
   ```markdown
   ---
   title: عنوان صفحه
   description: توضیحات صفحه
   ---
   ```
   - **title**: The title of your page.
   - **description**: A brief description that will appear in search engines and social previews.

4. **Add Content**: Write your content in markdown. Here’s a sample layout:
   ```markdown
   # Page Title
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

   ## Second Title
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.


   ## Third Title
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
   ```

5. **Link the Page**: If you want to add navigation to the new page, edit the sidebar configuration in `docs/.vitepress/config.ts`.

## Adding Images :framed_picture: {#adding-images}

To add images:

1. **Place the Image**: Save your image in the `docs/public/images` folder to keep assets organized.

> **:bulb: Note:** The site supports two languages (Persian and English) and two themes (dark and light). When adding images, make sure to provide appropriate versions for both languages and themes if necessary to ensure a consistent user experience.

> **:warning: Note:** Please ensure that images are in WEBP format and optimized to the maximum extent before uploading. For best results, images should be sized between 700 and 1200 pixels. Optimized images will help improve loading times and enhance the overall performance of the website.


2. **Use in Markdown**:
   ```markdown
   ![Alt text](../../images/filename.webp)
   ```

### :new_moon: Dark Mode Images

If you need different images for dark mode, use the `<DarkModeImage />` component:

```markdown
<DarkModeImage src="image-light.webp" dark-src="image-dark.webp" alt="Alt text" />
```

## Running the Development Server :rocket: {#run-on-dev}
To start the development server, run one of the following commands based on your package manager:

### Using npm:
``` bash
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



## Building for Production :hammer_and_wrench: {#building-for-production}

To build the project for production, use one of the following commands:

1. ### Build the Project:
      #### Using npm:
      ``` bash
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
      ``` bash
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
