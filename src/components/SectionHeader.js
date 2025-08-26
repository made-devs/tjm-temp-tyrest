'use client';

import { Cog } from 'lucide-react'; // Menggunakan ikon Cog

// Komponen Reusable untuk Judul Section, dengan gaya baru
export default function SectionHeader({ subtitle, title, description }) {
  return (
    <div className="text-center max-w-3xl mx-auto">
      <div className="flex justify-center items-center gap-2">
        <Cog
          size={20}
          className="text-red-500 animate-spin"
          style={{ animationDuration: '5s' }} // Animasi putaran lebih lambat
        />
        <p className="font-jakarta text-sm font-bold uppercase tracking-widest text-red-500">
          {subtitle}
        </p>
      </div>
      <h2 className="font-teko text-5xl font-medium uppercase mt-2 text-white">
        {title}
      </h2>
      <p className="font-jakarta text-gray-400 max-w-2xl mx-auto mt-2">
        {description}
      </p>
    </div>
  );
}
