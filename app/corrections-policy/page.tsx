import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { correctionsPolicy } from "@/lib/legal";

export const metadata: Metadata = {
  title: correctionsPolicy.title,
  description: correctionsPolicy.description,
  alternates: { canonical: "/corrections-policy" },
};

export default function CorrectionsPolicy() {
  return <LegalPage doc={correctionsPolicy} />;
}
