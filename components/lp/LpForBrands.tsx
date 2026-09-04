import Image from "next/image";
import Link from "next/link";

interface BrandBenefit {
  number: string;
  title: string;
  description: string;
}

const benefits: BrandBenefit[] = [
  {
    number: "01",
    title: "PREMIUM ENVIRONMENTS",
    description: "Place your brand alongside extraordinary real-world locations.",
  },
  {
    number: "02",
    title: "AUTHENTIC CONTENT",
    description: "Connect with audiences through natural and engaging experiences.",
  },
  {
    number: "03",
    title: "SMART DISTRIBUTION",
    description: "Reach audiences across multiple digital platforms.",
  },
];

export default function LpForBrands() {
  return (
    <section id="brands" className="glow-warm relative py-20 sm:py-28">
      <div className="container-x">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Text & Benefits */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Eyebrow */}
            <div className="flex items-center gap-2.5 select-none">
              <span className="h-2 w-2 rounded-full bg-gold" />
              <span className="text-xs font-semibold tracking-widest text-gold uppercase">
                FOR BRANDS
              </span>
            </div>

            {/* Headline */}
            <h2 className="mt-4 font-serif text-3xl sm:text-5xl lg:text-5xl font-normal leading-[1.15] tracking-tight text-white uppercase">
              PUT YOUR BRAND IN <br className="hidden sm:inline" />
              REAL MOMENTS.
            </h2>

            {/* Subtitle */}
            <p className="mt-6 text-base leading-relaxed text-muted max-w-xl">
              Partner with HarborMedia to connect your brand with premium locations, authentic content and engaged audiences.
            </p>

            {/* 3 Numbered Benefits */}
            <div className="mt-10 space-y-6">
              {benefits.map((benefit) => (
                <div key={benefit.number} className="flex items-start gap-4">
                  <span className="font-serif text-xl font-bold text-gold w-8 shrink-0 pt-0.5">
                    {benefit.number}
                  </span>
                  <div>
                    <h3 className="text-sm font-bold tracking-wider text-white uppercase">
                      {benefit.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/contact?intent=partner"
                className="inline-flex items-center justify-center rounded-md bg-gold px-7 py-3 text-sm font-semibold tracking-wide text-black uppercase transition-all duration-300 hover:bg-gold-light hover:shadow-lg hover:shadow-gold/30 hover:-translate-y-0.5 active:scale-[0.98]"
              >
                BECOME A PARTNER
              </Link>
              <Link
                href="/contact?intent=advertise"
                className="inline-flex items-center justify-center rounded-md border border-white/20 bg-ink-3 px-7 py-3 text-sm font-semibold tracking-wide text-white uppercase transition-all duration-300 hover:bg-white/10 hover:border-white/35 hover:-translate-y-0.5 active:scale-[0.98]"
              >
                ADVERTISE WITH US
              </Link>
            </div>
          </div>

          {/* Right Image Container */}
          <div className="lg:col-span-6">
            <div className="relative min-h-[380px] sm:min-h-[480px] lg:min-h-[540px] w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/70">
              <Image
                src="/images/for-brands.png"
                alt="Luxury rooftop terrace overlooking yacht harbor at sunset"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
