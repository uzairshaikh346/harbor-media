import Image from "next/image";
import { Play, Camera } from "lucide-react";
import { hero } from "@/lib/data";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] sm:min-h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background image */}
      <Image
        src={hero.image}
        alt="HarborMedia sunset over luxury marina yachts"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Cinematic dark overlays matching Figma design */}
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
      <div className="absolute inset-0 bg-radial from-transparent via-black/20 to-black/75" />

      {/* Hero Content Container */}
      <div className="container-x relative z-10 flex flex-col items-center justify-center py-24 sm:py-32 text-center">
        {/* Top Tag: — HARBORMEDIA — */}
        <div className="flex items-center justify-center gap-3 select-none">
          <span className="h-[1px] w-6 sm:w-8 bg-[#e5951e]" />
          <span className="text-[11px] sm:text-xs font-bold tracking-[0.28em] text-[#e5951e] uppercase">
            {hero.tag}
          </span>
          <span className="h-[1px] w-6 sm:w-8 bg-[#e5951e]" />
        </div>

        {/* Main Display Headline */}
        <h1 className="mt-6 sm:mt-8 font-serif text-3xl sm:text-5xl md:text-6xl lg:text-[72px] xl:text-[80px] font-normal leading-[1.12] tracking-tight text-white uppercase max-w-5xl drop-shadow-[0_4px_24px_rgba(0,0,0,0.7)]">
          {hero.headlineLine1} <br className="hidden sm:inline" />
          {hero.headlineLine2} <br className="hidden sm:inline" />
          {hero.headlineLine3}
        </h1>

        {/* Narrative Description */}
        <p className="mt-6 sm:mt-8 max-w-2xl text-sm sm:text-base leading-relaxed text-[#d1d5db] drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
          {hero.description}
        </p>

        {/* 3 Action Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {/* WATCH Button */}
          <a
            href="/#channels"
            className="inline-flex items-center justify-center gap-2.5 rounded-md bg-[#ff9900] px-7 py-3 text-xs sm:text-sm font-bold tracking-wider text-black uppercase transition-all duration-200 hover:bg-[#ffaa1a] hover:shadow-lg hover:shadow-orange-500/25 active:scale-[0.98]"
          >
            <Play className="h-4 w-4 fill-black stroke-black" />
            <span>{hero.ctaWatch}</span>
          </a>

          {/* PARTNER Button */}
          <a
            href="/contact?intent=partner"
            className="inline-flex items-center justify-center rounded-md bg-[#222326]/80 px-7 py-3 text-xs sm:text-sm font-bold tracking-wider text-white uppercase backdrop-blur-md border border-white/20 transition-all duration-200 hover:bg-white/15 hover:border-white/35 active:scale-[0.98]"
          >
            {hero.ctaPartner}
          </a>

          {/* HOST A CAMERA Button */}
          <a
            href="/contact?intent=host"
            className="inline-flex items-center justify-center gap-2.5 rounded-md bg-[#222326]/80 px-7 py-3 text-xs sm:text-sm font-bold tracking-wider text-white uppercase backdrop-blur-md border border-white/20 transition-all duration-200 hover:bg-white/15 hover:border-white/35 active:scale-[0.98]"
          >
            <Camera className="h-4 w-4 stroke-current" />
            <span>{hero.ctaHost}</span>
          </a>
        </div>
      </div>
    </section>
  );
}

