# Bündnis Goldgrube — schulstandort-koblenz.de

Statische Kampagnen-Website der Bürgerinitiative **Bündnis Goldgrube** gegen die geplante Verlagerung des Max-von-Laue-Gymnasiums in das Quartier Goldgrube in Koblenz (Beschlussvorlage BV/0197/2026, Stadtratsentscheidung 28.05.2026).

**Live:** https://schulstandort-koblenz.de
**Petition:** https://www.openpetition.de/petition/online/keine-interimsschule-in-der-goldgrube

## Tech-Stack

- **Astro 6** (statisch generiert)
- **Tailwind CSS 4**
- **Cloudflare Pages** (Hosting + CDN)
- **Cloudflare Web Analytics** (DSGVO-freundlich, kein Cookie-Banner)
- Lokale Schriften (Inter Tight, Source Serif 4 — DSGVO)

## Lokale Entwicklung

```bash
npm install
npm run dev      # Dev-Server auf http://localhost:4321
npm run build    # Build prüfen
npm run preview  # Preview des Builds
```

Voraussetzung: Node.js ≥ 22.

## Inhalte pflegen — für Redaktion

Die Website wird **direkt über GitHub** redaktionell gepflegt. Jede Änderung an einer Datei deployt automatisch innerhalb weniger Minuten auf die Live-Seite.

### So fügen Sie eine News hinzu

1. Im Repository den Ordner [src/content/news](src/content/news) öffnen
2. Auf **„Add file" → „Create new file"** klicken
3. Dateiname nach Schema: `JJJJ-MM-TT-kurzer-titel.md` — Beispiel: `2026-05-10-pressemitteilung-stadtrat-vertagt.md`
4. Inhalt nach folgendem Muster einfügen (Frontmatter zwischen den `---`):

```markdown
---
title: Stadtrat vertagt Entscheidung
publishedAt: 2026-05-10
excerpt: Kurze Zusammenfassung in maximal 280 Zeichen für Übersicht und Social Media.
category: Pressemitteilung
featured: false
author: Bündnis Goldgrube
---

Hier der eigentliche Text. **Markdown** ist erlaubt.

## Zwischenüberschrift

Mehrere Absätze, Listen, Links — alles kein Problem.
```

5. Unten **„Commit changes"** klicken — innerhalb von 1–3 Minuten ist die News live.

### Kategorien (`category`)

`Pressemitteilung` · `Update` · `Stellungnahme` · `Veranstaltung` · `Termin`

### Termine, Stimmen, Dokumente

Funktionieren analog — jeweils in den Ordnern:
- `src/content/termine/` — Termine im Verfahren (Sitzungen, Veranstaltungen)
- `src/content/stimmen/` — Originalzitate aus Stadt-Dokumenten
- `src/content/dokumente/` — Downloads (PDFs liegen unter `public/dokumente/`)

Schemata siehe `src/content.config.ts`.

### Statische Inhalte ändern

Die Hauptinhalte (Hero-Texte, 14 Argumente, 7 Forderungen, Verantwortliche etc.) liegen als JSON in `src/data/`. Diese sind juristisch geprüft — Änderungen bitte nur nach Rücksprache mit der Initiative.

## Projekt-Struktur

```
src/
├── data/                 # Statische Inhalte (JSON, MD) — juristisch geprüft
├── content/              # Redaktionelle Inhalte (News, Termine, Stimmen, Dokumente)
├── components/           # Astro-Komponenten je Sektion
├── layouts/              # BaseLayout
├── pages/                # Routes (index.astro, news/[slug], impressum, datenschutz)
└── styles/               # Globales Stylesheet
public/
├── dokumente/            # PDF-Downloads
├── images/               # Bilder
└── fonts/                # (Schriften kommen via npm-Paket)
```

## Deployment

- **Push auf `main`** → Cloudflare Pages baut automatisch und deployt unter wenigen Minuten.
- Preview-Deployments für jeden Branch / Pull Request automatisch.
- Hosting: Cloudflare Pages, Domain: `schulstandort-koblenz.de`

## Kontakt

- E-Mail Initiative: kontakt@schulstandort-koblenz.de
- Technischer Ansprechpartner: Upscaled Media GmbH, dirk@upscaled.com
