// Per-status chip styling: a quiet default state and a bolder, ringed active
// state in the same hue, so the active filter reads clearly at a glance.
const CHIP_TONES = {
  success: {
    base: "bg-success/10 text-success hover:bg-success/15",
    active: "bg-success/15 text-success ring-2 ring-success/50",
    dot: "bg-success",
  },
  warning: {
    base: "bg-warning/10 text-warning hover:bg-warning/15",
    active: "bg-warning/15 text-warning ring-2 ring-warning/50",
    dot: "bg-warning",
  },
  danger: {
    base: "bg-danger/10 text-danger hover:bg-danger/15",
    active: "bg-danger/15 text-danger ring-2 ring-danger/50",
    dot: "bg-danger",
  },
};

function StatusChip({ tone, label, count, active, onClick }) {
  const t = CHIP_TONES[tone];
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface ${
        active ? t.active : t.base
      }`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${t.dot}`} aria-hidden="true" />
      {count} {label}
    </button>
  );
}

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

function FilterSelect({ label, allLabel, options, value, onChange }) {
  return (
    <div className="relative">
      <select
        aria-label={label}
        value={value}
        onChange={onChange}
        className="cursor-pointer appearance-none rounded-lg border border-slate-300 bg-surface px-3 py-2 pr-8 text-sm text-text transition-colors hover:border-slate-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
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
  statusFilter = null,
  onStatusFilterChange,
  departmentFilter = "All departments",
  onDepartmentFilterChange,
  roleFilter = "All roles",
  onRoleFilterChange,
}) {
  const toggleFilter = (status) => {
    onStatusFilterChange?.(statusFilter === status ? null : status);
  };

  return (
    <header className="border-b border-slate-200 bg-surface px-4 py-3 lg:px-6 lg:py-4">
      <div className="flex flex-wrap items-center justify-between gap-4">
        {/* Left — title + week navigation */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <h1 className="text-lg font-semibold text-text">Weekly Roster</h1>
          <div className="flex items-center gap-1">
            <button
              type="button"
              aria-label="Previous week"
              className="grid h-8 w-8 place-items-center rounded-lg text-text-muted transition-colors hover:bg-slate-100 hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
            >
              <ChevronLeft />
            </button>
            <span className="min-w-[8.5rem] text-center text-sm font-medium text-text-muted">
              {weekLabel}
            </span>
            <button
              type="button"
              aria-label="Next week"
              className="grid h-8 w-8 place-items-center rounded-lg text-text-muted transition-colors hover:bg-slate-100 hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
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
            value={departmentFilter}
            onChange={(e) => onDepartmentFilterChange?.(e.target.value)}
          />
          <FilterSelect
            label="Filter by role"
            allLabel="All roles"
            options={roles}
            value={roleFilter}
            onChange={(e) => onRoleFilterChange?.(e.target.value)}
          />
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary text-sm font-semibold text-surface">
            DW
          </span>
        </div>
      </div>

      {/* Summary chips — double as status filters for the grid below */}
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <StatusChip
          tone="success"
          label="Confirmed"
          count={summary.confirmed}
          active={statusFilter === "Confirmed"}
          onClick={() => toggleFilter("Confirmed")}
        />
        <StatusChip
          tone="warning"
          label="Pending"
          count={summary.pending}
          active={statusFilter === "Pending"}
          onClick={() => toggleFilter("Pending")}
        />
        <StatusChip
          tone="danger"
          label="Needs Cover"
          count={summary.needsCover}
          active={statusFilter === "Needs Cover"}
          onClick={() => toggleFilter("Needs Cover")}
        />
      </div>
    </header>
  );
}
