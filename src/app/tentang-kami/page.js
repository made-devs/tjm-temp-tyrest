'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, Eye, Handshake, ChevronRight } from 'lucide-react'; // Impor ChevronRight
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import AboutUs from '../../components/sections/AboutUs';

// Komponen untuk Halaman Tentang Kami
export default function TentangKamiPage() {
  const mainRef = useRef(null);

  // Animasi saat komponen pertama kali dimuat
  useGSAP(
    () => {
      gsap.from('.page-element', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power2.out',
        stagger: 0.2,
      });
    },
    { scope: mainRef }
  );

  return (
    <main ref={mainRef} className="bg-black text-white">
      {/* Hero Section */}
      <section className="page-element relative h-[30vh] flex items-center justify-center text-center text-white p-8">
        <Image
          src="/hero.webp" // Ganti dengan gambar header yang sesuai
          alt="Tentang TJM Auto Care"
          fill
          className="object-cover z-0"
          priority
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative z-20">
          <h1 className="font-teko text-4xl md:text-5xl font-medium uppercase">
            Tentang Kami
          </h1>
          <div className="flex items-center justify-center gap-2 font-jakarta text-sm mt-2">
            <Link href="/" className="text-gray-300 hover:text-red-500">
              Home
            </Link>
            <ChevronRight size={20} className="text-red-500" />
            <span className="text-white">Tentang Kami</span>
          </div>
        </div>
      </section>

      {/* Konten Tentang Kami */}
      <section className="page-element py-16 md:py-24">
        <div className="container mx-auto px-4">
          <AboutUs />

          {/* Visi & Misi */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
            <div className="bg-[#111] border border-gray-800 p-8">
              <h3 className="font-teko text-2xl font-medium uppercase text-red-500">
                Visi Kami
              </h3>
              <p className="font-jakarta text-gray-400 mt-3">
                Menjadi bengkel otomotif terdepan dan paling terpercaya di
                Indonesia, yang dikenal karena kualitas layanan, inovasi, dan
                kepuasan pelanggan yang tak tertandingi.
              </p>
            </div>
            <div className="bg-[#111] border border-gray-800 p-8">
              <h3 className="font-teko text-2xl font-medium uppercase text-red-500">
                Misi Kami
              </h3>
              <p className="font-jakarta text-gray-400 mt-3">
                Memberikan solusi perawatan kendaraan yang komprehensif,
                efisien, dan andal. Kami berinvestasi pada pengembangan tim dan
                teknologi untuk memastikan setiap kendaraan mendapatkan
                penanganan terbaik.
              </p>
            </div>
          </div>

          {/* Nilai-Nilai Kami */}
          <div className="mt-[7rem] text-center">
            <h2 className="font-teko text-3xl md:text-4xl font-medium uppercase text-white">
              Nilai Inti Perusahaan
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 max-w-5xl mx-auto">
              <div className="flex flex-col items-center p-6">
                <div className="bg-[#111] p-4 border border-gray-700 rounded-full mb-4">
                  <ShieldCheck size={32} className="text-red-500" />
                </div>
                <h4 className="font-teko text-xl font-medium uppercase">
                  Kualitas
                </h4>
                <p className="font-jakarta text-gray-400 text-sm mt-2">
                  Standar pengerjaan tertinggi tanpa kompromi.
                </p>
              </div>
              <div className="flex flex-col items-center p-6">
                <div className="bg-[#111] p-4 border border-gray-700 rounded-full mb-4">
                  <Handshake size={32} className="text-red-500" />
                </div>
                <h4 className="font-teko text-xl font-medium uppercase">
                  Integritas
                </h4>
                <p className="font-jakarta text-gray-400 text-sm mt-2">
                  Kejujuran dan transparansi dalam setiap layanan.
                </p>
              </div>
              <div className="flex flex-col items-center p-6">
                <div className="bg-[#111] p-4 border border-gray-700 rounded-full mb-4">
                  <Eye size={32} className="text-red-500" />
                </div>
                <h4 className="font-teko text-xl font-medium uppercase">
                  Inovasi
                </h4>
                <p className="font-jakarta text-gray-400 text-sm mt-2">
                  Selalu mengikuti perkembangan teknologi otomotif.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
