---
sidebar_position: 3
---

# routing_lang.json

For each language a complete structure of all articles (`Pages`) and menus.

## Structure

### NsWowResponseRouting

> also known as `routing_[lang].json`

```ts
interface NsWowResponseRouting {
  version: string;
  pages: NsWowArticle[];
  menu: {
    [menu: string]: NsWowMenu[];
  };
}
```

### NsWowArticle

```ts
interface NsWowArticle {
  uuid: string;
  name: string;
  translatedTitle: string;
  slug: string;
  index: boolean;
  seo_keywords: string[];
  ignoreInSearch: boolean;
  excerpt: string;
  originalLanguageOfArticle: string;
  status: string;
}
```

### NsWowMenu

```ts
interface NsWowMenu {
  label: string;
  type: string;
  page?: string;
  url?: string;
  anchor?: string;
  submenuEntries?: NsWowMenu[];
}
```
