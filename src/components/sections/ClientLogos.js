'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Daftarkan plugin ScrollTrigger sekali saja saat modul di-load
gsap.registerPlugin(ScrollTrigger);

const logos = [
  'logo-blissful',
  'logo-express',
  'logo-lawfirm',
  'logo-pasticuan',
  'logo-vip',
];

export default function ClientLogos() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      // Animasikan setiap logo saat section masuk ke viewport
      gsap.from('.client-logo', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%', // Mulai animasi saat 80% bagian atas container terlihat
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: 'power2.out',
        stagger: 0.15, // Beri jeda antar animasi logo
      });
    },
    { scope: containerRef }
  );

  return (
    <section className="bg-black py-16" ref={containerRef}>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-8">
          {logos.map((logoName) => (
            <div
              key={logoName}
              className="client-logo relative h-12 w-40"
              // State awal diatur via GSAP, jadi tidak perlu inline style
            >
              <Image
                src={`/logo/${logoName}.webp`}
                alt={`Logo ${logoName}`}
                fill
                className="object-contain opacity-75 transition-opacity duration-300 hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
