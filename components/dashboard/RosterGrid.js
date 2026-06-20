import { getShift, STATUS_META } from "@/lib/roster-data";

// Status tone → dot color (matches the Badge tones in the top bar).
const STATUS_DOT = {
  success: "bg-success",
  warning: "bg-warning",
  danger: "bg-danger",
};

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
}) {
  return (
    <div className="space-y-4">
      <div className="overflow-x-auto rounded-xl border border-slate-200 bg-surface shadow-sm">
        <div className="grid min-w-[52rem] grid-cols-[10.5rem_repeat(7,minmax(7.5rem,1fr))] lg:min-w-[60rem] lg:grid-cols-[13rem_repeat(7,minmax(8.5rem,1fr))]">
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
            <div key={person.id} className="contents">
              {/* Sticky staff cell */}
              <div className="sticky left-0 z-20 flex items-center gap-3 border-b border-r border-slate-100 bg-surface px-3 py-2.5">
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
                return (
                  <div key={day} className="border-b border-l border-slate-100 p-1.5">
                    {shift ? (
                      (() => {
                        const type = shiftTypes[shift.type];
                        const tone = STATUS_META[shift.status]?.tone;
                        const isSelected = shift.id === selectedShiftId;
                        return (
                          <button
                            type="button"
                            onClick={() => onSelectShift?.(shift.id)}
                            aria-pressed={isSelected}
                            aria-label={`${person.name}, ${day}, ${type.label} shift, ${shift.status}`}
                            className={`flex h-full min-h-[3.5rem] w-full flex-col justify-between rounded-lg px-2.5 py-2 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text focus-visible:ring-offset-2 focus-visible:ring-offset-surface ${type.block} ${type.text} ${
                              isSelected
                                ? "ring-2 ring-text ring-offset-2 ring-offset-surface"
                                : ""
                            }`}
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
                      })()
                    ) : (
                      <div
                        className="flex h-full min-h-[3.5rem] items-center justify-center rounded-lg bg-slate-50 text-slate-300"
                        aria-hidden="true"
                      >
                        <span className="text-xs">–</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      <Legend shiftTypes={shiftTypes} />
    </div>
  );
}
