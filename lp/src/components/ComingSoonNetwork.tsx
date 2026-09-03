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

export default function ComingSoonNetwork() {
  return (
    <section id="network" className="relative bg-[#07090e] py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
        {/* Eyebrow */}
        <div className="flex items-center gap-2.5 select-none">
          <span className="h-2 w-2 rounded-full bg-[#ff9900]" />
          <span className="text-xs font-bold tracking-[0.24em] text-[#ff9900] uppercase">
            THE NETWORK
          </span>
        </div>

        {/* Headline */}
        <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-white uppercase">
          COMING SOON
        </h2>

        {/* Subtitle */}
        <p className="mt-4 text-sm sm:text-base text-[#9ca3af]">
          More extraordinary places are joining HarborMedia.
        </p>

        {/* 4 Cards Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {locations.map((loc) => (
            <div
              key={loc.id}
              className="group relative flex min-h-[380px] sm:min-h-[440px] flex-col justify-between overflow-hidden rounded-xl border border-white/[0.08] bg-[#0d1017] p-6 transition-all duration-300 hover:border-white/25 hover:shadow-2xl hover:shadow-black/60"
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
                <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-black/30 to-black/40" />
              </div>

              {/* Top Badge: COMING SOON */}
              <div className="relative z-10 select-none">
                <span className="inline-flex rounded border border-[#ff9900]/50 bg-black/60 px-2.5 py-1 text-[10px] font-bold tracking-wider text-[#ff9900] uppercase backdrop-blur-md">
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
