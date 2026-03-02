import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { workshopLocations } from "@/data/locations";
import { slugify } from "@/lib/slug";
import { servicesData } from "@/data/servicesData";
import {
  MapPin,
  Clock,
  ArrowRight,
  MessageCircle,
  Tag,
  Wrench,
} from "lucide-react";
import TrackedWhatsAppLink from "@/components/TrackedWhatsAppLink";

const BOOKING_WA = "6285169576890";
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

  return {
    title: `Bengkel Kaki-Kaki Mobil ${loc.city} Terdekat | TJM Auto Care`,
    description: `Bengkel kaki-kaki mobil TJM Auto Care ${loc.city}: alamat, jam operasional (${loc.hours}), peta lokasi, dan booking WhatsApp. Cocok untuk perbaikan kaki-kaki, rack steer, dan shockbreaker.`,
    keywords: [
      `bengkel kaki kaki mobil ${loc.city}`,
      `bengkel mobil terdekat ${loc.city}`,
      `service kaki kaki mobil ${loc.city}`,
      `tjm auto care ${loc.city}`,
      "bengkel kaki kaki mobil terdekat",
    ],
    alternates: { canonical },
    openGraph: {
      url: canonical,
      title: `Bengkel Kaki-Kaki Mobil ${loc.city} | TJM Auto Care`,
      description: `Cabang TJM Auto Care ${loc.city} dengan layanan kaki-kaki mobil, alamat lengkap, jam operasional, dan booking cepat.`,
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

  // gunakan fungsi baru untuk ambil 4 paket utama
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
    ],
  };

  return (
    <main className="bg-[#050505] text-white min-h-screen">
      {/* Hero Background with Image Overlay */}
      <div className="relative h-[50vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-20" />
        <Image
          src={loc.photo}
          alt={`TJM Auto Care ${loc.city}`}
          fill
          className="object-cover scale-105 blur-[2px]"
          priority
        />

        {/* Breadcrumb & Title inside Hero */}
        <div className="relative z-30 container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="flex items-center gap-2 text-xs md:text-sm font-semibold tracking-wider text-gray-300 mb-4 bg-black/40 w-fit px-3 py-1 rounded-full backdrop-blur-sm border border-white/10">
            <Link href="/" className="hover:text-red-500 transition">
              HOME
            </Link>
            <span className="text-red-600">/</span>
            <Link href="/kota" className="hover:text-red-500 transition">
              KOTA
            </Link>
            <span className="text-red-600">/</span>
            <span className="text-white uppercase">{loc.city}</span>
          </div>

          <h1 className="font-teko text-6xl md:text-8xl font-bold uppercase text-white drop-shadow-2xl leading-none">
            TJM{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-red-500 to-red-800">
              Auto Care
            </span>{" "}
            <br />
            <span className="text-white">{loc.city}</span>
          </h1>
        </div>
      </div>

      <section className="container mx-auto px-4 relative z-40 -mt-20 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column: Workshop Details (sticky) */}
          <div className="lg:col-span-1 space-y-6 lg:sticky lg:top-24 self-start">
            {/* Main Info Card */}
            <div className="bg-[#111] border border-white/10 rounded-2xl p-6 shadow-2xl backdrop-blur-sm">
              <div className="flex flex-col gap-6">
                {/* Address */}
                <div className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 bg-red-600/10 rounded-lg flex items-center justify-center border border-red-600/30">
                    <MapPin className="text-red-500" size={20} />
                  </div>
                  <div>
                    <h3 className="text-gray-400 text-xs font-bold tracking-widest uppercase mb-1">
                      Alamat Lengkap
                    </h3>
                    <p className="text-gray-100 font-medium leading-relaxed font-jakarta">
                      {loc.address}
                    </p>
                  </div>
                </div>

                <div className="w-full h-[1px] bg-white/5" />

                {/* Hours */}
                <div className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 bg-red-600/10 rounded-lg flex items-center justify-center border border-red-600/30">
                    <Clock className="text-red-500" size={20} />
                  </div>
                  <div>
                    <h3 className="text-gray-400 text-xs font-bold tracking-widest uppercase mb-1">
                      Jam Operasional
                    </h3>
                    <p className="text-gray-100 font-medium leading-relaxed font-jakarta">
                      {loc.hours}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <TrackedWhatsAppLink
                  href={buildWhatsAppLink(loc.city)}
                  eventProps={{
                    page: "kota_detail",
                    placement: "booking_primary_cta",
                    city: loc.city,
                    city_slug: slugify(loc.city),
                  }}
                  className="group relative w-full flex items-center justify-center gap-3 bg-red-600 text-white font-teko text-xl py-4 rounded-xl overflow-hidden transition-all hover:bg-red-700 hover:shadow-[0_0_20px_rgba(220,38,38,0.5)]"
                >
                  <span className="relative z-10 flex items-center gap-2 tracking-wide">
                    <MessageCircle size={20} />
                    BOOKING SEKARANG
                  </span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                </TrackedWhatsAppLink>
                <p className="text-center text-xs text-gray-500 mt-3">
                  Respon cepat via WhatsApp Official
                </p>
              </div>
            </div>

            {/* Quick Actions - Promo button + Layanan */}
            <div className="grid grid-cols-2 gap-4">
              <Link
                href="/promo"
                className="flex flex-col items-center justify-center p-4 bg-[#111] hover:bg-[#1a1a1a] border border-red-600 rounded-xl transition group text-center"
              >
                <Tag
                  size={24}
                  className="text-red-500 group-hover:text-white mb-2 transition-colors"
                />
                <span className="text-sm font-semibold text-red-400 group-hover:text-white">
                  Lihat Promo
                </span>
              </Link>
              <Link
                href="/layanan"
                className="flex flex-col items-center justify-center p-4 bg-[#111] hover:bg-[#1a1a1a] border border-white/10 rounded-xl transition group text-center"
              >
                <ArrowRight
                  size={24}
                  className="text-gray-400 group-hover:text-red-500 mb-2 transition-colors"
                />
                <span className="text-sm font-semibold text-gray-200">
                  Layanan
                </span>
              </Link>
            </div>
          </div>

          {/* Right Column: Visuals & Map (scrolls) */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Photo Showcase */}
            <div className="relative aspect-[16/8] w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
              <Image
                src={loc.photo}
                alt={`Cabang ${loc.city}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/80 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <div className="px-3 py-1 bg-red-600 text-white text-xs font-bold uppercase tracking-widest inline-block mb-2 rounded-sm">
                  Official Workshop
                </div>
                <h2 className="text-3xl font-teko font-bold uppercase">
                  Cabang TJM {loc.city}
                </h2>
              </div>
            </div>

            {/* Map Embed */}
            <div className="relative w-full aspect-[16/9] lg:aspect-auto lg:flex-1 bg-[#111] rounded-2xl overflow-hidden border border-white/10 min-h-[300px]">
              <iframe
                title={`Peta TJM Auto Care ${loc.city}`}
                src={getEmbedMapSrc(loc)}
                className="absolute inset-0 w-full h-full opacity-90 hover:opacity-100 transition-opacity"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              {/* Decorative corner accents */}
              <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-red-600/50 rounded-tr-xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-red-600/50 rounded-bl-xl pointer-events-none" />
            </div>

            {/* Why This Location / SEO Text (Visualized decently) */}
            <div className="bg-[#111] border border-white/5 rounded-xl p-5">
              <h3 className="font-teko text-xl text-red-500 uppercase mb-2">
                Info Lokal
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed font-jakarta">
                Cabang <strong>TJM Auto Care {loc.city}</strong> melayani
                perbaikan kaki-kaki, rack steer, dan perawatan berkala. Didukung
                mekanik spesialis dan tools modern standar TJM Pusat. Lokasi
                strategis dan mudah diakses.
              </p>
              <p className="text-sm text-gray-400 leading-relaxed font-jakarta mt-3">
                Layanan yang paling dicari pelanggan di {loc.city} adalah{" "}
                <Link
                  href="/layanan/paket-kaki-kaki"
                  className="text-red-400 hover:text-red-300"
                >
                  service kaki-kaki mobil
                </Link>{" "}
                dan{" "}
                <Link
                  href="/layanan/paket-combo-kaki-kaki"
                  className="text-red-400 hover:text-red-300"
                >
                  paket combo kaki-kaki
                </Link>
                .
              </p>
            </div>
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

      {/* --- SECTION FILTERED SERVICES --- */}
      <section className="py-20 bg-[#0a0a0a] border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <h2 className="font-teko text-4xl font-bold uppercase text-white">
                Spesialis Kaki-Kaki{" "}
                <span className="text-red-600">{loc.city}</span>
              </h2>
              <p className="text-gray-400 mt-2 font-jakarta max-w-xl">
                Layanan prioritas kami untuk masalah kaki-kaki, steering, dan
                suspensi mobil Anda di cabang {loc.city}:
              </p>
            </div>
            <Link
              href="/layanan"
              className="text-red-500 font-bold hover:text-white transition flex items-center gap-2"
            >
              Lihat Semua Layanan <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {kakiKakiServices.map((group, idx) => {
              const href = group.href || "/layanan";

              return (
                <div
                  key={idx}
                  className="bg-[#111] border border-white/10 rounded-xl p-6 hover:border-red-600/50 transition duration-300 group flex flex-col justify-between"
                >
                  <div>
                    {/* Image square */}
                    <div className="relative w-full aspect-square rounded-md overflow-hidden mb-4">
                      <Image
                        src={group.image}
                        alt={group.category}
                        fill
                        className="object-cover"
                        priority={idx < 2}
                      />
                    </div>

                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-red-600/10 flex items-center justify-center text-red-500">
                        <Wrench size={20} />
                      </div>
                      <h3 className="font-teko text-2xl font-bold uppercase text-gray-200 group-hover:text-white">
                        {group.category}
                      </h3>
                    </div>

                    <p className="text-sm text-gray-400 mb-6">
                      {group.description}
                    </p>
                  </div>

                  <div className="mt-4">
                    <Link
                      href={href}
                      className="inline-block w-full text-center bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition"
                    >
                      Lihat Layanan
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-black border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h2 className="font-teko text-4xl md:text-5xl uppercase">
              Service Kaki-Kaki Mobil di {loc.city} yang Tepat Sasaran
            </h2>
            <p className="mt-4 text-gray-300 leading-relaxed font-jakarta">
              Kebutuhan servis kaki-kaki mobil di {loc.city} umumnya berkaitan
              dengan kondisi jalan harian, frekuensi pemakaian kendaraan, dan
              usia komponen suspensi maupun steering. Di TJM Auto Care{" "}
              {loc.city}, proses dimulai dari pengecekan menyeluruh agar gejala
              seperti bunyi gluduk, setir terasa tidak stabil, atau mobil
              limbung bisa ditangani dengan tindakan yang relevan.
            </p>
            <p className="mt-3 text-gray-300 leading-relaxed font-jakarta">
              Kami menyediakan kombinasi paket untuk kebutuhan ringan sampai
              komprehensif, termasuk inspeksi, rekondisi, dan penggantian part
              sesuai kondisi aktual kendaraan. Pendekatan ini membantu pelanggan
              mendapatkan hasil servis yang lebih presisi, bukan sekadar ganti
              komponen tanpa diagnosis yang jelas.
            </p>
            <p className="mt-3 text-gray-300 leading-relaxed font-jakarta">
              Jika Anda sedang mencari bengkel kaki-kaki mobil terdekat di{" "}
              {loc.city}, Anda bisa mulai dari paket unggulan berikut:
            </p>
            <ul className="mt-4 space-y-2 text-gray-300 font-jakarta">
              {kakiKakiServices.slice(0, 3).map((serviceItem) => (
                <li key={serviceItem.category}>
                  •{" "}
                  <Link
                    href={serviceItem.href}
                    className="text-red-400 hover:text-red-300"
                  >
                    {serviceItem.category}
                  </Link>{" "}
                  — {serviceItem.description}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-gray-300 leading-relaxed font-jakarta">
              Untuk jadwal cepat, klik tombol booking WhatsApp di halaman ini.
              Tim cabang {loc.city} akan membantu konfirmasi kebutuhan awal,
              estimasi waktu pengerjaan, dan rekomendasi paket yang paling
              cocok.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
