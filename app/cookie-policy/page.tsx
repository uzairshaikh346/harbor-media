import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { cookiePolicy } from "@/lib/legal";

export const metadata: Metadata = {
  title: cookiePolicy.title,
  description: cookiePolicy.description,
  alternates: { canonical: "/cookie-policy" },
};

export default function CookiePolicy() {
  return <LegalPage doc={cookiePolicy} />;
}
