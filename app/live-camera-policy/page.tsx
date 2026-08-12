import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { liveCameraPolicy } from "@/lib/legal";

export const metadata: Metadata = {
  title: liveCameraPolicy.title,
  description: liveCameraPolicy.description,
  alternates: { canonical: "/live-camera-policy" },
};

export default function LiveCameraPolicy() {
  return <LegalPage doc={liveCameraPolicy} />;
}
