"use client";

import Image from "next/image";
import Link from "next/link";
import { Play, Camera } from "lucide-react";

export default function LpFinalCta() {
  return (
    <section className="relative w-full overflow-hidden py-32 sm:py-36 md:py-40 flex items-center justify-center">
      {/* Background Image */}
      <Image
        src="/images/final-cta-bg.jpg"
        alt="Luxury mega yachts and superyachts moored in harbor"
        fill
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Cinematic dark gradients matching main theme */}
      <div className="absolute inset-0 bg-ink/65" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/40 to-ink" />

      {/* Content */}
      <div className="container-x relative z-10 text-center">
        {/* Main Headline */}
        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-white uppercase drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)]">
          REAL PLACES DESERVE TO BE SEEN.
        </h2>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-lg leading-relaxed text-muted drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] max-w-2xl mx-auto">
          Watch. Partner. Or bring HarborMedia to your location.
        </p>

        {/* 3 Action Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {/* WATCH Button */}
          <Link
            href="#experience"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-gold px-7 py-3 text-sm font-semibold tracking-wide text-black uppercase transition-all duration-300 hover:bg-gold-light hover:shadow-lg hover:shadow-gold/30 hover:-translate-y-0.5 active:scale-[0.98]"
          >
            <Play className="h-4 w-4 fill-black stroke-black" />
            <span>WATCH</span>
          </Link>

          {/* PARTNER Button */}
          <Link
            href="/contact?intent=partner"
            className="inline-flex items-center justify-center rounded-md border border-white/20 bg-ink-3/80 px-7 py-3 text-sm font-semibold tracking-wide text-white uppercase backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-white/35 hover:-translate-y-0.5 active:scale-[0.98]"
          >
            PARTNER
          </Link>

          {/* HOST A CAMERA Button */}
          <Link
            href="/contact?intent=host"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 bg-ink-3/80 px-7 py-3 text-sm font-semibold tracking-wide text-white uppercase backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-white/35 hover:-translate-y-0.5 active:scale-[0.98]"
          >
            <Camera className="h-4 w-4 stroke-current" />
            <span>HOST A CAMERA</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
