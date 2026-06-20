// Outline avatars — represents bringing the team in.
function TeamIllustration() {
  const people = [
    { cx: 46, opacity: 0.35 },
    { cx: 100, opacity: 1 },
    { cx: 154, opacity: 0.35 },
  ];
  return (
    <svg viewBox="0 0 200 120" className="h-28 w-auto text-primary sm:h-32 md:h-36" aria-hidden="true">
      {people.map(({ cx, opacity }) => (
        <g key={cx} opacity={opacity}>
          <circle cx={cx} cy="38" r="20" stroke="currentColor" strokeWidth="2" fill="none" />
          <path
            d={`M${cx - 30} 100c0-18 13.4-32 30-32s30 14 30 32`}
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
        </g>
      ))}
    </svg>
  );
}

// Outline roster grid with a few filled shift blocks — represents building the week.
function GridIllustration() {
  return (
    <svg viewBox="0 0 220 130" className="h-28 w-auto text-primary sm:h-32 md:h-36" aria-hidden="true">
      <rect x="3" y="3" width="214" height="124" rx="10" stroke="currentColor" strokeWidth="2" fill="none" />
      <line x1="3" y1="36" x2="217" y2="36" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
      {[1, 2, 3, 4].map((i) => (
        <line
          key={i}
          x1={3 + i * 42.8}
          y1="36"
          x2={3 + i * 42.8}
          y2="127"
          stroke="currentColor"
          strokeWidth="1.5"
          opacity="0.3"
        />
      ))}
      <rect x="14" y="50" width="34" height="16" rx="3" className="fill-primary/85" />
      <rect x="100" y="50" width="34" height="16" rx="3" className="fill-accent" />
      <rect x="57" y="78" width="34" height="16" rx="3" className="fill-primary-dark" />
      <rect x="143" y="96" width="34" height="16" rx="3" className="fill-accent" />
    </svg>
  );
}

// Outline checklist lines with a couple of completed rows — represents staying review-ready.
function ChecklistIllustration() {
  const rows = [true, true, false, true];
  return (
    <svg viewBox="0 0 220 130" className="h-28 w-auto text-primary sm:h-32 md:h-36" aria-hidden="true">
      {rows.map((checked, i) => {
        const y = 8 + i * 30;
        return (
          <g key={i}>
            <rect
              x="4"
              y={y}
              width="22"
              height="22"
              rx="6"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              opacity={checked ? 1 : 0.3}
            />
            {checked && (
              <path
                d={`M10 ${y + 11} l4 4 8-9`}
                className="text-success"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            )}
            <line
              x1="38"
              y1={y + 11}
              x2={checked ? 196 : 150}
              y2={y + 11}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.3"
            />
          </g>
        );
      })}
    </svg>
  );
}

const STEPS = [
  {
    n: 1,
    marker: "bg-primary",
    title: "Bring your team in",
    body: "Add your people, their roles, and the hours they can work. Set it up once and ShiftFlow remembers — no rebuilding the same week from scratch every Monday.",
    Illustration: TeamIllustration,
  },
  {
    n: 2,
    marker: "bg-accent",
    title: "Build the week",
    body: "Drop shifts onto the roster and ShiftFlow fills the gaps, flags clashes before they happen, and shows you who's covered at a glance.",
    Illustration: GridIllustration,
  },
  {
    n: 3,
    marker: "bg-primary",
    title: "Stay review-ready",
    body: "Every shift is saved with a clear status and a full audit trail, so when a review lands your records are already in order — nothing to dig up.",
    Illustration: ChecklistIllustration,
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
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            How it Works
          </p>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-text sm:text-4xl">
            From a blank week to review-ready records, in three steps.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-text-muted">
            Setting ShiftFlow up takes an afternoon. Running it each week takes
            minutes.
          </p>
        </div>

        <div className="relative mt-16 lg:mt-20">
          {/* Centerline — connects all three steps (desktop only) */}
          <div
            className="pointer-events-none absolute left-1/2 top-0 bottom-0 hidden w-px -translate-x-1/2 bg-slate-200 md:block"
            aria-hidden="true"
          />

          <ol className="flex flex-col gap-16 md:gap-24">
            {STEPS.map((step, i) => {
              const textLeads = i % 2 === 0;
              return (
                <li key={step.n} className="relative">
                  {/* Marker dot on the centerline (desktop only) */}
                  <span
                    className={`absolute left-1/2 top-1/2 z-10 hidden h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full ring-4 ring-surface md:block ${step.marker}`}
                    aria-hidden="true"
                  />

                  <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12 lg:gap-20">
                    <div className={`relative ${textLeads ? "" : "md:order-2"}`}>
                      <span
                        className="pointer-events-none absolute -top-10 left-0 select-none text-[5rem] font-bold leading-none tracking-tight text-primary/10 sm:text-[6rem]"
                        aria-hidden="true"
                      >
                        {String(step.n).padStart(2, "0")}
                      </span>
                      <div className="relative z-10 pt-12 sm:pt-14">
                        <h3 className="text-lg font-semibold text-text">{step.title}</h3>
                        <p className="mt-2 max-w-md text-sm leading-relaxed text-text-muted">
                          {step.body}
                        </p>
                      </div>
                    </div>

                    <div className={`flex justify-center ${textLeads ? "" : "md:order-1"}`}>
                      <step.Illustration />
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
