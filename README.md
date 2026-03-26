# Portfolio Website

React/Vite-Onepage fuer eine moderne Portfolio- bzw. Freelancer-Website.

Live: [https://www.pokorny-martin.com](https://www.pokorny-martin.com)

## Tech Stack

- React 18
- Vite 8
- eigenes CSS ohne UI-Framework
- Google Fonts (`Syne`, `DM Sans`)

## Entwicklung

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Preview

```bash
npm run preview
```

## Projektstruktur

```text
.
|- index.html
|- package.json
|- vite.config.js
|- public
|  |- og-image.svg
|  |- robots.txt
|  `- sitemap.xml
`- src
   |- App.jsx
   |- main.jsx
   `- styles.css
```

## Wichtige Dateien

- `src/App.jsx`: Inhalte, Sections, Projektdaten, Kontakttexte
- `src/styles.css`: komplettes Layout, Farben, Typografie und Responsive-Verhalten
- `src/main.jsx`: React-Einstiegspunkt
- `index.html`: HTML-Template, Meta-Tags und strukturierte Daten
- `public/robots.txt`: Crawling-Freigabe fuer Suchmaschinen
- `public/sitemap.xml`: Sitemap fuer die Domain

## Inhaltlich anpassen

Die meisten inhaltlichen Aenderungen passieren in `src/App.jsx`:

- `profile`
- `services`
- `projects`
- `audiences`
- `faqItems`

Design und visuelle Anpassungen passieren in `src/styles.css`.
