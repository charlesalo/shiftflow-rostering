// Single source of truth for the Weekly Roster dashboard (Challenge 2).
// Shift colors mirror the hero RosterCard so the dashboard and the landing
// page read as one product: morning = teal, afternoon = amber, night = deep teal.

export const WEEK_LABEL = "Jun 15–21, 2026";

export const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

// Shift types → label, time band, and Tailwind classes for the grid block.
// `block` is the filled cell; `text` is the on-block label color.
export const SHIFT_TYPES = {
  morning: {
    label: "Morning",
    band: "07:00 – 15:00",
    block: "bg-primary/85 hover:bg-primary",
    text: "text-white",
  },
  afternoon: {
    label: "Afternoon",
    band: "14:00 – 22:00",
    block: "bg-accent hover:bg-accent/90",
    text: "text-primary-dark",
  },
  night: {
    label: "Night",
    band: "22:00 – 06:00",
    block: "bg-primary-dark hover:bg-primary-dark/90",
    text: "text-white",
  },
};

// Status → Badge tone (matches components/ui/Badge.js tones) + label.
// This is the compliance / NDIS signal surfaced in the detail panel.
export const STATUS_META = {
  Confirmed: { tone: "success", label: "Confirmed" },
  Pending: { tone: "warning", label: "Pending" },
  "Needs Cover": { tone: "danger", label: "Needs Cover" },
};

export const DEPARTMENTS = ["Aged Care", "Disability Services", "Community Care"];

export const ROLES = [
  "Registered Nurse",
  "Enrolled Nurse",
  "Team Lead",
  "Support Worker",
  "Care Assistant",
];

// 7 named care staff — names + initials reuse the hero roster card cast.
export const STAFF = [
  { id: "amara", name: "Amara Okafor", role: "Registered Nurse", initials: "AO", department: "Aged Care" },
  { id: "jordan", name: "Jordan Mills", role: "Support Worker", initials: "JM", department: "Disability Services" },
  { id: "priya", name: "Priya Sharma", role: "Registered Nurse", initials: "PS", department: "Aged Care" },
  { id: "tom", name: "Tom Reyes", role: "Care Assistant", initials: "TR", department: "Community Care" },
  { id: "lena", name: "Lena Novak", role: "Team Lead", initials: "LN", department: "Aged Care" },
  { id: "marcus", name: "Marcus Bell", role: "Support Worker", initials: "MB", department: "Disability Services" },
  { id: "sofia", name: "Sofia Greco", role: "Enrolled Nurse", initials: "SG", department: "Community Care" },
];

// One entry per assigned shift. Gaps are intentional — a fully packed grid
// looks fake, and empty cells make understaffed slots visually legible.
// status mix tells a story: mostly Confirmed, a few Pending, two Needs Cover.
export const SHIFTS = [
  // Amara — RN, Aged Care
  { id: "sh-01", staffId: "amara", day: "Mon", type: "morning", department: "Aged Care", status: "Confirmed" },
  { id: "sh-02", staffId: "amara", day: "Tue", type: "morning", department: "Aged Care", status: "Confirmed" },
  { id: "sh-03", staffId: "amara", day: "Thu", type: "afternoon", department: "Aged Care", status: "Confirmed" },
  { id: "sh-04", staffId: "amara", day: "Sat", type: "night", department: "Aged Care", status: "Pending" },

  // Jordan — Support Worker, Disability
  { id: "sh-05", staffId: "jordan", day: "Mon", type: "night", department: "Disability Services", status: "Needs Cover" },
  { id: "sh-06", staffId: "jordan", day: "Tue", type: "night", department: "Disability Services", status: "Confirmed" },
  { id: "sh-07", staffId: "jordan", day: "Fri", type: "afternoon", department: "Disability Services", status: "Confirmed" },
  { id: "sh-08", staffId: "jordan", day: "Sun", type: "afternoon", department: "Disability Services", status: "Confirmed" },

  // Priya — RN, Aged Care
  { id: "sh-09", staffId: "priya", day: "Mon", type: "afternoon", department: "Aged Care", status: "Confirmed" },
  { id: "sh-10", staffId: "priya", day: "Wed", type: "morning", department: "Aged Care", status: "Confirmed" },
  { id: "sh-11", staffId: "priya", day: "Thu", type: "morning", department: "Aged Care", status: "Confirmed" },
  { id: "sh-12", staffId: "priya", day: "Fri", type: "night", department: "Aged Care", status: "Pending" },

  // Tom — Care Assistant, Community Care
  { id: "sh-13", staffId: "tom", day: "Mon", type: "morning", department: "Community Care", status: "Confirmed" },
  { id: "sh-14", staffId: "tom", day: "Tue", type: "afternoon", department: "Community Care", status: "Confirmed" },
  { id: "sh-15", staffId: "tom", day: "Wed", type: "afternoon", department: "Community Care", status: "Pending" },
  { id: "sh-16", staffId: "tom", day: "Sat", type: "morning", department: "Community Care", status: "Confirmed" },

  // Lena — Team Lead, Aged Care
  { id: "sh-17", staffId: "lena", day: "Tue", type: "morning", department: "Aged Care", status: "Confirmed" },
  { id: "sh-18", staffId: "lena", day: "Wed", type: "morning", department: "Aged Care", status: "Confirmed" },
  { id: "sh-19", staffId: "lena", day: "Fri", type: "morning", department: "Aged Care", status: "Confirmed" },

  // Marcus — Support Worker, Disability
  { id: "sh-20", staffId: "marcus", day: "Wed", type: "night", department: "Disability Services", status: "Confirmed" },
  { id: "sh-21", staffId: "marcus", day: "Thu", type: "night", department: "Disability Services", status: "Needs Cover" },
  { id: "sh-22", staffId: "marcus", day: "Sat", type: "afternoon", department: "Disability Services", status: "Confirmed" },
  { id: "sh-23", staffId: "marcus", day: "Sun", type: "morning", department: "Disability Services", status: "Confirmed" },

  // Sofia — Enrolled Nurse, Community Care
  { id: "sh-24", staffId: "sofia", day: "Mon", type: "afternoon", department: "Community Care", status: "Confirmed" },
  { id: "sh-25", staffId: "sofia", day: "Thu", type: "morning", department: "Community Care", status: "Confirmed" },
  { id: "sh-26", staffId: "sofia", day: "Fri", type: "afternoon", department: "Community Care", status: "Confirmed" },
  { id: "sh-27", staffId: "sofia", day: "Sun", type: "night", department: "Community Care", status: "Pending" },
];

// Helpers — keep component logic thin.
export function getStaffById(id) {
  return STAFF.find((s) => s.id === id) || null;
}

export function getShift(staffId, day) {
  return SHIFTS.find((sh) => sh.staffId === staffId && sh.day === day) || null;
}

// Derived week summary for the top bar / overview stats.
// "Audit-ready" = share of shifts already Confirmed — mirrors the hero's 98%.
export function getWeekSummary() {
  const total = SHIFTS.length;
  const confirmed = SHIFTS.filter((s) => s.status === "Confirmed").length;
  const needsCover = SHIFTS.filter((s) => s.status === "Needs Cover").length;
  const pending = SHIFTS.filter((s) => s.status === "Pending").length;
  return {
    total,
    confirmed,
    pending,
    needsCover,
    auditReadyPct: Math.round((confirmed / total) * 100),
  };
}