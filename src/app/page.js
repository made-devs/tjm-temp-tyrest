import Hero from "@/components/sections/Hero";
import ClientLogos from "@/components/sections/ClientLogos"; // 1. Impor komponen baru
import HomeDeferredSections from "@/components/sections/HomeDeferredSections";

export const metadata = {
  title: "TJM Auto Care | Bengkel Spesialis Kaki-Kaki Mobil #1 di Indonesia",
  description:
    "Bengkel spesialis kaki-kaki mobil terpercaya dengan 20+ cabang di Indonesia. Service shockbreaker, rack steer, tie rod dengan garansi. Konsultasi GRATIS!",
  keywords: [
    "bengkel kaki kaki mobil",
    "service kaki kaki mobil",
    "bengkel spesialis suspensi",
    "perbaikan shockbreaker",
    "tjm auto care",
  ],
  openGraph: {
    title: "TJM Auto Care | Bengkel Spesialis Kaki-Kaki Mobil",
    description:
      "Bengkel spesialis kaki-kaki mobil terpercaya — service shockbreaker, rack steer, balancing, dan spooring dengan garansi.",
    url: "https://tjmautocare.id",
    siteName: "TJM Auto Care",
    type: "website",
    images: [
      {
        url: "https://tjmautocare.id/og-image-homepage.webp",
        width: 1200,
        height: 630,
        alt: "TJM Auto Care - Bengkel Kaki-Kaki Mobil",
      },
    ],
  },
  alternates: {
    canonical: "https://tjmautocare.id",
  },
};

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ClientLogos />
      <HomeDeferredSections />
    </main>
  );
}
