import { notFound } from "next/navigation";
import { workshopLocations } from "@/data/locations";
import { getCityLocalContent } from "@/data/cityLocalContent";
import { slugify } from "@/lib/slug";
import { servicesData } from "@/data/servicesData";
import KotaBottomContent from "@/components/kota/KotaBottomContent";
import PageHero from "@/components/umum/PageHero";
import KotaDetailMedia from "@/components/kota/KotaDetailMedia";
import KotaDetailSidebar from "@/components/kota/KotaDetailSidebar";
import KotaLocalContent from "@/components/kota/KotaLocalContent";
import KotaSearchIntentSection from "@/components/kota/KotaSearchIntentSection";
import KotaServicesGrid from "@/components/kota/KotaServicesGrid";

const BOOKING_WA = "6285169576890";
const PRIORITY_CITY_NAMES = [
  "Surabaya",
  "Jogja",
  "Bekasi",
  "Bandung",
  "Samarinda",
  "Bali",
];
// changed: unify SITE_URL fallback to .id (same as sitemap)
const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://tjmautocare.id"
).replace(/\/+$/, "");

function findLocationBySlug(slug) {
  return workshopLocations.find((l) => slugify(l.city) === slug);
}

function buildWhatsAppLink(city) {
  const text = `Halo TJM Auto Care, saya mau booking untuk cabang ${city}.`;
  return `https://wa.me/${BOOKING_WA}?text=${encodeURIComponent(text)}`;
}

// helper: pastikan iframe pakai URL embed yang valid
function getEmbedMapSrc(loc) {
  const raw = (loc?.mapUrl || "").toString();
  try {
    if (raw.includes("/embed") || raw.includes("output=embed")) return raw;
    const qMatch = raw.match(/[?&]q=([^&]+)/);
    if (qMatch && qMatch[1]) {
      return `https://www.google.com/maps/embed?${`q=${qMatch[1]}`}`;
    }
    const placeMatch = raw.match(/\/place\/([^/]+)/);
    if (placeMatch && placeMatch[1]) {
      return `https://www.google.com/maps/embed?pb=!1m18!2m3!1s${encodeURIComponent(placeMatch[1])}`;
    }
    const address = loc?.address || loc?.city || "";
    return `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;
  } catch (err) {
    const address = loc?.address || loc?.city || "";
    return `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;
  }
}

// Ganti logic dynamic sebelumnya: ambil 4 paket utama kaki-kaki secara eksplisit
const PRIMARY_KAKI_SLUGS = [
  "paket-kaki-kaki",
  "paket-combo-kaki-kaki",
  "paket-kaki-kaki-racksteer",
];

function getPrimaryKakiPackages(services) {
  if (!Array.isArray(services)) return [];
  return services
    .filter((s) => PRIMARY_KAKI_SLUGS.includes(s.slug))
    .map((s) => ({
      category: s.title,
      href: s.href || `/layanan/${s.slug}`,
      description:
        s.description || (typeof s.details === "string" ? s.details : ""),
      image: s.image || "/services/default-service.webp", // tambahkan image
    }));
}

export async function generateStaticParams() {
  return workshopLocations.map((l) => ({ slug: slugify(l.city) }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const loc = findLocationBySlug(slug);
  if (!loc) return {};

  const canonical = `${SITE_URL}/kota/${slugify(loc.city)}`;
  const isPriorityCity = PRIORITY_CITY_NAMES.includes(loc.city);
  const title = isPriorityCity
    ? `Bengkel Kaki-Kaki Mobil Terdekat di ${loc.city} | Spesialis TJM Auto Care`
    : `Bengkel Kaki-Kaki Mobil ${loc.city} Terdekat | TJM Auto Care`;
  const description = isPriorityCity
    ? `Cari bengkel kaki-kaki mobil terdekat di ${loc.city}? TJM Auto Care melayani service kaki-kaki mobil, rack steer, shockbreaker, inspeksi gejala bunyi gluduk, setir getar, dan booking WhatsApp cepat.`
    : `Bengkel kaki-kaki mobil TJM Auto Care ${loc.city}: alamat, jam operasional (${loc.hours}), peta lokasi, dan booking WhatsApp. Cocok untuk perbaikan kaki-kaki, rack steer, dan shockbreaker.`;

  return {
    title,
    description,
    keywords: [
      `bengkel kaki kaki mobil ${loc.city}`,
      `bengkel kaki kaki mobil terdekat di ${loc.city}`,
      `bengkel mobil terdekat ${loc.city}`,
      `service kaki kaki mobil ${loc.city}`,
      `spesialis kaki kaki mobil ${loc.city}`,
      `tjm auto care ${loc.city}`,
      "bengkel kaki kaki mobil terdekat",
    ],
    alternates: { canonical },
    openGraph: {
      url: canonical,
      title,
      description,
      images: [
        loc.photo
          ? loc.photo.startsWith("http")
            ? loc.photo
            : `${SITE_URL}${loc.photo.startsWith("/") ? "" : "/"}${loc.photo}`
          : `${SITE_URL}/logo/logotjm.webp`,
      ],
    },
  };
}

export default async function KotaDetailPage({ params }) {
  const { slug } = await params;
  const loc = findLocationBySlug(slug);
  if (!loc) notFound();
  const citySlug = slugify(loc.city);
  const isPriorityCity = PRIORITY_CITY_NAMES.includes(loc.city);
  const localContent = getCityLocalContent(citySlug);
  const bookingHref = buildWhatsAppLink(loc.city);
  const mapSrc = getEmbedMapSrc(loc);

  const kakiKakiServices = getPrimaryKakiPackages(servicesData);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: `TJM Auto Care ${loc.city}`,
    telephone: `+${BOOKING_WA}`,
    url: `${SITE_URL}/kota/${slugify(loc.city)}`,
    image: loc.photo
      ? loc.photo.startsWith("http")
        ? loc.photo
        : `${SITE_URL}${loc.photo.startsWith("/") ? "" : "/"}${loc.photo}`
      : `${SITE_URL}/logo/logotjm.webp`,
    address: {
      "@type": "PostalAddress",
      streetAddress: loc.address,
      addressLocality: loc.city,
      addressCountry: "ID",
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `Di mana bengkel kaki-kaki mobil terdekat di ${loc.city}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Anda bisa booking di TJM Auto Care ${loc.city}. Cabang ini melayani pengecekan kaki-kaki, rack steer, tie rod, dan komponen suspensi dengan estimasi transparan.`,
        },
      },
      {
        "@type": "Question",
        name: `Apakah TJM Auto Care ${loc.city} menerima cek kaki-kaki sebelum perjalanan jauh?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Ya. Kami melayani pengecekan kaki-kaki mobil sebelum perjalanan jauh untuk membantu memastikan kenyamanan dan keamanan berkendara.`,
        },
      },
      ...(localContent?.faq
        ? [
            {
              "@type": "Question",
              name: localContent.faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: localContent.faq.answer,
              },
            },
          ]
        : []),
    ],
  };

  return (
    <main className="bg-[#050505] text-white min-h-screen">
      <PageHero
        imageSrc={loc.photo || "/hero.webp"}
        breadcrumbItems={[
          { label: "KOTA", href: "/kota" },
          { label: loc.city.toUpperCase() },
        ]}
        titleMain="TJM CABANG"
        titleHighlight={loc.city.toUpperCase()}
        description={
          isPriorityCity
            ? `Kunjungi cabang utama kami di ${loc.city} untuk layanan inspeksi dan service spesialis kaki-kaki mobil yang komprehensif.`
            : `Temukan layanan perbaikan dan perawatan kaki-kaki mobil terdekat dan terpercaya di TJM Auto Care ${loc.city}.`
        }
      />

      <section className="container mx-auto px-4 relative z-40 pt-12 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <KotaDetailSidebar
            city={loc.city}
            address={loc.address}
            hours={loc.hours}
            bookingHref={bookingHref}
            citySlug={citySlug}
          />

          <div className="lg:col-span-2 flex flex-col gap-6">
            <KotaDetailMedia
              city={loc.city}
              photo={loc.photo}
              mapSrc={mapSrc}
            />
            <KotaLocalContent city={loc.city} localContent={localContent} />
            <KotaSearchIntentSection city={loc.city} />
          </div>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </section>

      <KotaServicesGrid city={loc.city} services={kakiKakiServices} />
      <KotaBottomContent
        city={loc.city}
        services={kakiKakiServices}
        bookingHref={bookingHref}
        citySlug={citySlug}
      />
    </main>
  );
}
