import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = "https://harbormedia.example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "HarborMedia — Luxury Yacht Charters",
    template: "%s | HarborMedia",
  },
  description:
    "Experience world-class yacht charters with breathtaking views, premium comfort, and personalized service for unforgettable journeys.",
  keywords: [
    "luxury yacht charter",
    "yacht rental",
    "superyacht",
    "marine services",
    "HarborMedia",
  ],
  authors: [{ name: "HarborMedia" }],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "HarborMedia — Luxury Yacht Charters",
    description:
      "World-class yacht charters with breathtaking views, premium comfort, and personalized service.",
    siteName: "HarborMedia",
  },
  twitter: {
    card: "summary_large_image",
    title: "HarborMedia — Luxury Yacht Charters",
    description:
      "World-class yacht charters with breathtaking views, premium comfort, and personalized service.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
