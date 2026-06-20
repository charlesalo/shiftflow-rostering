import Card from "@/components/ui/Card";

function CalendarIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="4" width="18" height="17" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M3 9h18M8 2v4M16 2v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M7 14h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function ConflictIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3.5 2.5 20h19L12 3.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M12 10v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="12" cy="17" r="1" fill="currentColor" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="m9 12 2 2 4-4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Micro-UI previews — tiny abstracted fragments, not real mockups.
// Colors reuse the SHIFT_TYPES palette from lib/roster-data.js so this
// reads as one product with the dashboard and the hero's RosterCard.
function SchedulingPreview() {
  const rows = [
    ["bg-primary/85", "bg-slate-100", "bg-accent", "bg-slate-100", "bg-primary-dark"],
    ["bg-slate-100", "bg-accent", "bg-primary/85", "bg-slate-100", "bg-accent"],
    ["bg-primary-dark", "bg-slate-100", "bg-primary/85", "bg-slate-100", "bg-accent"],
  ];
  return (
    <div className="flex flex-col gap-1">
      {rows.map((row, ri) => (
        <div key={ri} className="flex gap-1">
          {row.map((color, ci) => (
            <span
              key={ci}
              className={`h-1.5 w-4 rounded-sm ${color} ${
                ri === 2 && ci === 2 ? "motion-safe:animate-pulse" : ""
              }`}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

function ConflictPreview() {
  return (
    <div className="relative flex h-2.5 w-fit">
      <span className="h-2.5 w-12 rounded-sm bg-primary/85" />
      <span className="-ml-2 h-2.5 w-12 rounded-sm bg-accent" />
      <span className="absolute -top-1.5 -right-1.5 grid h-4 w-4 place-items-center rounded-full bg-danger text-[10px] font-bold text-white ring-2 ring-surface">
        !
      </span>
    </div>
  );
}

function CompliancePreview() {
  const bars = ["w-20", "w-16", "w-12"];
  return (
    <div className="flex flex-col gap-1.5">
      {bars.map((width, i) => (
        <div key={i} className="flex items-center gap-1.5">
          <span className={`h-1.5 ${width} rounded-full bg-slate-100`} />
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-success" />
        </div>
      ))}
    </div>
  );
}

// Icon circle accents: teal for scheduling/conflict, amber for the
// compliance card to tie it to the audit accent color.
const ACCENTS = {
  primary: "bg-primary text-surface",
  amber: "bg-accent text-surface",
};

// Top accent line on hover — reuses each card's own icon color.
const ACCENT_BAR = {
  primary: "bg-primary",
  amber: "bg-accent",
};

const FEATURES = [
  {
    icon: CalendarIcon,
    accent: "primary",
    title: "Smart Scheduling",
    body: "Build a full week's roster in minutes. ShiftFlow learns your team's roles, availability, and hours, then fills the gaps so you're not starting from a blank grid.",
    preview: SchedulingPreview,
  },
  {
    icon: ConflictIcon,
    accent: "primary",
    title: "Conflict Detection",
    body: "Double-bookings, overlapping shifts, and understaffed slots get flagged as you build — before they become a 6am phone call looking for cover.",
    preview: ConflictPreview,
  },
  {
    icon: ShieldIcon,
    accent: "amber",
    title: "Compliance-Ready Records",
    body: "Every shift carries a clear status and a complete audit trail. When a review comes around, your records are already in order — no scramble, no spreadsheets.",
    preview: CompliancePreview,
  },
];

export default function Features() {
  return (
    <section id="features" className="scroll-mt-16">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-6 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Features
          </p>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-text sm:text-4xl">
            Everything your team needs to run a calm roster.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-text-muted">
            From the first draft to a review-ready record, ShiftFlow keeps your
            shifts, your people, and your paperwork in one place.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {FEATURES.map(({ icon: Icon, accent, title, body, preview: Preview }) => (
            <Card
              key={title}
              className="group relative rounded-2xl p-6 transition duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-900/10"
            >
              <div className="absolute inset-0 overflow-hidden rounded-2xl" aria-hidden="true">
                <span
                  className={`absolute inset-x-0 top-0 h-[3px] opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 ${ACCENT_BAR[accent]}`}
                />
              </div>
              <span
                className={`grid h-11 w-11 place-items-center rounded-full ${ACCENTS[accent]}`}
              >
                <Icon />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-text">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">{body}</p>
              <div className="mt-5 border-t border-slate-100 pt-4" aria-hidden="true">
                <Preview />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
