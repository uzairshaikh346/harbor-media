import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { submissionPolicy } from "@/lib/legal";

export const metadata: Metadata = {
  title: submissionPolicy.title,
  description: submissionPolicy.description,
  alternates: { canonical: "/photo-video-submissions" },
};

export default function PhotoVideoSubmissions() {
  return <LegalPage doc={submissionPolicy} />;
}
