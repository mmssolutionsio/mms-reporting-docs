---
sidebar_position: 1
---

# Projektstruktur

Hier findest du eine Übersicht der wichtigsten Einstiegspunkte.

```bash
my-nswow-project
├── .nswow
├── .output
├── livingdocs
├── nswow
├── src
├── livingdocs.config.json
├── nswow.config.json
```

## .nswow

Hier befinden sich die SCSS Dateien welche für die verschiedenen Ausgabemedien (Web, Print ...) verschiedene Komponenten als auch das Frontend Toolkit importiert.
Neue Komponenten für das ns.wow Backend als auch der Frontend Applikation werden hier bei der Installation über die Bash hinzugefügt.

## .output

Hier liegen die Dateien, welche nach dem build - Prozess in das ns.wow Hosting geladen werden. Diese können mit folgendem Befehl erzeugt werden:


## livingdocs

Hier befinden sich alle Komponenten die für das ns.wow Backend und später in der Frontend Applikation verwendet werden.

```bash
npm run build
```

## nswow

Das ns.wow [Frontend Toolkit.](./../beaver/beaver-config)

## src

Die eigentliche VUE Frontendapplikation welche das finale Produkt abbildet.

## livingdocs.config.json

Die Konfiguration für das Living Docs Backend der ns.wow Applikation.

## nswow.config.json

Über diese Konfiguration lassen sich Farben, Grid, Typografie etc. konfigurieren s. [Frontend Toolkit.](./../beaver/beaver-config)
