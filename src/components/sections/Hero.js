'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { Cog } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function Hero() {
  const heroContentRef = useRef(null);

  useGSAP(
    () => {
      // Animasi Staggered Blur & Scale
      gsap.from('.hero-element', {
        opacity: 0,
        filter: 'blur(10px)',
        scale: 0.9,
        y: 20,
        duration: 0.8,
        ease: 'power2.out',
        stagger: 0.2, // Efek muncul satu per satu
      });
    },
    { scope: heroContentRef }
  ); // Scope animasi ke dalam heroContentRef

  return (
    <section className="relative h-[85vh] flex items-center text-white">
      {/* Gambar Background */}
      <Image
        src="/hero.webp"
        alt="Mekanik TJM Auto Care sedang bekerja"
        fill
        className="object-cover z-0"
        priority
      />
      {/* Lapisan Overlay Gelap */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Konten Hero */}
      <div className="relative z-20 container mx-auto px-4">
        {/* Pembungkus untuk mendorong konten ke kanan */}
        <div className="flex justify-end pr-[7rem]">
          <div ref={heroContentRef} className="max-w-2xl">
            {/* Tambahkan className 'hero-element' pada setiap item yang ingin dianimasikan */}
            <div className="hero-element flex items-center gap-2">
              <Cog
                size={20}
                className="text-red-500 animate-spin"
                style={{ animationDuration: '5s' }}
              />
              <p className="font-jakarta text-sm font-bold uppercase tracking-widest text-red-500">
                Bengkel Spesialis TJM
              </p>
            </div>

            <h1 className="hero-element font-teko text-6xl md:text-7xl font-medium uppercase leading-none mt-2">
              Perbaikan Presisi <br />
              Untuk Mobil Anda
            </h1>

            <p className="hero-element font-jakarta text-gray-300 mt-4 max-w-lg">
              Dari kaki-kaki, suspensi, rack steer, hingga mesin diesel, kami
              menangani setiap masalah dengan detail dan keahlian. Percayakan
              kendaraan Anda pada mekanik berpengalaman kami.
            </p>

            {/* Class transisi yang konflik sudah diperbaiki */}
            <a
              href="#"
              className="hero-element inline-block mt-8 bg-red-600 text-white font-jakarta font-bold text-sm px-8 py-3 transition-colors duration-300 ease-in-out hover:bg-white hover:text-red-600"
            >
              Lihat Layanan Kami
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
