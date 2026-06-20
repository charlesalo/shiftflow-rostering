"use client";

import { useState } from "react";
import { getShift, STATUS_META } from "@/lib/roster-data";

// Status tone → dot color (matches the Badge tones in the top bar).
const STATUS_DOT = {
  success: "bg-success",
  warning: "bg-warning",
  danger: "bg-danger",
};

// Calendar dates for the fixed demo week (WEEK_LABEL "Jun 15–21, 2026" in
// lib/roster-data.js) — the week-nav arrows are visual-only in this demo, so
// this mapping is static rather than derived from a real date.
const DAY_DATES = {
  Mon: "Jun 15",
  Tue: "Jun 16",
  Wed: "Jun 17",
  Thu: "Jun 18",
  Fri: "Jun 19",
  Sat: "Jun 20",
  Sun: "Jun 21",
};

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

function ShiftBlock({ shift, type, isSelected, isDimmed, onSelect, ariaLabel }) {
  const tone = STATUS_META[shift.status]?.tone;
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={isSelected}
      aria-label={ariaLabel}
      className={`flex h-full min-h-[3.5rem] w-full flex-col justify-between rounded-lg px-2.5 py-2 text-left transition hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text focus-visible:ring-offset-2 focus-visible:ring-offset-surface ${type.block} ${type.text} ${
        isSelected ? "ring-2 ring-slate-900 ring-offset-2 ring-offset-surface" : ""
      } ${isDimmed ? "opacity-40" : ""}`}
    >
      <span className="flex w-full items-center justify-between gap-1">
        <span className="text-xs font-semibold">{type.label}</span>
        <span
          className={`h-2 w-2 shrink-0 rounded-full ring-1 ring-white/70 ${STATUS_DOT[tone]}`}
          aria-hidden="true"
        />
      </span>
      <span className="text-[11px] opacity-90">{type.band}</span>
    </button>
  );
}

function EmptyCell() {
  return (
    <div
      className="flex h-full min-h-[3.5rem] items-center justify-center rounded-lg border border-dashed border-slate-200 bg-slate-50/40 text-slate-300 transition-colors hover:border-slate-300 hover:bg-slate-100"
      aria-hidden="true"
    >
      <span className="text-xs">–</span>
    </div>
  );
}

function Legend({ shiftTypes }) {
  return (
    <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-text-muted">
      {Object.entries(shiftTypes).map(([key, t]) => (
        <span key={key} className="flex items-center gap-1.5">
          {/* first token of `block` is the bg color, e.g. "bg-primary/85" */}
          <span className={`h-3 w-3 rounded-sm ${t.block.split(" ")[0]}`} aria-hidden="true" />
          {t.label}
        </span>
      ))}
    </div>
  );
}

export default function RosterGrid({
  staff = [],
  days = [],
  shiftTypes = {},
  selectedShiftId,
  onSelectShift,
  statusFilter = null,
}) {
  const [dayIndex, setDayIndex] = useState(0);
  const activeDay = days[dayIndex];

  const stepDay = (delta) => {
    setDayIndex((i) => (i + delta + days.length) % days.length);
  };

  return (
    <div className="space-y-4">
      {/* Desktop — full 7-day grid */}
      <div className="hidden overflow-x-auto rounded-xl border border-slate-200 bg-surface shadow-sm lg:block">
        <div className="grid min-w-[58.5rem] grid-cols-[11.5rem_repeat(7,minmax(8.5rem,1fr))]">
          {/* Header row */}
          <div className="sticky left-0 top-0 z-30 border-b border-r border-slate-100 bg-surface px-3 py-3 text-xs font-semibold uppercase tracking-wide text-text-muted">
            Staff
          </div>
          {days.map((day) => (
            <div
              key={day}
              className="sticky top-0 z-10 border-b border-l border-slate-100 bg-surface px-3 py-3 text-center text-xs font-semibold uppercase tracking-wide text-text-muted"
            >
              {day}
            </div>
          ))}

          {/* Staff rows */}
          {staff.map((person) => (
            <div key={person.id} className="group contents">
              {/* Sticky staff cell */}
              <div className="sticky left-0 z-20 flex items-center gap-3 border-b border-r border-slate-100 bg-surface px-3 py-2.5 transition-colors group-hover:bg-slate-50">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                  {person.initials}
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-text">{person.name}</p>
                  <p className="truncate text-xs text-text-muted">{person.role}</p>
                </div>
              </div>

              {/* Day cells */}
              {days.map((day) => {
                const shift = getShift(person.id, day);
                const type = shift ? shiftTypes[shift.type] : null;
                return (
                  <div
                    key={day}
                    className="border-b border-l border-slate-100 p-1.5 transition-colors group-hover:bg-slate-50/50"
                  >
                    {shift && type ? (
                      <ShiftBlock
                        shift={shift}
                        type={type}
                        isSelected={shift.id === selectedShiftId}
                        isDimmed={Boolean(statusFilter) && shift.status !== statusFilter}
                        onSelect={() => onSelectShift?.(shift.id)}
                        ariaLabel={`${person.name}, ${day}, ${type.label} shift, ${shift.status}`}
                      />
                    ) : (
                      <EmptyCell />
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile — single-day view with a day switcher */}
      <div className="lg:hidden">
        <div className="mb-3 flex items-center justify-between rounded-xl border border-slate-200 bg-surface px-2 py-2 shadow-sm">
          <button
            type="button"
            aria-label="Previous day"
            onClick={() => stepDay(-1)}
            className="grid h-8 w-8 place-items-center rounded-lg text-text-muted transition-colors hover:bg-slate-100 hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
          >
            <ChevronLeft />
          </button>
          <span className="text-sm font-semibold text-text">
            {activeDay}
            {DAY_DATES[activeDay] ? `, ${DAY_DATES[activeDay]}` : ""}
          </span>
          <button
            type="button"
            aria-label="Next day"
            onClick={() => stepDay(1)}
            className="grid h-8 w-8 place-items-center rounded-lg text-text-muted transition-colors hover:bg-slate-100 hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
          >
            <ChevronRight />
          </button>
        </div>

        <div className="space-y-2">
          {staff.map((person) => {
            const shift = getShift(person.id, activeDay);
            const type = shift ? shiftTypes[shift.type] : null;
            return (
              <div
                key={person.id}
                className="flex items-center gap-3 rounded-xl border border-slate-200 bg-surface p-2.5 shadow-sm"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                  {person.initials}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-text">{person.name}</p>
                  <p className="truncate text-xs text-text-muted">{person.role}</p>
                </div>
                <div className="w-32 shrink-0">
                  {shift && type ? (
                    <ShiftBlock
                      shift={shift}
                      type={type}
                      isSelected={shift.id === selectedShiftId}
                      isDimmed={Boolean(statusFilter) && shift.status !== statusFilter}
                      onSelect={() => onSelectShift?.(shift.id)}
                      ariaLabel={`${person.name}, ${activeDay}, ${type.label} shift, ${shift.status}`}
                    />
                  ) : (
                    <EmptyCell />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Legend shiftTypes={shiftTypes} />
    </div>
  );
}
