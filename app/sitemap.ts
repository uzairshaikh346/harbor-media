import type { MetadataRoute } from "next";

const siteUrl = "https://harbormedia.ai";

const legalPaths = [
  "/privacy-policy",
  "/terms-of-service",
  "/cookie-policy",
  "/copyright-dmca-policy",
  "/ai-editorial-standards",
  "/licensing-media-usage",
  "/drone-operations",
  "/photo-video-submissions",
  "/accessibility-statement",
  "/advertiser-disclosure",
  "/live-camera-policy",
  "/corrections-policy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    ...legalPaths.map((path) => ({
      url: `${siteUrl}${path}`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ];
}
