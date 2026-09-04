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

const siteUrl = "https://harbormedia.ai";

const title = "HarborMedia.ai | AI Powered Waterfront Media";
const description =
  "HarborMedia.ai is an AI powered media company creating authentic, automated visual storytelling from iconic waterfront destinations. Explore Sunrises in the Hamptons and experience a new sunrise every morning.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | HarborMedia.ai",
  },
  description,
  keywords: [
    "HarborMedia.ai",
    "AI media",
    "AI content creation",
    "waterfront media",
    "sunrises",
    "the Hamptons",
    "Long Island",
    "Shinnecock Canal",
    "timelapse",
    "4K video",
    "nature",
    "travel",
    "destination marketing",
    "marina",
    "harbor",
    "artificial intelligence",
    "automation",
    "sunrise photography",
    "coastal living",
  ],
  authors: [{ name: "HarborMedia.ai" }],
  openGraph: {
    type: "website",
    url: siteUrl,
    title,
    description,
    siteName: "HarborMedia.ai",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
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
    <html lang="en" className={`${playfair.variable} ${inter.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
