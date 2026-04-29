import { servicesData } from "@/data/servicesData";
import { workshopLocations } from "@/data/locations";
import { slugify } from "@/lib/slug";
import { client } from "@/lib/contentful";

export function getSiteUrl() {
  return (process.env.NEXT_PUBLIC_SITE_URL || "https://tjmautocare.id").replace(
    /\/+$/,
    "",
  );
}

export function withBase(baseUrl, path) {
  const base = String(baseUrl).replace(/\/+$/, "");
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalizedPath === "/" ? "" : normalizedPath}`;
}

export function getCoreRoutes(baseUrl, now = new Date()) {
  const staticPaths = [
    "/",
    "/layanan",
    "/galeri",
    "/kontak",
    "/tentang-kami",
    "/kemitraan",
    "/promo",
    "/berita",
    "/peduli",
  ];

  const staticRoutes = staticPaths.map((path) => ({
    url: withBase(baseUrl, path),
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));

  const serviceRoutes = (servicesData || [])
    .filter((service) => service?.slug)
    .map((service) => ({
      url: withBase(baseUrl, `/layanan/${service.slug}`),
      lastModified: now,
      changeFrequency: "weekly",
      priority: String(service.slug).includes("kaki-kaki") ? 0.9 : 0.7,
    }));

  return [...staticRoutes, ...serviceRoutes];
}

export function getCityRoutes(baseUrl, now = new Date()) {
  const cityIndexRoute = {
    url: withBase(baseUrl, "/kota"),
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  };

  const cityRoutes = (workshopLocations || [])
    .filter((location) => location?.city)
    .map((location) => ({
      url: withBase(baseUrl, `/kota/${slugify(location.city)}`),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    }));

  return [cityIndexRoute, ...cityRoutes];
}

export async function getBlogRoutes(baseUrl, now = new Date()) {
  const blogIndexRoute = {
    url: withBase(baseUrl, "/blog"),
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  };

  try {
    const response = await client.getEntries({
      content_type: "tjmBlog",
      select: "fields.slug,fields.date",
      order: "-fields.date",
      limit: 1000,
    });

    const items = response?.items || [];
    const blogRoutes = items
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

    return [blogIndexRoute, ...blogRoutes];
  } catch (error) {
    console.warn("[sitemap] Failed to fetch blog posts from Contentful", error);
    return [blogIndexRoute];
  }
}
