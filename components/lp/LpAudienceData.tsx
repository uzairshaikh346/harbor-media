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

export default function LpAudienceData() {
  return (
    <section id="audience-data" className="relative py-20 sm:py-28 bg-ink-2">
      <div className="container-x">
        {/* Centered Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-white uppercase">
            REAL MOMENTS. REAL AUDIENCE.
          </h2>
          <p className="mt-4 text-base text-muted">
            Real views, followers and engagement data coming soon.
          </p>
        </div>

        {/* 3 Metric Cards Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {metrics.map((item) => (
            <div
              key={item.label}
              className="grad-card flex flex-col items-center justify-center rounded-2xl border border-white/10 px-6 py-12 text-center transition-all duration-300 hover:border-white/25 hover:-translate-y-1 sm:py-14"
            >
              <span className="text-xs font-semibold tracking-widest text-gold uppercase">
                {item.label}
              </span>
              <p className="mt-3 font-serif text-2xl sm:text-3xl font-normal text-white">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
