import { servicesData } from "@/data/servicesData";
import { workshopLocations } from "@/data/locations";
import { notFound } from "next/navigation";
import ServiceDetailClient from "./ServiceDetailClient";
import ServiceAvailability from "@/components/ServiceAvailability";

// Fungsi untuk mendapatkan data service berdasarkan slug
function getServiceData(slug) {
  return servicesData.find((s) => s.slug === slug);
}

// Generate Dynamic Metadata
export async function generateMetadata({ params }) {
  const { slug } = params;
  const readable = slug.replace(/-/g, " ");
  const title = `Layanan ${readable} | TJM Auto Care`;
  return {
    title,
    description: `Detail layanan ${readable} di TJM Auto Care — perbaikan dan servis kaki-kaki mobil profesional.`,
    keywords: [
      readable,
      "bengkel kaki-kaki",
      `service ${readable}`,
      "TJM Auto Care",
    ],
    openGraph: {
      title,
      description: `Layanan ${readable} — TJM Auto Care`,
      url: `https://tjmautocare.id/layanan/${slug}`,
      type: "article",
      images: [
        {
          url: `https://tjmautocare.id/og/layanan-${slug}.webp`,
          width: 1200,
          height: 630,
          alt: `${readable} - TJM Auto Care`,
        },
      ],
    },
    alternates: {
      canonical: `https://tjmautocare.id/layanan/${slug}`,
    },
  };
}

// --- Server Component untuk Halaman ---
export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = getServiceData(slug);

  if (!service) {
    notFound();
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://tjmautocare.id";
  const contactPhone =
    process.env.NEXT_PUBLIC_CONTACT_PHONE || "+6285169576890";

  // Schema Markup JSON-LD (Service)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: {
      "@type": "AutoRepair",
      name: "TJM Auto Care",
      image: `${siteUrl}/logo/logotjm.webp`,
      telephone: contactPhone,
      address: {
        "@type": "PostalAddress",
        streetAddress: workshopLocations[0].address,
        addressLocality: workshopLocations[0].city,
        postalCode: "12345",
        addressCountry: "ID",
      },
    },
    areaServed: workshopLocations.map((loc) => ({
      "@type": "City",
      name: loc.city,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Layanan Bengkel Kaki Kaki",
      itemListElement: service.variants?.map((v, index) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: v.title,
          description: v.description,
        },
        position: index + 1,
      })),
    },
  };

  // Breadcrumb Schema
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      {
        "@type": "ListItem",
        position: 2,
        name: "Layanan",
        item: `${siteUrl}/layanan`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.title,
        item: `${siteUrl}/layanan/${slug}`,
      },
    ],
  };

  // FAQ Schema untuk meningkatkan Rich Result di Google (Step 5)
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `Di mana bengkel kaki-kaki mobil terdekat yang bagus?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `TJM Auto Care adalah spesialis bengkel kaki-kaki mobil yang memiliki cabang di berbagai kota seperti Jakarta, Tangerang, dan Bekasi. Kami menawarkan pengecekan yang detil dan garansi.`,
        },
      },
      {
        "@type": "Question",
        name: `Apa saja gejala kaki-kaki mobil rusak?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Gejala umum meliputi bunyi gluduk-gluduk saat melewati jalan rusak, setir bergetar, ban aus tidak rata, serta mobil terasa limbung pada kecepatan tinggi.`,
        },
      },
      {
        "@type": "Question",
        name: `Berapa biaya perbaikan kaki-kaki mobil?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Biaya perbaikan bervariasi tergantung jenis kerusakan. Kami menyediakan paket servis kaki-kaki mulai dari rekondisi shockbreaker hingga penggantian rack steer dengan harga kompetitif.`,
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {slug.includes("kaki-kaki") && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      <ServiceDetailClient service={service} />

      {/* Tambahkan Section Availability di sini (Sebelum Footer) */}
      <ServiceAvailability currentServiceName={service.title} />
    </>
  );
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}
