// Surface card primitive — shared border / background / shadow / ring.
// Callers control radius, padding, and layout via className
// (e.g. "rounded-2xl p-5" or "rounded-xl p-4").
export default function Card({ className = "", children, ...props }) {
  return (
    <div
      className={`border border-slate-200 bg-surface shadow-xl shadow-slate-900/5 ring-1 ring-slate-900/5 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
