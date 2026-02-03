import { servicesData } from "@/data/servicesData";

export default async function sitemap() {
  const baseUrl = "https://tjmautocare.id";

  // Daftar rute statis utama
  const staticRoutes = [
    "",
    "/layanan",
    "/blog",
    "/galeri",
    "/kontak",
    "/tentang-kami",
    "/partnership",
    "/promo",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));

  // Daftar rute dinamis dari servicesData (Termasuk kategori Kaki-Kaki)
  const serviceRoutes = servicesData.map((service) => ({
    url: `${baseUrl}/layanan/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: service.slug.includes("kaki-kaki") ? 0.9 : 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
