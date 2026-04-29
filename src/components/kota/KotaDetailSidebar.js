import Link from "next/link";
import { ArrowRight, Clock, MapPin, MessageCircle, Tag } from "lucide-react";
import TrackedWhatsAppLink from "@/components/integrasi/TrackedWhatsAppLink";

export default function KotaDetailSidebar({
  city,
  address,
  hours,
  bookingHref,
  citySlug,
}) {
  return (
    <div className="lg:col-span-1 space-y-6 lg:sticky lg:top-24 self-start">
      <div className="bg-[#0a0a0a] border border-gray-800 p-8 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 blur-[50px] pointer-events-none" />
        <div className="absolute top-0 left-0 w-1 h-full bg-red-600" />

        <div className="flex flex-col gap-8 relative z-10">
          <div className="flex gap-4 items-start">
            <div className="shrink-0 pt-1">
              <MapPin className="text-red-600" size={24} />
            </div>
            <div>
              <h3 className="font-teko text-2xl tracking-widest uppercase mb-1 text-white">
                ALAMAT LENGKAP
              </h3>
              <p className="text-gray-400 font-jakarta text-sm leading-relaxed">
                {address}
              </p>
            </div>
          </div>

          <div className="w-full h-[1px] bg-gray-800" />

          <div className="flex gap-4 items-start">
            <div className="shrink-0 pt-1">
              <Clock className="text-red-600" size={24} />
            </div>
            <div>
              <h3 className="font-teko text-2xl tracking-widest uppercase mb-1 text-white">
                JAM OPERASIONAL
              </h3>
              <p className="text-gray-400 font-jakarta text-sm leading-relaxed">
                {hours}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 relative z-10">
          <TrackedWhatsAppLink
            href={bookingHref}
            eventProps={{
              page: "kota_detail",
              placement: "booking_primary_cta",
              city,
              city_slug: citySlug,
            }}
            className="group relative w-full flex items-center justify-center gap-3 bg-red-600 text-white font-jakarta text-sm font-bold uppercase tracking-widest py-4 overflow-hidden transition-all shadow-[0_0_15px_rgba(220,38,38,0.2)] hover:shadow-[0_0_25px_rgba(220,38,38,0.5)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              <MessageCircle size={18} />
              BOOKING CABANG {city.toUpperCase()}
            </span>
            <div className="absolute inset-0 w-full h-full bg-white origin-left transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
            <span className="absolute z-10 flex items-center justify-center gap-2 inset-0 opacity-0 group-hover:opacity-100 text-red-700 transition-opacity duration-300 pointer-events-none">
              <MessageCircle size={18} />
              BOOKING CABANG {city.toUpperCase()}
            </span>
          </TrackedWhatsAppLink>
          <p className="text-center font-jakarta text-[10px] uppercase tracking-widest text-gray-500 mt-4">
            Booking via WhatsApp Official TJM {city}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Link
          href="/promo"
          className="flex flex-col items-center justify-center p-5 bg-[#0a0a0a] hover:bg-[#111] border border-red-600 transition-all duration-300 group text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-red-600/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          <Tag
            size={24}
            className="text-red-600 group-hover:text-red-500 mb-3 transition-colors relative z-10"
          />
          <span className="font-jakarta text-xs font-bold tracking-widest uppercase text-red-500 group-hover:text-white relative z-10">
            LIHAT PROMO
          </span>
        </Link>
        <Link
          href="/layanan"
          className="flex flex-col items-center justify-center p-5 bg-[#0a0a0a] hover:bg-[#111] border border-gray-800 transition-all duration-300 group text-center relative overflow-hidden hover:border-gray-600"
        >
          <ArrowRight
            size={24}
            className="text-gray-500 group-hover:text-white mb-3 transition-colors relative z-10"
          />
          <span className="font-jakarta text-xs font-bold tracking-widest uppercase text-gray-400 group-hover:text-white relative z-10">
            LAYANAN
          </span>
        </Link>
      </div>
    </div>
  );
}
