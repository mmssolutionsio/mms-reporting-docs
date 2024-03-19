---
sidebar_position: 3
---

# Schriften

Die Schriften der [Grundkonfiguration](./beaver-config) können über SCSS Mixins angesprochen werden.

### Mixins

```scss title="style.scss"
@use "nswow";

.lc-paragraph {
  @include nswow.typography-headline1(true)
}
```

### Optionale Parameter

| Parameter | Type    | Beschreibung                       |
|-----------|---------|------------------------------------|
| `margins` | boolean | Margins (top / bottom) aktivieren. |