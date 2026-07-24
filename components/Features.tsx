import { features } from "@/lib/data";

function AnchorIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="4" r="2.2" stroke="#fff" strokeWidth="1.6" />
      <path d="M12 6.2V21M6 12H4c0 4.4 3.6 8 8 8s8-3.6 8-8h-2M8.5 9.5h7" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BlankIcon() {
  return <div className="h-10 w-10 rounded-xl bg-white/90" />;
}

export default function Features() {
  return (
    <section id="features" className="py-8 sm:py-12">
      <div className="container-x grid gap-6 md:grid-cols-3">
        {features.map((f, i) => (
          <article
            key={i}
            className={`group rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-2 ${
              f.highlight
                ? "grad-gold hover:shadow-xl hover:shadow-gold/30"
                : "grad-card border border-blue/30 hover:border-blue/60 hover:shadow-lg hover:shadow-blue/10"
            }`}
          >
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-black/30 backdrop-blur transition-transform duration-300 group-hover:scale-110">
              {f.highlight ? <AnchorIcon /> : <BlankIcon />}
            </div>
            <h3 className="mx-auto mt-6 max-w-[16rem] font-serif text-xl text-white">
              {f.title}
            </h3>
            <p className={`mx-auto mt-4 max-w-[18rem] text-sm leading-relaxed ${f.highlight ? "text-white/85" : "text-muted"}`}>
              {f.body}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
