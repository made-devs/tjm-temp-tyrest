/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Tambahkan properti ini untuk mengizinkan SVG dari remote patterns
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
