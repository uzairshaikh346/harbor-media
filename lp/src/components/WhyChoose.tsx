import Image from "next/image";
import { whyChoose } from "@/lib/data";

export default function WhyChoose() {
  return (
    <section id="platform" className="relative py-20 sm:py-28">
      <img src="/ellipse.png" alt="" aria-hidden="true"
        className="pointer-events-none absolute -left-64 top-1/2 h-[700px] w-[700px] -translate-y-1/2 select-none opacity-30"
      />
      <div className="container-x relative z-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <h2 className="max-w-md font-serif text-4xl leading-tight text-white sm:text-5xl">
            {whyChoose.title}
          </h2>
          <p className="max-w-xs text-sm leading-relaxed text-muted">{whyChoose.intro}</p>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:items-start">
          {/* Large image with hover zoom */}
          <div className="group relative h-80 overflow-hidden rounded-2xl sm:h-[38rem]">
            <Image
              src={whyChoose.image}
              alt="Wide view of a harbor filmed in 4K by an automated HarborMedia.ai camera"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Numbered steps */}
          <ol className="relative pt-2">
            {whyChoose.steps.map((step, i) => (
              <li key={i} className="group relative flex gap-6 pb-10 last:pb-0">
                {i < whyChoose.steps.length - 1 && (
                  <span className="absolute left-[27px] top-14 h-[calc(100%-3.5rem)] w-px border-l border-dashed border-white/20" />
                )}
                <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-blue/60 font-serif text-2xl text-white transition-all duration-300 group-hover:border-blue group-hover:bg-blue/10 group-hover:text-gold group-hover:shadow-lg group-hover:shadow-blue/20">
                  {i + 1}
                </span>
                <div className="pt-2 transition-transform duration-300 group-hover:translate-x-1">
                  <h3 className="font-serif text-2xl text-white">{step.title}</h3>
                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
