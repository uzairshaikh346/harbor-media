"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { nav } from "@/lib/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#07090e]/95 backdrop-blur-md shadow-lg shadow-black/40 border-b border-white/5 py-3.5"
          : "bg-[#07090e] border-b border-white/[0.06] py-4 sm:py-5"
      }`}
    >
      <div className="mx-auto flex max-w-[1360px] items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left: Logo */}
        <div className="flex shrink-0 items-center">
          <Logo className="h-8 sm:h-9" />
        </div>

        {/* Center: Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
          {nav.links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[15px] font-medium text-[#d1d5db] transition-colors duration-200 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right: LIVE Badge + WATCH NOW Button */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Live Indicator Pill */}
          <div className="flex items-center gap-2 rounded-md bg-[#230b0e] border border-[#3e1216] px-3.5 py-2 select-none">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ef4444] opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#ef4444]"></span>
            </span>
            <span className="text-xs font-bold tracking-wider text-[#ef4444] uppercase">
              LIVE
            </span>
          </div>

          {/* WATCH NOW CTA Button */}
          <a
            href="/#channels"
            className="hidden sm:inline-flex items-center justify-center rounded-md bg-[#ff9900] px-6 py-2.5 text-xs sm:text-sm font-bold tracking-wider text-black uppercase transition-all duration-200 hover:bg-[#ffaa1a] hover:shadow-md hover:shadow-orange-500/20 active:scale-[0.98]"
          >
            {nav.cta}
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
            className="inline-flex items-center justify-center rounded-md p-2 text-white/90 hover:bg-white/10 hover:text-white focus:outline-none lg:hidden"
          >
            {open ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {open && (
        <div className="border-b border-white/10 bg-[#07090e]/98 px-4 pt-3 pb-6 backdrop-blur-xl lg:hidden">
          <ul className="flex flex-col space-y-1">
            {nav.links.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2.5 text-base font-medium text-[#d1d5db] transition-colors hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 pt-4 border-t border-white/10">
            <a
              href="/#channels"
              onClick={() => setOpen(false)}
              className="flex w-full items-center justify-center rounded-md bg-[#ff9900] px-4 py-3 text-center text-sm font-bold tracking-wider text-black uppercase transition-colors hover:bg-[#ffaa1a]"
            >
              {nav.cta}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
