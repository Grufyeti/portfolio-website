# 🚀 GitHub Upload Anleitung

## ✅ Lokales Git Repository ist bereits erstellt!

Dein Projekt ist bereits für Git vorbereitet. Jetzt musst du es nur noch auf GitHub hochladen.

## 📤 Schritt-für-Schritt: Projekt auf GitHub hochladen

### Option 1: Über GitHub Website (Einfachste Methode)

1. **Gehe zu GitHub.com und logge dich ein**
   - https://github.com/Grufyeti

2. **Erstelle ein neues Repository**
   - Klicke auf das "+" Icon oben rechts
   - Wähle "New repository"
   - **Name**: `portfolio-website`
   - **Description**: "Premium Portfolio Website - Modern, responsive website built with React, Vite, and Tailwind CSS"
   - **Visibility**: ✅ **Public** (wichtig!)
   - ❌ **NICHT** "Initialize with README" anklicken (wir haben schon einen)
   - Klicke "Create repository"

3. **Verbinde dein lokales Projekt mit GitHub**
   
   Öffne PowerShell/Terminal im Projektordner und führe aus:
   
   ```bash
   cd C:\Users\marti\OneDrive\Desktop\portfoliowebseite
   git remote add origin https://github.com/Grufyeti/portfolio-website.git
   git branch -M main
   git push -u origin main
   ```

4. **Fertig!** 🎉
   - Dein Projekt ist jetzt auf GitHub: `https://github.com/Grufyeti/portfolio-website`

---

### Option 2: Mit GitHub Desktop (Grafische Oberfläche)

1. **GitHub Desktop installieren** (falls noch nicht installiert)
   - https://desktop.github.com/

2. **Repository hinzufügen**
   - Öffne GitHub Desktop
   - File → Add Local Repository
   - Wähle: `C:\Users\marti\OneDrive\Desktop\portfoliowebseite`

3. **Auf GitHub veröffentlichen**
   - Klicke "Publish repository"
   - Name: `portfolio-website`
   - ✅ Keep this code **private** → auf **public** ändern!
   - Klicke "Publish Repository"

---

## 🌐 Nach dem Upload: GitHub Pages aktivieren (Optional)

So machst du deine Website kostenlos über GitHub Pages verfügbar:

1. Gehe zu deinem Repository auf GitHub
2. Settings → Pages
3. Source: "GitHub Actions"
4. Erstelle `.github/workflows/deploy.yml` mit folgendem Inhalt:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: 18
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

Deine Website ist dann verfügbar unter:
`https://grufyeti.github.io/portfolio-website/`

---

## 🚀 Alternative: Deploy auf Vercel (Empfohlen!)

Vercel ist noch einfacher und schneller:

1. Gehe zu https://vercel.com
2. Melde dich mit deinem GitHub-Account an
3. "Add New Project"
4. Wähle dein `portfolio-website` Repository
5. Klicke "Deploy"
6. Fertig! Du bekommst automatisch eine URL wie: `portfolio-website.vercel.app`

**Vorteile von Vercel:**
- Automatische Deployments bei jedem Push
- Kostenlose Custom Domain
- SSL automatisch inklusive
- Sehr schnell und zuverlässig

---

## 📝 Zusammenfassung

**Was bereits erledigt ist:**
✅ Git Repository initialisiert
✅ Alle Dateien committed
✅ Persönliche Daten aktualisiert (Martin Pokorny, martinkopoky@gmail.com)
✅ GitHub Link (https://github.com/Grufyeti) im Footer hinzugefügt
✅ .gitignore erstellt

**Was du noch machen musst:**
1. Repository auf GitHub erstellen (siehe Optionen oben)
2. Projekt hochladen (git push)
3. Optional: Deployment auf Vercel oder GitHub Pages

---

## 🆘 Falls Probleme auftreten

**Git fragt nach Login:**
```bash
git config --global user.name "Martin Pokorny"
git config --global user.email "martinkopoky@gmail.com"
```

**"Remote already exists" Fehler:**
```bash
git remote remove origin
git remote add origin https://github.com/Grufyeti/portfolio-website.git
```

**Branch-Name ändern:**
```bash
git branch -M main
```

---

**Viel Erfolg! 🚀**

Bei Fragen schau in die README.md oder SETUP_COMPLETE.md
