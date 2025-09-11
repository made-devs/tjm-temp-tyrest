'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function Hero() {
  const heroContentRef = useRef(null);

  useGSAP(
    () => {
      gsap.from('.hero-element', {
        opacity: 0,
        filter: 'blur(10px)',
        scale: 0.9,
        y: 20,
        duration: 0.8,
        ease: 'power2.out',
        stagger: 0.2,
      });
    },
    { scope: heroContentRef }
  );

  return (
    <section className="relative h-[85vh] flex items-center text-white">
      <Image
        src="/hero.webp"
        alt="Mekanik TJM Auto Care sedang bekerja"
        fill
        className="object-cover z-0"
        priority
      />
      <div className="absolute inset-0 bg-black/60 z-10" />

      <div className="relative z-20 container mx-auto px-4 w-full">
        {/*
          PERBAIKAN:
          - Konten sekarang selalu rata kiri di semua ukuran layar (justify-start).
        */}
        <div className="flex justify-start">
          <div
            ref={heroContentRef}
            className="max-w-2xl text-left" // Teks sekarang selalu rata kiri.
          >
            <h1 className="hero-element font-teko text-5xl sm:text-6xl lg:text-7xl font-medium uppercase leading-none mt-2">
              Solusi Dari semua <br /> permasalahan anda
            </h1>

            <p className="hero-element font-jakarta text-gray-300 mt-4 max-w-lg">
              Dari Kaki-Kaki, Suspensi, Rack Steer, Anti Karat, Detailing &
              Coating, Quick Service hingga mesin Diesel, kami menangani setiap
              masalah dengan detail dan keahlian. Percayakan kendaraan Anda pada
              mekanik berpengalaman kami.
            </p>

            <div className="hero-element mt-8">
              <Link
                href="/layanan"
                className="inline-block bg-red-600 text-white font-jakarta font-bold text-sm px-8 py-3 transition-all duration-300 ease-in-out hover:bg-white hover:text-red-600 hover:-translate-y-1"
              >
                Lihat Layanan Kami
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
