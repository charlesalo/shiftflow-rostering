import Link from "next/link";

export default function Logo({ className = "" }) {
  return (
    <Link
      href="/"
      className={`flex items-center gap-2 font-semibold tracking-tight text-text ${className}`}
      aria-label="ShiftFlow home"
    >
      <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-surface">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          {/* Two offset bars suggesting shifts flowing into place */}
          <rect x="3" y="5" width="13" height="4" rx="2" fill="currentColor" />
          <rect
            x="8"
            y="15"
            width="13"
            height="4"
            rx="2"
            fill="currentColor"
            opacity="0.7"
          />
        </svg>
      </span>
      <span className="text-lg">ShiftFlow</span>
    </Link>
  );
}
