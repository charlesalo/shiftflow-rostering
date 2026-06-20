import { SHIFTS, SHIFT_TYPES, STATUS_META, getStaffById } from "@/lib/roster-data";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

function EmptyState() {
  return (
    <div className="mt-12 flex flex-col items-center text-center">
      <span className="grid h-12 w-12 place-items-center rounded-full bg-slate-100 text-text-muted">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M5 3l14 7-6 2-2 6L5 3Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <p className="mt-4 text-sm font-medium text-text">
        Select a shift to see details
      </p>
      <p className="mt-1 text-xs text-text-muted">
        Click any shift block in the roster to view staff, time, and status.
      </p>
    </div>
  );
}

function DetailRow({ label, children }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <dt className="text-text-muted">{label}</dt>
      <dd className="text-right font-medium text-text">{children}</dd>
    </div>
  );
}

function ShiftContent({ shift, staff }) {
  const type = SHIFT_TYPES[shift.type];
  const status = STATUS_META[shift.status];
  const isConfirmed = shift.status === "Confirmed";

  return (
    <div className="mt-5">
      {/* Staff */}
      <div className="flex items-center gap-3">
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
          {staff.initials}
        </span>
        <div className="min-w-0">
          <p className="truncate text-base font-semibold text-text">{staff.name}</p>
          <p className="truncate text-sm text-text-muted">{staff.role}</p>
        </div>
      </div>

      {/* Status — the compliance signal */}
      <div className="mt-5">
        <p className="text-xs text-text-muted">Status</p>
        <div className="mt-1.5">
          <Badge tone={status.tone} size="md" dot>
            {status.label}
          </Badge>
        </div>
      </div>

      {/* Details */}
      <dl className="mt-6 space-y-4 border-t border-slate-100 pt-5 text-sm">
        <DetailRow label="Shift">{type.label}</DetailRow>
        <DetailRow label="Day">{shift.day}</DetailRow>
        <DetailRow label="Time">{type.band}</DetailRow>
        <DetailRow label="Department">{shift.department}</DetailRow>
      </dl>

      {/* Actions (static) */}
      <div className="mt-6 flex gap-2">
        <Button as="button" type="button" variant="secondary" size="sm" className="flex-1">
          Reassign
        </Button>
        <Button
          as="button"
          type="button"
          size="sm"
          className="flex-1"
          disabled={isConfirmed}
          title={isConfirmed ? "This shift is already confirmed" : undefined}
        >
          {isConfirmed ? "Confirmed" : "Mark Confirmed"}
        </Button>
      </div>
    </div>
  );
}

export default function ShiftDetailPanel({ shiftId }) {
  const shift = shiftId ? SHIFTS.find((s) => s.id === shiftId) ?? null : null;
  const staff = shift ? getStaffById(shift.staffId) : null;

  return (
    <aside className="w-80 shrink-0 overflow-auto border-l border-slate-200 bg-surface p-6">
      <p className="text-xs font-semibold uppercase tracking-wide text-text-muted">
        Shift details
      </p>

      {shift && staff ? <ShiftContent shift={shift} staff={staff} /> : <EmptyState />}
    </aside>
  );
}
