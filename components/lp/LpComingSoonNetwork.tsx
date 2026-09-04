import Image from "next/image";

interface NetworkLocation {
  id: string;
  name: string;
  image: string;
}

const locations: NetworkLocation[] = [
  {
    id: "amalfi",
    name: "Amalfi Coast, Italy",
    image: "/images/amalfi.png",
  },
  {
    id: "singapore",
    name: "Marina Bay, Singapore",
    image: "/images/singapore.png",
  },
  {
    id: "monaco",
    name: "Monaco Harbor, France",
    image: "/images/monaco.png",
  },
  {
    id: "sydney",
    name: "Sydney Harbour, Australia",
    image: "/images/sydney.png",
  },
];

export default function LpComingSoonNetwork() {
  return (
    <section id="network" className="relative py-20 sm:py-28 bg-ink-2">
      <div className="container-x">
        {/* Eyebrow */}
        <div className="flex items-center gap-2.5 select-none">
          <span className="h-2 w-2 rounded-full bg-gold" />
          <span className="text-xs font-semibold tracking-widest text-gold uppercase">
            THE NETWORK
          </span>
        </div>

        {/* Headline */}
        <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-white uppercase">
          COMING SOON
        </h2>

        {/* Subtitle */}
        <p className="mt-4 text-base text-muted">
          More extraordinary places are joining HarborMedia.
        </p>

        {/* 4 Cards Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {locations.map((loc) => (
            <div
              key={loc.id}
              className="group relative flex min-h-[380px] sm:min-h-[440px] flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-ink p-6 transition-all duration-300 hover:border-white/25 hover:shadow-2xl hover:shadow-black/60 hover:-translate-y-1"
            >
              {/* Background Location Image */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <Image
                  src={loc.image}
                  alt={loc.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-black/40 to-black/30" />
              </div>

              {/* Top Badge: COMING SOON */}
              <div className="relative z-10 select-none">
                <span className="inline-flex rounded border border-gold/40 bg-ink/75 px-2.5 py-1 text-[10px] font-bold tracking-wider text-gold uppercase backdrop-blur-md">
                  COMING SOON
                </span>
              </div>

              {/* Bottom Location Name */}
              <div className="relative z-10">
                <h3 className="font-serif text-lg sm:text-xl font-normal text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                  {loc.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
