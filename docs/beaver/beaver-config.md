---
sidebar_position: 1
---

# Konfiguration

Im Hauptverzeichnis befindet sich die **nswow.config.json**. Hier können Schriften, Farben sowie das Grid eingestellt und projektspezifisch erweitert werden.
Änderungen in der Konfiguration müssen via folgendem Befehl aktualisiert werden:

```bash
npx nswow beaver
```

## Schriften

Schriften können frei definiert und für verschiedene Breakpoints konfiguriert werden. Die Definitionen starten beim
kleinsten Breakpoint und werden für größere Breakpoints überschrieben:

```
{
    "name": "headline1",
    "font-size": 32,
    "line-height": 1.2,
    "font-weight": 400,
    "margin-top": 30,
    "margin-bottom": 15,
    "media": {
        "landscape": {
            "font-size": 16,
            "line-height": 1.5,
            "font-weight": 700,
            "margin-top": 10,
            "margin-bottom": 10
        }
    }
},
{
    "name": "headline2",
    "font-size": 20,
    "media": {
        "portrait": {
            "font-size": 28
        },
        "landscape": {
            "font-size": 28
        },
        "desktop": {
            "font-size": 28
        }
    }
}, (...)
```

## Farben

Farben können frei definiert werden. 

```
{
    "name": "primary",
    "description": "",
    "color": "rgba(181, 0, 0, 1)"
},
{
    "name": "meinefarbe",
    "description": "",
    "color": "rgba(181, 0, 0, 1)"
},
{
    "name": "copy",
    "description": "",
    "color": "rgba(60, 60, 60, 1)"
}, (...)
```

## Grid System

Im Standard besteht das Grid-System aus 4 Breakpoints: phone, portrait, landscape und desktop.

```
"grid": {
    "containers": {
        "phone": {
            "padding": 15
        },
        "portrait": {
            "padding": 20
        },
        "landscape": {
            "padding": 20
        },
        "desktop": {
            "padding": 20,
            "max-width": 1600
        }
    },
    "breakpoints": {
        "phone": 0,
        "portrait": 768,
        "landscape": 1024,
        "desktop": 1280
    },
    "gutter": {
        "phone": {
            "columns": 12,
            "row-gap": 10,
            "column-gap": 10
        },
        "portrait": {
            "columns": 12,
            "row-gap": 15,
            "column-gap": 15
        },
        "landscape": {
            "columns": 12,
            "gap": 20 //gap anstatt explizite row / column Definition möglich
        },
        "desktop": {
            "columns": 12,
            "row-gap": 20,
            "column-gap": 20
        }
    }
}, (...)
```