# Praxis Meyer Website

Statische Website fuer die Praxis Dr. phil. Thomas Meyer.

## Projektstruktur

```text
.
├── index.html
├── akupunktur.html
├── datenschutz.html
├── physikalische-therapie.html
├── publikationen.html
├── service.html
├── sportpsychologie.html
├── public/
│   ├── images/
│   └── icons/
├── src/
│   ├── pages/
│   ├── styles/
│   │   ├── fonts.css
│   │   └── style.css
│   └── scripts/
│       └── main.js
└── archive/
    └── assets-legacy/
```

## Start

Die Website ist statisch und benoetigt keinen Build-Schritt. `index.html` kann direkt im Browser geoeffnet werden.

## Dateien pflegen

- Seiten liegen aktuell im Projektroot als `.html`-Dateien.
- Bilder und andere Bildassets liegen in `public/images/`.
- Icons koennen in `public/icons/` abgelegt werden.
- Stylesheets liegen in `src/styles/`.
- JavaScript liegt in `src/scripts/`.
- Alte oder unsichere Strukturreste liegen in `archive/`.
