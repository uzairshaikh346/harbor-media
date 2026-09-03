import { useState, type FormEvent } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { Mail, Send } from "lucide-react";

interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

const footerColumns: FooterColumn[] = [
  {
    title: "Quick links",
    links: [
      { label: "About", href: "/#technology" },
      { label: "Service", href: "/#brands" },
      { label: "Benefits", href: "/#experience" },
      { label: "Pricing", href: "/contact?intent=partner" },
      { label: "Testimonials", href: "/#projects" },
    ],
  },
  {
    title: "Payment",
    links: [
      { label: "Bank", href: "/contact" },
      { label: "Paypal", href: "/contact" },
      { label: "Qris", href: "/contact" },
    ],
  },
  {
    title: "Follow Us",
    links: [
      { label: "Instagram", href: "https://instagram.com" },
      { label: "Facebook", href: "https://facebook.com" },
      { label: "Discord", href: "https://discord.com" },
      { label: "X", href: "https://x.com" },
    ],
  },
  {
    title: "Our Partners",
    links: [
      { label: "Instagram", href: "https://instagram.com" },
      { label: "Facebook", href: "https://facebook.com" },
      { label: "Discord", href: "https://discord.com" },
      { label: "X", href: "https://x.com" },
    ],
  },
  {
    title: "Service",
    links: [
      { label: "Bank", href: "/contact" },
      { label: "Paypal", href: "/contact" },
      { label: "Qris", href: "/contact" },
    ],
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer id="footer" className="relative bg-[#06080d] border-t border-white/[0.06] pt-14 pb-20 sm:pt-16 sm:pb-24">
      <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
        {/* Top Row: Logo (left) + Newsletter / Subscribe (right) */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center">
            <Logo />
          </div>

          {/* Newsletter Controls */}
          <form
            onSubmit={handleSubscribe}
            className="flex flex-wrap items-center gap-3 sm:gap-3.5"
            aria-label="Newsletter subscription"
          >
            {/* Orange Mail Box Icon */}
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#ff9900] text-black shrink-0 shadow-md shadow-orange-500/10">
              <Mail className="h-5 w-5 stroke-[2]" />
            </div>

            {/* Email Input with Send Icon */}
            <div className="relative flex flex-1 items-center min-w-[240px] sm:w-72 md:w-80">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Email..."
                className="w-full rounded-lg border border-white/20 bg-[#0c1018] px-4 py-2.5 pr-10 text-sm text-white placeholder:text-[#9ca3af] transition-colors focus:border-[#ff9900] focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Submit Email"
                className="absolute right-3 text-[#9ca3af] hover:text-[#ff9900] transition-colors"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>

            {/* Orange Subscribe Button */}
            <button
              type="submit"
              className="rounded-lg bg-[#ff9900] px-7 py-2.5 text-xs sm:text-sm font-bold tracking-wider text-black uppercase transition-all duration-200 hover:bg-[#ffaa1a] hover:shadow-lg hover:shadow-orange-500/25 active:scale-[0.98] shrink-0"
            >
              {subscribed ? "SUBSCRIBED" : "SUBSCRIBE"}
            </button>
          </form>
        </div>

        {/* Divider Line */}
        <hr className="my-10 sm:my-12 border-white/10" />

        {/* Bottom 5 Columns */}
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-5 lg:gap-12">
          {footerColumns.map((col, idx) => (
            <div key={`${col.title}-${idx}`} className="flex flex-col">
              {/* Column Title in Serif font */}
              <h3 className="font-serif text-base sm:text-lg font-normal text-white">
                {col.title}
              </h3>

              {/* Links list */}
              <ul className="mt-5 space-y-3.5 sm:space-y-4">
                {col.links.map((link, linkIdx) => (
                  <li key={`${link.label}-${linkIdx}`}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#d1d5db] transition-colors hover:text-[#ff9900]"
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
