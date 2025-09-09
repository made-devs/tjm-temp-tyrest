'use client';

import SectionHeader from '@/components/SectionHeader';
import { programsData } from '@/data/partnershipData';

export default function PartnershipPrograms() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <SectionHeader
          subtitle="PILIHAN KERJA SAMA"
          title="Program Menarik Untuk Anda"
          description="Kami membuka berbagai pintu kolaborasi yang dirancang untuk saling menguntungkan, baik bagi individu maupun korporasi."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
          {programsData.map((program, index) => (
            <div
              key={index}
              className="bg-[#111] p-8 border border-gray-800 text-center transition-all duration-300 hover:border-red-500 hover:-translate-y-2"
            >
              <h3 className="font-teko text-3xl font-medium uppercase text-red-500">
                {program.title}
              </h3>
              <p className="font-jakarta text-gray-400 mt-4">
                {program.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
