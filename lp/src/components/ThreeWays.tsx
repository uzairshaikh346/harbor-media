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
    href: "/#channels",
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

export default function ThreeWays() {
  return (
    <section id="experience" className="relative bg-[#07090e] py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
        {/* Eyebrow */}
        <div className="flex items-center gap-2.5 select-none">
          <span className="h-2 w-2 rounded-full bg-[#ff9900]" />
          <span className="text-xs font-bold tracking-[0.24em] text-[#ff9900] uppercase">
            CHOOSE YOUR PATH
          </span>
        </div>

        {/* Section Heading */}
        <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-white uppercase">
          THREE WAYS TO EXPERIENCE HARBORMEDIA
        </h2>

        {/* 3 Cards Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card) => (
            <Link
              key={card.id}
              href={card.href}
              className="group relative flex min-h-[460px] sm:min-h-[500px] flex-col justify-between overflow-hidden rounded-xl border border-white/[0.08] bg-[#0d1017] p-7 transition-all duration-300 hover:border-white/20 hover:shadow-2xl hover:shadow-black/60"
            >
              {/* Background Image with Zoom on hover */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                {/* Cinematic Gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-[#07090e]/60 to-[#07090e]/20" />
                <div className="absolute inset-0 bg-black/25 transition-opacity duration-300 group-hover:bg-black/15" />
              </div>

              {/* Top-left Icon */}
              <div className="relative z-10">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[#ff9900]/40 bg-[#07090e]/40 backdrop-blur-sm transition-all duration-300 group-hover:border-[#ff9900] group-hover:bg-[#ff9900]/10">
                  {card.iconType === "watch" && (
                    <div className="flex h-7 w-7 items-center justify-center rounded-full border border-[#ff9900]">
                      <Play className="h-3.5 w-3.5 fill-[#ff9900] stroke-[#ff9900] ml-0.5" />
                    </div>
                  )}
                  {card.iconType === "partner" && (
                    <Briefcase className="h-5 w-5 stroke-[#ff9900]" />
                  )}
                  {card.iconType === "host" && (
                    <Camera className="h-5 w-5 stroke-[#ff9900]" />
                  )}
                </div>
              </div>

              {/* Bottom Content */}
              <div className="relative z-10 pt-16">
                <h3 className="font-serif text-2xl sm:text-3xl font-normal uppercase tracking-wide text-white">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#cbd5e1]">
                  {card.description}
                </p>
                <div className="mt-6 inline-flex items-center gap-2 text-xs font-bold tracking-wider text-[#ff9900] uppercase transition-colors duration-200 group-hover:text-[#ffaa1a]">
                  <span>{card.linkText}</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
