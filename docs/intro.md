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
npm install
```

## 2. Projekt Konfigurieren

Für die Konfiguration des Frontend Toolkits geht es hier
weiter: [Frontend Toolkit Konfiguration.](./beaver/beaver-config) Dieses umfasst das allgemeine Raster, Farben und
Schriften.

## 3. Komponenten installieren

Komponenten werden in das ns.wow Backend geladen und können dort durch die Redakteure gepflegt werden. Später werden
diese in der Frontendapplikation mit den entsprechenden Inhalten ausgespielt.

Wie du das ns.wow Standardset oder auch eigene Komponenten installieren kannst findest du unter [Komponenten.](./development/components).

## 4. Deployment / Buildprozess

Wenn das Projekt fertig ist, wird es via Build - Prozess in den .output Ordner geschrieben und kann über das ns.wow Backend hochgeladen werden:

```bash
npm run build
```