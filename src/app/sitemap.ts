import type { MetadataRoute } from "next";
import { SITE_URL, blogs, pages, type PageSeo } from "../lib/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const url = (path: string) => (path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}/`);
  return [
    ...Object.entries(pages as Record<string, PageSeo>)
      .filter(([, page]) => !page.noindex)
      .map(([path]) => ({
      url: url(path),
      changeFrequency: "monthly" as const,
      priority: path === "/" ? 1 : path.startsWith("/services") ? 0.9 : 0.6,
    })),
    ...Object.entries(blogs).map(([path, blog]) => ({
      url: url(path),
      lastModified: blog.published,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
  ];
}
