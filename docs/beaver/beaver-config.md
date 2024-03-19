---
sidebar_position: 2
---

# Konfiguration

Im Hauptverzeichnis befindet sich die **nswow.config.json**. Hier können Schriften, Farben sowie das Grid eingestellt und projektspezifisch erweitert werden.
Änderungen in der Konfiguration müssen via folgendem Befehl aktualisiert werden:

```bash
npx @multivisio/nswow beaver
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
},
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
    "name": "copy",
    "description": "",
    "color": "rgba(60, 60, 60, 1)"
},
```