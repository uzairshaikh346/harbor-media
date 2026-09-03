import Image from "next/image";
import Link from "next/link";
import { Play, Camera } from "lucide-react";

export default function FinalCta() {
  return (
    <section className="relative w-full overflow-hidden py-32 sm:py-40 md:py-48 flex items-center justify-center">
      {/* Background Image: Mega yachts in harbor */}
      <Image
        src="/images/final-cta-bg.jpg"
        alt="Luxury mega yachts and superyachts moored in harbor"
        fill
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Cinematic dark gradients matching Figma */}
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#07090e] via-black/30 to-[#07090e]" />
      <div className="absolute inset-0 bg-radial from-transparent via-black/20 to-black/80" />

      {/* Content */}
      <div className="container-x relative z-10 mx-auto max-w-5xl text-center px-4">
        {/* Main Headline */}
        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-[70px] font-normal tracking-tight text-white uppercase drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)]">
          REAL PLACES DESERVE TO BE SEEN.
        </h2>

        {/* Subtitle */}
        <p className="mt-5 sm:mt-6 text-sm sm:text-base md:text-lg leading-relaxed text-[#d1d5db] drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
          Watch. Partner. Or bring HarborMedia to your location.
        </p>

        {/* 3 Action Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {/* WATCH Button */}
          <a
            href="/#experience"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-[#ff9900] px-7 py-3 text-xs sm:text-sm font-bold tracking-wider text-black uppercase transition-all duration-200 hover:bg-[#ffaa1a] hover:shadow-lg hover:shadow-orange-500/25 active:scale-[0.98]"
          >
            <Play className="h-3.5 w-3.5 fill-black stroke-black" />
            <span>WATCH</span>
          </a>

          {/* PARTNER Button */}
          <Link
            href="/contact?intent=partner"
            className="inline-flex items-center justify-center rounded-md bg-black/40 px-7 py-3 text-xs sm:text-sm font-bold tracking-wider text-white uppercase backdrop-blur-md border border-white/25 transition-all duration-200 hover:bg-white/15 hover:border-white/40 active:scale-[0.98]"
          >
            PARTNER
          </Link>

          {/* HOST A CAMERA Button */}
          <Link
            href="/contact?intent=host"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-black/40 px-7 py-3 text-xs sm:text-sm font-bold tracking-wider text-white uppercase backdrop-blur-md border border-white/25 transition-all duration-200 hover:bg-white/15 hover:border-white/40 active:scale-[0.98]"
          >
            <Camera className="h-4 w-4 stroke-current" />
            <span>HOST A CAMERA</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
