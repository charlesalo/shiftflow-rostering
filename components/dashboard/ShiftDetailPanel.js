"use client";

import { useEffect, useRef } from "react";
import { SHIFTS, SHIFT_TYPES, STATUS_META, getStaffById } from "@/lib/roster-data";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

function CollapseIcon({ collapsed }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {collapsed ? (
        <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      ) : (
        <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      )}
    </svg>
  );
}

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
      <div className="mt-6 flex flex-col gap-2">
        <Button
          as="button"
          type="button"
          variant="secondary"
          size="sm"
          className="w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
        >
          Reassign
        </Button>
        <Button
          as="button"
          type="button"
          size="sm"
          className="w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
          disabled={isConfirmed}
          title={isConfirmed ? "This shift is already confirmed" : undefined}
        >
          {isConfirmed ? "Confirmed" : "Mark Confirmed"}
        </Button>
      </div>
    </div>
  );
}

export default function ShiftDetailPanel({ shiftId, isCollapsed = false, onToggleCollapse }) {
  const shift = shiftId ? SHIFTS.find((s) => s.id === shiftId) ?? null : null;
  const staff = shift ? getStaffById(shift.staffId) : null;
  const panelRef = useRef(null);

  // Below lg the panel sits below the grid; bring it into view on selection so
  // the user sees it update instead of having to scroll down. Above lg the
  // panel is already beside the grid, so leave the scroll position alone.
  useEffect(() => {
    if (!shiftId) return;
    if (window.matchMedia("(min-width: 1024px)").matches) return;
    panelRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [shiftId]);

  return (
    <aside
      ref={panelRef}
      className={`w-full shrink-0 border-t border-slate-200 bg-surface p-4 lg:overflow-y-auto lg:border-l lg:border-t-0 ${
        isCollapsed ? "lg:w-12 lg:p-3" : "lg:w-72 lg:p-6"
      }`}
    >
      {/* Collapse toggle — lg+ only; the panel stacks below the grid on
          smaller screens, so there's no persistent width to reclaim there. */}
      <button
        type="button"
        onClick={onToggleCollapse}
        aria-label={isCollapsed ? "Show details panel" : "Collapse details panel"}
        aria-expanded={!isCollapsed}
        className="hidden h-7 w-7 shrink-0 items-center justify-center rounded-md border border-slate-200 bg-surface text-text-muted shadow-sm transition-colors hover:border-slate-300 hover:bg-slate-100 hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface lg:mb-3 lg:flex"
      >
        <CollapseIcon collapsed={isCollapsed} />
      </button>

      <div className={isCollapsed ? "lg:hidden" : ""}>
        <p className="text-xs font-semibold uppercase tracking-wide text-text-muted">
          Shift details
        </p>

        {shift && staff ? <ShiftContent shift={shift} staff={staff} /> : <EmptyState />}
      </div>
    </aside>
  );
}
