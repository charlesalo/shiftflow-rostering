"use client";

import { useState } from "react";
import {
  STAFF,
  DAYS,
  SHIFTS,
  SHIFT_TYPES,
  STATUS_META,
  DEPARTMENTS,
  ROLES,
  WEEK_LABEL,
  getWeekSummary,
  getStaffById,
} from "@/lib/roster-data";
import Sidebar from "@/components/dashboard/Sidebar";
import TopBar from "@/components/dashboard/TopBar";
import RosterGrid from "@/components/dashboard/RosterGrid";
import ShiftDetailPanel from "@/components/dashboard/ShiftDetailPanel";

export default function DashboardPage() {
  // Lifted here so the grid can set the selection and the panel can read it.
  const [selectedShiftId, setSelectedShiftId] = useState(null);

  const selectedShift = selectedShiftId
    ? SHIFTS.find((s) => s.id === selectedShiftId) ?? null
    : null;
  const selectedStaff = selectedShift ? getStaffById(selectedShift.staffId) : null;
  const summary = getWeekSummary();

  return (
    <div className="flex h-screen overflow-hidden bg-background text-text">
      <Sidebar />

      <div className="flex min-w-0 flex-1 flex-col">
        <TopBar
          weekLabel={WEEK_LABEL}
          departments={DEPARTMENTS}
          roles={ROLES}
          summary={summary}
        />

        <div className="flex min-h-0 flex-1">
          <main className="min-w-0 flex-1 overflow-auto p-6">
            <RosterGrid
              staff={STAFF}
              days={DAYS}
              shifts={SHIFTS}
              shiftTypes={SHIFT_TYPES}
              selectedShiftId={selectedShiftId}
              onSelectShift={setSelectedShiftId}
            />
          </main>

          <ShiftDetailPanel
            shift={selectedShift}
            staff={selectedStaff}
            statusMeta={STATUS_META}
          />
        </div>
      </div>
    </div>
  );
}
