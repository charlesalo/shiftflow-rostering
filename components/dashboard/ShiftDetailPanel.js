// Placeholder detail panel — shows the selected shift's staff, role, time,
// department, and status badge (the compliance signal). Wired up later.
export default function ShiftDetailPanel({ shift, staff, statusMeta }) {
  return (
    <aside className="w-80 shrink-0 overflow-auto border-l border-slate-200 bg-surface p-6">
      <p className="text-xs font-semibold uppercase tracking-wide text-text-muted">
        Shift details
      </p>

      {shift ? (
        <p className="mt-4 text-sm text-text">
          {staff?.name ?? "Staff"} · {shift.day} — placeholder
        </p>
      ) : (
        <div className="mt-6 rounded-lg border border-dashed border-slate-200 p-6 text-sm text-text-muted">
          Select a shift to see its details.
        </div>
      )}
    </aside>
  );
}
