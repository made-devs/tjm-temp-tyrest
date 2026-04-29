import { getCityRoutes, getSiteUrl } from "@/lib/sitemap";

export const revalidate = 3600;

export default async function sitemap() {
  return getCityRoutes(getSiteUrl(), new Date());
}
