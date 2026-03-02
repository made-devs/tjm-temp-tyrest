import Link from "next/link";
import Image from "next/image";
import { workshopLocations } from "@/data/locations";
import { slugify } from "@/lib/slug";

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

  return (
    <main className="bg-black text-white">
      <section className="container mx-auto px-4 py-14">
        <h1 className="font-teko text-4xl md:text-5xl uppercase">
          Bengkel Kaki-Kaki Mobil Terdekat
        </h1>
        <p className="mt-3 text-gray-300 max-w-2xl">
          Pilih kota untuk melihat detail cabang, peta, dan informasi booking.
          Butuh layanan utama? Lihat paket{" "}
          <Link
            href="/layanan/paket-kaki-kaki"
            className="text-red-400 hover:text-red-300"
          >
            service kaki-kaki mobil
          </Link>{" "}
          atau jelajahi{" "}
          <Link href="/layanan" className="text-red-400 hover:text-red-300">
            semua layanan TJM Auto Care
          </Link>
          .
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((loc) => {
            const slug = slugify(loc.city);
            return (
              <Link
                key={loc.id}
                href={`/kota/${slug}`}
                className="group rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition overflow-hidden"
              >
                <div className="relative w-full aspect-[16/10]">
                  <Image
                    src={loc.photo}
                    alt={`TJM Auto Care ${loc.city}`}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-5">
                  <h2 className="font-teko text-2xl uppercase">{loc.city}</h2>
                  <p className="mt-2 text-sm text-gray-300 line-clamp-2">
                    {loc.address}
                  </p>
                  <p className="mt-3 text-sm text-gray-200">
                    Jam: <span className="text-gray-300">{loc.hours}</span>
                  </p>

                  <span className="inline-block mt-4 text-sm text-red-400 group-hover:text-red-300">
                    Lihat detail →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        <section className="mt-14 rounded-2xl border border-white/10 bg-[#0f0f0f] p-6 md:p-8">
          <h2 className="font-teko text-3xl md:text-4xl uppercase">
            Kenapa Pilih TJM Auto Care di Kota Anda
          </h2>
          <p className="mt-4 text-gray-300 leading-relaxed">
            Setiap cabang TJM Auto Care menjalankan standar servis yang sama,
            mulai dari proses inspeksi, estimasi tindakan, hingga quality
            control sebelum mobil diserahkan kembali ke pelanggan. Fokus utama
            kami adalah menyelesaikan gejala yang paling sering terjadi seperti
            bunyi gluduk pada kaki-kaki, setir bergetar, handling terasa
            limbung, dan ban aus tidak merata.
          </p>
          <p className="mt-3 text-gray-300 leading-relaxed">
            Jika Anda sedang mencari bengkel kaki-kaki mobil terdekat, halaman
            kota ini membantu Anda menemukan cabang TJM terdekat lengkap dengan
            alamat, jam operasional, dan peta. Anda juga bisa langsung lanjut ke
            halaman layanan untuk menyesuaikan paket berdasarkan kebutuhan
            kendaraan, kondisi jalan harian, dan budget perawatan.
          </p>
          <p className="mt-3 text-gray-300 leading-relaxed">
            Untuk kebutuhan populer, Anda dapat mulai dari paket{" "}
            <Link
              href="/layanan/paket-kaki-kaki"
              className="text-red-400 hover:text-red-300"
            >
              service kaki-kaki mobil
            </Link>{" "}
            atau paket{" "}
            <Link
              href="/layanan/paket-combo-kaki-kaki"
              className="text-red-400 hover:text-red-300"
            >
              combo kaki-kaki
            </Link>
            . Tim kami akan membantu rekomendasi tindakan yang relevan agar
            hasil servis tetap optimal untuk pemakaian jangka panjang.
          </p>
        </section>
      </section>
    </main>
  );
}
