import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { advertiserDisclosure } from "@/lib/legal";

export const metadata: Metadata = {
  title: advertiserDisclosure.title,
  description: advertiserDisclosure.description,
  alternates: { canonical: "/advertiser-disclosure" },
};

export default function AdvertiserDisclosure() {
  return <LegalPage doc={advertiserDisclosure} />;
}
