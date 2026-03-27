import BerandaHero from "@/components/beranda/BerandaHero";
import LogoKlien from "@/components/beranda/LogoKlien";
import PromoBeranda from "@/components/beranda/PromoBeranda";
import AlasanMemilihKami from "@/components/beranda/AlasanMemilihKami";
import TentangKami from "@/components/beranda/TentangKami";
import LayananBeranda from "@/components/beranda/LayananBeranda";
import TestimoniPelanggan from "@/components/beranda/TestimoniPelanggan";
import LiputanMedia from "@/components/beranda/LiputanMedia";
import KontakBeranda from "@/components/beranda/KontakBeranda";
import AjakanBeranda from "@/components/beranda/AjakanBeranda";

export const metadata = {
  title: "TJM Auto Care | Website Resmi Bengkel Mobil Spesialis Indonesia",
  description:
    "Website resmi TJM Auto Care dengan info cabang, promo, dan layanan perawatan mobil bergaransi di berbagai kota Indonesia.",
  keywords: [
    "tjm auto care",
    "tjm autocare",
    "tjm auto care indonesia",
    "cabang tjm auto care",
    "tjm auto care terdekat",
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
      <BerandaHero />
      <LogoKlien />
      <PromoBeranda />
      <AlasanMemilihKami />
      <TentangKami />
      <LayananBeranda />
      <TestimoniPelanggan />
      <LiputanMedia />
      <KontakBeranda />
      <AjakanBeranda />
    </main>
  );
}

