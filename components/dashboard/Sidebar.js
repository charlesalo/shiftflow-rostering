import Link from "next/link";
import Logo from "@/components/ui/Logo";

function DashboardIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="2" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="2" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="2" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function RosterIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="4" width="18" height="17" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M3 9h18M8 2v4M16 2v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function StaffIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="2" />
      <path d="M4 19c0-2.76 2.24-5 5-5s5 2.24 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M15.5 6.2a3 3 0 0 1 0 5.6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M17 19c0-2-.86-3.8-2.2-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function MessagesIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 5h16v11H9l-5 4V5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

function SettingsIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 8h16M4 16h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <rect x="7" y="6" width="4" height="4" rx="1.2" fill="currentColor" />
      <rect x="13" y="14" width="4" height="4" rx="1.2" fill="currentColor" />
    </svg>
  );
}

const NAV = [
  { label: "Dashboard", href: "#", icon: DashboardIcon },
  { label: "Roster", href: "#", icon: RosterIcon, active: true },
  { label: "Staff", href: "#", icon: StaffIcon },
  { label: "Messages", href: "#", icon: MessagesIcon },
  { label: "Settings", href: "#", icon: SettingsIcon },
];

const FOCUS =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface";

export default function Sidebar() {
  return (
    <aside className="flex h-screen w-16 shrink-0 flex-col border-r border-slate-200 bg-surface lg:w-60">
      {/* Logo — full wordmark at md+, mark only on the rail */}
      <div className="flex items-center justify-center border-b border-slate-100 px-2 py-5 lg:justify-start lg:px-5">
        <Logo className="hidden lg:flex" />
        <Link
          href="/"
          aria-label="ShiftFlow home"
          className={`grid h-8 w-8 place-items-center rounded-lg bg-primary text-surface lg:hidden ${FOCUS}`}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <rect x="3" y="5" width="13" height="4" rx="2" fill="currentColor" />
            <rect x="8" y="15" width="13" height="4" rx="2" fill="currentColor" opacity="0.7" />
          </svg>
        </Link>
      </div>

      <nav aria-label="Dashboard" className="flex-1 space-y-1 px-2 py-4 lg:px-3">
        {NAV.map(({ label, href, icon: Icon, active }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            aria-current={active ? "page" : undefined}
            className={`flex items-center justify-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors lg:justify-start ${FOCUS} ${
              active
                ? "bg-primary/5 text-primary"
                : "text-text-muted hover:bg-slate-100 hover:text-text"
            }`}
          >
            <Icon />
            <span className="hidden lg:inline">{label}</span>
          </a>
        ))}
      </nav>

      <div className="border-t border-slate-100 p-3 lg:p-4">
        <div className="flex items-center justify-center gap-3 lg:justify-start">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary text-xs font-semibold text-surface">
            DW
          </span>
          <div className="hidden min-w-0 lg:block">
            <p className="truncate text-sm font-semibold text-text">Dana Whitlock</p>
            <p className="truncate text-xs text-text-muted">Roster Manager</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
