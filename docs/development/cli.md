---
sidebar_position: 1
---

# CLI

- [nswow](#nswow)
- [npm](#npm)

## nswow

## `add`

Adds predefined Livingdocs component/s and groups to `/livingdocs/`.

### Usage

```bash
npx nswow add [type]
```

### Options

| type         |                                                                                                        |
| ------------ | ------------------------------------------------------------------------------------------------------ |
| `components` | gives a selectable list of predifined Livingdocs components. Adds selectend components                 |
| `groups`     | gives a selectable list of predifined Livingdocs components. Adds selected Groups and their components |

## `remove`

Deletes Livingdocs components or groups in `/livingdocs/`.

### Usage

```bash
npx nswow remove [type]
```

### Options

| type         |                                                                                         |
| ------------ | --------------------------------------------------------------------------------------- |
| `components` | gives a selectable list of aviable Livingdocs components. Deletes selected components   |
| `groups`     | gives a selectable list of aviable Groups. Deletes selected Groups and their components |

## `add`

### Usage

```bash
npx nswow add [type]
```

### Options

| type        |                                                                        |
| ----------- | ---------------------------------------------------------------------- |
| `group`     | Creates group folder in `/livingdocs/` and makes it aviable in the cli |
| `component` | Creates component template in `/livingdocs/[group]/`                   |



## npm

see [`package.json`](https://github.com/mmssolutionsio/simple-reporting-library/blob/main/package.json) for `vite dev` and `build` scripts