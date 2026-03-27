import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function ServiceDetailHero({
  service,
  heroTitle,
  breadcrumbTitle,
  isKakiKakiPage,
  isRackSteerIntentPage,
  isShockbreakerIntentPage,
}) {
  return (
    <section className="page-element relative h-[30vh] flex items-center justify-center text-center text-white p-8">
      <Image
        src={service.image}
        alt={service.title}
        fill
        className="object-cover z-0"
        priority
      />
      <div className="absolute inset-0 bg-black/60 z-10" />
      <div className="relative z-20">
        <h1 className="font-teko text-4xl md:text-5xl font-medium uppercase">
          {heroTitle}
        </h1>
        {isKakiKakiPage && (
          <p className="font-jakarta text-sm md:text-base text-gray-200 mt-2 max-w-2xl mx-auto">
            Bengkel spesialis kaki-kaki mobil untuk service kaki-kaki mobil
            mulai Rp 949 ribu, solusi bunyi gluduk, setir getar, dan mobil
            limbung dengan pengecekan detail serta garansi pengerjaan.
          </p>
        )}
        {isRackSteerIntentPage && (
          <p className="font-jakarta text-sm md:text-base text-gray-200 mt-2 max-w-2xl mx-auto">
            Solusi untuk setir berat, bunyi saat belok, dan handling kurang
            presisi. Booking service rack steer dengan alur diagnosa jelas dan
            arahan cabang terdekat via WhatsApp.
          </p>
        )}
        {isShockbreakerIntentPage && (
          <p className="font-jakarta text-sm md:text-base text-gray-200 mt-2 max-w-2xl mx-auto">
            Solusi untuk bantingan keras, limbung, atau shockbreaker bocor.
            Booking service shockbreaker mobil terdekat dengan alur cek yang
            jelas dan rekomendasi tindakan yang transparan.
          </p>
        )}
        <div className="flex items-center justify-center gap-2 font-jakarta text-sm mt-2 max-w-full px-2">
          <Link
            href="/"
            className="text-gray-300 hover:text-red-500 shrink-0 whitespace-nowrap"
          >
            Home
          </Link>
          <ChevronRight size={16} className="text-red-500 shrink-0" />
          <Link
            href="/layanan"
            className="text-gray-300 hover:text-red-500 shrink-0 whitespace-nowrap"
          >
            Layanan
          </Link>
          <ChevronRight size={16} className="text-red-500 shrink-0" />
          <span className="text-white max-w-[170px] truncate md:max-w-none">
            {breadcrumbTitle}
          </span>
        </div>
      </div>
    </section>
  );
}
