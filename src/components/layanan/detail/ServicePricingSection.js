import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function ServicePricingSection({ service, isKakiKakiPage }) {
  if (!service?.variants || service.variants.length === 0) return null;

  // Fungsi untuk ekstrak harga dari deskripsi
  const getPrice = (desc) => {
    const match = desc.match(/harga promo ([\d.,]+)\s*(rb|k)/i);
    if (match) {
      const num = match[1].replace(/[,.]/g, "");
      const unit = match[2].toLowerCase();
      if (unit === "rb") return `Rp ${num}.000`;
      if (unit === "k") return `Rp ${num}.000`;
    }
    return "Cek Harga via WA";
  };

  const title = isKakiKakiPage
    ? "Estimasi Biaya Service Kaki-Kaki Mobil"
    : `Estimasi Biaya ${service.title}`;

  const descriptionText = isKakiKakiPage
    ? "Banyak yang bertanya, berapa biaya servis kaki-kaki mobil? Di TJM Auto Care, kami mengutamakan transparansi. Pilih paket sesuai tingkat keluhan mobil Anda."
    : "Daftar estimasi biaya dan pilihan paket layanan transparan sesuai dengan kebutuhan kendaraan Anda.";

  return (
    <section className="py-16 md:py-24 bg-[#0a0a0a] relative overflow-hidden border-t border-gray-900">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-teko text-white uppercase tracking-wider mb-4 drop-shadow-md">
            {title}
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6" />
          <p className="text-gray-400 font-jakarta max-w-2xl mx-auto leading-relaxed text-sm md:text-base">
            {descriptionText}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {service.variants.slice(0, 3).map((variant, index) => {
            const isPopular = index === 1;

            // Hardcode fallback untuk paket kaki-kaki agar presisi
            let displayPrice = getPrice(variant.description);
            if (isKakiKakiPage) {
              if (index === 0) displayPrice = "Rp 649.000";
              if (index === 1) displayPrice = "Rp 949.000";
              if (index === 2) displayPrice = "Rp 1.500.000";
            } else {
              // Jika tidak ketemu regex
              if (displayPrice === "Cek Harga via WA") {
                 displayPrice = "Harga Terbaik";
              }
            }

            return (
              <div
                key={variant.slug}
                className={`relative flex flex-col bg-[#111] border ${
                  isPopular ? "border-red-600 shadow-[0_0_20px_rgba(220,38,38,0.15)]" : "border-gray-800"
                } p-6 md:p-8 transition-all duration-300 hover:-translate-y-2 hover:border-red-500 group`}
              >
                {isPopular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-600 text-white text-xs font-bold uppercase tracking-[0.2em] py-1.5 px-6 rounded-sm shadow-lg">
                    Paling Laris
                  </div>
                )}
                <h3 className="text-xl md:text-2xl font-teko text-white uppercase mb-2 group-hover:text-red-500 transition-colors">
                  {variant.title}
                </h3>
                <div className="text-3xl md:text-4xl font-teko tracking-wide text-red-500 mb-6 pb-6 border-b border-gray-800">
                  {displayPrice}
                  <span className="text-sm text-gray-500 ml-1 tracking-normal uppercase">
                    {displayPrice !== "Harga Terbaik" ? " / Promo" : ""}
                  </span>
                </div>
                
                <ul className="space-y-4 mb-8 flex-grow">
                  {variant.details?.slice(0, 4).map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-400 font-jakarta leading-relaxed">
                      <CheckCircle2 className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                      <span>{detail.title}</span>
                    </li>
                  ))}
                  {variant.details?.length > 4 && (
                    <li className="text-xs text-gray-500 italic font-jakarta pt-2">
                      + {variant.details.length - 4} layanan lainnya
                    </li>
                  )}
                </ul>

                <Link
                  href={`/kota`}
                  className={`block w-full text-center py-3 px-6 font-bold uppercase tracking-wider text-sm transition-all duration-300 ${
                    isPopular
                      ? "bg-red-600 text-white hover:bg-red-700 shadow-md hover:shadow-red-600/20"
                      : "bg-transparent border border-gray-700 text-gray-300 hover:border-red-600 hover:text-white hover:bg-red-600/10"
                  }`}
                >
                  Cari Cabang Terdekat
                </Link>
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-gray-900/50 border border-gray-800 p-4 rounded-sm text-center text-xs md:text-sm text-gray-400 font-jakarta max-w-3xl mx-auto">
          <span className="text-red-500 font-bold uppercase">Disclaimer:</span> Harga di atas adalah estimasi promo. Total biaya servis dapat bervariasi bergantung pada jenis mobil, tingkat kerusakan, dan ketersediaan part pengganti setelah inspeksi menyeluruh.
        </div>
      </div>
    </section>
  );
}
