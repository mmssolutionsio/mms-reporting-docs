---
sidebar_position: 1
---

# Project structure

Project root overview:

```bash
[project]
├── .nswow
├── .output
├── livingdocs
├── nswow
├── src
├── livingdocs.config.json
├── nswow.config.json
```

## .nswow

Location of multiple generated `scss` files with component mappings. These files are re-rendered when adding or removing components in `/livingdocs/**`.

Usually consits of the following scss files:

```bash
.nswow
├── app.scss # web livingdocs component styles
├── general.scss # base livingdocs component style
├── ldd.scss # editor only livingdocs component style
├── pdf.scss # pdf css styles
├── print.scss # pdf css styles
├── web.scss # web livingdocs component styles
├── word.scss # word livingdocs component styles
```

## .output

Vite generated output: includes `web application`, `Livingdocs design`, `pdf.css`, `word.css`

```bash
npm run build
```

## livingdocs

Structure for Livingdocs design - styles, component definitions and component TypeScript / JS

- [Component structure](./components.md#structure)

## nswow

Das ns.wow [Frontend Toolkit.](./../beaver/beaver-config)

## src

Vue3 Application. Used for the Web Application of the final product.

## livingdocs.config.json

Base configuration for the [Livingdocs design](https://docs.livingdocs.io/reference/document/document-design/#design-settings).

## nswow.config.json

Design variable configuration which generates colors, typography, grid and more. [Frontend Toolkit.](./../beaver/beaver-config)

> citation needed for "more"
