interface MetricCard {
  label: string;
  value: string;
}

const metrics: MetricCard[] = [
  {
    label: "VIEWS DATA",
    value: "Coming Soon",
  },
  {
    label: "FOLLOWERS DATA",
    value: "Coming Soon",
  },
  {
    label: "ENGAGEMENT DATA",
    value: "Coming Soon",
  },
];

export default function AudienceData() {
  return (
    <section id="audience-data" className="relative bg-[#07090e] py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
        {/* Centered Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-white uppercase">
            REAL MOMENTS. REAL AUDIENCE.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#9ca3af]">
            Real views, followers and engagement data coming soon.
          </p>
        </div>

        {/* 3 Metric Cards Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {metrics.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center justify-center rounded-2xl border border-white/[0.08] bg-[#0b0e15] px-6 py-14 text-center transition-all duration-300 hover:border-white/20 sm:py-16"
            >
              <span className="text-xs font-bold tracking-[0.22em] text-[#ff9900] uppercase">
                {item.label}
              </span>
              <p className="mt-4 font-serif text-2xl sm:text-3xl lg:text-[34px] font-normal text-white">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
