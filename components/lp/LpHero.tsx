"use client";

import Image from "next/image";
import Link from "next/link";
import { Play, Camera } from "lucide-react";

export default function LpHero() {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] sm:min-h-screen w-full overflow-hidden flex items-center justify-center"
    >
      {/* Background image */}
      <Image
        src="/images/hero-bg.jpg"
        alt="HarborMedia sunset over luxury marina yachts"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Cinematic dark overlays matching main theme */}
      <div className="absolute inset-0 bg-ink/50" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/75 via-ink/35 to-ink" />

      {/* Content Container */}
      <div className="container-x relative z-10 flex flex-col items-center justify-center pt-32 pb-24 sm:pt-40 sm:pb-32 text-center">
        {/* Eyebrow tag */}
        <div className="flex items-center justify-center gap-3 select-none">
          <span className="h-px w-6 sm:w-8 bg-gold" />
          <span className="text-xs font-semibold tracking-widest text-gold uppercase">
            HARBORMEDIA
          </span>
          <span className="h-px w-6 sm:w-8 bg-gold" />
        </div>

        {/* Headline */}
        <h1 className="mt-6 font-serif text-4xl sm:text-6xl md:text-7xl font-normal leading-[1.12] tracking-tight text-white uppercase max-w-4xl drop-shadow-[0_4px_24px_rgba(0,0,0,0.7)]">
          REAL PLACES. REAL <br className="hidden sm:inline" />
          MOMENTS. INTELLIGENTLY <br className="hidden sm:inline" />
          PUBLISHED.
        </h1>

        {/* Narrative Description */}
        <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-muted drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
          HarborMedia transforms extraordinary real-world locations into continuously curated digital experiences — captured, curated and distributed through intelligent technology.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <Link
            href="#experience"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-gold px-7 py-3 text-sm font-semibold tracking-wide text-black transition-all duration-300 hover:bg-gold-light hover:shadow-lg hover:shadow-gold/30 hover:-translate-y-0.5 active:scale-[0.98]"
          >
            <Play className="h-4 w-4 fill-black stroke-black" />
            <span>WATCH</span>
          </Link>

          <Link
            href="/contact?intent=partner"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 bg-ink-3/80 px-7 py-3 text-sm font-semibold tracking-wide text-white backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-white/35 hover:-translate-y-0.5 active:scale-[0.98]"
          >
            <span>PARTNER</span>
          </Link>

          <Link
            href="/contact?intent=host"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 bg-ink-3/80 px-7 py-3 text-sm font-semibold tracking-wide text-white backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-white/35 hover:-translate-y-0.5 active:scale-[0.98]"
          >
            <Camera className="h-4 w-4 stroke-current" />
            <span>HOST A CAMERA</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
