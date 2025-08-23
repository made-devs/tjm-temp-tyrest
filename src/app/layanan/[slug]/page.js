'use client';

import { useState } from 'react';
import { servicesData } from '@/data/servicesData';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Star } from 'lucide-react';

// Fungsi untuk mendapatkan data service berdasarkan slug
function getServiceData(slug) {
  const service = servicesData.find((s) => s.slug === slug);
  return service;
}

export default function ServiceDetailPage({ params }) {
  const service = getServiceData(params.slug);
  // State untuk melacak varian yang aktif
  const [activeVariant, setActiveVariant] = useState(
    service?.variants ? service.variants[0] : null
  );

  if (!service) {
    notFound();
  }

  return (
    <main className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[30vh] flex items-center justify-center text-center text-white p-8">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover z-0"
          priority
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative z-20">
          <h1 className="font-teko text-4xl md:text-5xl font-medium uppercase">
            {service.title}
          </h1>
          <div className="flex items-center justify-center gap-2 font-jakarta text-sm mt-2">
            <Link href="/" className="text-gray-300 hover:text-red-500">
              Home
            </Link>
            <span className="text-gray-500">/</span>
            <Link href="/layanan" className="text-gray-300 hover:text-red-500">
              Layanan
            </Link>
            <span className="text-gray-500">/</span>
            <span className="text-white">{service.title}</span>
          </div>
        </div>
      </section>

      {/* Konten Detail Servis */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Tampilkan deskripsi umum jika tidak ada varian */}
          {!service.variants ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="font-teko text-4xl font-medium uppercase text-white">
                  Deskripsi Layanan
                </h2>
                <p className="font-jakarta text-gray-400 mt-4 leading-relaxed">
                  {service.details}
                </p>
                <a
                  href="#"
                  className="inline-block mt-8 bg-red-600 text-white font-jakarta font-bold text-sm px-8 py-3 transition-all duration-300 ease-in-out hover:bg-white hover:text-red-600 hover:-translate-y-1"
                >
                  Jadwalkan Servis Ini
                </a>
              </div>
              <div className="lg:col-span-1">
                {/* ... (Layanan Lainnya) ... */}
              </div>
            </div>
          ) : (
            // Tampilkan layout varian jika ada
            <div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Kolom Kiri: Gambar Varian */}
                <div className="relative aspect-square">
                  <Image
                    key={activeVariant.slug}
                    src={activeVariant.image}
                    alt={activeVariant.title}
                    fill
                    className="object-cover animate-in fade-in duration-500"
                  />
                </div>
                {/* Kolom Kanan: Detail Varian */}
                <div>
                  <p className="font-jakarta text-sm font-bold uppercase tracking-widest text-red-500">
                    VARIAN PAKET
                  </p>
                  <h2 className="font-teko text-5xl font-medium uppercase mt-2">
                    {activeVariant.title}
                  </h2>
                  <p className="font-jakarta text-gray-400 mt-4 leading-relaxed">
                    {activeVariant.description}
                  </p>
                  <div className="border-t border-b border-gray-800 my-8 py-4 space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="bg-[#111] p-3 border border-gray-700">
                        <Star className="text-red-500" />
                      </div>
                      <p className="font-jakarta text-gray-300">
                        <strong>Tune-Up 65 Komponen:</strong> Pemeriksaan dan
                        pembersihan menyeluruh.
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="bg-[#111] p-3 border border-gray-700">
                        <Star className="text-red-500" />
                      </div>
                      <p className="font-jakarta text-gray-300">
                        <strong>Inspeksi Kaki-Kaki:</strong> Pengecekan 25 titik
                        vital suspensi.
                      </p>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="inline-block w-full text-center bg-red-600 text-white font-jakarta font-bold text-base px-10 py-4 transition-all duration-300 ease-in-out hover:bg-white hover:text-red-600"
                  >
                    Pesan Paket Ini
                  </a>
                </div>
              </div>
              {/* Toggle Pilihan Varian */}
              <div className="mt-16 border-t border-gray-800 pt-8 flex flex-wrap justify-center gap-4">
                {service.variants.map((variant) => (
                  <button
                    key={variant.slug}
                    onClick={() => setActiveVariant(variant)}
                    className={`font-jakarta font-bold text-sm px-6 py-3 transition-colors duration-300 ${
                      activeVariant.slug === variant.slug
                        ? 'bg-red-600 text-white'
                        : 'bg-[#111] border border-gray-800 text-gray-300 hover:bg-gray-800'
                    }`}
                  >
                    {variant.title}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
