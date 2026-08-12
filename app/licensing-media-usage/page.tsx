import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { licensingPolicy } from "@/lib/legal";

export const metadata: Metadata = {
  title: licensingPolicy.title,
  description: licensingPolicy.description,
  alternates: { canonical: "/licensing-media-usage" },
};

export default function LicensingMediaUsage() {
  return <LegalPage doc={licensingPolicy} />;
}
