---
sidebar_position: 4
---

# Farben

Die Farben der [Grundkonfiguration](./beaver-config) können über SCSS Mixins angesprochen werden.

### Mixins

Durch die Nutzung von **@use** sind umfassende Code-Vervollständigungen verfügbar.

```scss title="style.scss"
@use "nswow";

.my-copy-style {
  color: nswow.colors-copy();
}
```

```scss title="style.scss"
@use "nswow";

.my-style {
  color: nswow.colors-meinefarbe();
}
```

### Inline - Klassendefinition:

Parallel stehen Farben und Hintergrundfarben als Inline - Klassendefinitionen zur Verfügung:

```html title="komponente.html"
<div class="nswow-bg-primary nswow-color-meinefarbe"></div>
```