import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ThreeWays from "@/components/ThreeWays";
import FeaturedProject from "@/components/FeaturedProject";
import StatementBanner from "@/components/StatementBanner";
import Technology from "@/components/Technology";
import ForBrands from "@/components/ForBrands";
import AudienceData from "@/components/AudienceData";
import ComingSoonNetwork from "@/components/ComingSoonNetwork";
import HostCta from "@/components/HostCta";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import LegalPage from "@/components/LegalPage";
import { contact } from "@/lib/data";
import { cookiePolicy, privacyPolicy, termsOfService } from "@/lib/legal";

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", handleLocationChange);
    return () => {
      window.removeEventListener("popstate", handleLocationChange);
    };
  }, []);

  if (currentPath === "/contact") {
    return (
      <main className="min-h-screen bg-ink text-white">
        <Navbar />
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

  if (currentPath === "/privacy-policy") {
    return <LegalPage doc={privacyPolicy} />;
  }

  if (currentPath === "/terms-of-service") {
    return <LegalPage doc={termsOfService} />;
  }

  if (currentPath === "/cookie-policy") {
    return <LegalPage doc={cookiePolicy} />;
  }

  return (
    <main className="min-h-screen bg-ink text-white">
      <Navbar />
      <Hero />
      <ThreeWays />
      <FeaturedProject />
      <StatementBanner />
      <Technology />
      <ComingSoonNetwork />
      <HostCta />
      <ForBrands />
      <AudienceData />
      <FinalCta />
      <Footer />
    </main>
  );
}
