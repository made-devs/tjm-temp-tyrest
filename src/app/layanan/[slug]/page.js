import { servicesData } from "@/data/servicesData";
import { workshopLocations } from "@/data/locations";
import { notFound } from "next/navigation";
import ServiceDetailClient from "./ServiceDetailClient";

// Fungsi untuk mendapatkan data service berdasarkan slug
function getServiceData(slug) {
  return servicesData.find((s) => s.slug === slug);
}

// Generate Dynamic Metadata
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Layanan | TJM Auto Care",
      description: "Layanan perawatan mobil profesional dari TJM Auto Care.",
    };
  }

  const cities = workshopLocations
    .map((loc) => loc.city)
    .slice(0, 5)
    .join(", ");

  if (slug.includes("kaki-kaki") || slug.includes("undercarriage")) {
    return {
      title: `Bengkel Kaki Kaki Mobil Terdekat di ${workshopLocations[0].city} & Seluruh Indonesia | TJM Auto Care`,
      description: `Spesialis perbaikan kaki-kaki mobil di ${cities}, dan kota lainnya. Garansi servis shockbreaker, rack steer, dan tie rod. Hubungi kami sekarang!`,
      keywords: [
        "bengkel kaki kaki terdekat",
        "spesialis kaki kaki mobil",
        ...workshopLocations.map(
          (loc) => `bengkel kaki kaki ${loc.city.toLowerCase()}`,
        ),
      ],
    };
  }

  return {
    title: `${service.title}`,
    description:
      service.description ||
      `Layanan ${service.title} terbaik untuk performa mobil Anda.`,
  };
}

// --- Server Component untuk Halaman ---
export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = getServiceData(slug);

  if (!service) {
    notFound();
  }

  // Schema Markup JSON-LD (Service)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: {
      "@type": "AutoRepair",
      name: "TJM Auto Care",
      image: "https://tjmautocare.com/logo.png",
      telephone: "+628123456789",
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

  // Breadcrumb Schema (Step: Breadcrumb Schema)
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://tjmautocare.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Layanan",
        item: "https://tjmautocare.com/layanan",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.title,
        item: `https://tjmautocare.com/layanan/${slug}`,
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
    </>
  );
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}
