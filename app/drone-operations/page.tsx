import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { droneOperations } from "@/lib/legal";

export const metadata: Metadata = {
  title: droneOperations.title,
  description: droneOperations.description,
  alternates: { canonical: "/drone-operations" },
};

export default function DroneOperations() {
  return <LegalPage doc={droneOperations} />;
}
