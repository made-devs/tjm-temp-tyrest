import React from "react";
import Link from "next/link";
import { workshopLocations } from "@/data/locations";
import { slugify } from "@/lib/slug";

export default function ServiceAvailability({ currentServiceName }) {
  return (
    <section className="py-12 bg-[#0a0a0a] border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="bg-[#111] rounded-2xl p-8 border border-white/10 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

          <div className="relative z-10">
            <h3 className="text-2xl font-teko font-bold text-white mb-2 uppercase">
              Lokasi Bengkel
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl font-jakarta">
              Layanan{" "}
              <span className="text-red-500 font-semibold">
                {currentServiceName}
              </span>{" "}
              ini tersedia di seluruh jaringan bengkel resmi TJM Auto Care
              berikut:
            </p>

            <div className="flex flex-wrap gap-3">
              {workshopLocations.map((loc, idx) => {
                const citySlug = slugify(loc.city);
                return (
                  <Link
                    key={idx}
                    href={`/kota/${citySlug}`}
                    className="group flex items-center gap-2 px-4 py-2 bg-[#1a1a1a] border border-white/10 rounded-lg hover:border-red-600 hover:bg-red-600/10 transition-all duration-300"
                  >
                    <span className="text-sm font-medium text-gray-300 group-hover:text-red-400 transition-colors">
                      {loc.city}
                    </span>
                  </Link>
                );
              })}
            </div>

            <p className="text-xs text-gray-500 mt-6 italic font-jakarta">
              *Klik nama kota untuk melihat alamat lengkap, peta, dan promo
              khusus cabang.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
