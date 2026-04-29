import { getCoreRoutes, getSiteUrl } from "@/lib/sitemap";

// Refresh sitemap periodically so new Contentful posts are picked up without redeploy.
export const revalidate = 3600;

export default async function sitemap() {
  const baseUrl = getSiteUrl();
  const now = new Date();
  return getCoreRoutes(baseUrl, now);
}
