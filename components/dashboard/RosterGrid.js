// Placeholder roster grid — staff down the left, days across the top, shift
// blocks in the cells. Selection calls onSelectShift(shiftId). Wired up later.
export default function RosterGrid({
  staff = [],
  days = [],
  shifts = [],
  shiftTypes,
  selectedShiftId,
  onSelectShift,
}) {
  return (
    <section className="flex h-full min-h-[16rem] items-center justify-center rounded-xl border-2 border-dashed border-slate-200 bg-surface/60 p-8 text-center">
      <div>
        <p className="text-sm font-medium text-text">Roster grid</p>
        <p className="mt-1 text-sm text-text-muted">
          {staff.length} staff × {days.length} days · {shifts.length} shifts —
          placeholder
        </p>
      </div>
    </section>
  );
}
