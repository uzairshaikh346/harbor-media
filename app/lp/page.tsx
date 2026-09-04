import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LpHero from "@/components/lp/LpHero";
import LpThreeWays from "@/components/lp/LpThreeWays";
import LpFeaturedProject from "@/components/lp/LpFeaturedProject";
import LpStatementBanner from "@/components/lp/LpStatementBanner";
import LpTechnology from "@/components/lp/LpTechnology";
import LpComingSoonNetwork from "@/components/lp/LpComingSoonNetwork";
import LpHostCta from "@/components/lp/LpHostCta";
import LpForBrands from "@/components/lp/LpForBrands";
import LpAudienceData from "@/components/lp/LpAudienceData";
import LpFinalCta from "@/components/lp/LpFinalCta";

export const metadata: Metadata = {
  title: "Landing Page",
  description:
    "Real Places. Real Moments. Intelligently Published. Explore HarborMedia's living media network for the world's iconic waterfronts.",
  alternates: { canonical: "/lp" },
};

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-ink text-white">
      <Navbar />
      <LpHero />
      <LpThreeWays />
      <LpFeaturedProject />
      <LpStatementBanner />
      <LpTechnology />
      <LpComingSoonNetwork />
      <LpHostCta />
      <LpForBrands />
      <LpAudienceData />
      <LpFinalCta />
      <Footer />
    </main>
  );
}
