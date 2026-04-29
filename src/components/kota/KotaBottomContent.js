import Link from "next/link";
import TrackedWhatsAppLink from "@/components/integrasi/TrackedWhatsAppLink";

export default function KotaBottomContent({
  city,
  services,
  bookingHref,
  citySlug,
}) {
  return (
    <section className="py-24 bg-[#050505] border-t border-gray-800 relative z-10 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#111] to-transparent pointer-events-none" />
      <div className="absolute -left-32 top-1/2 -translate-y-1/2 w-96 h-96 bg-red-600/5 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Heading & Text */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[2px] bg-red-600" />
              <span className="font-jakarta text-[10px] uppercase tracking-[0.3em] text-red-500 font-bold">
                INFO BENGKEL {city}
              </span>
            </div>
            <h2 className="font-teko text-5xl md:text-6xl lg:text-7xl uppercase leading-[0.9] text-white drop-shadow-md mb-8">
              SERVICE KAKI-KAKI <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
                TEPAT SASARAN
              </span>
            </h2>

            <div className="border-l-2 border-gray-800 pl-6 space-y-5 text-gray-400 font-jakarta text-sm leading-relaxed mb-10 hover:border-red-600 transition-colors duration-500">
              <p>
                Kebutuhan servis kaki-kaki mobil di {city} umumnya berkaitan
                dengan kondisi jalan harian, frekuensi pemakaian kendaraan, dan
                usia komponen suspensi maupun steering. Di TJM Auto Care {city},
                proses dimulai dari pengecekan menyeluruh agar gejala seperti
                bunyi gluduk, setir tidak stabil, atau mobil limbung bisa
                ditangani dengan relevan.
              </p>
              <p>
                Kami menyediakan kombinasi paket untuk kebutuhan ringan sampai
                komprehensif, termasuk inspeksi, rekondisi, dan penggantian
                part. Pendekatan ini membantu pelanggan mendapatkan hasil servis
                presisi, bukan sekadar ganti komponen tanpa diagnosis yang
                jelas.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <TrackedWhatsAppLink
                href={bookingHref}
                eventProps={{
                  page: "kota_detail",
                  placement: "content_secondary_cta",
                  city,
                  city_slug: citySlug,
                }}
                className="group relative inline-flex items-center justify-center bg-red-600 px-8 py-4 font-jakarta font-bold text-xs tracking-widest text-white uppercase overflow-hidden"
              >
                <span className="absolute inset-0 w-full h-full bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out" />
                <span className="relative z-10 group-hover:text-red-700 transition-colors duration-500">
                  BOOKING CA{city} SEKARANG
                </span>
              </TrackedWhatsAppLink>
              <Link
                href="/layanan/paket-kaki-kaki"
                className="inline-flex items-center justify-center border border-gray-700 bg-[#0a0a0a] px-8 py-4 font-jakarta font-bold text-xs tracking-widest text-white uppercase hover:border-red-500 hover:bg-red-600/10 transition-all duration-300"
              >
                LIHAT PAKET
              </Link>
            </div>
          </div>

          {/* Right Column: Services List */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="bg-[#0a0a0a] border border-gray-800 p-8 md:p-10 relative shadow-[0_0_30px_rgba(0,0,0,0.8)] lg:translate-x-4">
              {/* Grid decoration */}
              <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-red-600" />
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-red-600" />

              <h3 className="font-teko text-3xl uppercase text-white mb-8 border-b border-gray-800 pb-4">
                Pilihan Utama Pelanggan {city}
              </h3>

              <div className="flex flex-col gap-4">
                {services.slice(0, 3).map((serviceItem, idx) => (
                  <Link
                    key={serviceItem.category}
                    href={serviceItem.href}
                    className="group flex flex-col md:flex-row md:items-center gap-4 p-5 bg-[#111] border border-gray-800 hover:border-red-600 hover:bg-[#151515] transition-all duration-300 relative overflow-hidden"
                  >
                    <div className="absolute left-0 top-0 h-full w-1 bg-red-600 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom" />
                    <div className="flex-shrink-0 font-teko text-4xl font-bold text-gray-800 group-hover:text-red-600/20 transition-colors">
                      0{idx + 1}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-teko text-2xl uppercase text-gray-200 group-hover:text-white transition-colors">
                        {serviceItem.category}
                      </h4>
                      <p className="text-xs text-gray-500 font-jakarta mt-1 group-hover:text-gray-300 transition-colors line-clamp-2">
                        {serviceItem.description}
                      </p>
                    </div>
                    <div className="w-10 h-10 border border-gray-700 flex items-center justify-center text-gray-500 group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600 transition-all duration-300 shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="square"
                          strokeLinejoin="miter"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>

              <p className="mt-8 text-xs text-gray-500 font-jakarta border-t border-gray-800 pt-6">
                Tim cabang {city} akan membantu konfirmasi kebutuhan awal,
                estimasi waktu pengerjaan, dan rekomendasi paket yang paling
                cocok.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
