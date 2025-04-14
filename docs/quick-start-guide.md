---
sidebar_position: 1
---

# Quick Start Guide

## requirements

- [Node.js](https://nodejs.org/en/download/) version 18.0 or higher
- local development machine
  - Windows: [wsl](https://learn.microsoft.com/en-us/windows/wsl/install) due to generated paths with seperator mismatches
  - macos: -

## Start

### Create a project

Generates the whole [srl project strucure](./development/structure)

```bash
npx @multivisio/nswow init <project-folder>
```

### Getting ready for development

```bash
cd <project-folder>
npm install
```

### Add components

currently the `livingdocs` folder is empty and should not contain any Livingdocs components.

```bash
npx nswow add groups
```

Use the [nswow cli](./development/cli#nswow) to add predefined components to quickly build and design your first articles in ns.wow.

### Build

more information to the [deployment/build process](./deployment/build)

```bash
npm run build
```

## Development

```bash
npm run dev
```

### resources
- [CLI](./development/cli#nswow)
- [Project structure](./development/structure.md)
- [CSS - Framework](./beaver/beaver-config)
- [Component structure](./development/components#structure)
- [Vue3](https://vuejs.org/)