import Image from "next/image";
import { Play } from "lucide-react";

export default function FeaturedProject() {
  return (
    <section id="projects" className="relative bg-[#07090e] py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
        {/* Eyebrow */}
        <div className="flex items-center gap-2.5 select-none">
          <span className="h-2 w-2 rounded-full bg-[#ff9900]" />
          <span className="text-xs font-bold tracking-[0.24em] text-[#ff9900] uppercase">
            FEATURED PROJECT
          </span>
        </div>

        {/* Heading + LIVE NOW row */}
        <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-white uppercase">
            SUNRISES IN THE HAMPTONS
          </h2>

          {/* Live Indicator Pill */}
          <div className="inline-flex w-fit items-center gap-2 rounded-full bg-[#230b0e] border border-[#3e1216] px-4 py-1.5 select-none">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ef4444] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#ef4444]" />
            </span>
            <span className="text-xs font-bold tracking-wider text-[#ef4444] uppercase">
              LIVE NOW
            </span>
          </div>
        </div>

        {/* Featured Project Showcase Card */}
        <div className="mt-10 sm:mt-12 overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0c1018] shadow-2xl shadow-black/50">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Media (Image / Stream view) */}
            <div className="relative min-h-[320px] sm:min-h-[420px] lg:min-h-[520px] lg:col-span-7 overflow-hidden">
              <Image
                src="/images/featured-hamptons.png"
                alt="Sunrises in the Hamptons docked yacht at dawn"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent lg:hidden" />
            </div>

            {/* Right Information Panel */}
            <div className="flex flex-col justify-between p-8 sm:p-10 lg:p-12 lg:col-span-5 bg-[#090d15]">
              <div>
                <span className="text-xs font-bold tracking-[0.2em] text-[#ff9900] uppercase">
                  PROJECT 01
                </span>
                <h3 className="mt-4 font-serif text-2xl sm:text-3xl lg:text-[32px] font-normal leading-snug text-white">
                  Experience the beauty of the Hamptons as each new day begins.
                </h3>
                <p className="mt-5 text-sm sm:text-base leading-relaxed text-[#9ca3af]">
                  Captured through our signature 4K ultra-low light sensors at the edge of the Atlantic. Watch the harbor stir, light strike modern estate docks, and mist rise from the morning sea.
                </p>

                {/* Watch Live CTA Button */}
                <div className="mt-8">
                  <a
                    href="/#channels"
                    className="inline-flex items-center justify-center gap-2.5 rounded-md bg-[#ff9900] px-7 py-3.5 text-xs sm:text-sm font-bold tracking-wider text-black uppercase transition-all duration-200 hover:bg-[#ffaa1a] hover:shadow-lg hover:shadow-orange-500/25 active:scale-[0.98]"
                  >
                    <Play className="h-4 w-4 fill-black stroke-black" />
                    <span>WATCH LIVE</span>
                  </a>
                </div>
              </div>

              {/* Bottom Metadata Metrics */}
              <div className="mt-10 border-t border-white/[0.08] pt-6 grid grid-cols-2 gap-4">
                <div>
                  <div className="text-[11px] font-semibold tracking-wider text-[#64748b] uppercase">
                    ACTIVE CAMERAS
                  </div>
                  <div className="mt-1.5 text-sm sm:text-base font-semibold text-white">
                    3 Streams
                  </div>
                </div>
                <div>
                  <div className="text-[11px] font-semibold tracking-wider text-[#64748b] uppercase">
                    AI CURATION MODE
                  </div>
                  <div className="mt-1.5 text-sm sm:text-base font-semibold text-white">
                    Autonomous Dawn-Tuning
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
