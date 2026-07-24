import Image from "next/image";
import { yachts } from "@/lib/data";

function ArrowButton({ className = "" }: { className?: string }) {
  return (
    <span className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/40 text-white transition-all duration-300 hover:border-gold hover:bg-gold/10 hover:text-gold hover:shadow-lg hover:shadow-gold/20 ${className}`}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M7 17 17 7M9 7h8v8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export default function Yachts() {
  const [first, second, third] = yachts.cards;

  return (
    <section className="relative py-20 sm:py-28">
      <img src="/ellipse.png" alt="" aria-hidden="true"
        className="pointer-events-none absolute -left-64 top-1/2 h-[700px] w-[700px] -translate-y-1/2 select-none opacity-30"
      />
      <div className="container-x relative z-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <h2 className="max-w-md font-serif text-4xl leading-tight text-white sm:text-5xl">
            {yachts.title}
          </h2>
          <p className="max-w-xs text-sm leading-relaxed text-muted">{yachts.intro}</p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">

          {/* ── LEFT COLUMN ── */}
          <div className="flex flex-col gap-6">

            {/* Card 1 — full-bleed image with gold shadow box */}
            <div className="relative">
              <div className="grad-gold absolute -right-4 top-6 h-[85%] w-[45%] rounded-2xl opacity-90" />
              <article className="group relative z-10 overflow-hidden rounded-2xl">
                <div className="relative h-[480px]">
                  <Image
                    src={first.image}
                    alt={first.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-7">
                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <h3 className="font-serif text-2xl text-white sm:text-3xl">{first.name}</h3>
                        <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/70">{first.body}</p>
                      </div>
                      <ArrowButton />
                    </div>
                  </div>
                </div>
              </article>
            </div>

            {/* Ocean Dream — raw image with zoom */}
            <div className="group relative h-72 overflow-hidden rounded-2xl">
              <Image
                src={third.image}
                alt={third.name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          {/* ── RIGHT COLUMN (offset down) ── */}
          <div className="flex flex-col gap-6 lg:pt-14">

            {/* Family Leisure Catamaran */}
            <article className="grad-card overflow-hidden rounded-2xl border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:border-blue/40 hover:shadow-lg hover:shadow-blue/10">
              <div className="p-6">
                <h3 className="font-serif text-2xl text-white">{second.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{second.body}</p>
              </div>
              <div className="relative">
                <ArrowButton className="absolute left-5 top-1/2 z-10 -translate-y-1/2" />
                <div className="group/img relative h-52 w-full overflow-hidden">
                  <Image
                    src={second.image}
                    alt={second.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover/img:scale-105"
                  />
                </div>
              </div>
            </article>

            {/* Ocean Dream — info card */}
            <article className="grad-card rounded-2xl border border-white/10 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue/40 hover:shadow-lg hover:shadow-blue/10">
              <h3 className="font-serif text-2xl text-white">{third.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{third.body}</p>
              <div className="mt-6">
                <ArrowButton />
              </div>
            </article>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 flex justify-center">
          <a
            href="#yachts"
            className="grad-gold rounded-full px-12 py-3 text-sm font-semibold tracking-widest text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-gold/30 hover:opacity-90"
          >
            {yachts.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
