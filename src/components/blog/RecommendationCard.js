import Link from "next/link";
import Image from "next/image";

export default function RecommendationCard({ service, isTopPick = false }) {
  if (!service) return null;

  return (
    <Link
      href={service.href || `/layanan/${service.slug}`}
      className="group block rounded-xl border border-gray-800 bg-[#0f0f0f] overflow-hidden hover:border-red-500/50 transition-colors"
    >
      <div className="relative aspect-[16/9] bg-black">
        {service.image ? (
          <Image
            src={service.image}
            alt={service.title || "Rekomendasi Layanan"}
            fill
            sizes="(max-width: 1024px) 100vw, 320px"
            className="object-cover opacity-90 group-hover:scale-[1.03] transition-transform duration-300"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black" />
        )}

        {isTopPick && (
          <div className="absolute top-3 left-3">
            <span className="inline-flex items-center rounded-full bg-red-500/15 text-red-400 border border-red-500/30 px-3 py-1 text-[11px] font-jakarta font-semibold">
              Rekomendasi Utama
            </span>
          </div>
        )}
      </div>

      <div className="p-4">
        <h5 className="font-teko text-xl uppercase text-white leading-tight group-hover:text-red-400 transition-colors line-clamp-2">
          {service.title}
        </h5>
        {service.description && (
          <p className="mt-2 text-sm font-jakarta text-gray-400 leading-relaxed line-clamp-3">
            {service.description}
          </p>
        )}

        <div className="mt-3 inline-flex items-center text-sm font-jakarta font-bold text-red-500">
          Lihat Paket →
        </div>
      </div>
    </Link>
  );
}
