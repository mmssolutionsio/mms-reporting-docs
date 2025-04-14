---
sidebar_position: 1
---

# Export structure

There are 2 different packaging modes, which change the behaviour of generated content. `dynamic` serves whatever has been uploaded inside of the Web app build.

## Dynamic package

```bash
export.zip
├── downloads
├── downloads/downloads_[lang].json
├── downloads/[lang]/[file].[ext]
├── html/[lang]/[article name].html
├── images/...
├── json/routing_[lang].json
├── json/settings.json
├── json/translations_hosting.json
```

## Hybrid package

`hybrid` generates additional HTML files.

- Articles from `template/article.html` (replaces uploaded files)
  - replaces `[[meta-6297EAFB-33A0-48B8-8D64-E61CDC3E9035]]` string with meta tags
  - replaces `[[base-6297EAFB-33A0-48B8-8D64-E61CDC3E9035]]` with the preview / live base path
  - replaces `[[content-6297EAFB-33A0-48B8-8D64-E61CDC3E9035]]` with the raw Article content
  - replaces `[[language-6297EAFB-33A0-48B8-8D64-E61CDC3E9035]]` with the article language
- Redirect HTML files to browser language landingpage (does not replace existing files)

additional file structure:

```bash
export.zip
├── [lang]/index.html               # basic browser specific language redirect
├── [lang]/[article-slug]           # article from Web app template
├── [lang].html                     # index browser specific language redirect
```

### Basic template/article.html file

```html
<!DOCTYPE html>
<html lang="[[language-6297EAFB-33A0-48B8-8D64-E61CDC3E9035]]">
  <head>
    [[meta-6297EAFB-33A0-48B8-8D64-E61CDC3E9035]]
    <script src="./assets/main.4564565454.js"></script>
    <link rel="stylesheet" href="..." />
    <base href="[[base-6297EAFB-33A0-48B8-8D64-E61CDC3E9035]]" />
  </head>
  <body>
    [[content-6297EAFB-33A0-48B8-8D64-E61CDC3E9035]]
  </body>
</html>
```

#### results in

```html
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <og>
    <title>publication - article title</title>
    <script src="./assets/main.4564565454.js"></script>
    <link rel="stylesheet" href="..." />
    <base href="/2035/ar/" />
    <meta property="og:title" ...>
    <meta property="og:locale" ...>
    <meta property="twitter:card" ...>
    <meta property="og:site_name" ...>
    ...
  </head>
  <body>
    <h1>...</h1>
    ...
  </body>
</html>
```

### resources

- [`settings.json`](./export-settings)
- [`downloads_lang.json`](./export-downloads)
- [`routing_lang.json`](./export-routing)
- [`translations_hosting.json`](./export-translations)
