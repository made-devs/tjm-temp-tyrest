import { servicesData } from "@/data/servicesData";
import { workshopLocations } from "@/data/locations";
import { notFound } from "next/navigation";
import ServiceAvailability from "@/components/umum/ServiceAvailability";
import PageHero from "@/components/umum/PageHero";
import ServiceDetailJsonLdScripts from "@/components/layanan/detail/ServiceDetailJsonLdScripts";
import ServiceDetailEditorialSection from "@/components/layanan/detail/ServiceDetailEditorialSection";
import ServiceVariantSection from "@/components/layanan/detail/ServiceVariantSection";
import ServiceIntentBlocksSection from "@/components/layanan/detail/ServiceIntentBlocksSection";
import ServiceFAQ from "@/components/layanan/detail/ServiceFAQ";
import {
  KAKI_KAKI_FAQ_SCHEMA,
  OFFER_OVERRIDES,
  PRIORITY_CITY_NAMES,
  RACK_STEER_FAQ_SCHEMA,
  RACK_STEER_INTENT_SLUGS,
  SHOCKBREAKER_FAQ_SCHEMA,
  SHOCKBREAKER_INTENT_SLUGS,
} from "@/components/layanan/detail/serviceDetailSeoData";

// Fungsi untuk mendapatkan data service berdasarkan slug
function getServiceData(slug) {
  return servicesData.find((s) => s.slug === slug);
}

function getTopVariantNames(service) {
  if (!service?.variants?.length) return [];
  return service.variants.slice(0, 4).map((variant) => variant.title);
}

function getPageHeroContent({
  service,
  isKakiKakiPage,
  isRackSteerIntentPage,
  isShockbreakerIntentPage,
}) {
  if (isKakiKakiPage) {
    return {
      titleMain: "Bengkel Kaki-Kaki Mobil",
      titleHighlight: "Spesialis",
      description:
        "Bengkel spesialis kaki-kaki mobil untuk service kaki-kaki mobil mulai Rp 949 ribu, solusi bunyi gluduk, setir getar, dan mobil limbung dengan pengecekan detail serta garansi pengerjaan.",
    };
  }

  if (isRackSteerIntentPage) {
    return {
      titleMain: "Service Rack Steer",
      titleHighlight: "& Steering Mobil",
      description:
        "Service rack steer untuk atasi setir berat, bunyi saat belok, handling kurang presisi, dan kebutuhan repair rack steer. Booking service rack steer terdekat dengan alur diagnosa jelas dan arahan cabang via WhatsApp.",
    };
  }

  if (isShockbreakerIntentPage) {
    return {
      titleMain: "Service Shockbreaker",
      titleHighlight: "Mobil",
      description:
        "Service shockbreaker mobil untuk atasi bantingan keras, limbung, body memantul berlebih, atau shockbreaker bocor. Booking service shockbreaker terdekat dengan alur cek yang jelas, diagnosa awal, dan rekomendasi tindakan yang transparan.",
    };
  }

  return {
    titleMain: service.title,
    titleHighlight: "TJM Auto Care",
    description: service.description,
  };
}

// --- Server Component untuk Halaman ---
export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = getServiceData(slug);
  const isKakiKakiPage = slug === "paket-kaki-kaki";
  const isRackSteerIntentPage = RACK_STEER_INTENT_SLUGS.includes(slug);
  const isShockbreakerIntentPage = SHOCKBREAKER_INTENT_SLUGS.includes(slug);
  const heroTitle = isKakiKakiPage
    ? "Bengkel Kaki-Kaki Mobil Spesialis"
    : isRackSteerIntentPage
      ? "Service Rack Steer & Steering Mobil"
      : isShockbreakerIntentPage
        ? "Service Shockbreaker Mobil"
        : service?.title;
  const breadcrumbTitle = isKakiKakiPage ? "Paket Kaki-Kaki" : service?.title;

  if (!service) {
    notFound();
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://tjmautocare.id";
  const contactPhone =
    process.env.NEXT_PUBLIC_CONTACT_PHONE || "+6285169576890";
  const firstLocation = workshopLocations?.[0];
  const postalCodeMatch = firstLocation?.address?.match(/\b\d{5}\b/);
  const priorityCities = workshopLocations.filter((location) =>
    PRIORITY_CITY_NAMES.includes(location.city),
  );

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
        streetAddress: firstLocation?.address,
        addressLocality: firstLocation?.city,
        ...(postalCodeMatch?.[0] ? { postalCode: postalCodeMatch[0] } : {}),
        addressCountry: "ID",
      },
    },
    areaServed: workshopLocations.map((loc) => ({
      "@type": "City",
      name: loc.city,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `Layanan ${service.title}`,
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

  if (OFFER_OVERRIDES[slug]) {
    jsonLd.offers = {
      "@type": "Offer",
      ...OFFER_OVERRIDES[slug],
      url: `${siteUrl}/layanan/${slug}`,
    };
  }

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

  const shouldShowFaqSchema =
    slug.includes("kaki-kaki") ||
    slug.includes("undercarriage") ||
    isRackSteerIntentPage ||
    isShockbreakerIntentPage;

  const activeFaqSchema = isRackSteerIntentPage
    ? RACK_STEER_FAQ_SCHEMA
    : isShockbreakerIntentPage
      ? SHOCKBREAKER_FAQ_SCHEMA
      : KAKI_KAKI_FAQ_SCHEMA;

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: activeFaqSchema,
  };

  const topVariants = getTopVariantNames(service);
  const pageHeroContent = getPageHeroContent({
    service,
    isKakiKakiPage,
    isRackSteerIntentPage,
    isShockbreakerIntentPage,
  });
  const showPriorityCityLinks =
    (slug === "paket-kaki-kaki" ||
      isRackSteerIntentPage ||
      isShockbreakerIntentPage) &&
    priorityCities.length > 0;
  const nonPriorityCities = workshopLocations.filter(
    (location) => !PRIORITY_CITY_NAMES.includes(location.city),
  );

  return (
    <>
      <ServiceDetailJsonLdScripts
        jsonLd={jsonLd}
        breadcrumbJsonLd={breadcrumbJsonLd}
        faqJsonLd={faqJsonLd}
        shouldShowFaqSchema={shouldShowFaqSchema}
      />

      <main className="bg-black text-white">
        <PageHero
          imageSrc={service.image}
          imageAlt={service.title}
          breadcrumbText={`LAYANAN ${breadcrumbTitle.toUpperCase()}`}
          titleMain={pageHeroContent.titleMain}
          titleHighlight={pageHeroContent.titleHighlight}
          description={pageHeroContent.description}
        />

        <ServiceVariantSection
          service={service}
          isKakiKakiPage={isKakiKakiPage}
          isRackSteerIntentPage={isRackSteerIntentPage}
          isShockbreakerIntentPage={isShockbreakerIntentPage}
        />

        {(isKakiKakiPage ||
          isRackSteerIntentPage ||
          isShockbreakerIntentPage) && (
          <ServiceIntentBlocksSection
            isRackSteerIntentPage={isRackSteerIntentPage}
            isShockbreakerIntentPage={isShockbreakerIntentPage}
          />
        )}

        <ServiceFAQ slug={slug} />
      </main>

      <ServiceDetailEditorialSection
        service={service}
        slug={slug}
        topVariants={topVariants}
        isRackSteerIntentPage={isRackSteerIntentPage}
        isShockbreakerIntentPage={isShockbreakerIntentPage}
        showPriorityCityLinks={showPriorityCityLinks}
        priorityCities={priorityCities}
        nonPriorityCities={nonPriorityCities}
      />

      {/* Hindari link outlet dobel pada halaman yang sudah punya blok kota prioritas */}
      {!showPriorityCityLinks && (
        <ServiceAvailability currentServiceName={service.title} />
      )}
    </>
  );
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}
