import Hero from "@/components/sections/Hero";
import ClientLogos from "@/components/sections/ClientLogos"; // 1. Impor komponen baru
import Promos from "@/components/sections/Promos";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import AboutUs from "@/components/sections/AboutUs";
import Services from "@/components/sections/Services";
import Testimonials from "../components/sections/Testimonials";
import Blog from "../components/sections/Blog";
import Contact from "../components/sections/Contact";
import Cta from "../components/sections/Cta";

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
      <Hero />
      <ClientLogos />
      <Promos />
      <WhyChooseUs />
      <AboutUs />
      <Services />
      <Testimonials />
      <Blog />
      <Contact />
      <Cta />
    </main>
  );
}
