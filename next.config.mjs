/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
        pathname: "/**",
      },
      {
        // Menambahkan hostname baru di sini
        protocol: "https",
        hostname: "i.imgur.com",
        port: "",
        pathname: "/**",
      },
      {
        // Menambahkan hostname baru di sini
        protocol: "https",
        hostname: "images.ctfassets.net",
        port: "",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      // Legacy city routes (previously at root) -> current /kota/[slug]
      {
        source: "/bogor/:path*",
        destination: "/kota/bogor/:path*",
        permanent: true,
      },
      {
        source: "/bandung/:path*",
        destination: "/kota/bandung/:path*",
        permanent: true,
      },
      {
        source: "/semarang/:path*",
        destination: "/kota/semarang/:path*",
        permanent: true,
      },
      {
        source: "/surabaya/:path*",
        destination: "/kota/surabaya/:path*",
        permanent: true,
      },
      {
        source: "/bali/:path*",
        destination: "/kota/bali/:path*",
        permanent: true,
      },

      // Legacy service slugs -> current service pages
      {
        source: "/layanan/paket-detailing/:path*",
        destination: "/layanan/paket-detailing-series/:path*",
        permanent: true,
      },
      {
        source: "/layanan/paket-racksteer-hemat/:path*",
        destination: "/layanan/paket-kaki-kaki-racksteer/:path*",
        permanent: true,
      },
      {
        source: "/layanan/paket-overhaul-engine/:path*",
        destination: "/layanan/paket-overhaul/:path*",
        permanent: true,
      },
      {
        source: "/layanan/paket-anti-karat/:path*",
        destination: "/layanan/paket-combo-pasti-hemat/:path*",
        permanent: true,
      },
      {
        source: "/layanan/paket-ac-mobil/:path*",
        destination: "/layanan/paket-ac-series/:path*",
        permanent: true,
      },

      // Legacy group page
      {
        source: "/group/:path*",
        destination: "/partnership/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
