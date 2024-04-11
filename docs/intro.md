---
sidebar_position: 1
---

# Quick Start Guide

## Benötigt

- [Node.js](https://nodejs.org/en/download/) version 18.0 oder höher
- Lokale Entwicklungsumgebung

## 1. Erstellen eines neuen Projekts

Die klassische Vorlage wird automatisch deinem Projekt hinzugefügt, nachdem du folgenden Befehl ausgeführt hast:

```bash
npx @multivisio/nswow init <project-folder>
```

Diesen Befehl kannst du in die Eingabeaufforderung, Powershell, Terminal oder ein anders integriertes Terminal deines Code-Editors eingeben. Um die notwendigen Abhängigkeiten für die Ausführung und Entwicklung deines ns.wow Projektes zu installieren, navigiere zunächst in den neu erstellten Projektordner und führe den entsprechenden Befehl in deinem Terminal oder deiner Kommandozeile aus:
```bash
cd <project-folder>
npm install
```

## 2. Projekt konfigurieren

Informationen zur Konfiguration des Frontend Toolkits findest du unter [Frontend Toolkit Konfiguration.](./beaver/beaver-config) Dort kannst du Einstellungen für das Raster, Schriften und projektspezifische Ausgabespezifikationen vornehmen.

## 3. Installieren und Entwickeln von Komponenten

Komponenten werden in das ns.wow Backend geladen und können dort gepflegt werden. Später werden diese mit den entsprechenden Inhalten in der Frontend-Applikation dargestellt. Informationen zur Installation des ns.wow Standardsets oder eigener Komponenten findest du unter [Komponenten.](./development/components).

## 4. Entwicklung der Webseite

Die Applikation für die Webseite befindet sich im **./src** Ordner. Lokal kann diese wir folgt aufgerufen werden:

```bash
npm rund dev
```

Weitere Informationen zur Programmierung einer VUEJS-Applikation findest du hier: https://vuejs.org/

## 5. Deployment

Sobald das Projekt fertig ist, wird es durch den Build-Prozess in den .output Ordner geschrieben und über das ns.wow Hosting hochgeladen. Hier findest du mehr Details über das [Deployment.](./category/deployment)

## 6. Pflegen von Inhalten im ns.wow

Nach dem Hochladen der neuen Ressourcen kann der Redakteur diese im ns.wow verwenden und Inhalte pflegen. Im ns.wow Hosting können die Artikel an verschiedene Menüs für die Webseite angeordnet werden.

## 7. Exportieren der finalen Ressourcen aus ns.wow Hosting

Im ns.wow Hosting können die finalen Ressourcen für die Bereitstellung auf dem Server heruntergeladen werden. Zunächst muss das Bundle über die Option **"Create a new Publication Export"** erstellt werden.