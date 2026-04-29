import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Wrench } from "lucide-react";

export default function KotaServicesGrid({ city, services }) {
  return (
    <section className="py-24 bg-[#0a0a0a] border-t border-gray-800 relative z-10">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-600/50 to-transparent" />
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 relative">
          <div className="relative z-10 w-full max-w-2xl">
            <h2 className="font-teko text-4xl md:text-5xl font-bold uppercase text-white drop-shadow-md">
              SPESIALIS KAKI-KAKI <span className="text-red-600">{city}</span>
            </h2>
            <div className="h-1 w-20 bg-red-600 mt-4 mb-5" />
            <p className="text-gray-400 font-jakarta text-sm md:text-base leading-relaxed">
              Layanan prioritas kami untuk masalah kaki-kaki, steering, dan
              suspensi mobil Anda di cabang {city}:
            </p>
          </div>
          <Link
            href="/layanan"
            className="group flex flex-col items-end gap-2 shrink-0 relative z-10"
          >
            <div className="flex items-center gap-2 text-red-500 font-jakarta font-bold uppercase tracking-widest text-sm transition-colors group-hover:text-white">
              <span>LIHAT SEMUA LAYANAN</span>
              <ArrowRight
                size={18}
                className="transform group-hover:translate-x-1 transition-transform"
              />
            </div>
            <div className="w-1/2 h-[2px] bg-red-600/50 group-hover:w-full transition-all duration-300" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((group, idx) => {
            const href = group.href || "/layanan";

            return (
              <div
                key={group.category}
                className="bg-[#111] border border-gray-800 p-0 hover:border-red-600 transition-all duration-500 group flex flex-col shadow-[0_0_20px_rgba(0,0,0,0.5)] relative overflow-hidden"
              >
                <div className="relative w-full aspect-[4/3] overflow-hidden border-b border-gray-800">
                  <Image
                    src={group.image}
                    alt={group.category}
                    fill
                    className="object-cover scale-[1.02] group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                    priority={idx < 2}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent" />
                  <div className="absolute top-4 right-4 bg-red-600 text-white font-jakarta text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1 shadow-lg">
                    LAYANAN UTAMA
                  </div>
                </div>

                <div className="p-8 flex-1 flex flex-col relative bg-gradient-to-b from-[#111] to-[#0a0a0a]">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/5 rounded-full blur-[40px] pointer-events-none group-hover:bg-red-600/10 transition-colors" />

                  <div className="flex items-start gap-4 mb-6 relative z-10">
                    <div className="w-12 h-12 bg-[#0a0a0a] border border-gray-700 flex items-center justify-center text-red-500 shrink-0 shadow-inner group-hover:border-red-500/50 transition-colors">
                      <Wrench size={24} />
                    </div>
                    <h3 className="font-teko text-3xl font-bold uppercase text-white drop-shadow-sm mt-1">
                      {group.category}
                    </h3>
                  </div>

                  <p className="text-sm text-gray-400 font-jakarta leading-relaxed mb-8 relative z-10 flex-1">
                    {group.description}
                  </p>

                  <Link
                    href={href}
                    className="relative w-full text-center bg-[#0a0a0a] border border-red-600 text-red-500 py-4 font-jakarta font-bold text-xs uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all duration-300 z-10 mt-auto overflow-hidden"
                  >
                    <span className="relative z-10">DETAIL LAYANAN</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
