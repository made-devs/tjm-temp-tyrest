import Link from "next/link";
import Image from "next/image";
import { workshopLocations } from "@/data/locations";
import { slugify } from "@/lib/slug";
import PageHero from "@/components/umum/PageHero";
import SectionHeader from "@/components/umum/SectionHeader";
import { MapPin, ArrowRight, Star, Clock } from "lucide-react";

const PRIORITY_CITY_NAMES = [
  "Surabaya",
  "Jogja",
  "Bekasi",
  "Bandung",
  "Samarinda",
  "Bali",
];

export const metadata = {
  title: "Kota Cabang Bengkel Kaki-Kaki Mobil | TJM Auto Care",
  description:
    "Temukan bengkel kaki-kaki mobil terdekat dari jaringan cabang TJM Auto Care. Lihat alamat, jam operasional, peta, dan booking via WhatsApp di kota Anda.",
  keywords: [
    "kota cabang tjm auto care",
    "kota bengkel kaki kaki mobil",
    "bengkel kaki kaki mobil terdekat",
    "bengkel mobil terdekat",
    "cabang tjm auto care",
    "service kaki kaki mobil",
    "tjm auto care",
  ],
  alternates: {
    canonical: "https://tjmautocare.id/kota",
  },
  openGraph: {
    title: "Kota Cabang Bengkel Kaki-Kaki Mobil | TJM Auto Care",
    description:
      "Cari cabang TJM Auto Care terdekat untuk service kaki-kaki mobil, cek alamat, jam operasional, dan booking.",
    url: "https://tjmautocare.id/kota",
    type: "website",
  },
};

export default function KotaIndexPage() {
  const locations = [...workshopLocations].sort((a, b) =>
    a.city.localeCompare(b.city, "id"),
  );
  const priorityLocations = locations.filter((location) =>
    PRIORITY_CITY_NAMES.includes(location.city),
  );
  const topSearchIntents = [
    "Bengkel kaki-kaki mobil terdekat",
    "Service kaki-kaki mobil",
    "Cek bunyi gluduk dan limbung",
  ];

  return (
    <main className="bg-black text-white">
      <PageHero
        imageSrc="/hero.webp"
        breadcrumbText="KOTA CABANG"
        titleMain="BENGKEL KAMI DI"
        titleHighlight="KOTA ANDA"
        description="Temukan cabang bengkel kaki-kaki mobil TJM Auto Care terdekat di kota Anda. Cek alamat, jam operasional, dan lakukan booking dengan mudah."
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <SectionHeader
              subtitle="JARINGAN BENGKEL"
              title="TEMUKAN CABANG TERDEKAT"
              description="Kami hadir di berbagai kota besar di Indonesia untuk memberikan layanan perawatan kaki-kaki mobil yang terstandarisasi, berkualitas, dan profesional."
            />
          </div>

          {/* Section Intent Pencarian */}
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto mb-16">
            {topSearchIntents.map((intent) => (
              <span
                key={intent}
                className="inline-flex rounded-sm border border-white/10 bg-[#111] px-4 py-2 text-xs font-jakarta font-semibold uppercase tracking-widest text-gray-400 shadow-sm"
              >
                {intent}
              </span>
            ))}
          </div>

          {/* Kota Prioritas */}
          <div className="bg-gradient-to-br from-zinc-900 to-[#0a0a0a] border border-gray-800 p-8 md:p-12 relative overflow-hidden mb-16">
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8 justify-between">
              <div className="md:w-1/2">
                <div className="flex items-center gap-2 text-red-500 mb-3">
                  <Star size={16} className="fill-current" />
                  <span className="font-jakarta text-xs font-bold tracking-widest uppercase">
                    KOTA PRIORITAS
                  </span>
                </div>
                <h3 className="font-teko text-4xl uppercase text-white drop-shadow-md">
                  TITIK FOKUS LAYANAN KAMI
                </h3>
                <p className="font-jakarta text-gray-400 text-sm mt-3 leading-relaxed">
                  Merespon tingginya permintaan untuk inspeksi kaki-kaki mobil
                  dan service terdekat, cabang-cabang utama kami di kota besar
                  ini siap memberikan pelayanan paling komprehensif.
                </p>
              </div>
              <div className="md:w-1/2 flex flex-wrap gap-3">
                {priorityLocations.map((loc) => (
                  <Link
                    key={loc.id}
                    href={`/kota/${slugify(loc.city)}`}
                    className="inline-flex items-center rounded-sm border border-red-500/30 bg-red-500/10 px-5 py-3 text-sm font-jakarta font-bold text-red-100 transition-all duration-300 hover:border-red-500 hover:bg-red-600 hover:text-white hover:scale-105"
                  >
                    Cabang {loc.city} <ArrowRight size={16} className="ml-2" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Grid Lokasi */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((loc) => {
              const slug = slugify(loc.city);
              const isPriorityCity = PRIORITY_CITY_NAMES.includes(loc.city);
              return (
                <Link
                  key={loc.id}
                  href={`/kota/${slug}`}
                  className="group flex flex-col bg-[#111] border border-gray-800 hover:border-red-500/50 transition-all duration-300 overflow-hidden hover:shadow-xl hover:shadow-red-500/10"
                >
                  <div className="relative w-full aspect-[16/10] overflow-hidden">
                    <Image
                      src={loc.photo}
                      alt={`TJM Auto Care ${loc.city}`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                    {isPriorityCity && (
                      <div className="absolute top-4 left-4 bg-red-600 text-white text-[10px] font-bold px-3 py-1 font-jakarta tracking-widest uppercase rounded-sm shadow-md">
                        CABANG UTAMA
                      </div>
                    )}
                    <h2 className="absolute bottom-4 left-6 font-teko text-4xl uppercase text-white drop-shadow-lg">
                      {loc.city}
                    </h2>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-start gap-3 text-gray-400 mb-4">
                      <MapPin
                        size={18}
                        className="text-red-500 shrink-0 mt-0.5"
                      />
                      <p className="font-jakarta text-sm leading-relaxed line-clamp-2">
                        {loc.address}
                      </p>
                    </div>
                    <div className="flex items-start gap-3 text-gray-400 mb-6">
                      <Clock
                        size={18}
                        className="text-red-500 shrink-0 mt-0.5"
                      />
                      <p className="font-jakarta text-sm">{loc.hours}</p>
                    </div>

                    <div className="mt-auto pt-4 border-t border-gray-800 flex items-center justify-between text-red-500 font-jakarta font-bold text-sm group-hover:text-red-400 transition-colors">
                      <span>LIHAT DETAIL & BOOKING</span>
                      <ArrowRight
                        size={16}
                        className="transform group-hover:translate-x-1 transition-transform"
                      />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          <section className="mt-20 bg-[#0a0a0a] border border-gray-800 p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-red-600"></div>
            <h2 className="font-teko text-3xl md:text-4xl uppercase mb-6 drop-shadow-md">
              Kenapa Pilih TJM Auto Care di Kota Anda?
            </h2>
            <div className="font-jakarta text-sm text-gray-400 leading-relaxed md:columns-2 gap-10 space-y-6 md:space-y-0">
              <p>
                Setiap cabang TJM Auto Care menjalankan standar servis yang
                sama, mulai dari proses inspeksi, estimasi tindakan, hingga
                quality control sebelum mobil diserahkan kembali ke pelanggan.
                Fokus utama kami adalah menyelesaikan gejala yang paling sering
                terjadi seperti bunyi gluduk pada kaki-kaki, setir bergetar,
                handling terasa limbung, dan ban aus tidak merata.
              </p>
              <p>
                Jika Anda sedang mencari{" "}
                <span className="text-gray-200">
                  bengkel kaki-kaki mobil terdekat
                </span>
                , halaman kota ini membantu Anda menemukan cabang TJM terdekat
                lengkap dengan alamat, jam operasional, dan peta. Anda juga bisa
                langsung lanjut ke halaman layanan untuk menyesuaikan paket
                berdasarkan kebutuhan kendaraan, kondisi jalan harian, dan
                budget perawatan.
                <br />
                <br />
                Untuk kebutuhan populer, Anda dapat mulai dari paket{" "}
                <Link
                  href="/layanan/paket-kaki-kaki"
                  className="text-red-400 hover:text-red-300 font-medium underline underline-offset-4"
                >
                  service kaki-kaki mobil
                </Link>{" "}
                atau paket{" "}
                <Link
                  href="/layanan/paket-combo-kaki-kaki"
                  className="text-red-400 hover:text-red-300 font-medium underline underline-offset-4"
                >
                  combo kaki-kaki
                </Link>
                . Tim bengkel kami akan membantu memberikan rekomendasi tindakan
                yang relevan agar hasil servis tetap optimal untuk pemakaian
                jangka panjang.
              </p>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
