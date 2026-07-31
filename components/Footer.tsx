import Link from "next/link";
import Logo from "./Logo";
import { footer } from "@/lib/data";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/5 bg-ink-2 py-14">
      <div className="container-x">
        {/* Top: logo + subscribe */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <Logo />
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
              {footer.tagline}
            </p>
          </div>

          <form
            className="flex items-center gap-3"
            action="#"
            aria-label="Newsletter subscription"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-gold text-black">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M3 6h18v12H3z" stroke="currentColor" strokeWidth="1.6" />
                <path d="m3 7 9 6 9-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </span>

            <div className="flex items-center rounded-lg border border-white/15 bg-ink-3 pl-4 pr-1.5">
              <label htmlFor="email" className="sr-only">Email address</label>
              <input
                id="email"
                type="email"
                required
                placeholder={footer.emailPlaceholder}
                className="w-44 bg-transparent py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none sm:w-56"
              />
              <button
                type="submit"
                aria-label="Submit email"
                className="flex h-8 w-8 items-center justify-center rounded-md text-white hover:text-gold"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="m4 12 16-8-6 16-3-6-7-2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            <button
              type="submit"
              className="rounded-lg bg-gold px-6 py-2.5 text-sm font-semibold tracking-wide text-black transition-colors hover:bg-gold-light"
            >
              {footer.cta}
            </button>
          </form>
        </div>

        <hr className="my-10 border-white/10" />

        {/* Bottom bar — copyright left, legal links right */}
        <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} {footer.brand}. {footer.rights}
          </p>

          {footer.columns.map((col) => (
            <div
              key={col.title}
              className="flex flex-col items-center gap-3 sm:flex-row sm:gap-8"
            >
              {col.title && (
                <h3 className="text-sm font-semibold text-white">{col.title}</h3>
              )}
              <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted transition-colors hover:text-gold"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
