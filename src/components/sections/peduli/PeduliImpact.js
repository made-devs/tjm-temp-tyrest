// src/components/sections/peduli/PeduliImpact.js
import SectionHeader from '@/components/SectionHeader';
import { Smile, Car, HeartHandshake } from 'lucide-react';

const StatItem = ({ value, label }) => (
  <div className="text-center">
    <p className="font-teko text-7xl font-bold text-white">{value}</p>
    <p className="font-jakarta text-sm uppercase tracking-wider text-gray-400 mt-1">
      {label}
    </p>
  </div>
);

export default function PeduliImpact() {
  return (
    <section className="py-20 bg-[#111]">
      <div className="container mx-auto px-4">
        <SectionHeader subtitle="DAMPAK KEBAIKAN" title="Manfaat Program" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-center">
          <div className="bg-black p-8 border border-gray-800">
            <Smile size={40} className="mx-auto text-red-500" />
            <h3 className="font-teko text-2xl uppercase mt-4">
              Untuk Customer
            </h3>
            <p className="text-gray-400">
              Servis hemat, mobil terawat, hati tenang karena ikut berbagi.
            </p>
          </div>
          <div className="bg-black p-8 border border-gray-800">
            <HeartHandshake size={40} className="mx-auto text-red-500" />
            <h3 className="font-teko text-2xl uppercase mt-4">
              Untuk Masyarakat
            </h3>
            <p className="text-gray-400">
              Bantuan nyata yang disalurkan langsung ke yang membutuhkan.
            </p>
          </div>
          <div className="bg-black p-8 border border-gray-800">
            <Car size={40} className="mx-auto text-red-500" />
            <h3 className="font-teko text-2xl uppercase mt-4">Untuk TJM</h3>
            <p className="text-gray-400">
              Menjadi bagian dari solusi sosial dan memberikan dampak positif.
            </p>
          </div>
        </div>

        <div className="mt-20">
          <StatItem value="350+" label="Keluarga Terbantu" />
        </div>
      </div>
    </section>
  );
}
