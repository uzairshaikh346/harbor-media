import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { accessibilityStatement } from "@/lib/legal";

export const metadata: Metadata = {
  title: accessibilityStatement.title,
  description: accessibilityStatement.description,
  alternates: { canonical: "/accessibility-statement" },
};

export default function AccessibilityStatement() {
  return <LegalPage doc={accessibilityStatement} />;
}
