export default function robots() {
  const siteUrl = (
    process.env.NEXT_PUBLIC_SITE_URL || "https://tjmautocare.id"
  ).replace(/\/+$/, "");

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/private/", "/admin/"],
      },
    ],
    sitemap: [
      `${siteUrl}/sitemap.xml`,
      `${siteUrl}/kota/sitemap.xml`,
      `${siteUrl}/blog/sitemap.xml`,
    ],
    host: siteUrl,
  };
}
