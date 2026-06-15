import type { MetadataRoute } from "next";
import { seo } from "@/data/profile";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: seo.url,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
