import type { MetadataRoute } from "next";
import { getPosts } from "@/lib/posts";
import { SITE_URL } from "@/lib/config";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/golden-visa", "/discover-portugal", "/elite-discovery-program", "/get-started", "/important-information", "/privacy-policy"];
  return [...pages, ...getPosts().map((p) => `/discover-portugal/${p.slug}`)].map((p) => ({ url: SITE_URL + p }));
}
