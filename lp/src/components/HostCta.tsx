import Image from "next/image";
import Link from "next/link";
import { Camera } from "lucide-react";

export default function HostCta() {
  return (
    <section className="relative w-full overflow-hidden py-28 sm:py-36 md:py-44 flex items-center justify-center">
      {/* Background Image */}
      <Image
        src="/images/host-cliff-bg.png"
        alt="Coastal cliff path overlooking ocean at sunset"
        fill
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Atmospheric dark overlays matching Figma */}
      <div className="absolute inset-0 bg-black/65" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#07090e] via-transparent to-[#07090e]" />
      <div className="absolute inset-0 bg-radial from-transparent via-black/40 to-black/85" />

      {/* Content */}
      <div className="container-x relative z-10 mx-auto max-w-4xl text-center px-4">
        {/* Main Headline */}
        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-[68px] font-normal tracking-tight text-white uppercase drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)]">
          YOUR PLACE COULD BE NEXT.
        </h2>

        {/* Subtitle */}
        <p className="mt-5 sm:mt-6 text-sm sm:text-base md:text-lg leading-relaxed text-[#d1d5db] max-w-2xl mx-auto drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
          Bring HarborMedia to your location and share your place with audiences around the world.
        </p>

        {/* Button */}
        <div className="mt-8 sm:mt-10 flex justify-center">
          <Link
            href="/contact?intent=host"
            className="inline-flex items-center justify-center gap-2.5 rounded-md bg-[#ff9900] px-8 py-3.5 text-xs sm:text-sm font-bold tracking-wider text-black uppercase transition-all duration-200 hover:bg-[#ffaa1a] hover:shadow-lg hover:shadow-orange-500/25 active:scale-[0.98]"
          >
            <Camera className="h-4 w-4 stroke-current stroke-2" />
            <span>HOST A CAMERA</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
