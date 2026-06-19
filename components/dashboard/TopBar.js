// Placeholder top bar — title, date range, filters, avatar. Wired up later.
export default function TopBar({ weekLabel, departments = [], roles = [], summary }) {
  return (
    <header className="flex items-center justify-between gap-4 border-b border-slate-200 bg-surface px-6 py-4">
      <div>
        <h1 className="text-lg font-semibold text-text">Weekly Roster</h1>
        <p className="text-xs text-text-muted">{weekLabel}</p>
      </div>

      <div className="flex items-center gap-2">
        <span className="rounded-lg border border-slate-200 px-3 py-1.5 text-sm text-text-muted">
          Department
        </span>
        <span className="rounded-lg border border-slate-200 px-3 py-1.5 text-sm text-text-muted">
          Role
        </span>
        <span className="grid h-9 w-9 place-items-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
          LN
        </span>
      </div>
    </header>
  );
}
