import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { privacyPolicy } from "@/lib/legal";

export const metadata: Metadata = {
  title: privacyPolicy.title,
  description: privacyPolicy.description,
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicy() {
  return <LegalPage doc={privacyPolicy} />;
}
