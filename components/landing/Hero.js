import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

const DAYS = ["M", "T", "W", "T", "F", "S", "S"];

// Shift types map to brand colors: morning = teal, afternoon = amber, night = deep teal.
const SHIFT_STYLES = {
  m: "bg-primary/85",
  a: "bg-accent",
  n: "bg-primary-dark",
};

const ROSTER = [
  { initials: "AO", name: "Amara", shifts: ["m", "m", null, "a", "a", null, "n"] },
  { initials: "JM", name: "Jordan", shifts: [null, "n", "n", null, null, "a", "a"] },
  { initials: "PS", name: "Priya", shifts: ["a", null, "m", "m", "n", null, null] },
  { initials: "TR", name: "Tom", shifts: ["m", "m", "a", null, null, "n", "n"] },
];

function RosterCard({ className = "" }) {
  return (
    <Card className={`rounded-2xl p-5 ${className}`}>
      {/* Card header — mirrors the dashboard top bar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="grid h-6 w-6 place-items-center rounded-md bg-primary/10 text-primary">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect x="3" y="4" width="18" height="17" rx="2" stroke="currentColor" strokeWidth="2" />
              <path d="M3 9h18M8 2v4M16 2v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </span>
          <span className="text-sm font-semibold text-text">Weekly Roster</span>
        </div>
        <span className="inline-flex items-center gap-1 rounded-md border border-slate-200 px-2 py-1 text-xs font-medium text-text-muted">
          Jun 15–21
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>

      {/* Day header */}
      <div className="mt-4 flex items-center gap-2 border-t border-slate-100 pt-3">
        <span className="w-14 shrink-0" aria-hidden="true" />
        <div className="grid flex-1 grid-cols-7 gap-1">
          {DAYS.map((d, i) => (
            <span key={i} className="text-center text-[10px] font-medium text-text-muted">
              {d}
            </span>
          ))}
        </div>
      </div>

      {/* Staff rows */}
      <div className="mt-2 space-y-2">
        {ROSTER.map((row) => (
          <div key={row.initials} className="flex items-center gap-2">
            <div className="flex w-14 shrink-0 items-center gap-1.5">
              <span className="grid h-6 w-6 place-items-center rounded-full bg-primary/10 text-[10px] font-semibold text-primary">
                {row.initials}
              </span>
              <span className="text-xs font-medium text-text">{row.name}</span>
            </div>
            <div className="grid flex-1 grid-cols-7 gap-1">
              {row.shifts.map((s, i) => (
                <span
                  key={i}
                  className={`h-5 rounded ${s ? SHIFT_STYLES[s] : "bg-slate-100"}`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="mt-4 flex items-center gap-3 border-t border-slate-100 pt-3 text-[10px] font-medium text-text-muted">
        <span className="flex items-center gap-1">
          <span className="h-2 w-2 rounded-sm bg-primary/85" aria-hidden="true" /> Morning
        </span>
        <span className="flex items-center gap-1">
          <span className="h-2 w-2 rounded-sm bg-accent" aria-hidden="true" /> Afternoon
        </span>
        <span className="flex items-center gap-1">
          <span className="h-2 w-2 rounded-sm bg-primary-dark" aria-hidden="true" /> Night
        </span>
      </div>
    </Card>
  );
}

function ComplianceCard({ className = "" }) {
  return (
    <Card className={`rounded-xl p-4 ${className}`}>
      <p className="text-xs font-medium text-text-muted">Audit-ready this week</p>
      <p className="mt-1 text-2xl font-bold tracking-tight text-text">98%</p>
      <div className="mt-1.5 flex items-center gap-1.5 text-[11px] font-medium text-success">
        <span className="inline-flex h-1.5 w-1.5 rounded-full bg-success" aria-hidden="true" />
        On track
      </div>
    </Card>
  );
}

function StatusCard({ className = "" }) {
  return (
    <Card className={`rounded-xl p-4 ${className}`}>
      <div className="flex items-center gap-2">
        <span className="grid h-7 w-7 place-items-center rounded-full bg-accent/15 text-[10px] font-semibold text-warning">
          JM
        </span>
        <div>
          <p className="text-xs font-semibold text-text">Jordan Mills</p>
          <p className="text-[11px] text-text-muted">Night · 22:00</p>
        </div>
      </div>
      <Badge tone="warning" size="xs" dot className="mt-2.5">
        Needs Cover
      </Badge>
    </Card>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Soft brand wash behind the hero */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 to-transparent"
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-12 lg:py-28">
        {/* Copy */}
        <div className="max-w-xl">
          <p className="rounded-none border-l-2 border-solid border-accent pl-3 text-xs font-semibold uppercase tracking-widest text-primary">
            Built for care providers
          </p>

          <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-text sm:text-5xl lg:text-6xl">
            Rostering that runs itself.
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-text-muted">
            ShiftFlow brings your team, your shifts, and your compliance records
            into one calm workspace — so every shift is covered and every record
            is ready when you need it.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#demo">Start Free Trial</Button>
            <Button href="#how-it-works" variant="secondary">
              See How it Works
            </Button>
          </div>
        </div>

        {/* Mini-dashboard frame: roster grid anchor + two corner pills */}
        <div className="relative mx-auto flex w-full max-w-md flex-col gap-4 lg:block lg:max-w-none">
          <RosterCard className="relative lg:z-10 motion-safe:animate-float-fast" />
          <div className="flex gap-3 lg:contents">
            <ComplianceCard className="flex-1 lg:absolute lg:-bottom-5 lg:left-4 lg:z-20 lg:w-40 lg:-rotate-2 motion-safe:animate-float-medium motion-safe:[animation-delay:0.3s]" />
            <StatusCard className="flex-1 lg:absolute lg:-bottom-6 lg:right-2 lg:z-20 lg:w-48 lg:rotate-2 motion-safe:animate-float-slow motion-safe:[animation-delay:0.6s]" />
          </div>
        </div>
      </div>
    </section>
  );
}
