import Image from "next/image";
import { hero } from "@/lib/data";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Background image */}
      <Image
        src={hero.image}
        alt="Sunrise over the waterfront at the Shinnecock Canal in Hampton Bays, New York"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* Dark overlays for legibility */}
      <div className="absolute inset-0 bg-black/25" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-transparent to-black/70" />

      {/* Content */}
      <div className="container-x relative z-10 flex min-h-screen flex-col items-center justify-center pt-24 text-center">
        <p className="font-serif text-4xl text-white sm:text-5xl md:text-6xl">
          {hero.eyebrow}
        </p>
        <h1 className="font-serif text-7xl font-bold leading-none text-gold drop-shadow-[0_4px_30px_rgba(0,0,0,0.5)] sm:text-8xl md:text-[10rem] lg:text-[14rem]">
          {hero.title}
        </h1>

        {/* Stats */}
        <div className="mt-8 grid w-full max-w-3xl grid-cols-2 gap-8 sm:grid-cols-4">
          {hero.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-serif text-5xl font-semibold text-white sm:text-6xl">
                {stat.value}
              </div>
              <div className="mt-1 font-serif text-sm text-white/80">{stat.label}</div>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-xl text-sm leading-relaxed text-white/80">
          {hero.description}
        </p>
      </div>
    </section>
  );
}
