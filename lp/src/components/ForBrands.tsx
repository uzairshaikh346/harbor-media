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

export default function ForBrands() {
  return (
    <section id="brands" className="relative bg-[#07090e] py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Text & Benefits */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Eyebrow */}
            <div className="flex items-center gap-2.5 select-none">
              <span className="h-2 w-2 rounded-full bg-[#ff9900]" />
              <span className="text-xs font-bold tracking-[0.24em] text-[#ff9900] uppercase">
                FOR BRANDS
              </span>
            </div>

            {/* Headline */}
            <h2 className="mt-4 font-serif text-3xl sm:text-5xl lg:text-[54px] font-normal leading-[1.1] tracking-tight text-white uppercase">
              PUT YOUR BRAND IN <br className="hidden sm:inline" />
              REAL MOMENTS.
            </h2>

            {/* Subtitle */}
            <p className="mt-6 text-sm sm:text-base leading-relaxed text-[#9ca3af] max-w-xl">
              Partner with HarborMedia to connect your brand with premium locations, authentic content and engaged audiences.
            </p>

            {/* 3 Numbered Benefits */}
            <div className="mt-10 space-y-6">
              {benefits.map((benefit) => (
                <div key={benefit.number} className="flex items-start gap-4">
                  <span className="font-serif text-lg font-bold text-[#ff9900] w-7 shrink-0 pt-0.5">
                    {benefit.number}
                  </span>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold tracking-wider text-white uppercase">
                      {benefit.title}
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm leading-relaxed text-[#9ca3af]">
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
                className="inline-flex items-center justify-center rounded-md bg-[#ff9900] px-7 py-3.5 text-xs sm:text-sm font-bold tracking-wider text-black uppercase transition-all duration-200 hover:bg-[#ffaa1a] hover:shadow-lg hover:shadow-orange-500/25 active:scale-[0.98]"
              >
                BECOME A PARTNER
              </Link>
              <Link
                href="/contact?intent=advertise"
                className="inline-flex items-center justify-center rounded-md bg-[#131720] px-7 py-3.5 text-xs sm:text-sm font-bold tracking-wider text-white uppercase border border-white/15 transition-all duration-200 hover:bg-white/10 hover:border-white/30 active:scale-[0.98]"
              >
                ADVERTISE WITH US
              </Link>
            </div>
          </div>

          {/* Right Image Container */}
          <div className="lg:col-span-6">
            <div className="relative min-h-[380px] sm:min-h-[480px] lg:min-h-[580px] w-full overflow-hidden rounded-2xl border border-white/[0.08] shadow-2xl shadow-black/70">
              <Image
                src="/images/for-brands.png"
                alt="Luxury rooftop terrace overlooking yacht harbor at sunset"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
