import { servicesData } from "@/data/servicesData";
import { workshopLocations } from "@/data/locations";
import { slugify } from "@/lib/slug";
import { client } from "@/lib/contentful";

// Refresh sitemap periodically so new Contentful posts are picked up without redeploy.
export const revalidate = 3600;

function withBase(baseUrl, path) {
  const base = String(baseUrl).replace(/\/+$/, "");
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p === "/" ? "" : p}`;
}

async function getBlogRoutes(baseUrl, now) {
  try {
    const response = await client.getEntries({
      content_type: "tjmBlog",
      select: "fields.slug,fields.date",
      order: "-fields.date",
      limit: 1000,
    });

    const items = response?.items || [];
    return items
      .map((post) => {
        const slug = post?.fields?.slug;
        if (!slug) return null;

        const date = post?.fields?.date;
        const lastModified = date ? new Date(date) : now;

        return {
          url: withBase(baseUrl, `/blog/${slug}`),
          lastModified: Number.isNaN(lastModified.getTime())
            ? now
            : lastModified,
          changeFrequency: "weekly",
          priority: 0.6,
        };
      })
      .filter(Boolean);
  } catch (error) {
    console.warn("[sitemap] Failed to fetch blog posts from Contentful", error);
    return [];
  }
}

export default async function sitemap() {
  const baseUrl = (
    process.env.NEXT_PUBLIC_SITE_URL || "https://tjmautocare.id"
  ).replace(/\/+$/, "");

  const now = new Date();

  // Halaman statis (termasuk index kota)
  const staticPaths = [
    "/",
    "/layanan",
    "/blog",
    "/galeri",
    "/kontak",
    "/tentang-kami",
    "/partnership",
    "/promo",
    "/news",
    "/peduli",
    "/kota",
  ];

  const staticRoutes = staticPaths.map((path) => ({
    url: withBase(baseUrl, path),
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));

  // Halaman layanan (global)
  const serviceRoutes = (servicesData || [])
    .filter((s) => s?.slug)
    .map((service) => ({
      url: withBase(baseUrl, `/layanan/${service.slug}`),
      lastModified: now,
      changeFrequency: "weekly",
      priority: String(service.slug).includes("kaki-kaki") ? 0.9 : 0.7,
    }));

  // Halaman kota (1 page per kota)
  const cityRoutes = (workshopLocations || [])
    .filter((l) => l?.city)
    .map((loc) => {
      const citySlug = slugify(loc.city);
      return {
        url: withBase(baseUrl, `/kota/${citySlug}`),
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.7,
      };
    });

  const blogRoutes = await getBlogRoutes(baseUrl, now);

  return [...staticRoutes, ...serviceRoutes, ...cityRoutes, ...blogRoutes];
}
