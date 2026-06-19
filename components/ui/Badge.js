// Pill badge primitive used for the hero eyebrow and shift status chips.
const TONES = {
  primary: { chip: "border border-primary/20 bg-primary/5 text-primary", dot: "bg-accent" },
  success: { chip: "bg-success/10 text-success", dot: "bg-success" },
  warning: { chip: "bg-warning/10 text-warning", dot: "bg-warning" },
};

const SIZES = {
  xs: "gap-1.5 px-2.5 py-1 text-[11px]",
  sm: "gap-1.5 px-2.5 py-1 text-xs",
  md: "gap-2 px-3 py-1 text-xs",
};

export default function Badge({
  tone = "primary",
  size = "sm",
  dot = false,
  className = "",
  children,
}) {
  const t = TONES[tone];
  return (
    <span
      className={`inline-flex items-center rounded-full font-semibold ${SIZES[size]} ${t.chip} ${className}`}
    >
      {dot && (
        <span className={`h-1.5 w-1.5 rounded-full ${t.dot}`} aria-hidden="true" />
      )}
      {children}
    </span>
  );
}
