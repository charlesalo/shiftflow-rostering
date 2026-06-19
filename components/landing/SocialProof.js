// Care staff avatar cluster — solid colored circles with white initials,
// mirroring the staff badges in the Weekly Roster hero card.
const AVATARS = [
  { initials: "AO", color: "bg-primary" },
  { initials: "JM", color: "bg-primary-dark" },
  { initials: "PS", color: "bg-success" },
  { initials: "TR", color: "bg-slate-500" },
  { initials: "LN", color: "bg-primary" },
];

export default function SocialProof() {
  return (
    <section className="border-y border-slate-200/70 bg-primary/5">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 py-8 sm:flex-row sm:justify-center sm:gap-6 sm:px-6">
        <div className="flex">
          {AVATARS.map((a, i) => (
            <span
              key={a.initials}
              className={`grid h-9 w-9 place-items-center rounded-full text-xs font-semibold text-surface ring-2 ring-background ${
                a.color
              } ${i > 0 ? "-ml-2" : ""}`}
            >
              {a.initials}
            </span>
          ))}
        </div>
        <p className="text-center text-sm text-text-muted sm:text-left">
          Joined by{" "}
          <span className="font-semibold text-text">200+ care teams</span>{" "}
          scheduling 2,000+ shifts every day.
        </p>
      </div>
    </section>
  );
}
