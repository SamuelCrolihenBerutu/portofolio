import type { MetadataRoute } from "next";
import { profile } from "@/data/content";
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: process.env.NEXT_PUBLIC_SITE_URL ?? profile.site, changeFrequency: "monthly", priority: 1 }];
}
