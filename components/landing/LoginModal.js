"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

export default function LoginModal({ onClose, triggerRef }) {
  const cardRef = useRef(null);
  const emailRef = useRef(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    emailRef.current?.focus();

    function handleKeyDown(e) {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key !== "Tab" || !cardRef.current) return;

      const focusable = Array.from(
        cardRef.current.querySelectorAll(FOCUSABLE_SELECTOR)
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      triggerRef?.current?.focus();
    };
  }, [onClose, triggerRef]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 p-4"
      onClick={onClose}
    >
      <div
        ref={cardRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="login-modal-heading"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-[400px] rounded-2xl border border-slate-200 bg-surface p-6 shadow-xl shadow-slate-900/10 ring-1 ring-slate-900/5"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-lg text-text-muted transition-colors hover:bg-slate-100 hover:text-text"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M6 6l12 12M18 6L6 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <div className="flex flex-col items-center text-center">
          <Logo />
          <h2
            id="login-modal-heading"
            className="mt-5 text-xl font-bold tracking-tight text-text"
          >
            Welcome back
          </h2>
          <p className="mt-1.5 text-sm text-text-muted">
            Log in to manage your team&apos;s roster.
          </p>
        </div>

        <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label htmlFor="login-email" className="text-sm font-medium text-text">
              Email
            </label>
            <input
              ref={emailRef}
              id="login-email"
              name="demo-email"
              type="email"
              autoComplete="off"
              defaultValue="amara@coastalcare.com.au"
              className="mt-1.5 w-full rounded-lg border border-slate-300 bg-surface px-3 py-2 text-sm text-text placeholder:text-text-muted/70 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>
          <div>
            <label htmlFor="login-password" className="text-sm font-medium text-text">
              Password
            </label>
            <input
              id="login-password"
              name="demo-password"
              type="password"
              autoComplete="off"
              defaultValue="supersecure123"
              className="mt-1.5 w-full rounded-lg border border-slate-300 bg-surface px-3 py-2 text-sm text-text placeholder:text-text-muted/70 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>

          <Button as={Link} href="/dashboard" onClick={onClose} className="w-full">
            Log in
          </Button>
        </form>

        <p className="mt-5 text-center text-sm text-text-muted">
          Don&apos;t have an account?{" "}
          <Link
            href="#demo"
            onClick={onClose}
            className="font-medium text-primary hover:text-primary-dark"
          >
            Start your free trial
          </Link>
        </p>
      </div>
    </div>
  );
}
