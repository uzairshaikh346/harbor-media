"use client";

import Image from "next/image";
import Link from "next/link";
import { Camera } from "lucide-react";

export default function LpHostCta() {
  return (
    <section className="relative w-full overflow-hidden py-28 sm:py-36 md:py-40 flex items-center justify-center">
      {/* Background Image */}
      <Image
        src="/images/host-cliff-bg.png"
        alt="Coastal cliff path overlooking ocean at sunset"
        fill
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Atmospheric dark overlays matching main theme */}
      <div className="absolute inset-0 bg-ink/70" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-transparent to-ink" />

      {/* Content */}
      <div className="container-x relative z-10 text-center">
        {/* Main Headline */}
        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-white uppercase drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)]">
          YOUR PLACE COULD BE NEXT.
        </h2>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-lg leading-relaxed text-muted max-w-2xl mx-auto drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
          Bring HarborMedia to your location and share your place with audiences around the world.
        </p>

        {/* Button */}
        <div className="mt-10 flex justify-center">
          <Link
            href="/contact?intent=host"
            className="inline-flex items-center justify-center gap-2.5 rounded-md bg-gold px-8 py-3.5 text-sm font-semibold tracking-wide text-black uppercase transition-all duration-300 hover:bg-gold-light hover:shadow-lg hover:shadow-gold/30 hover:-translate-y-0.5 active:scale-[0.98]"
          >
            <Camera className="h-4 w-4 stroke-current stroke-2" />
            <span>HOST A CAMERA</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
