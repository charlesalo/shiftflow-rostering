// Button/CTA primitive. Renders an <a> by default; pass `as` to change the
// element (e.g. as="button"). Variants and sizes cover the hero CTAs and
// the nav "Book a Demo" button.
const VARIANTS = {
  primary: "bg-primary text-surface hover:bg-primary-dark",
  secondary:
    "border border-slate-300 bg-surface text-text hover:border-slate-400 hover:bg-slate-50",
};

const SIZES = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
};

export default function Button({
  as: Component = "a",
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}) {
  return (
    <Component
      className={`inline-flex items-center justify-center rounded-lg font-semibold transition-colors disabled:pointer-events-none disabled:opacity-50 ${VARIANTS[variant]} ${SIZES[size]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
