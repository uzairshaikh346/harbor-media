import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { aiEditorialStandards } from "@/lib/legal";

export const metadata: Metadata = {
  title: aiEditorialStandards.title,
  description: aiEditorialStandards.description,
  alternates: { canonical: "/ai-editorial-standards" },
};

export default function AiEditorialStandards() {
  return <LegalPage doc={aiEditorialStandards} />;
}
