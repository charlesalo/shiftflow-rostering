import Badge from "@/components/ui/Badge";

function ChevronLeft() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function FilterSelect({ label, allLabel, options }) {
  return (
    <div className="relative">
      <select
        aria-label={label}
        className="cursor-pointer appearance-none rounded-lg border border-slate-200 bg-surface py-1.5 pl-3 pr-8 text-sm text-text transition-colors hover:border-slate-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
      >
        <option>{allLabel}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-text-muted"
      >
        <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

export default function TopBar({
  weekLabel,
  departments = [],
  roles = [],
  summary = {},
}) {
  return (
    <header className="border-b border-slate-200 bg-surface px-6 py-4">
      <div className="flex flex-wrap items-center justify-between gap-4">
        {/* Left — title + week navigation */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <h1 className="text-lg font-semibold text-text">Weekly Roster</h1>
          <div className="flex items-center gap-1">
            <button
              type="button"
              aria-label="Previous week"
              className="grid h-8 w-8 place-items-center rounded-lg text-text-muted transition-colors hover:bg-slate-100 hover:text-text"
            >
              <ChevronLeft />
            </button>
            <span className="min-w-[8.5rem] text-center text-sm font-medium text-text-muted">
              {weekLabel}
            </span>
            <button
              type="button"
              aria-label="Next week"
              className="grid h-8 w-8 place-items-center rounded-lg text-text-muted transition-colors hover:bg-slate-100 hover:text-text"
            >
              <ChevronRight />
            </button>
          </div>
        </div>

        {/* Right — filters + avatar */}
        <div className="flex flex-wrap items-center gap-3">
          <FilterSelect
            label="Filter by department"
            allLabel="All departments"
            options={departments}
          />
          <FilterSelect label="Filter by role" allLabel="All roles" options={roles} />
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary text-sm font-semibold text-surface">
            DW
          </span>
        </div>
      </div>

      {/* Summary chips — the week's compliance signal at a glance */}
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <Badge tone="success" size="sm" dot>
          {summary.confirmed} Confirmed
        </Badge>
        <Badge tone="warning" size="sm" dot>
          {summary.pending} Pending
        </Badge>
        <Badge tone="danger" size="sm" dot>
          {summary.needsCover} Needs Cover
        </Badge>
      </div>
    </header>
  );
}
