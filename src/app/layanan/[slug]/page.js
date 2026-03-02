import { servicesData } from "@/data/servicesData";
import { workshopLocations } from "@/data/locations";
import { notFound } from "next/navigation";
import Link from "next/link";
import ServiceDetailClient from "./ServiceDetailClient";
import ServiceAvailability from "@/components/ServiceAvailability";

// Fungsi untuk mendapatkan data service berdasarkan slug
function getServiceData(slug) {
  return servicesData.find((s) => s.slug === slug);
}

function getTopVariantNames(service) {
  if (!service?.variants?.length) return [];
  return service.variants.slice(0, 4).map((variant) => variant.title);
}

// Generate Dynamic Metadata
export async function generateMetadata({ params }) {
  const { slug } = await params;
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
      "Bengkel Kaki-Kaki Mobil Super Hemat Mulai Rp 949 Ribu | TJM Auto Care";
    description =
      "Paket kaki-kaki mobil super hemat mulai Rp 949 ribu. Solusi bunyi gluduk, setir getar, dan mobil limbung dengan pengecekan 93 item serta garansi pengerjaan di cabang TJM Auto Care.";
    keywords = [
      "service kaki kaki mobil",
      "bengkel kaki kaki mobil",
      "bengkel kaki kaki mobil terdekat",
      "bengkel kaki mobil",
      "harga service kaki kaki mobil",
      "biaya service kaki kaki mobil",
      "paket kaki kaki mobil murah",
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

  if (slug === "paket-kaki-kaki") {
    jsonLd.offers = {
      "@type": "Offer",
      priceCurrency: "IDR",
      price: "949000",
      lowPrice: "949000",
      availability: "https://schema.org/InStock",
      url: `${siteUrl}/layanan/${slug}`,
      description:
        "Harga promo mulai dari Rp949 ribu. Harga final mengikuti hasil inspeksi, kondisi part, dan tipe kendaraan.",
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
          text: `TJM Auto Care adalah spesialis bengkel kaki-kaki mobil terdekat dengan cabang di banyak kota. Kami menyediakan pengecekan detail, rekomendasi tindakan yang transparan, dan garansi pengerjaan sesuai paket/pekerjaan.`,
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

  const topVariants = getTopVariantNames(service);

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

      <section className="bg-[#0b0b0b] border-t border-gray-800 py-14">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h2 className="font-teko text-4xl md:text-5xl uppercase text-white">
              {service.title}: Pilihan Paket Sesuai Target Performa
            </h2>
            <p className="mt-4 text-gray-300 leading-relaxed font-jakarta">
              Layanan {service.title} di TJM Auto Care disusun untuk membantu
              pemilik mobil mendapatkan tindakan yang lebih tepat berdasarkan
              gejala dan kondisi kendaraan. Fokus kami bukan hanya menyelesaikan
              keluhan sesaat, tetapi juga menjaga kenyamanan, stabilitas, dan
              keamanan mobil untuk pemakaian harian maupun perjalanan jauh.
            </p>
            <p className="mt-3 text-gray-300 leading-relaxed font-jakarta">
              Setiap varian paket memiliki cakupan kerja yang berbeda, sehingga
              Anda bisa memilih opsi paling relevan dengan kebutuhan mobil dan
              budget perawatan. Tim mekanik TJM akan membantu membaca hasil
              inspeksi awal, lalu menyarankan tindakan yang efisien agar biaya
              servis tetap terkontrol tanpa mengorbankan kualitas pengerjaan.
            </p>
            {topVariants.length > 0 && (
              <>
                <h3 className="mt-6 font-teko text-2xl uppercase text-red-500">
                  Varian Populer pada Paket Ini
                </h3>
                <ul className="mt-3 space-y-2 text-gray-300 font-jakarta">
                  {topVariants.map((variantName) => (
                    <li key={variantName}>• {variantName}</li>
                  ))}
                </ul>
              </>
            )}
            <p className="mt-4 text-gray-300 leading-relaxed font-jakarta">
              Jika Anda mencari bengkel kaki-kaki mobil terdekat atau paket
              servis mobil dengan penanganan transparan, Anda bisa lanjut
              booking melalui tombol WhatsApp pada halaman ini. Untuk
              membandingkan opsi lain, kunjungi juga halaman{" "}
              <Link href="/layanan" className="text-red-400 hover:text-red-300">
                semua layanan
              </Link>{" "}
              atau cek cabang terdekat di{" "}
              <Link href="/kota" className="text-red-400 hover:text-red-300">
                halaman kota
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

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
