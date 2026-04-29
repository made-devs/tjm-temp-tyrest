import Link from "next/link";
import { slugify } from "@/lib/slug";

export default function ServiceDetailEditorialSection({
  service,
  slug,
  topVariants,
  isRackSteerIntentPage,
  isShockbreakerIntentPage,
  showPriorityCityLinks,
  priorityCities,
  nonPriorityCities,
}) {
  return (
    <section className="bg-gradient-to-b from-[#0b0b0b] to-black border-t border-gray-800 py-20 relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-64 h-64 bg-red-900/10 blur-[80px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-red-900/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
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
              : isRackSteerIntentPage
                ? `${service.title}: Service Rack Steer Yang Lebih Presisi`
                : isShockbreakerIntentPage
                  ? `${service.title}: Service Shockbreaker Mobil Yang Lebih Presisi`
                  : `${service.title}: Pilihan Paket Sesuai Target Performa`}
          </h2>

          <div className="relative mb-8 w-full rounded-lg border border-gray-800 border-l-4 border-l-red-600 bg-[#111] p-5 text-left shadow-2xl transition-colors hover:border-gray-700 sm:p-6 md:mb-10 md:p-8">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-red-600/10 to-transparent rounded-tr-lg pointer-events-none"></div>

            <p className="font-jakarta text-sm leading-7 text-gray-300 sm:text-base md:text-[17px]">
              Layanan <strong className="text-white">{service.title}</strong> di
              TJM Auto Care disusun untuk membantu pemilik mobil mendapatkan
              tindakan yang lebih tepat berdasarkan gejala dan kondisi
              kendaraan. Fokus kami bukan hanya menyelesaikan keluhan sesaat,
              tetapi juga menjaga kenyamanan, stabilitas, dan keamanan mobil
              untuk pemakaian harian maupun perjalanan jauh.
            </p>
            <p className="mt-4 font-jakarta text-sm leading-7 text-gray-300 sm:text-base md:text-[17px]">
              {isRackSteerIntentPage
                ? "Untuk service rack steer, proses kami dimulai dari inspeksi gejala seperti setir berat, bunyi saat belok, arah setir tidak presisi, dan rembesan oli power steering. Dari sana tim mekanik TJM akan membantu menentukan apakah cukup service rack steer biasa, perlu rekondisi, atau harus masuk ke repair rack steer yang lebih spesifik agar hasil perbaikan benar-benar tepat sasaran."
                : isShockbreakerIntentPage
                  ? "Untuk service shockbreaker mobil, proses kami dimulai dari inspeksi gejala seperti bantingan keras, limbung, kebocoran oli, dan pantulan berlebih. Dari sana tim mekanik TJM akan membantu menentukan apakah shockbreaker cukup direkondisi, perlu penggantian part, atau harus disertai pengecekan komponen suspensi lain agar hasil servis lebih tepat sasaran."
                  : "Setiap varian paket memiliki cakupan kerja yang berbeda, sehingga Anda bisa memilih opsi paling relevan dengan kebutuhan mobil dan budget perawatan. Tim mekanik TJM akan membantu membaca hasil inspeksi awal, lalu menyarankan tindakan yang efisien agar biaya servis tetap terkontrol tanpa mengorbankan kualitas pengerjaan."}
            </p>
            {isRackSteerIntentPage && (
              <p className="mt-4 font-jakarta text-sm leading-7 text-gray-300 sm:text-base md:text-[17px]">
                Jika Anda sedang mencari service rack steer terdekat, halaman
                ini memang disusun untuk intent tersebut: ada pilihan paket,
                alur pengecekan, FAQ, dan akses cepat ke halaman kota agar user
                bisa langsung menuju cabang TJM Auto Care yang paling dekat.
              </p>
            )}
            {isShockbreakerIntentPage && (
              <p className="mt-4 font-jakarta text-sm leading-7 text-gray-300 sm:text-base md:text-[17px]">
                Jika Anda sedang mencari service shockbreaker terdekat, halaman
                ini memang disusun untuk intent tersebut: ada pilihan paket,
                alur pengecekan, FAQ, dan akses cepat ke halaman kota agar user
                bisa langsung menuju cabang TJM Auto Care yang paling dekat.
              </p>
            )}
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
            {isRackSteerIntentPage
              ? "Jika Anda sedang mencari service rack steer terdekat dengan diagnosa yang jelas, Anda bisa lanjut booking melalui tombol WhatsApp pada halaman ini. Untuk membandingkan opsi paket lain, kunjungi juga halaman "
              : isShockbreakerIntentPage
                ? "Jika Anda sedang mencari service shockbreaker mobil terdekat dengan proses pengecekan yang jelas, Anda bisa lanjut booking melalui tombol WhatsApp pada halaman ini. Untuk membandingkan opsi paket lain, kunjungi juga halaman "
                : "Jika Anda mencari bengkel kaki-kaki mobil terdekat atau paket servis mobil dengan penanganan transparan, Anda bisa lanjut booking melalui tombol WhatsApp pada halaman ini. Untuk membandingkan opsi lain, kunjungi juga halaman "}
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

          {slug === "paket-steering" && (
            <p className="mt-4 max-w-3xl font-jakarta text-sm leading-7 text-gray-400 sm:text-base md:text-[17px]">
              Jika setelah inspeksi Anda membutuhkan repair rack steer yang
              lebih spesifik, lihat juga halaman{" "}
              <Link
                href="/layanan/paket-racksteer-ultimate"
                className="text-red-500 font-medium hover:text-red-400 hover:underline transition-all"
              >
                Paket Racksteer Ultimate
              </Link>{" "}
              untuk opsi rebuild, repair rack steer, dan pengecekan rack steer
              lebih detail.
            </p>
          )}

          {slug === "paket-shockbreaker" && (
            <p className="mt-4 max-w-3xl font-jakarta text-sm leading-7 text-gray-400 sm:text-base md:text-[17px]">
              Jika Anda juga merasakan gejala kaki-kaki lain seperti bunyi
              gluduk atau handling lari, lihat juga halaman{" "}
              <Link
                href="/layanan/paket-kaki-kaki"
                className="text-red-500 font-medium hover:text-red-400 hover:underline transition-all"
              >
                Paket Kaki-Kaki
              </Link>{" "}
              untuk inspeksi komponen suspensi dan kaki-kaki lebih menyeluruh.
            </p>
          )}

          {showPriorityCityLinks && (
            <div className="mt-16 w-full relative">
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>

              <h3 className="mt-10 flex flex-col items-center font-teko text-2xl uppercase leading-none text-white sm:text-3xl md:text-4xl">
                <span className="mb-1 text-red-500">Lokasi Strategis</span>
                {isRackSteerIntentPage
                  ? "Cari Service Rack Steer Terdekat"
                  : isShockbreakerIntentPage
                    ? "Cari Service Shockbreaker Mobil Terdekat"
                    : "Cari Bengkel Kaki-Kaki Mobil Terdekat"}
              </h3>
              <p className="mx-auto mt-4 max-w-2xl font-jakarta text-sm leading-7 text-gray-400 sm:text-base md:text-[17px]">
                Jika Anda ingin langsung menuju cabang terdekat, buka halaman
                kota prioritas di bawah ini. Masing-masing halaman menampilkan
                alamat lengkap, jam operasional, peta lokasi, dan tombol booking
                WhatsApp.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                {priorityCities.map((city) => (
                  <Link
                    key={city.id}
                    href={`/kota/${slugify(city.city)}`}
                    className="group flex flex-col items-center relative"
                  >
                    <div className="rounded-lg border border-gray-800 bg-[#0d0d0d] px-5 py-3 font-jakarta text-sm text-gray-300 shadow-[0_4px_10px_rgba(0,0,0,0.5)] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-red-600/50 group-hover:bg-[#111] group-hover:text-white group-hover:shadow-[0_10px_20px_-10px_rgba(220,38,38,0.4)] sm:px-6 sm:text-[15px] md:text-base">
                      {isRackSteerIntentPage
                        ? "Service Rack Steer "
                        : isShockbreakerIntentPage
                          ? "Service Shockbreaker Mobil "
                          : "Bengkel Kaki-Kaki "}
                      <span className="font-bold text-red-500">
                        {city.city}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>

              {nonPriorityCities.length > 0 && (
                <div className="mt-8 border-t border-gray-800 pt-6">
                  <p className="font-jakarta text-xs font-bold uppercase tracking-[0.2em] text-gray-500 sm:text-sm">
                    Outlet Lainnya
                  </p>
                  <div className="mt-4 flex flex-wrap justify-center gap-3">
                    {nonPriorityCities.map((city) => (
                      <Link
                        key={city.id}
                        href={`/kota/${slugify(city.city)}`}
                        className="rounded-lg border border-gray-800 bg-[#0b0b0b] px-4 py-2 font-jakarta text-xs text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:border-red-600/50 hover:text-white sm:text-sm"
                      >
                        {city.city}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
