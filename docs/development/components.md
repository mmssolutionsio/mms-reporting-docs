---
sidebar_position: 2
---

# Components

Innerhalb des ns.wow-Systems werden Komponenten als zentrale Elemente betrachtet, die eine **doppelte Funktion** erfüllen.
Zum einen können sie in das ns.wow-Backend-System integriert werden, wo sie redaktionell bearbeitet und mit Inhalten
versehen werden. Zum anderen dienen diese Komponenten als modulare Bausteine für die Frontend-Applikation sowie für die
Ausgabe in PDF-Formaten und anderen Dokumententypen.

**_ns.wow stellt ein Basisset an Standardkomponenten bereit._**

Diese können beliebig verwendet und geändert als auch mit projektspezifischen Komponenten erweitert werden.

## Installation von neuen ns.wow Komponenten

Gruppen von Komponenten können mit folgendem Kommando installiert werden. Die Auswahl der gewünschten Gruppen und Komponenten kann mit Leertaste bestätigt werden.

```bash
npx nswow add groups
```

Einzelne von ns.wow bereitgestellte Komponenten können wie folgt installiert werden:

```bash
npx nswow add components
```

## Structure

- `Group`
  - Named 
- 

```bash
livingdocs
├── Misc # group - which includes components of the same type (Titles, Text, Lists, Media, PDF only)
  ├── accordion # component
    ├── app.scss        # only visible in the web application
    ├── accordion.html  # HTML template and editor component declaration
    ├── app.ts          # component JS for web application js.
    ├── general.scss    # used in all stylesheets, base style of an component (color, typography, grid)
    ├── properties.json # Livingdocs component properties
    ├── ldd.scss        # only used in ns.wow editor
    ├── pdf.scss        # only used in pdf styling
    └── word.scss       # only used in word styling
  ├── ... # component
├── ...
```

| file            | desc                                                                                                                                                                                                                                                                                                           |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| component.html  | HTML template und Json Konfiguration für Livingdocs design                                                                                                                                                                                                                                                     |
| app.ts/js       | JS Module für Web JS hooks. Beispiel Accordion Interaktion                                                                                                                                                                                                                                                     |
| general.scss    | Basis der css Styles einer Komponente (Typograpy, Colors)                                                                                                                                                                                                                                                      |
| properties.json | Deklaration der Livingdocs [componentProperties](https://docs.livingdocs.io/reference/document/content/component-model/#componentproperties). Property Key muss unique sein. [Beispiel graphic](https://github.com/mmssolutionsio/simple-reporting-library/blob/main/livingdocs/Media/graphic/properties.json) |

## Eigene Komponenten

Projektspezifische Komponenten können entweder in vorhandene Ordner, oder neue Gruppen kategorisiert werden.

### Ordner

Eigene Ordner können mit folgendem Befehl erstellt werden:

```bash
npx nswow create group my-group
```

### Komponenten

Eigene Komponenten können via folgendem Befehl erstellt werden.

```bash
npx nswow create component my-component
```

### Komponenten entfernen

Du kannst Komponenten und Gruppen entweder per Hand löschen oder die Befehlszeile (cli) nutzen. Hier ist ein Beispiel, wie du Gruppen über die Befehlszeile löschen kannst:

```bash
npx nswow remove groups
```
