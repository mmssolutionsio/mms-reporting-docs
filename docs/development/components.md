---
sidebar_position: 2
---

# Komponenten

Innerhalb des ns.wow-Systems werden Komponenten als zentrale Elemente betrachtet, die eine **doppelte Funktion** erfüllen.
Zum einen können sie in das ns.wow-Backend-System integriert werden, wo sie redaktionell bearbeitet und mit Inhalten
versehen werden. Zum anderen dienen diese Komponenten als modulare Bausteine für die Frontend-Applikation sowie für die
Ausgabe in PDF-Formaten und anderen Dokumententypen.

***ns.wow stellt ein Basisset an Standardkomponenten bereit.***

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
