'use client';

import Image from 'next/image';
import Marquee from 'react-fast-marquee';

const logos = [
  'thei',
  'motozone',
  'undercarriage',
  'detailing',
  'naga',
  'logo-blissful',
  'logo-express',
  'logo-lawfirm',
  'logo-vip',
  '77performance',
];

export default function ClientLogos() {
  return (
    <section className="bg-black py-20 relative overflow-hidden">
      {/* Container header optional */}
      <div className="container mx-auto px-4 mb-10 text-center">
        <p className="text-white/40 text-sm font-medium tracking-[0.2em] uppercase">
          Subsidiaries of TJM Group
        </p>
      </div>

      <div className="relative flex w-full">
        {/* Gradient Overlay Kiri & Kanan untuk efek fade yang halus */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 md:w-40 bg-gradient-to-r from-black via-black/80 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 md:w-40 bg-gradient-to-l from-black via-black/80 to-transparent" />

        <Marquee
          gradient={false}
          speed={40}
          pauseOnHover={true}
          autoFill={true} // Memastikan marquee terisi penuh walau logo sedikit
        >
          {logos.map((logoName) => (
            <div
              key={logoName}
              className="relative mx-8 md:mx-14 h-14 w-32 md:h-16 md:w-40 transition-all duration-300 cursor-pointer"
            >
              <Image
                src={`/logo/${logoName}.webp`}
                alt={`Logo ${logoName}`}
                fill
                sizes="(max-width: 768px) 128px, 160px"
                className="object-contain"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
