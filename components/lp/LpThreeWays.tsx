"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play, Briefcase, Camera } from "lucide-react";

interface PathCard {
  id: string;
  iconType: "watch" | "partner" | "host";
  title: string;
  description: string;
  linkText: string;
  href: string;
  image: string;
}

const cards: PathCard[] = [
  {
    id: "watch",
    iconType: "watch",
    title: "WATCH",
    description:
      "Experience extraordinary places and real moments through HarborMedia's live and curated content.",
    linkText: "EXPLORE",
    href: "#featured",
    image: "/images/three-ways-watch.png",
  },
  {
    id: "partner",
    iconType: "partner",
    title: "PARTNER",
    description:
      "Connect your brand with premium real-world experiences and authentic audiences.",
    linkText: "PARTNER WITH US",
    href: "/contact?intent=partner",
    image: "/images/three-ways-partner.png",
  },
  {
    id: "host",
    iconType: "host",
    title: "HOST A CAMERA",
    description:
      "Turn your extraordinary location into a global digital experience.",
    linkText: "LEARN MORE",
    href: "/contact?intent=host",
    image: "/images/three-ways-host.png",
  },
];

export default function LpThreeWays() {
  return (
    <section id="experience" className="glow-warm relative py-20 sm:py-28">
      <div className="container-x">
        {/* Eyebrow */}
        <div className="flex items-center gap-2.5 select-none">
          <span className="h-2 w-2 rounded-full bg-gold" />
          <span className="text-xs font-semibold tracking-widest text-gold uppercase">
            CHOOSE YOUR PATH
          </span>
        </div>

        {/* Section Heading */}
        <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight tracking-tight text-white uppercase">
          THREE WAYS TO EXPERIENCE HARBORMEDIA
        </h2>

        {/* 3 Cards Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card) => (
            <Link
              key={card.id}
              href={card.href}
              className="group relative flex min-h-[460px] sm:min-h-[500px] flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-ink-2 p-8 transition-all duration-300 hover:border-white/25 hover:shadow-2xl hover:shadow-black/60 hover:-translate-y-1"
            >
              {/* Background Image with subtle zoom on hover */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                {/* Cinematic Gradients matching ink */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/65 to-ink/20" />
                <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 group-hover:bg-black/10" />
              </div>

              {/* Top-left Icon */}
              <div className="relative z-10">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-gold/40 bg-ink/60 text-gold backdrop-blur-sm transition-all duration-300 group-hover:border-gold group-hover:bg-gold/15">
                  {card.iconType === "watch" && (
                    <div className="flex h-7 w-7 items-center justify-center rounded-full border border-gold">
                      <Play className="h-3.5 w-3.5 fill-gold stroke-gold ml-0.5" />
                    </div>
                  )}
                  {card.iconType === "partner" && (
                    <Briefcase className="h-5 w-5 stroke-current" />
                  )}
                  {card.iconType === "host" && (
                    <Camera className="h-5 w-5 stroke-current" />
                  )}
                </div>
              </div>

              {/* Bottom Content */}
              <div className="relative z-10">
                <h3 className="font-serif text-2xl font-normal text-white uppercase">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {card.description}
                </p>

                {/* Link Action */}
                <div className="mt-6 flex items-center gap-2 text-xs font-semibold tracking-wider text-gold group-hover:text-gold-light uppercase transition-colors">
                  <span>{card.linkText}</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
