---
sidebar_position: 2
---

# Komponenten

Komponenten sind im ns.wow als Elemente definiert, die einerseits in das
ns.wow-Backendsystem übertragen und dort redaktionell bearbeitet und befüllt werden können. Andererseits dienen diese
Komponenten als einzelne Bausteine für die spätere Frontend-Applikation als auch Ausgabe im PDF und sonstigen Dokumenten.

***ns.wow stellt ein Basisset an Standardkomponenten bereit.***

Diese können beliebig verwendet und geändert als auch mit projektspezifischen Komponenten erweitert werden.

## Installation von neuen ns.wow Komponenten

Gruppen von Komponenten können mit folgendem Kommando installiert werden:

```bash
npx nswow add group
```

Einzelne von ns.wow bereitgestellte Komponenten können wie folgt installiert werden:

```bash
npx nswow add components
```

## Struktur

Jede Komponente befindet sich in einer Gruppe von gleichartigen Komponenten.

```bash
livingdocs
├── Buttons # Gruppe
  ├── button # Komponente
    ├── app.scss        // Wird nur in der Frontend Applikation geladen
    ├── button.html     // Darstellung in allen Ausgaben
    ├── general.scss    // Wird in allen Kanälen geladen
    ├── properties.json // Konfiguration ns.wow Backend
    ├── idd.scss        // Wird nur im ns.wow geladen
    ├── pdf.scss        // Wird für die .pdf Ausgabe verwendet
    └── word.scss       // Wird für die .docx Ausgabe verwendet
  ├── ... # Komponente
├── ...
```
