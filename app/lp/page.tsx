import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import Yachts from "@/components/Yachts";
import Amenities from "@/components/Amenities";
import WhyChoose from "@/components/WhyChoose";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import ClientOnly from "@/components/ClientOnly";

export const metadata: Metadata = {
  title: "HarborMedia Overview",
  description: "Explore HarborMedia.ai cameras, channels, and platform.",
  alternates: { canonical: "/lp" },
};

export default function LpPage() {
  return (
    <main suppressHydrationWarning>
      <ClientOnly>
        <Navbar />
        <Hero />
        <About />
        <Features />
        <Yachts />
        <Amenities />
        <WhyChoose />
        <Testimonials />
        <Footer />
      </ClientOnly>
    </main>
  );
}
