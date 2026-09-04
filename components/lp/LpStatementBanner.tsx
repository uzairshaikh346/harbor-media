import Image from "next/image";

export default function LpStatementBanner() {
  return (
    <section className="relative w-full overflow-hidden py-24 sm:py-32 md:py-36 flex items-center justify-center">
      {/* Background Nocturnal Cityscape */}
      <Image
        src="/images/statement-bg.jpg"
        alt="Cityscape across water at night"
        fill
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Cinematic Dark Overlays for legibility */}
      <div className="absolute inset-0 bg-ink/75" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-transparent to-ink" />

      {/* Content */}
      <div className="container-x relative z-10 text-center">
        {/* Main Golden Statement Headline */}
        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-[0.14em] text-gold uppercase drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)]">
          PLACE &gt; PERSONALITY
        </h2>

        {/* Subtitle Lines */}
        <div className="mt-6 sm:mt-8 space-y-2 text-base sm:text-lg leading-relaxed text-muted max-w-2xl mx-auto drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
          <p>The world doesn&apos;t need another personality-driven feed.</p>
          <p>Extraordinary places already have stories worth watching.</p>
        </div>
      </div>
    </section>
  );
}
