---
sidebar_position: 2
---

# Hosting Export structure

## Dynamic package

```bash
export.zip
├── downloads
    ├── downloads_[lang].json
    ├── [lang]
        ├── [file].[ext]
├── html
    ├── [lang]
        ├── [article name].html
├── images
├── json
    ├── routing_[lang].json
    ├── settings.json
    ├── translations_hosting.json
```

## Hybrid package

```bash
export.zip
├── downloads/
├── downloads/downloads_[lang].json
├── downloads/[lang][file].[ext]    
├── html/[lang]/[article name].html
├── [lang]/index.html
├── [lang]/[article-slug]
├── [lang].html
├── images
├── json/routing_[lang].json
├── json/settings.json
├── json/translations_hosting.json
```

### resources

- [`downloads_[lang].json`](./json-downloads)
- [`routing_[lang].json`](./json-routing)
- [`settings.json`](./json-settings)
- [`translations_hosting.json`](./json-translations)
