import Image from "next/image";
import { about } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="glow-warm relative py-20 sm:py-28">
      <div className="container-x grid gap-10 lg:grid-cols-2 lg:items-start">
        {/* Left: badge + image + body */}
        <div className="grid grid-cols-2 gap-5">
          {/* Badge card */}
          <div className="grad-gold relative min-h-[220px] overflow-hidden rounded-2xl p-6 flex flex-col justify-between transition-transform duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-gold/30 cursor-default">
            <div className="font-serif text-7xl font-bold text-white sm:text-8xl">
              {about.badgeNumber}
            </div>
            <div className="mt-4 text-xs font-semibold uppercase leading-snug tracking-widest text-white/90">
              {about.badgeLabel}
            </div>
            <svg className="absolute bottom-3 right-3" width="70" height="70" viewBox="0 0 70 70" fill="none" aria-hidden="true">
              <path d="M60 10 Q70 35 50 60 Q30 80 5 65" stroke="#3b6fe0" strokeWidth="3" strokeLinecap="round" fill="none" />
              <path d="M50 5 Q65 30 45 58 Q25 78 2 60" stroke="#3b6fe0" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5" />
            </svg>
          </div>

          {/* Main image */}
          <div className="group relative row-span-2 min-h-[280px] overflow-hidden rounded-2xl">
            <Image
              src={about.imageMain}
              alt="HarborMedia.ai camera position overlooking a working marina"
              fill
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          <p className="col-span-1 text-sm leading-relaxed text-muted">
            {about.body}
          </p>
        </div>

        {/* Right: heading + image + CTA */}
        <div>
          <h2 className="font-serif text-4xl leading-tight text-white sm:text-5xl">
            {about.title}
          </h2>

          {/* Secondary image */}
          <div className="group relative mt-8 h-56 overflow-hidden rounded-2xl sm:h-64">
            <Image
              src={about.imageSecondary}
              alt="Waterfront view captured automatically by the HarborMedia.ai platform"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          <a
            href="#channels"
            className="mt-8 inline-block rounded-full bg-blue px-10 py-3 text-sm font-semibold tracking-widest text-white shadow-lg shadow-blue/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue/50 hover:-translate-y-0.5"
          >
            {about.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
