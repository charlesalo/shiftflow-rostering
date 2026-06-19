import Badge from "@/components/ui/Badge";

const STEPS = [
  {
    n: 1,
    // Alternating circle colors give the row visual rhythm without boxes.
    circle: "bg-primary text-surface",
    title: "Bring your team in",
    body: "Add your people, their roles, and the hours they can work. Set it up once and ShiftFlow remembers — no rebuilding the same week from scratch every Monday.",
  },
  {
    n: 2,
    circle: "bg-accent text-primary-dark",
    title: "Build the week",
    body: "Drop shifts onto the roster and ShiftFlow fills the gaps, flags clashes before they happen, and shows you who's covered at a glance.",
  },
  {
    n: 3,
    circle: "bg-primary text-surface",
    title: "Stay review-ready",
    body: "Every shift is saved with a clear status and a full audit trail, so when a review lands your records are already in order — nothing to dig up.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-16 border-y border-slate-200/70 bg-surface"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-6 lg:py-24">
        <div className="max-w-2xl">
          <Badge tone="primary" size="md" dot>
            How it Works
          </Badge>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-text sm:text-4xl">
            From a blank week to review-ready records, in three steps.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-text-muted">
            Setting ShiftFlow up takes an afternoon. Running it each week takes
            minutes.
          </p>
        </div>

        <div className="relative mt-14">
          {/* Connecting line behind the circles — signals sequence (desktop) */}
          <div
            className="pointer-events-none absolute left-[16%] right-[16%] top-[22px] hidden h-px bg-slate-200 md:block"
            aria-hidden="true"
          />

          <ol className="grid gap-10 md:grid-cols-3 md:gap-6">
            {STEPS.map((step) => (
              <li
                key={step.n}
                className="relative z-10 flex flex-col items-center text-center"
              >
                <span
                  className={`grid h-11 w-11 place-items-center rounded-full text-base font-bold ${step.circle}`}
                >
                  {step.n}
                </span>
                <h3 className="mt-5 text-lg font-semibold text-text">{step.title}</h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-text-muted">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
