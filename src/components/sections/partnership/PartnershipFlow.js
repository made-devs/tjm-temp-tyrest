'use client';

import SectionHeader from '@/components/SectionHeader';
import { flowData } from '@/data/partnershipData';

export default function PartnershipFlow() {
  return (
    <section className="py-20 bg-[#111]">
      <div className="container mx-auto px-4">
        <SectionHeader
          subtitle="PROSES KERJA SAMA"
          title="Flow Kemitraan"
          description="Kami memastikan setiap langkah dalam proses kemitraan berjalan transparan, terstruktur, dan mudah untuk diikuti."
        />
        <div className="relative mt-16 max-w-3xl mx-auto">
          {/* Garis vertikal timeline */}
          <div className="absolute left-6 md:left-1/2 top-0 h-full w-0.5 bg-gray-700 -translate-x-1/2" />

          {flowData.map((item, index) => (
            <div
              key={index}
              className={`relative mb-12 flex ${
                index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
              }`}
            >
              {/* Konten Teks (kiri atau kanan) */}
              <div
                className={`w-full md:w-1/2 px-4 py-2 ${
                  index % 2 === 0
                    ? 'md:pr-12 md:text-right'
                    : 'md:pl-12 md:text-left'
                }`}
              >
                <p className="font-teko text-red-500 text-xl">{`Langkah ${item.number}`}</p>
                <h3 className="font-teko text-3xl uppercase text-white mt-1">
                  {item.title}
                </h3>
                <p className="font-jakarta text-gray-400 mt-2">
                  {item.description}
                </p>
              </div>

              {/* Titik di tengah timeline */}
              <div className="absolute left-6 md:left-1/2 top-1 w-4 h-4 bg-red-500 rounded-full transform -translate-x-1/2 border-4 border-[#111]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
