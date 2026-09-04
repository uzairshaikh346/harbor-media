"use client";

import Image from "next/image";
import { Play } from "lucide-react";

export default function LpFeaturedProject() {
  return (
    <section id="featured" className="relative py-16 sm:py-24 lg:py-28 bg-ink-2">
      <div className="container-x">
        {/* Eyebrow */}
        <div className="flex items-center gap-2.5 select-none">
          <span className="h-2 w-2 rounded-full bg-gold" />
          <span className="text-xs font-semibold tracking-widest text-gold uppercase">
            FEATURED PROJECT
          </span>
        </div>

        {/* Heading + LIVE NOW row */}
        <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-white uppercase">
            SUNRISES IN THE HAMPTONS
          </h2>

          {/* Live Indicator Pill */}
          <div className="inline-flex w-fit items-center gap-2 rounded-full bg-red-950/60 border border-red-500/30 px-3.5 py-1.5 select-none">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
            </span>
            <span className="text-xs font-bold tracking-wider text-red-400 uppercase">
              LIVE NOW
            </span>
          </div>
        </div>

        {/* Showcase Card */}
        <div className="mt-10 sm:mt-12 overflow-hidden rounded-2xl border border-white/10 bg-ink shadow-2xl shadow-black/50">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Media */}
            <div className="relative min-h-[320px] sm:min-h-[420px] lg:min-h-[520px] lg:col-span-7 overflow-hidden">
              <Image
                src="/images/featured-hamptons.png"
                alt="Sunrises in the Hamptons docked yacht at dawn"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent lg:hidden" />
            </div>

            {/* Right Information Panel */}
            <div className="flex flex-col justify-between p-8 sm:p-10 lg:p-12 lg:col-span-5 bg-ink-3">
              <div>
                <span className="text-xs font-semibold tracking-widest text-gold uppercase">
                  PROJECT 01
                </span>
                <h3 className="mt-4 font-serif text-2xl sm:text-3xl font-normal leading-snug text-white">
                  Experience the beauty of the Hamptons as each new day begins.
                </h3>
                <p className="mt-5 text-sm sm:text-base leading-relaxed text-muted">
                  Captured through our signature 4K ultra-low light sensors at the edge of the Atlantic. Watch the harbor stir, light strike modern estate docks, and mist rise from the morning sea.
                </p>

                {/* Watch Live CTA Button */}
                <div className="mt-8">
                  <a
                    href="/#channels"
                    className="inline-flex items-center justify-center gap-2 rounded-md bg-gold px-7 py-3 text-sm font-semibold tracking-wide text-black transition-all duration-300 hover:bg-gold-light hover:shadow-lg hover:shadow-gold/30 hover:-translate-y-0.5 active:scale-[0.98]"
                  >
                    <Play className="h-4 w-4 fill-black stroke-black" />
                    <span>WATCH LIVE</span>
                  </a>
                </div>
              </div>

              {/* Bottom Metadata Metrics */}
              <div className="mt-10 border-t border-white/10 pt-6 grid grid-cols-2 gap-4">
                <div>
                  <div className="text-[11px] font-semibold tracking-wider text-muted uppercase">
                    ACTIVE CAMERAS
                  </div>
                  <div className="mt-1.5 text-sm sm:text-base font-semibold text-white">
                    3 Streams
                  </div>
                </div>
                <div>
                  <div className="text-[11px] font-semibold tracking-wider text-muted uppercase">
                    AI CURATION MODE
                  </div>
                  <div className="mt-1.5 text-sm sm:text-base font-semibold text-white">
                    Autonomous Dawn-Tuning
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
