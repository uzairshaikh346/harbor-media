"use client";

import { useState } from "react";
import Image from "next/image";
import { amenities } from "@/lib/data";

const cardImages = [
  amenities.strips[0],
  amenities.strips[1],
  amenities.strips[2],
  amenities.featured.image,
  amenities.strips[0],
  amenities.strips[1],
  amenities.strips[2],
];

const DEFAULT_ACTIVE = 3;

export default function Amenities() {
  const [active, setActive] = useState(DEFAULT_ACTIVE);

  return (
    <section className="relative py-20 sm:py-28">
      {/* Ellipse glow — bleeds across section borders */}
      <img
        src="/ellipse.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -left-64 top-1/2 h-[700px] w-[700px] -translate-y-1/2 select-none opacity-30"
      />
      {/* Header */}
      <div className="container-x relative z-10 mb-14 text-center">
        <h2 className="mx-auto max-w-xl font-serif text-4xl leading-tight text-white sm:text-5xl">
          {amenities.title}
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted">
          {amenities.intro}
        </p>
      </div>

      {/* Expanding cards strip */}
      <div
        className="flex h-[480px] items-stretch justify-center gap-3 overflow-hidden px-3"
        onMouseLeave={() => setActive(DEFAULT_ACTIVE)}
      >
        {cardImages.map((img, i) => (
          <div
            key={i}
            onMouseEnter={() => setActive(i)}
            style={{ width: active === i ? "420px" : "72px" }}
            className="relative shrink-0 cursor-pointer overflow-hidden rounded-2xl transition-all duration-500 ease-in-out"
          >
            <Image
              src={img}
              alt="Waterfront footage from the HarborMedia.ai camera network"
              fill
              sizes="26rem"
              className={`object-cover transition-all duration-500 ${
                active !== i ? "blur-sm brightness-75" : ""
              }`}
            />

            {/* Frosted glass info panel — only on active */}
            <div
              className={`absolute inset-x-3 top-3 rounded-2xl bg-white/10 p-5 backdrop-blur-md transition-all duration-300 ${
                active === i ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              <h3 className="font-serif text-xl text-white sm:text-2xl">
                {amenities.featured.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/85">
                {amenities.featured.body}
              </p>
              <a
                href="#channels"
                className="mt-4 inline-block rounded-md border border-white/50 px-5 py-2 text-xs font-semibold tracking-widest text-white hover:bg-white/10"
              >
                {amenities.featured.cta}
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-12 flex justify-center">
        <a
          href="#platform"
          className="grad-gold rounded-full px-12 py-3 text-sm font-semibold tracking-widest text-white transition-opacity hover:opacity-90"
        >
          {amenities.cta}
        </a>
      </div>
    </section>
  );
}
