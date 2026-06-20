"use client";

import { useEffect, useRef, useState } from "react";

function ShieldCheckIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="m9 12 2 2 4-4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      <path d="M12 7v5l3.5 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="4" width="18" height="17" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M3 9h18M8 2v4M16 2v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 5h16v11H9l-5 4V5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// countTo + suffix drive the count-up; a plain `display` string (no countTo)
// renders as-is and just fades/scales in, since "24/7" is a ratio, not a magnitude.
const STATS = [
  { icon: ShieldCheckIcon, countTo: 73, suffix: "%", label: "fewer shift conflicts" },
  { icon: ClockIcon, countTo: 6, suffix: " hrs", label: "saved per manager, every week" },
  { icon: CalendarIcon, countTo: 2000, suffix: "+", comma: true, label: "shifts managed every day" },
  { icon: ChatIcon, display: "24/7", label: "support when you need it" },
];

const COUNT_UP_DURATION = 1300; // ms

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

function useInView() {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          // Disconnect so the count-up can only ever fire once per page load.
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, isInView];
}

function useCountUp(target, isActive) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isActive) return undefined;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(target);
      return undefined;
    }

    let rafId;
    const startTime = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - startTime) / COUNT_UP_DURATION, 1);
      setValue(Math.round(target * easeOutCubic(progress)));
      if (progress < 1) {
        rafId = requestAnimationFrame(tick);
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [isActive, target]);

  return value;
}

function StatCard({ icon: Icon, label, countTo, suffix = "", comma = false, display }) {
  const [ref, isInView] = useInView();
  const isRatio = countTo == null;
  const count = useCountUp(countTo ?? 0, isInView && !isRatio);

  const formattedValue = isRatio
    ? display
    : `${comma ? count.toLocaleString() : count}${suffix}`;

  return (
    <div ref={ref} className="flex flex-col items-center text-center">
      <span className="grid h-12 w-12 place-items-center rounded-full bg-accent text-surface">
        <Icon />
      </span>
      <p
        className={`mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl motion-safe:transition-[opacity,transform] duration-300${
          isRatio ? (isInView ? " opacity-100 scale-100" : " opacity-0 scale-75") : ""
        }`}
      >
        {formattedValue}
      </p>
      <p className="mt-1 text-sm text-white/70">{label}</p>
    </div>
  );
}

export default function StatsBand() {
  return (
    <section className="bg-primary-dark">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:py-20">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {STATS.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
