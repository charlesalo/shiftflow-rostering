"use client";

import { useRef, useState } from "react";
import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";
import LoginModal from "@/components/landing/LoginModal";

const links = [
  { label: "Features", href: "#features" },
  { label: "How it Works", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const loginTriggerRef = useRef(null);

  const openLogin = (e) => {
    loginTriggerRef.current = e.currentTarget;
    setLoginOpen(true);
  };

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-background/85 backdrop-blur">
        <nav
          className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6"
          aria-label="Primary"
        >
          <Logo />

          {/* Center links — desktop */}
          <ul className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-text-muted transition-colors hover:text-text"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right side — desktop */}
          <div className="hidden items-center gap-4 md:flex">
            <button
              type="button"
              onClick={openLogin}
              className="text-sm font-medium text-text-muted transition-colors hover:text-text"
            >
              Log in
            </button>
            <Button href="#demo" size="sm">
              Book a Demo
            </Button>
          </div>

          {/* Hamburger — mobile */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-text transition-colors hover:bg-slate-100 md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </nav>

        {/* Mobile panel */}
        {open && (
          <div
            id="mobile-menu"
            className="border-t border-slate-200/70 bg-surface md:hidden"
          >
            <ul className="mx-auto flex max-w-6xl flex-col px-5 py-2">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-2 py-3 text-base font-medium text-text transition-colors hover:bg-slate-100"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={openLogin}
                  className="block w-full rounded-lg px-2 py-3 text-left text-base font-medium text-text transition-colors hover:bg-slate-100"
                >
                  Log in
                </button>
              </li>
              <li className="px-2 pb-3 pt-2">
                <Button
                  href="#demo"
                  onClick={() => setOpen(false)}
                  className="w-full"
                >
                  Book a Demo
                </Button>
              </li>
            </ul>
          </div>
        )}
      </header>

      {loginOpen && (
        <LoginModal
          onClose={() => setLoginOpen(false)}
          triggerRef={loginTriggerRef}
        />
      )}
    </>
  );
}
