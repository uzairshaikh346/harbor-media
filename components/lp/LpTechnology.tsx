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

export default function LpTechnology() {
  return (
    <section id="technology" className="glow-warm relative py-20 sm:py-28">
      <div className="container-x">
        {/* Eyebrow */}
        <div className="flex items-center gap-2.5 select-none">
          <span className="h-2 w-2 rounded-full bg-gold" />
          <span className="text-xs font-semibold tracking-widest text-gold uppercase">
            THE TECHNOLOGY
          </span>
        </div>

        {/* Headline */}
        <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight tracking-tight text-white uppercase">
          FROM CAMERA TO AUDIENCE. INTELLIGENTLY.
        </h2>

        {/* 4 Steps Timeline Grid */}
        <div className="mt-16 sm:mt-20 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {steps.map((step, idx) => (
            <div key={step.number} className="relative flex flex-col">
              {/* Top Row: Number + horizontal connecting line */}
              <div className="flex items-center">
                <span className="font-serif text-3xl font-semibold text-gold">
                  {step.number}
                </span>
                {idx < steps.length - 1 && (
                  <div className="ml-6 hidden h-px flex-1 bg-white/10 lg:block" />
                )}
              </div>

              {/* Title */}
              <h3 className="mt-6 text-sm sm:text-base font-bold tracking-wider text-white uppercase">
                {step.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
