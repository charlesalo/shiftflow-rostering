# PROCESS

Working notes on how ShiftFlow was built — tools, workflow, and the key
decisions made along the way.

## Design variations

**Hero floating card cluster.** I tried three layouts for the hero's
preview cards before committing:

1. **Mini-dashboard frame** *(chosen)* — a large "Weekly Roster" grid card
   (staff names down the left, Mon–Sun across the top, colored shift blocks)
   anchoring two small cards that float at its corners: a compliance stat
   (98% audit-ready) and a shift status (Needs Cover).
2. **Diagonal cascade** — three full cards (compliance stat, shift detail,
   status) stair-stepped down and to the right with minimal rotation. Calm
   and restrained, but read more like a generic "product screenshot."
3. **Scattered overlap** — the same cards overlapping at different rotations
   with z-index depth. The most energetic option, but busier and the
   fussiest to keep clean across breakpoints.

I picked the **mini-dashboard frame** for two reasons:

- **It doubles as a preview of the Challenge 2 dashboard.** The hero card is
  essentially a miniature of the weekly roster screen, so the landing page
  and the dashboard read as one product rather than two separate builds.
- **It surfaces the compliance/audit angle right in the hero.** The
  98% audit-ready stat and the Needs Cover status badge put ShiftFlow's
  care-sector positioning — audit-ready records, clear shift status —
  front and center instead of burying it in a features section.
