# Portfolio Website

Moderne Premium-Portfolio-Website für Freelancer im Webdesign & Entwicklung.

## 🚀 Installation

```bash
npm install
```

## 🏃 Development Server starten

```bash
npm run dev
```

Die Website läuft dann auf `http://localhost:5173`

## 🏗️ Build für Production

```bash
npm run build
```

Die fertigen Dateien befinden sich dann im `dist/` Ordner.

## 📝 Anpassungen

### Persönliche Daten ändern
- **Name**: Suche nach "Martin Weber" in `Portfolio.jsx`
- **E-Mail**: Zeile 435 und 470 in `Portfolio.jsx`
- **Telefon**: Zeile 470 in `Portfolio.jsx`

### Farben anpassen
- **Primärfarbe**: Alle `blue-xxx` Klassen ersetzen
- **Akzentfarbe**: Alle `cyan-xxx` Klassen ersetzen

### Texte anpassen
Alle Texte sind direkt in `Portfolio.jsx` und können dort bearbeitet werden.

## 📦 Technologien

- React 18
- Vite
- Tailwind CSS
- Lucide Icons

## 🌐 Deployment

Die Website kann auf verschiedenen Plattformen gehostet werden:
- Vercel (empfohlen für schnelles Deployment)
- Netlify
- GitHub Pages
- Eigener Server mit Nginx

Für Vercel:
```bash
npm install -g vercel
vercel
```
