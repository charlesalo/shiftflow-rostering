"use client";

import { useState } from "react";
import {
  STAFF,
  DAYS,
  SHIFT_TYPES,
  DEPARTMENTS,
  ROLES,
  WEEK_LABEL,
  getWeekSummary,
} from "@/lib/roster-data";
import Sidebar from "@/components/dashboard/Sidebar";
import TopBar from "@/components/dashboard/TopBar";
import RosterGrid from "@/components/dashboard/RosterGrid";
import ShiftDetailPanel from "@/components/dashboard/ShiftDetailPanel";

export default function DashboardPage() {
  // Lifted here: the grid sets the selection, the panel reads it.
  const [selectedShiftId, setSelectedShiftId] = useState(null);
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
              shiftTypes={SHIFT_TYPES}
              selectedShiftId={selectedShiftId}
              onSelectShift={setSelectedShiftId}
            />
          </main>

          <ShiftDetailPanel shiftId={selectedShiftId} />
        </div>
      </div>
    </div>
  );
}
