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
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://tjmautocare.id";
  const service = getServiceData(slug);
  const readable = slug.replace(/-/g, " ");

  let title = service?.title
    ? `${service.title} | TJM Auto Care`
    : `Layanan ${readable} | TJM Auto Care`;
  let description = service?.description
    ? service.description
    : `Detail layanan ${readable} di TJM Auto Care — perbaikan dan servis kaki-kaki mobil profesional.`;
  let keywords = [
    readable,
    "service kaki kaki mobil",
    "bengkel kaki kaki mobil",
    "perbaikan kaki kaki mobil",
    "rekondisi kaki kaki mobil",
    "TJM Auto Care",
  ];

  if (slug === "paket-kaki-kaki") {
    title =
      "Service Kaki-Kaki Mobil Bergaransi | Paket Kaki-Kaki | TJM Auto Care";
    description =
      "Service kaki-kaki mobil untuk bunyi gluduk, setir getar, mobil limbung: shockbreaker, rack steer, tie rod, bushing arm. 93 item pengecekan detail, cocok untuk cek sebelum Mudik.";
    keywords = [
      "service kaki kaki mobil",
      "bengkel kaki kaki mobil",
      "paket kaki kaki mobil",
      "rekondisi kaki kaki mobil",
      "bunyi gluduk kaki kaki",
      "setir getar",
      "mobil limbung",
      "rack steer",
      "tie rod",
      "bushing arm",
      "shockbreaker",
      "cek mobil sebelum mudik",
      "TJM Auto Care",
    ];
  }

  const url = `${siteUrl}/layanan/${slug}`;
  let ogImageUrl = service?.image
    ? `${siteUrl}${service.image}`
    : `${siteUrl}/logo/logotjm.webp`;

  if (slug === "paket-kaki-kaki") {
    ogImageUrl = `${siteUrl}/galeri/combokaki1.webp`;
  }
  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url,
      type: "website",
      images: [
        {
          url: ogImageUrl,
          alt: `${service?.title || readable} - TJM Auto Care`,
        },
      ],
    },
    alternates: {
      canonical: url,
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
          text: `TJM Auto Care adalah spesialis bengkel kaki-kaki mobil dengan layanan dan cabang di beberapa area/kota. Kami menyediakan pengecekan detail, rekomendasi tindakan yang transparan, dan garansi pengerjaan sesuai paket/pekerjaan.`,
        },
      },
      {
        "@type": "Question",
        name: `Apa saja gejala kaki-kaki mobil rusak (dan kapan harus dicek sebelum Mudik)?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Gejala umum meliputi bunyi gluduk saat jalan rusak/Polisi tidur, setir bergetar, ban aus tidak rata, mobil terasa limbung, atau arah mobil terasa "lari". Disarankan cek kaki-kaki sebelum perjalanan jauh/Mudik agar lebih aman dan nyaman.`,
        },
      },
      {
        "@type": "Question",
        name: `Berapa biaya service kaki-kaki mobil?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Biaya service kaki-kaki mobil tergantung hasil pengecekan, kondisi part, dan tindakan (rekondisi/penggantian). TJM Auto Care menyediakan paket dan opsi tindakan sesuai kebutuhan—Anda bisa konsultasi via WhatsApp untuk estimasi setelah pengecekan awal.`,
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
