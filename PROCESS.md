# Process

## Tools

Claude (chat) for planning, design review, and copy; Claude Code for
implementation. I worked section-by-section — Claude Code scaffolded one
component at a time from a written brief, I reviewed every diff, then
edited by hand (copy, spacing, bug fixes) before committing.

## Workflow

Both challenges followed the same loop: write or pick exact mock data
first (`lib/roster-data.js`), prompt one section, review the diff in the
browser, fix anything off, commit, repeat. For the landing page this gave
~20 small commits instead of one mega-prompt. For the dashboard, prompts
were sequenced by layout piece (shell → sidebar → top bar → grid → detail
panel → responsiveness), each independently testable before the next.

## What AI got right vs. what I fixed

Claude Code scaffolded clean, accessible markup quickly — ARIA attributes
on the mobile nav and FAQ accordion, focus trapping in the login modal,
and shift-type lookups in the roster grid were all solid first passes. The
biggest thing I caught: the color tokens were defined as bare CSS
variables (`--color-primary: #0f766e`), which compiles fine for solid
colors but silently drops every Tailwind opacity utility (`bg-primary/85`).
This made the hero's and roster grid's morning shifts render invisible — a
bug that wasn't obvious from the diff, only from testing in-browser. I
diagnosed it by compiling the Tailwind classes in isolation, then
refactored the tokens to RGB-channel format (`15 118 110`) so alpha
modifiers work everywhere. I also rejected an early AI suggestion to clone
the reference's exact "numbered list + live preview" interaction for both
Features and How It Works — too close to the reference, and it made two
sections look identical.

## Biggest decision I made, not AI

Designing the hero's floating cards and the dashboard's shift colors as one
shared visual language (`SHIFT_TYPES` in `lib/roster-data.js`), so the
landing page's preview and the actual dashboard read as one product instead
of two unrelated builds.

## With another day

I'd build out the dashboard's other sidebar destinations (Staff, an
overview Home with charts, Settings) into real screens rather than inert
nav items, add client-side validation to the login modal, and let the
filters narrow the grid rather than only highlight matches.
