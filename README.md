# ShiftFlow

Shift-rostering for hospitals, clinics, and care providers — schedule staff,
detect shift conflicts, and keep shift records audit-ready.

> _Rostering that runs itself._

This repo holds two routes that share one brand:

- `/` — marketing landing page (Challenge 1)
- `/dashboard` — weekly rostering dashboard (Challenge 2)

Both are placeholder pages at this stage; the scaffold, Tailwind setup, and
brand palette are wired up and confirmed working.

## Stack

- **Next.js 14** (App Router)
- **React 18**
- **Tailwind CSS 3** (with PostCSS + Autoprefixer)
- Deploy target: **Vercel**

The brand palette from `PROJECT_BRIEF.md` lives as CSS variables in
`app/globals.css` and is exposed to Tailwind as named colors
(`primary`, `accent`, `surface`, `text`, `success`, etc.) in
`tailwind.config.js`.

## Requirements

- Node.js 18.17+ (developed on Node 22)
- npm 10+

## Setup

```bash
npm install
```

## Run

```bash
npm run dev      # start the dev server at http://localhost:3000
```

Other scripts:

```bash
npm run build    # production build
npm run start    # serve the production build
npm run lint     # next lint
```

## Project structure

```
app/
  layout.js          # root layout, imports globals.css, sets fonts/metadata
  globals.css        # Tailwind directives + brand palette CSS variables
  page.js            # / — landing page (placeholder)
  dashboard/
    page.js          # /dashboard — dashboard (placeholder)
tailwind.config.js   # brand colors mapped to the CSS variables
postcss.config.js
PROJECT_BRIEF.md     # brand system + build brief
```

## Brand palette

| Token            | Value     |
| ---------------- | --------- |
| Primary (teal)   | `#0F766E` |
| Primary dark     | `#134E4A` |
| Accent (amber)   | `#F59E0B` |
| Background       | `#FAFAF9` |
| Surface          | `#FFFFFF` |
| Text             | `#1E293B` |
| Text muted       | `#64748B` |
| Success          | `#16A34A` |
| Warning          | `#D97706` |
| Danger           | `#DC2626` |
