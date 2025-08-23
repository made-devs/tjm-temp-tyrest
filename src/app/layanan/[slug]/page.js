'use client';

import { useState, useEffect, useRef } from 'react';
import { servicesData } from '@/data/servicesData';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Star, Loader2 } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

// Fungsi untuk mendapatkan data service berdasarkan slug
function getServiceData(slug) {
  const service = servicesData.find((s) => s.slug === slug);
  return service;
}

export default function ServiceDetailPage({ params }) {
  const service = getServiceData(params.slug);
  const [activeVariant, setActiveVariant] = useState(
    service?.variants ? service.variants[0] : null
  );
  const [isLoadingImage, setIsLoadingImage] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const mainRef = useRef(null);

  // Animasi saat halaman pertama kali dimuat
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

  // Handler untuk mengganti varian dengan animasi
  const handleVariantChange = (variant) => {
    if (variant.slug === activeVariant.slug) return;

    setIsTransitioning(true);
    setTimeout(() => {
      setActiveVariant(variant);
      setIsTransitioning(false);
    }, 300);
  };

  useEffect(() => {
    if (service?.variants) {
      setIsLoadingImage(true);
    }
  }, [activeVariant, service]);

  if (!service) {
    notFound();
  }

  return (
    <main ref={mainRef} className="bg-black text-white">
      {/* Hero Section */}
      <section className="page-element relative h-[30vh] flex items-center justify-center text-center text-white p-8">
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
      <section className="page-element py-16">
        <div className="container mx-auto px-4">
          {service.variants && activeVariant ? (
            // Tampilkan layout varian jika ada
            <div>
              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Kolom Kiri: Gambar Varian dengan transisi */}
                  <div
                    className={`relative aspect-square transition-all duration-300 ${
                      isTransitioning
                        ? 'opacity-0 blur-sm'
                        : 'opacity-100 blur-0'
                    }`}
                  >
                    <div className="relative aspect-square bg-gray-900">
                      {isLoadingImage && (
                        <div className="absolute inset-0 flex items-center justify-center z-10">
                          <Loader2 className="w-12 h-12 text-red-500 animate-spin" />
                        </div>
                      )}
                      <Image
                        key={activeVariant.slug}
                        src={activeVariant.image}
                        alt={activeVariant.title}
                        fill
                        className={`object-cover transition-opacity duration-500 ${
                          isLoadingImage ? 'opacity-0' : 'opacity-100'
                        }`}
                        onLoad={() => setIsLoadingImage(false)}
                      />
                    </div>
                  </div>
                  {/* Kolom Kanan: Detail Varian dengan transisi */}
                  <div
                    className={`transition-all duration-300 ${
                      isTransitioning
                        ? 'opacity-0 blur-sm'
                        : 'opacity-100 blur-0'
                    }`}
                  >
                    <p className="font-jakarta text-sm font-bold uppercase tracking-widest text-red-500">
                      VARIAN PAKET
                    </p>
                    <h2 className="font-teko text-4xl font-medium uppercase mt-2">
                      {activeVariant.title}
                    </h2>
                    <p className="font-jakarta text-gray-400 mt-4 leading-relaxed">
                      {activeVariant.description}
                    </p>
                    <div className="border-t border-b border-gray-800 my-6">
                      {activeVariant.details?.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-4 py-3 border-b border-gray-800 last:border-b-0"
                        >
                          <div className="bg-[#111] p-2 border border-gray-700 rounded-full">
                            <Star size={18} className="text-red-500" />
                          </div>
                          <p className="font-jakarta text-sm text-gray-300">
                            <strong>{item.title}:</strong> {item.description}
                          </p>
                        </div>
                      ))}
                    </div>
                    <a
                      href="#"
                      className="inline-block w-full text-center bg-red-600 text-white font-jakarta font-bold text-base px-10 py-3 transition-all duration-300 ease-in-out hover:bg-white hover:text-red-600 hover:-translate-y-1"
                    >
                      Pesan Paket Ini
                    </a>
                  </div>
                </div>
              </div>
              {/* Toggle Pilihan Varian */}
              <div className="mt-12 border-t border-gray-800 pt-8 flex flex-wrap justify-center gap-4">
                {service.variants.map((variant) => (
                  <button
                    key={variant.slug}
                    onClick={() => handleVariantChange(variant)}
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
          ) : (
            // Tampilkan deskripsi umum jika tidak ada varian
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
          )}
        </div>
      </section>
    </main>
  );
}
