"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "We're still on spreadsheets and group chats. How hard is it to switch?",
    a: "Most teams are up and running in an afternoon. Import your staff list, set everyone's roles and hours, and ShiftFlow builds your first roster from there. Keep your old spreadsheet open alongside for a week if it helps — most managers stop reaching for it after the first roster.",
  },
  {
    q: "How do the compliance and audit records actually work?",
    a: "Every shift carries a status — Confirmed, Pending, or Needs Cover — and ShiftFlow keeps a timestamped record of who worked what, who approved it, and any changes along the way. When an audit or NDIS review comes around, you export a clean, date-ranged report instead of piecing it together from memory.",
  },
  {
    q: "Can we manage more than one site or location?",
    a: "Yes. Group your team by location, ward, or department and roster each one separately, or view them side by side. Staff who work across sites keep a single profile, so their hours and availability stay accurate everywhere.",
  },
  {
    q: "What happens when someone calls in sick?",
    a: "Mark the shift as Needs Cover and ShiftFlow surfaces who's available and qualified — without pushing anyone into overtime or a clash. Once someone picks it up, the roster and the audit trail update on their own.",
  },
  {
    q: "Is there a free trial? Do we need a credit card?",
    a: "You can start a 14-day free trial without a credit card and roster a real week to see how it fits. If ShiftFlow isn't right for you, do nothing and the trial simply ends. Paid plans scale with the size of your team.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="scroll-mt-16">
      <div className="mx-auto max-w-3xl px-5 py-20 sm:px-6 lg:py-24">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            FAQ
          </p>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-text sm:text-4xl">
            Questions, answered.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-text-muted">
            Everything worth knowing before you roster your first week.
          </p>
        </div>

        <div className="mt-10 divide-y divide-slate-200 border-y border-slate-200">
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i}>
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    id={`faq-trigger-${i}`}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  >
                    <span className="text-base font-semibold text-text">{item.q}</span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                      className={`shrink-0 text-text-muted transition-transform duration-300 ease-in-out ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      <path
                        d="M6 9l6 6 6-6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </h3>
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${i}`}
                  className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <p className="max-w-prose pb-5 text-sm leading-relaxed text-text-muted">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
