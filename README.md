# Portfolio Website

Moderne Premium-Portfolio-Website für Freelancer im Webdesign & Entwicklung.

**Live Demo:** [Coming Soon]  
**GitHub:** [https://github.com/Grufyeti/portfolio-website](https://github.com/Grufyeti/portfolio-website)

---

## 🚀 Quick Start

```bash
# Dependencies installieren
npm install

# Development Server starten
npm run dev
```

Die Website läuft dann auf `http://localhost:5173`

---

## 🏗️ Build für Production

```bash
npm run build
```

Die fertigen Dateien befinden sich dann im `dist/` Ordner.

---

## 📝 Anpassungen

### Persönliche Daten ändern
- **Name**: Suche nach "Martin Pokorny" in `Portfolio.jsx`
- **E-Mail**: Zeile 435 und 469 in `Portfolio.jsx`
- **GitHub**: Zeile 471 und 479 in `Portfolio.jsx`

### Farben anpassen
- **Primärfarbe**: Alle `blue-xxx` Klassen ersetzen
- **Akzentfarbe**: Alle `cyan-xxx` Klassen ersetzen

### Texte anpassen
Alle Texte sind direkt in `Portfolio.jsx` und können dort bearbeitet werden.

---

## 📦 Technologien

- React 18
- Vite
- Tailwind CSS
- Lucide Icons

---

## 🌐 Deployment

### Vercel (Empfohlen)
```bash
npm install -g vercel
vercel
```

### Netlify
1. Drag & Drop den `dist/` Ordner nach Build
2. Oder GitHub-Integration nutzen

### GitHub Pages
Siehe `GITHUB_UPLOAD.md` für detaillierte Anleitung

---

## 📂 Projektstruktur

```
portfoliowebseite/
├── Portfolio.jsx          # Hauptkomponente mit der kompletten Website
├── src/
│   ├── main.jsx          # React Entry Point
│   └── index.css         # Tailwind CSS Imports
├── index.html            # HTML Template
├── package.json          # Dependencies
└── vite.config.js        # Vite Konfiguration
```

---

## ✨ Features

- ✅ Dark Premium Design
- ✅ Vollständig responsive
- ✅ 12 Sektionen (Hero, Services, Projects, FAQ, etc.)
- ✅ Smooth Scroll Navigation
- ✅ Hover-Animationen & Gradients
- ✅ Professionelle deutsche Texte
- ✅ SEO-optimiert
- ✅ Production-ready

---

## 📧 Kontakt

**Martin Pokorny**  
E-Mail: martinkopoky@gmail.com  
GitHub: [https://github.com/Grufyeti](https://github.com/Grufyeti)

---

## 📄 Lizenz

© 2024 Martin Pokorny. Alle Rechte vorbehalten.

---

## 🆘 Support

Für detaillierte Setup-Anleitungen siehe:
- `SETUP_COMPLETE.md` - Komplette Setup-Dokumentation
- `GITHUB_UPLOAD.md` - GitHub Upload Anleitung
