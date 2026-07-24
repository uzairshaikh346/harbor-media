"use client";

import { useState } from "react";
import Logo from "./Logo";
import { nav } from "@/lib/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="container-x flex items-center py-6">
        {/* Logo */}
        <Logo />

        {/* Spacer to push links to center */}
        <div className="flex-1" />

        {/* Desktop links — centered */}
        <ul className="hidden items-center gap-8 text-sm text-white/90 lg:flex">
          {nav.links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="inline-flex items-center gap-1 transition-colors hover:text-gold"
              >
                {link.label}
                {link.dropdown && (
                  <svg width="10" height="10" viewBox="0 0 10 10" className="text-gold" fill="none">
                    <path d="M2 3.5 5 6.5 8 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                  </svg>
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Login + mobile toggle */}
        <div className="flex flex-1 items-center justify-end gap-3">
          <a
            href="#login"
            className="hidden rounded-md bg-gold px-6 py-2.5 text-sm font-semibold tracking-wide text-black transition-all duration-300 hover:bg-gold-light hover:shadow-lg hover:shadow-gold/30 hover:-translate-y-0.5 sm:inline-block"
          >
            {nav.cta}
          </a>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="text-white lg:hidden"
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden">
          <ul className="container-x flex flex-col gap-1 pb-4">
            {nav.links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-2.5 text-sm text-white/90 hover:bg-white/5 hover:text-gold"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#login"
                onClick={() => setOpen(false)}
                className="mt-2 block rounded-md bg-gold px-4 py-2.5 text-center text-sm font-semibold text-black"
              >
                {nav.cta}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
