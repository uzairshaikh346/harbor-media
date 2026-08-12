import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { copyrightPolicy } from "@/lib/legal";

export const metadata: Metadata = {
  title: copyrightPolicy.title,
  description: copyrightPolicy.description,
  alternates: { canonical: "/copyright-dmca-policy" },
};

export default function CopyrightDmcaPolicy() {
  return <LegalPage doc={copyrightPolicy} />;
}
