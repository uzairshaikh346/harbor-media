import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { termsOfService } from "@/lib/legal";

export const metadata: Metadata = {
  title: termsOfService.title,
  description: termsOfService.description,
  alternates: { canonical: "/terms-of-service" },
};

export default function TermsOfService() {
  return <LegalPage doc={termsOfService} />;
}
