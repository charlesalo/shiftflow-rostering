import Badge from "@/components/ui/Badge";
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

// Icon circle accents: teal for scheduling/conflict, amber for the
// compliance card to tie it to the audit accent color.
const ACCENTS = {
  primary: "bg-primary text-surface",
  amber: "bg-accent text-surface",
};

const FEATURES = [
  {
    icon: CalendarIcon,
    accent: "primary",
    title: "Smart Scheduling",
    body: "Build a full week's roster in minutes. ShiftFlow learns your team's roles, availability, and hours, then fills the gaps so you're not starting from a blank grid.",
  },
  {
    icon: ConflictIcon,
    accent: "primary",
    title: "Conflict Detection",
    body: "Double-bookings, overlapping shifts, and understaffed slots get flagged as you build — before they become a 6am phone call looking for cover.",
  },
  {
    icon: ShieldIcon,
    accent: "amber",
    title: "Compliance-Ready Records",
    body: "Every shift carries a clear status and a complete audit trail. When a review comes around, your records are already in order — no scramble, no spreadsheets.",
  },
];

export default function Features() {
  return (
    <section id="features" className="scroll-mt-16">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-6 lg:py-24">
        <div className="max-w-2xl">
          <Badge tone="primary" size="md" dot>
            Features
          </Badge>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-text sm:text-4xl">
            Everything your team needs to run a calm roster.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-text-muted">
            From the first draft to a review-ready record, ShiftFlow keeps your
            shifts, your people, and your paperwork in one place.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {FEATURES.map(({ icon: Icon, accent, title, body }) => (
            <Card key={title} className="rounded-2xl p-6">
              <span
                className={`grid h-11 w-11 place-items-center rounded-full ${ACCENTS[accent]}`}
              >
                <Icon />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-text">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">{body}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
