import Logo from "@/components/ui/Logo";

// Placeholder sidebar nav — wired up later.
const NAV = ["Dashboard", "Roster", "Staff", "Messages", "Settings"];

export default function Sidebar() {
  return (
    <aside className="flex h-screen w-60 shrink-0 flex-col border-r border-slate-200 bg-surface">
      <div className="border-b border-slate-100 px-5 py-5">
        <Logo />
      </div>

      <nav className="flex-1 space-y-1 px-3 py-4">
        {NAV.map((item, i) => (
          <span
            key={item}
            className={`block rounded-lg px-3 py-2 text-sm font-medium ${
              i === 0 ? "bg-primary/10 text-primary" : "text-text-muted"
            }`}
          >
            {item}
          </span>
        ))}
      </nav>

      <div className="border-t border-slate-100 px-5 py-4 text-xs text-text-muted">
        Sidebar — placeholder
      </div>
    </aside>
  );
}
