import { servicesData } from "@/data/servicesData";
import { workshopLocations } from "@/data/locations";
import { notFound } from "next/navigation";
import Link from "next/link";
import ServiceDetailClient from "./ServiceDetailClient";
import ServiceAvailability from "@/components/ServiceAvailability";
import { slugify } from "@/lib/slug";

// Fungsi untuk mendapatkan data service berdasarkan slug
function getServiceData(slug) {
  return servicesData.find((s) => s.slug === slug);
}

function getTopVariantNames(service) {
  if (!service?.variants?.length) return [];
  return service.variants.slice(0, 4).map((variant) => variant.title);
}

const METADATA_OVERRIDES = {
  "paket-diesel": {
    title: "Paket Diesel Tune Up & Injektor Mobil | TJM Auto Care",
    description:
      "Paket diesel TJM Auto Care untuk tune up, injector cleaner, dan perawatan mesin diesel agar performa tetap bertenaga serta efisien.",
  },
  "paket-kaki-kaki": {
    title:
      "Bengkel Kaki-Kaki Mobil Spesialis | Service Mulai Rp 949 Ribu | TJM",
    description:
      "Bengkel spesialis kaki-kaki mobil TJM melayani service kaki-kaki mobil, rekondisi rack steer, shockbreaker, tie rod, dan bushing arm mulai Rp 949 ribu dengan garansi pengerjaan.",
  },
  "paket-super-hemat": {
    title: "Paket Super Hemat 1 Mulai 1,4 Juta | TJM Auto Care",
    description:
      "Paket Super Hemat 1 TJM Auto Care promo terbatas dengan tune up 65 komponen, gurah mesin, catalytic cleaning, service rem 4 roda, engine flush, dan inspeksi lengkap.",
    keywords: [
      "paket super hemat 1",
      "paket super hemat tjm",
      "promo service mobil",
      "tune up 65 komponen",
      "service rem 4 roda",
      "service kaki kaki mobil",
      "bengkel kaki kaki mobil",
    ],
  },
  "paket-super-hemat-undercarriage": {
    title:
      "Paket Super Hemat Undercarriage Vaporizer UAP Mulai 299 Ribu | TJM Auto Care",
    description:
      "Paket Super Hemat Undercarriage TJM Auto Care dengan vaporizer steamer UAP komplit untuk sterilisasi interior, eksterior, AC mobil, kondensor, engine bay, plus inspeksi kaki-kaki dan AC.",
    keywords: [
      "paket super hemat undercarriage",
      "vaporizer steamer uap komplit",
      "cuci steril vaporizer uap",
      "fogging ac mobil",
      "inspeksi kaki kaki 25 titik",
      "inspeksi ac mobil 20 titik",
    ],
  },
  "paket-triple-combo-undercarriage": {
    title: "Paket Triple Combo Kaki-Kaki & Anti Karat | TJM",
    description:
      "Paket Triple Combo TJM Auto Care untuk service kaki-kaki dan anti karat, termasuk restorasi kolong, detailing, dan proteksi undercarriage.",
  },
};

const OFFER_OVERRIDES = {
  "paket-kaki-kaki": {
    priceCurrency: "IDR",
    price: "949000",
    lowPrice: "949000",
    availability: "https://schema.org/InStock",
    description:
      "Harga promo mulai dari Rp949 ribu. Harga final mengikuti hasil inspeksi, kondisi part, dan tipe kendaraan.",
  },
  "paket-super-hemat": {
    priceCurrency: "IDR",
    price: "1400000",
    lowPrice: "1400000",
    availability: "https://schema.org/InStock",
    description:
      "Promo paket super hemat 1 dengan cakupan tune up, service rem, engine flush, dan inspeksi lengkap. Harga dapat menyesuaikan kondisi kendaraan.",
  },
  "paket-super-hemat-undercarriage": {
    priceCurrency: "IDR",
    price: "299000",
    lowPrice: "299000",
    availability: "https://schema.org/InStock",
    description:
      "Promo vaporizer steamer UAP komplit untuk sterilisasi interior-eksterior, AC, dan engine bay. Harga dapat menyesuaikan kondisi kendaraan.",
  },
};

const PRIORITY_CITY_NAMES = [
  "Surabaya",
  "Jogja",
  "Bekasi",
  "Bandung",
  "Samarinda",
  "Bali",
];

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
      "Bengkel Kaki-Kaki Mobil Spesialis | Service Mulai Rp 949 Ribu | TJM";
    description =
      "Bengkel spesialis kaki-kaki mobil dengan paket service mulai Rp 949 ribu. Solusi bunyi gluduk, setir getar, dan mobil limbung dengan 93 item pengecekan detail serta garansi pengerjaan di cabang TJM Auto Care.";
    keywords = [
      "service kaki kaki mobil",
      "bengkel kaki kaki mobil",
      "bengkel kaki kaki",
      "spesialis kaki kaki mobil",
      "bengkel spesialis kaki kaki mobil",
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

  if (METADATA_OVERRIDES[slug]) {
    title = METADATA_OVERRIDES[slug].title;
    description = METADATA_OVERRIDES[slug].description;
    if (METADATA_OVERRIDES[slug].keywords) {
      keywords = METADATA_OVERRIDES[slug].keywords;
    }
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

      <section className="bg-gradient-to-b from-[#0b0b0b] to-black border-t border-gray-800 py-20 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-red-900/10 blur-[80px] rounded-full pointer-events-none" />
        <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-red-900/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            {/* Tagline */}
            <div className="flex items-center gap-3 mb-5 md:mb-6">
              <div className="h-[2px] w-10 bg-red-600"></div>
              <p className="font-jakarta text-[11px] font-bold uppercase tracking-[0.24em] text-red-500 md:text-xs">
                Pilihan Tindakan Terbaik
              </p>
              <div className="h-[2px] w-10 bg-red-600"></div>
            </div>

            <h2 className="mb-5 font-teko text-3xl uppercase leading-[0.95] text-white sm:text-4xl md:mb-6 md:text-5xl">
              {slug === "paket-kaki-kaki"
                ? "Service Kaki-Kaki Mobil di Bengkel Spesialis Kaki-Kaki Mobil"
                : `${service.title}: Pilihan Paket Sesuai Target Performa`}
            </h2>

            <div className="relative mb-8 w-full rounded-lg border border-gray-800 border-l-4 border-l-red-600 bg-[#111] p-5 text-left shadow-2xl transition-colors hover:border-gray-700 sm:p-6 md:mb-10 md:p-8">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-red-600/10 to-transparent rounded-tr-lg pointer-events-none"></div>

              <p className="font-jakarta text-sm leading-7 text-gray-300 sm:text-base md:text-[17px]">
                Layanan <strong className="text-white">{service.title}</strong>{" "}
                di TJM Auto Care disusun untuk membantu pemilik mobil
                mendapatkan tindakan yang lebih tepat berdasarkan gejala dan
                kondisi kendaraan. Fokus kami bukan hanya menyelesaikan keluhan
                sesaat, tetapi juga menjaga kenyamanan, stabilitas, dan keamanan
                mobil untuk pemakaian harian maupun perjalanan jauh.
              </p>
              <p className="mt-4 font-jakarta text-sm leading-7 text-gray-300 sm:text-base md:text-[17px]">
                Setiap varian paket memiliki cakupan kerja yang berbeda,
                sehingga Anda bisa memilih opsi paling relevan dengan kebutuhan
                mobil dan budget perawatan. Tim mekanik TJM akan membantu
                membaca hasil inspeksi awal, lalu menyarankan tindakan yang
                efisien agar biaya servis tetap terkontrol tanpa mengorbankan
                kualitas pengerjaan.
              </p>
            </div>

            {topVariants.length > 0 && (
              <div className="mb-10 w-full text-left">
                <div className="mb-5 flex items-center justify-center gap-3 md:mb-6">
                  <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-red-600/50"></div>
                  <h3 className="px-3 font-teko text-xl uppercase tracking-wide text-red-500 sm:px-4 sm:text-2xl md:text-[2rem]">
                    Varian Populer pada Paket Ini
                  </h3>
                  <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-red-600/50"></div>
                </div>

                <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-3 text-center md:gap-4">
                  {topVariants.map((variantName, index) => (
                    <div
                      key={variantName}
                      className="group relative flex min-w-[180px] max-w-[280px] flex-1 items-center justify-center overflow-hidden rounded-lg border border-gray-800 bg-[#0b0b0b] px-4 py-3 sm:min-w-[200px] sm:px-5 sm:py-4"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-red-600/0 via-red-600/5 to-red-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <span className="mr-3 select-none font-teko text-xl text-red-600 opacity-80 sm:text-2xl md:text-[1.75rem]">
                        0{index + 1}
                      </span>
                      <span className="z-10 overflow-hidden text-ellipsis whitespace-nowrap font-jakarta text-sm font-medium text-gray-300 sm:text-[15px] md:text-base">
                        {variantName}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <p className="mt-4 max-w-3xl font-jakarta text-sm leading-7 text-gray-400 sm:text-base md:text-[17px]">
              Jika Anda mencari bengkel kaki-kaki mobil terdekat atau paket
              servis mobil dengan penanganan transparan, Anda bisa lanjut
              booking melalui tombol WhatsApp pada halaman ini. Untuk
              membandingkan opsi lain, kunjungi juga halaman{" "}
              <Link
                href="/layanan"
                className="text-red-500 font-medium hover:text-red-400 hover:underline transition-all"
              >
                semua layanan
              </Link>{" "}
              atau cek cabang terdekat di{" "}
              <Link
                href="/kota"
                className="text-red-500 font-medium hover:text-red-400 hover:underline transition-all"
              >
                halaman kota
              </Link>
              .
            </p>

            {slug === "paket-kaki-kaki" && priorityCities.length > 0 && (
              <div className="mt-16 w-full relative">
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>

                <h3 className="mt-10 flex flex-col items-center font-teko text-2xl uppercase leading-none text-white sm:text-3xl md:text-4xl">
                  <span className="mb-1 text-red-500">Lokasi Strategis</span>
                  Cari Bengkel Kaki-Kaki Mobil Terdekat
                </h3>
                <p className="mx-auto mt-4 max-w-2xl font-jakarta text-sm leading-7 text-gray-400 sm:text-base md:text-[17px]">
                  Jika Anda ingin langsung menuju cabang terdekat, buka halaman
                  kota prioritas di bawah ini. Masing-masing halaman menampilkan
                  alamat lengkap, jam operasional, peta lokasi, dan tombol
                  booking WhatsApp.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  {priorityCities.map((city) => (
                    <Link
                      key={city.id}
                      href={`/kota/${slugify(city.city)}`}
                      className="group flex flex-col items-center relative"
                    >
                      <div className="rounded-lg border border-gray-800 bg-[#0d0d0d] px-5 py-3 font-jakarta text-sm text-gray-300 shadow-[0_4px_10px_rgba(0,0,0,0.5)] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-red-600/50 group-hover:bg-[#111] group-hover:text-white group-hover:shadow-[0_10px_20px_-10px_rgba(220,38,38,0.4)] sm:px-6 sm:text-[15px] md:text-base">
                        Bengkel Kaki-Kaki{" "}
                        <span className="font-bold text-red-500">
                          {city.city}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
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
