import ContactPageContent from "@/components/kontak/ContactPageContent";

const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://tjmautocare.id"
).replace(/\/+$/, "");

export const metadata = {
  title: "Kontak TJM Auto Care | Booking Servis & Hubungi Cabang Terdekat",
  description:
    "Hubungi TJM Auto Care untuk booking servis, konsultasi kaki-kaki mobil, rack steer, shockbreaker, dan info cabang terdekat. Chat WhatsApp lebih cepat.",
  keywords: [
    "kontak TJM Auto Care",
    "booking servis mobil",
    "hubungi bengkel kaki kaki",
    "whatsapp TJM Auto Care",
    "cabang TJM Auto Care terdekat",
  ],
  alternates: {
    canonical: `${siteUrl}/kontak`,
  },
  openGraph: {
    title: "Kontak TJM Auto Care | Booking Servis & Hubungi Cabang Terdekat",
    description:
      "Hubungi TJM Auto Care untuk booking servis dan konsultasi kebutuhan kaki-kaki, rack steer, shockbreaker, serta arahan ke cabang terdekat.",
    url: `${siteUrl}/kontak`,
    type: "website",
    images: [
      {
        url: `${siteUrl}/og-image-homepage.webp`,
        width: 1200,
        height: 630,
        alt: "Kontak TJM Auto Care",
      },
    ],
  },
};

export default function ContactPage() {
  return <ContactPageContent />;
}
