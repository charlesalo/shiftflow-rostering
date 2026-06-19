# PROJECT BRIEF — ShiftFlow (VCCG Web Dev Assessment)

> Internal working brief. Reference for all build decisions across both
> challenges so they read as one coherent product and brand.

---

## The product

**ShiftFlow** — a shift-rostering SaaS for hospitals, clinics, and
care providers. Replaces messy spreadsheets and group chats with one
platform for scheduling staff, detecting shift conflicts, and keeping
shift records audit-ready.

Two deliverables, one brand:
- **Challenge 1 (PRIORITY):** marketing landing page
- **Challenge 2 (SECONDARY):** the rostering dashboard — one key screen

## Positioning / care-sector lean

Brief says "hospital or clinic" — build that. But VCCG's real business is
**NDIS compliance consulting**, so lean the copy toward the care sector
and make the dashboard handle the kind of **shift-compliance tracking** an
NDIS or care provider would care about (every shift has a clear status,
assigned staff, and an at-a-glance audit trail). This is surfaced
explicitly in PROCESS.md and the Loom — NOT by going off-brief.

---

## Brand system (use everywhere — both challenges)

**Name:** ShiftFlow
**Tagline:** "Rostering that runs itself."

**Palette** (deliberately NOT the reference's blue, NOT AI purple):
- Primary — deep teal `#0F766E`
- Primary dark — `#134E4A`
- Accent — amber `#F59E0B`
- Background — off-white `#FAFAF9`
- Surface — white `#FFFFFF`
- Text — slate `#1E293B` / muted slate `#64748B`
- Success `#16A34A` · Warning `#D97706` · Danger `#DC2626`

**Type:**
- Headings — Inter or similar, tight tracking, bold
- Body — Inter / system sans, comfortable line-height
- One typeface family, weight contrast for hierarchy

**Voice:** calm, confident, plain-English. No jargon, no hype, no emoji in
headings. Care-sector warmth — "your team," "your shifts," "your people."

**Hard rules (their red flags — avoid all):**
- No purple gradients
- No lorem ipsum, no "Feature One / Feature Two"
- No emoji-stuffed headings
- No lifted/ThemeForest templates

---

## Stack & structure

- **Next.js (App Router) + Tailwind CSS**, deployed on **Vercel**
- One repo, two routes:
  - `/` → landing (Challenge 1)
  - `/dashboard` → dashboard (Challenge 2)
- Semantic HTML5. Mobile-first. Breakpoints: 360 / 768 / 1280.

---

## Challenge 1 — Landing page (sections in order)

1. **Sticky nav** — logo left; links (Features, How it Works, Pricing,
   FAQ) center; "Book a Demo" button right. Working hamburger on mobile
   that opens a panel and closes on link tap.
2. **Hero** — eyebrow badge, bold headline, supporting line, two CTAs
   ("Start Free Trial" primary, "See How it Works" secondary), plus a
   cluster of 2–3 floating UI cards (a shift card, a stat card) that
   preview the dashboard's visual language.
3. **Social proof** — avatar row + "2,000+ care staff scheduled daily."
4. **Features** — 3 cards: Smart Scheduling, Conflict Detection,
   Compliance-Ready Records (audit-trail angle = the NDIS nod).
5. **How it Works** — 3 steps.
6. **Stats band** — 4 metrics.
7. **FAQ** — 4–5 Q&A accordion.
8. **Final CTA** — headline + button.
9. **Footer** — product / company / legal columns.

## Challenge 2 — Dashboard (weekly roster view)

- **Sidebar** — nav: Dashboard, Roster, Staff, Messages, Settings.
- **Top bar** — title "Weekly Roster", date-range selector, filters
  (Department, Role), user avatar.
- **Main** — weekly grid: staff names down the left, Mon–Sun across the
  top, colored shift blocks (morning / afternoon / night) in cells.
- **Side panel** — selected shift details: staff, role, time, department,
  **status badge** (Confirmed / Pending / Needs Cover) — the compliance
  signal.
- Realistic mock data: 6–8 named care staff. Desktop-first; light
  responsiveness is a bonus.

---

## Workflow discipline (this is scored)

- Build section by section. NO single mega-prompt.
- Scaffold with Claude Code → review every diff → edit by hand (rewrite
  copy in own voice, fix spacing, fix bugs).
- For at least one section, ask for 2–3 variations and record which I
  picked and why (goes in PROCESS.md).
- Commit often with meaningful messages — never one giant "final" commit.
- Test 360 / 768 / 1280 before submit. No horizontal scroll. Mobile menu
  works. No placeholder text left.

## Independent-decision candidates (pick the realest for PROCESS.md)
- Pulling the dashboard's visual language into the hero's floating cards
  so both challenges feel like one product.
- Framing the third feature as "compliance-ready records" + the dashboard
  status badges — a care/NDIS-sector judgment call AI wouldn't make alone.

## Deliverables checklist
- [ ] Live URL — landing
- [ ] Live URL — dashboard
- [ ] Public GitHub repo, sensible commit history
- [ ] Source (in repo)
- [ ] PROCESS.md (200–400 words) — tools, workflow, what AI got right,
      what I fixed, biggest independent decision, what I'd do with another day
- [ ] README — how to run locally + stack
- [ ] (Optional) 2-min Loom — decisions + NDIS-awareness nod
