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
  // Lifted here too: the top bar sets the active status filter, the grid dims non-matching shifts.
  const [statusFilter, setStatusFilter] = useState(null);
  // Lifted here too: the panel's own toggle collapses it, but selecting a shift
  // while collapsed should bring it back so the result is actually visible.
  const [isPanelCollapsed, setIsPanelCollapsed] = useState(false);
  const summary = getWeekSummary();

  const handleSelectShift = (id) => {
    setSelectedShiftId(id);
    setIsPanelCollapsed(false);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-background text-text">
      <Sidebar />

      <div className="flex min-w-0 flex-1 flex-col">
        <TopBar
          weekLabel={WEEK_LABEL}
          departments={DEPARTMENTS}
          roles={ROLES}
          summary={summary}
          statusFilter={statusFilter}
          onStatusFilterChange={setStatusFilter}
        />

        <div className="flex min-h-0 flex-1 flex-col overflow-y-auto lg:flex-row lg:overflow-y-hidden">
          <main className="min-w-0 p-4 lg:flex-1 lg:overflow-y-auto lg:p-6">
            <RosterGrid
              staff={STAFF}
              days={DAYS}
              shiftTypes={SHIFT_TYPES}
              selectedShiftId={selectedShiftId}
              onSelectShift={handleSelectShift}
              statusFilter={statusFilter}
            />
          </main>

          <ShiftDetailPanel
            shiftId={selectedShiftId}
            isCollapsed={isPanelCollapsed}
            onToggleCollapse={() => setIsPanelCollapsed((v) => !v)}
          />
        </div>
      </div>
    </div>
  );
}
