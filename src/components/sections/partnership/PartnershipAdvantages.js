'use client';

import SectionHeader from '@/components/SectionHeader';
import { advantagesData } from '@/data/partnershipData';

export default function PartnershipAdvantages() {
  return (
    <section className="py-20 bg-[#111]">
      <div className="container mx-auto px-4">
        <SectionHeader
          subtitle="MENGAPA BERMITRA DENGAN KAMI?"
          title="Keuntungan Bergabung dengan TJM Auto Care Group"
          description="Kami bukan hanya menawarkan bisnis, tapi juga ekosistem yang solid dan terbukti bertumbuh pesat di industri otomotif Indonesia."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">
          {advantagesData.map((advantage, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="flex-shrink-0 bg-black p-3 mt-1">
                <advantage.icon className="w-8 h-8 text-red-500" />
              </div>
              <div>
                <p className="font-jakarta text-gray-300">{advantage.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
