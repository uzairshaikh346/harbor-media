import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { contact } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact HarborMedia.ai about licensing our waterfront footage, sponsorship and media partnerships, copyright, accessibility or general enquiries.",
  alternates: { canonical: "/contact" },
};

export default function Contact() {
  return (
    <main>
      <Navbar />

      {/* Top padding clears the absolutely positioned navbar */}
      <section className="glow-warm pt-36 pb-20 sm:pt-40 sm:pb-28">
        <div className="container-x">
          <h1 className="max-w-2xl font-serif text-4xl leading-tight text-white sm:text-5xl">
            {contact.title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
            {contact.intro}
          </p>

          <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-14">
            <ContactForm />

            <div>
              <h2 className="font-serif text-2xl text-white">
                {contact.departmentsTitle}
              </h2>

              <ul className="mt-6 space-y-6">
                {contact.departments.map((d) => (
                  <li
                    key={d.email}
                    className="border-b border-white/10 pb-6 last:border-0 last:pb-0"
                  >
                    <h3 className="text-sm font-semibold text-white">{d.name}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">{d.body}</p>
                    <a
                      href={`mailto:${d.email}`}
                      className="mt-2 inline-block text-sm text-gold transition-colors hover:text-gold-light"
                    >
                      {d.email}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
