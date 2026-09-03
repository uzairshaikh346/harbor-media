import { testimonials } from "@/lib/data";

function Stars({ rating }: { rating: string }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-0.5 text-gold">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg key={i} width="14" height="14" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 1.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L10 15.9l-5.3 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
          </svg>
        ))}
      </div>
      <span className="text-xs text-white/70">({rating})</span>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative overflow-hidden bg-ink pt-6 pb-16">
      <h2 className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 text-center font-serif font-bold uppercase leading-none text-white sm:text-[9rem] lg:text-[12rem]">
        {testimonials.heading}
      </h2>

      <div className="container-x relative z-10 grid grid-cols-2 gap-x-5 gap-y-72 lg:gap-y-[18rem]">
        {testimonials.items.map((t, i) => (
          <article
            key={i}
            className={`rounded-2xl p-6 backdrop-blur-md transition-all duration-300 sm:p-7 hover:-translate-y-2 ${
              t.highlight
                ? "grad-gold hover:shadow-xl hover:shadow-gold/30"
                : "border border-white/8 bg-black/55 hover:border-white/25 hover:bg-black/70 hover:shadow-lg hover:shadow-white/5"
            }`}
          >
            <Stars rating={t.rating} />
            <p className={`mt-4 text-sm leading-relaxed ${t.highlight ? "text-white/90" : "text-white/80"}`}>
              {t.quote}
            </p>
            <p className="mt-5 text-sm">
              <span className="font-semibold text-white">{t.name}</span>
              <span className="italic text-white/70"> - {t.role}</span>
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
