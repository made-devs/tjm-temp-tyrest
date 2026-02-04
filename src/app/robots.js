export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/private/", "/admin/"],
      },
    ],
    sitemap: "https://tjmautocare.id/sitemap.xml",
    host: "https://tjmautocare.id",
  };
}
