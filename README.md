# Folio Reader — MVP

A tablet-first, offline-first PDF reading web app. The first version focuses on local PDF import, reading progress, page navigation, themes, bookmarks, and a simple highlights/notes notebook.

## Stack
- React + TypeScript + Vite
- `react-pdf` / PDF.js for PDF rendering and text selection
- Dexie + IndexedDB for local book files and reader data
- Vite PWA for installable app shell
- Vercel for static hosting

## Run locally
1. Install Node.js 20 or newer.
2. Run `npm install`.
3. Run `npm run dev`.
4. Open the local URL shown by Vite.

## Build
Run `npm run build`; the production site is generated in `dist/`.

## Deploy to GitHub + Vercel
1. Create a new empty GitHub repository named `folio-reader`.
2. Unzip this project, then run in its folder:
   ```bash
   git init
   git add .
   git commit -m "Build Folio reader MVP"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/folio-reader.git
   git push -u origin main
   ```
3. In Vercel, choose **Add New → Project**, import the GitHub repository, and deploy. Vercel should detect Vite automatically. Build command: `npm run build`; output directory: `dist`.

## MVP notes
- PDFs, progress, bookmarks, and notes are stored locally in this browser on this device. There is no account or cloud sync yet.
- Use the in-app **Export backup** button regularly. Browser storage can be cleared by device/browser settings.
- Browser storage quotas and persistence vary by browser. Very large libraries should be tested on the target tablet.
- Scanned PDFs display normally, but searchable text and text-based highlights require an OCR feature in a future release.
- This is an early MVP; validate on the target Android tablet before relying on it as the only copy of important notes.
