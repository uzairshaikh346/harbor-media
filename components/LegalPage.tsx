import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { LegalDoc } from "@/lib/legal";

export default function LegalPage({ doc }: { doc: LegalDoc }) {
  return (
    <main>
      <Navbar />

      {/* Top padding clears the absolutely positioned navbar */}
      <section className="glow-warm pt-36 pb-20 sm:pt-40 sm:pb-28">
        <div className="container-x max-w-3xl">
          <h1 className="font-serif text-4xl leading-tight text-white sm:text-5xl">
            {doc.title}
          </h1>
          <p className="mt-4 text-sm text-gold">Last Updated: {doc.lastUpdated}</p>

          {doc.intro.map((paragraph) => (
            <p key={paragraph} className="mt-5 text-base leading-relaxed text-muted">
              {paragraph}
            </p>
          ))}

          <hr className="my-10 border-white/10" />

          {doc.sections.map((section) => (
            <section key={section.heading} className="mb-10 last:mb-0">
              <h2 className="font-serif text-2xl text-white">{section.heading}</h2>

              {section.blocks.map((block, i) => {
                if (block.type === "text") {
                  return (
                    <p key={i} className="mt-4 text-sm leading-relaxed text-muted">
                      {block.content}
                    </p>
                  );
                }

                if (block.type === "terms") {
                  return (
                    <dl key={i} className="mt-4 space-y-5">
                      {block.items.map((item) => (
                        <div key={item.term}>
                          <dt className="text-sm font-semibold text-white">{item.term}</dt>
                          <dd className="mt-1.5 text-sm leading-relaxed text-muted">
                            {item.definition}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  );
                }

                return (
                  <ul key={i} className="mt-4 space-y-2.5">
                    {block.items.map((item) => (
                      <li
                        key={item}
                        className="relative pl-5 text-sm leading-relaxed text-muted before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gold"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                );
              })}
            </section>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
