# Changelogs

In [this section](https://panel.virakcloud.com/changelogs) you can see every update to the Virak panel: what was added, fixed, changed, or removed, and in which version. To open it, click **Changelogs** in the sidebar.

<DarkModeImage
  dark-src="/images/guides/en/dark/change-log.webp"
  light-src="/images/guides/en/light/change-log.webp"
  alt="Changelogs"
/>

## Reading a Release

The latest version is at the top. Each card shows the version number and its release date (in the Gregorian calendar in the English panel), and the changes in that version are listed under the categories below:

| Category            | Meaning                                                                                     |
| ------------------- | ------------------------------------------------------------------------------------------- |
| Feature, Added      | Something new was added to the panel                                                        |
| Improvement         | Something that already existed became better or smoother                                    |
| Changed             | Something works or looks differently. If something isn't how it used to be, look here first |
| Fixed               | A problem was resolved                                                                      |
| Removed, Deprecated | Something was taken away, or will be soon                                                   |
| Security            | A security-related item                                                                     |

## What a Version Number Means

A version number has three parts, like `3.14.0`:

- **The last number** (`3.13.5`): small fixes.
- **The middle number** (`3.14.0`): new capabilities or improvements.
- **The first number** (`3.0.0`): a big, broad change. This is rare.

## When a New Version Is Released

You don't need to keep checking this page; the panel lets you know. How it tells you depends on the kind of release:

| Release type                                           | What you see                                                                |
| ------------------------------------------------------ | --------------------------------------------------------------------------- |
| **Fix** (for example, `3.13.4` to `3.13.5`)            | A small bar at the bottom of the page with buttons to update now or dismiss |
| **Minor or major** (for example, `3.13.5` to `3.14.0`) | A notification dialog                                                       |

<DarkModeImage
  dark-src="/images/guides/en/dark/update-snackbar.webp"
  light-src="/images/guides/en/light/update-snackbar.webp"
  alt="New version notification bar"
/>

- When you choose to update, the page reloads with the new version. If you're in the middle of a form (for example, creating a server), finish and submit it first.
- The bar stays until you choose an option; it doesn't disappear on its own.
- If you dismiss it, you won't see the message again for that version in the same browser.

## When This Page Is Useful

- After an update, to see exactly what changed.
- When something in the panel looks different from the documentation.
- When you want to confirm that a problem you ran into has been fixed.

::: tip Note
If you notice a change in the panel that isn't listed here, [report it to support](/en/guides/tickets/create).
:::
