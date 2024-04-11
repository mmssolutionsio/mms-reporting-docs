---
sidebar_position: 1
---

# Quick Start Guide

## Benötigt

- [Node.js](https://nodejs.org/en/download/) version 18.0 oder höher
- Lokale Entwicklungsumgebung

## 1. Ein neues Projekt starten

Die klassische Vorlage wird automatisch zu deinem Projekt hinzugefügt, nachdem du folgenden Befehl ausgeführt hast:

```bash
npx @multivisio/nswow init <project-folder>
```

Du kannst diesen Befehl in die Eingabeaufforderung, Powershell, Terminal oder ein anderes integriertes Terminal deines
Code-Editors eingeben.

Um die notwendigen Abhängigkeiten zu installieren, die du für die Ausführung und Entwicklung deines ns.wow Projektes
benötigst, navigiere zunächst in den neu erstellten Projektordner.
Anschließend führe den entsprechenden Befehl in deinem Terminal oder deiner Kommandozeile aus:

```bash
cd <project-folder>
npm install
```

## 2. Projekt Konfigurieren

Für die Konfiguration des Frontend Toolkits geht es hier
weiter: [Frontend Toolkit Konfiguration.](./beaver/beaver-config) Hier kannst du das Raster, Schriften und Projektspezifikationen für die Ausgabe vornehmen.

## 3. Komponenten installieren und entwickeln

Komponenten werden in das ns.wow Backend geladen und können dort durch die Redakteure gepflegt werden. Später werden
diese in der Frontendapplikation mit den entsprechenden Inhalten ausgespielt.

Wie du das ns.wow Standardset oder auch eigene Komponenten installieren kannst findest du unter [Komponenten.](./development/components).

## 4. Webseite entwickeln

Die Applikation für die Webseite befindet sich im **./src** Ordner. Lokal kann diese wir folgt aufgerufen werden:

```bash
npm rund dev
```

Hier findest du weitere Informationen zum programmieren einer VUEJS Applikation: https://vuejs.org/

## 5. Deployment

Sobald das Projekt fertig ist, wird es via Build - Prozess in den .output Ordner geschrieben und über das ns.wow Hosting hochgeladen. Hier findest du mehr Details über das [Deployment.](./category/deployment)

## 6. Inhalte im ns.wow pflegen

Nach dem Upload der neuen Ressourcen kann der Redakteur diese im ns.wow verwenden und Inhalte pflegen. Im ns.wow Hosting können die Artikel an verschiedene Menüs für die Webseite verortet werden.

## 7. Export finaler Ressourcen aus ns.hosting

Wie Export im ns.wow Hosting können die finalen Ressourcen für das Bereitstellen auf dem Server heruntergeladen werden. Vorerst muss das Bundle via **"Create a new Publication Export"** erzeugt werden.