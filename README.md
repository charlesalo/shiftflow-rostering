# ShiftFlow — VCCG Web Developer Assessment

ShiftFlow is a fictional shift-rostering SaaS for hospitals, clinics, and
care providers — built for the VCCG Web Developer practical assessment.
Two deliverables, one product:

- **Landing page** (`/`) — marketing site for the rostering platform
- **Dashboard** (`/dashboard`) — the weekly roster, the product itself

## Live links

- Landing: https://shiftflow-rostering.vercel.app/
- Dashboard: https://shiftflow-rostering.vercel.app/dashboard

## Stack

- Next.js 14 (App Router), plain JavaScript
- Tailwind CSS
- Deployed on Vercel

## Running locally

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` for the landing page and
`http://localhost:3000/dashboard` for the roster dashboard.

## Project structure

```
app/
  page.js                  # / — landing page
  dashboard/page.js        # /dashboard — weekly roster dashboard
  globals.css              # design tokens (CSS variables, RGB-channel format)
  layout.js
components/
  landing/                 # Nav, Hero, Features, HowItWorks, StatsBand,
                           # FAQ, FinalCTA, Footer, SocialProof, LoginModal
  dashboard/               # Sidebar, TopBar, RosterGrid, ShiftDetailPanel
  ui/                      # Badge, Button, Card, Logo (shared primitives)
lib/
  roster-data.js           # mock staff/shift data + helpers, shared by the
                           # landing page hero preview and the dashboard
```

## Features

**Landing page:** sticky responsive nav with mobile menu and a non-functional
"Log in" link plus an accessible login modal (focus-trapped, closes on
Escape/backdrop), hero with animated floating UI cards, rotating avatar
carousel, feature cards with custom micro-illustrations, an alternating
vertical timeline for "How it Works," a count-up stats band, an FAQ
accordion, and a final CTA section.

**Dashboard:** weekly roster grid with color-coded shift types and status
badges, click-to-select shift details in a collapsible side panel,
clickable status / department / role filters that highlight matching
shifts, and a single-day view on mobile instead of a cramped full-week
table.

See `PROCESS.md` for the AI usage write-up.
