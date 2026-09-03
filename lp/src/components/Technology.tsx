interface Step {
  number: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: "01",
    title: "4K CAMERAS",
    description:
      "Premium cameras capture extraordinary locations in stunning cinematic quality.",
  },
  {
    number: "02",
    title: "AI CURATION",
    description:
      "Intelligent systems identify and curate the most compelling moments.",
  },
  {
    number: "03",
    title: "AUTOMATED CONTENT",
    description:
      "Captured moments are automatically transformed into engaging digital content.",
  },
  {
    number: "04",
    title: "DISTRIBUTION",
    description:
      "Content is intelligently published and distributed across digital platforms.",
  },
];

export default function Technology() {
  return (
    <section id="technology" className="relative bg-[#07090e] py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
        {/* Eyebrow */}
        <div className="flex items-center gap-2.5 select-none">
          <span className="h-2 w-2 rounded-full bg-[#ff9900]" />
          <span className="text-xs font-bold tracking-[0.24em] text-[#ff9900] uppercase">
            THE TECHNOLOGY
          </span>
        </div>

        {/* Headline */}
        <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-white uppercase">
          FROM CAMERA TO AUDIENCE. INTELLIGENTLY.
        </h2>

        {/* 4 Steps Timeline Grid */}
        <div className="mt-16 sm:mt-24 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {steps.map((step, idx) => (
            <div key={step.number} className="relative flex flex-col">
              {/* Top Row: Number + horizontal connecting line */}
              <div className="flex items-center">
                <span className="font-serif text-2xl sm:text-3xl font-normal text-[#ff9900]">
                  {step.number}
                </span>
                {idx < steps.length - 1 && (
                  <div className="ml-6 hidden h-[1px] flex-1 bg-white/15 lg:block" />
                )}
              </div>

              {/* Title */}
              <h3 className="mt-6 text-sm sm:text-base font-bold tracking-wider text-white uppercase">
                {step.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm leading-relaxed text-[#9ca3af]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
