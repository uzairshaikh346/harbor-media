import Image from "next/image";

export default function StatementBanner() {
  return (
    <section className="relative w-full overflow-hidden py-24 sm:py-32 md:py-40 flex items-center justify-center">
      {/* Background Nocturnal Cityscape */}
      <Image
        src="/images/statement-bg.jpg"
        alt="Cityscape across water at night"
        fill
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Cinematic Dark Overlays for pristine legibility */}
      <div className="absolute inset-0 bg-black/75" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#07090e] via-transparent to-[#07090e]" />
      <div className="absolute inset-0 bg-radial from-transparent via-black/30 to-black/80" />

      {/* Content */}
      <div className="container-x relative z-10 mx-auto max-w-4xl text-center">
        {/* Main Golden-Amber Statement Headline */}
        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-[76px] font-normal tracking-[0.12em] sm:tracking-[0.18em] text-[#ff9900] uppercase drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)]">
          PLACE &gt; PERSONALITY
        </h2>

        {/* Subtitle Lines */}
        <div className="mt-6 sm:mt-8 space-y-1.5 text-sm sm:text-base md:text-lg leading-relaxed text-[#d1d5db] font-normal drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
          <p>The world doesn't need another personality-driven feed.</p>
          <p>Extraordinary places already have stories worth watching.</p>
        </div>
      </div>
    </section>
  );
}
