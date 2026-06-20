"use client";

import { useEffect, useState } from "react";

// Care staff avatar cluster — decorative stock photos (not real staff).
// Fixed img numbers so each avatar stays visually distinct across renders.
const AVATARS = [
  { id: "member-1", img: 12 },
  { id: "member-2", img: 26 },
  { id: "member-3", img: 33 },
  { id: "member-4", img: 47 },
  { id: "member-5", img: 58 },
];

const AVATAR_SIZE = 36; // px — matches h-9 w-9
const OVERLAP = 8; // px — matches the original -ml-2 overlap
const STEP = AVATAR_SIZE - OVERLAP;
const STACK_WIDTH = AVATAR_SIZE + (AVATARS.length - 1) * STEP;

const ROTATE_INTERVAL = 2200;
const FLIP_OUT_DURATION = 225;
const FLIP_IN_DURATION = 225;

export default function SocialProof() {
  // Index into AVATARS of whichever avatar currently sits in the front slot.
  const [frontIndex, setFrontIndex] = useState(0);
  const [flipPhase, setFlipPhase] = useState("idle"); // "idle" | "out" | "in"

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    let swapTimeoutId;
    let settleTimeoutId;

    const intervalId = setInterval(() => {
      setFlipPhase("out");
      swapTimeoutId = setTimeout(() => {
        setFrontIndex((i) => (i + 1) % AVATARS.length);
        setFlipPhase("in");
      }, FLIP_OUT_DURATION);
      settleTimeoutId = setTimeout(() => {
        setFlipPhase("idle");
      }, FLIP_OUT_DURATION + FLIP_IN_DURATION);
    }, ROTATE_INTERVAL);

    return () => {
      clearInterval(intervalId);
      clearTimeout(swapTimeoutId);
      clearTimeout(settleTimeoutId);
    };
  }, []);

  return (
    <section className="border-y border-slate-200/70 bg-primary/5">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 py-8 sm:flex-row sm:justify-center sm:gap-6 sm:px-6">
        <div className="relative h-9" style={{ width: STACK_WIDTH }}>
          {AVATARS.map((a, i) => {
            const slot = (i - frontIndex + AVATARS.length) % AVATARS.length;
            const isFront = slot === 0;
            const flipClass =
              isFront && flipPhase === "out"
                ? "motion-safe:animate-flip-out"
                : isFront && flipPhase === "in"
                ? "motion-safe:animate-flip-in"
                : "";

            return (
              <span
                key={a.id}
                className="absolute left-0 top-0 transition-transform duration-300 ease-in-out [perspective:400px]"
                style={{ transform: `translateX(${slot * STEP}px)`, zIndex: slot + 1 }}
              >
                <img
                  src={`https://i.pravatar.cc/150?img=${a.img}`}
                  alt="Care team member"
                  className={`h-9 w-9 rounded-full object-cover ring-2 ring-background ${flipClass}`}
                />
              </span>
            );
          })}
        </div>
        <p className="text-center text-sm text-text-muted sm:text-left">
          Joined by{" "}
          <span className="font-semibold text-text">200+ care teams</span>{" "}
          scheduling 2,000+ shifts every day.
        </p>
      </div>
    </section>
  );
}
