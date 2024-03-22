---
sidebar_position: 2
---

# Grid-System

Das Gridsystem der [Grundkonfiguration](./beaver-config) können über SCSS Mixins angesprochen werden. 
Das System basiert auf CSS Grid Layout.

Für die Webapplikation liegen 4 verschiedene Breakpoints initial vor:
- phone
- portrait
- landscape
- desktop

### Mixins

Durch die Nutzung von **@use** sind umfassende Code-Vervollständigungen verfügbar.

```scss title="style.scss"
@use "nswow";

.my-component {
  @include nswow.grid-col();
  @include nswow.grid-col(8, portrait);
  @include nswow.grid-col(12, landscape);
  @include nswow.grid-col(9, desktop);
  @include nswow.grid-offset(3, desktop);
  @include nswow.grid-col(9, print);
  @include nswow.grid-offset(3, print);
}
```

### Row / Container / Column

TBD

### Offset

Beispiel für das Begin in unterschiedlichen Spalten für unterschiedliche Breakpoints:

```scss title="style.scss"
@use "nswow";

.my-component {
  @include nswow.grid-col(3);
  
  //6 Spaltigkeit für portrait und höher
  @include nswow.media-up(portrait) {
    @include nswow.grid-col(6);
  }

  //7 Spaltigkeit und 1 Spalte Einrückung für landscape und höher
  @include nswow.media-up(landscape) {
    @include nswow.grid-col(7);
    @include nswow.grid-offset(1);
  }
  
  @include nswow.media-up(desktop) {
    @include nswow.grid-col(8);
    @include nswow.grid-offset(2);
  }
}
```




### Breakpoints

Einzelne Breakpoints können via grid-media angesprochen werden. Zudem stehen weitere Mixins für die Ansprache von Breakpoints zur Verfügung:

```scss title="style.scss"
@use "nswow";

.my-component {
  @include nswow.grid-media(desktop) {
    @include nswow.grid-col(5);
  }

  @include nswow.up(desktop) { ... }
  @include nswow.down(landscape) { ... }
}
```
