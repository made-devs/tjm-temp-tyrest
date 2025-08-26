'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X, ArrowLeft, ArrowRight, ChevronRight } from 'lucide-react';
import { galleryData } from '@/data/galleryData';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import SectionHeader from '@/components/SectionHeader'; // Impor SectionHeader

export default function GalleryPage() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const mainRef = useRef(null);

  const openLightbox = (index) => setSelectedImageIndex(index);
  const closeLightbox = () => setSelectedImageIndex(null);

  const goToNext = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % galleryData.length);
  };

  const goToPrev = () => {
    setSelectedImageIndex(
      (prevIndex) => (prevIndex - 1 + galleryData.length) % galleryData.length
    );
  };

  // Animasi saat halaman dimuat
  useGSAP(
    () => {
      gsap.from('.gallery-item', {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.1,
      });
    },
    { scope: mainRef }
  );

  return (
    <main ref={mainRef} className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[30vh] flex items-center justify-center text-center text-white p-8">
        <Image
          src="/hero.webp"
          alt="Galeri TJM Auto Care"
          fill
          className="object-cover z-0"
          priority
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative z-20">
          <h1 className="font-teko text-4xl md:text-5xl font-medium uppercase">
            Galeri Kami
          </h1>
          <div className="flex items-center justify-center gap-2 font-jakarta text-sm mt-2">
            <Link href="/" className="text-gray-300 hover:text-red-500">
              Home
            </Link>
            <ChevronRight size={16} className="text-red-500" />
            <span className="text-white">Galeri</span>
          </div>
        </div>
      </section>

      {/* Konten Galeri Masonry */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {/* Tambahkan SectionHeader di sini */}
          <div className="mb-16">
            <SectionHeader
              subtitle="PORTOFOLIO KAMI"
              title="HASIL KERJA YANG BERBICARA"
              description="Lihat lebih dekat detail pengerjaan dan transformasi kendaraan yang telah kami tangani. Setiap foto adalah bukti komitmen kami terhadap kualitas."
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryData.map((item, index) => (
              <div
                key={item.id}
                className={`gallery-item group relative cursor-pointer overflow-hidden ${item.span}`}
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={800}
                  height={800}
                  className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white font-jakarta text-center p-4">
                    {item.alt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center animate-fade-in">
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <Image
              src={galleryData[selectedImageIndex].src}
              alt={galleryData[selectedImageIndex].alt}
              width={1600}
              height={900}
              className="object-contain w-full h-full"
            />
          </div>
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-red-500 transition-colors"
          >
            <X size={32} />
          </button>
          <button
            onClick={goToPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/30 p-2 rounded-full hover:bg-red-500 transition-colors"
          >
            <ArrowLeft size={28} />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/30 p-2 rounded-full hover:bg-red-500 transition-colors"
          >
            <ArrowRight size={28} />
          </button>
        </div>
      )}
    </main>
  );
}
