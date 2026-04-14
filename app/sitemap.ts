import type { MetadataRoute } from "next";
import { menuCategories } from "@/data/menuData";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/menu", "/about", "/gallery", "/contact"];
  const now = new Date();

  return [
    ...staticRoutes.map((path) => ({
      url: `${siteConfig.url}${path}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.8,
    })),
    ...menuCategories.map((category) => ({
      url: `${siteConfig.url}/menu/${category}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
  ];
}
