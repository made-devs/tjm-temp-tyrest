'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X, ArrowLeft, ArrowRight, ChevronRight } from 'lucide-react';
import { galleryTabs, galleryImages } from '@/data/galleryData'; // Impor data baru
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import SectionHeader from '@/components/SectionHeader';

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState(galleryTabs[0].id);
  const [lightboxImages, setLightboxImages] = useState([]);
  const [currentLightboxIndex, setCurrentLightboxIndex] = useState(0);
  const mainRef = useRef(null);

  const filteredImages = galleryImages.filter(
    (image) => image.category === activeTab
  );

  const openLightbox = (index) => {
    setLightboxImages(filteredImages);
    setCurrentLightboxIndex(index);
  };

  const closeLightbox = () => setLightboxImages([]);

  const goToNext = () => {
    setCurrentLightboxIndex((prev) => (prev + 1) % lightboxImages.length);
  };

  const goToPrev = () => {
    setCurrentLightboxIndex(
      (prev) => (prev - 1 + lightboxImages.length) % lightboxImages.length
    );
  };

  useGSAP(
    () => {
      gsap.from('.gallery-item', {
        opacity: 0,
        scale: 0.9,
        duration: 0.5,
        ease: 'power3.out',
        stagger: 0.05,
      });
    },
    { scope: mainRef, dependencies: [activeTab] }
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

      {/* Konten Galeri dengan Tab */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <SectionHeader
              subtitle="PORTOFOLIO KAMI"
              title="HASIL KERJA YANG BERBICARA"
              description="Lihat lebih dekat detail pengerjaan dan transformasi kendaraan yang telah kami tangani. Setiap foto adalah bukti komitmen kami terhadap kualitas."
            />
          </div>

          {/* Navigasi Tab */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
            {galleryTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`font-jakarta font-bold text-xs md:text-sm px-4 py-2.5 transition-colors duration-300 ${
                  activeTab === tab.id
                    ? 'bg-red-600 text-white'
                    : 'bg-[#111] border border-gray-800 text-gray-300 hover:bg-gray-800'
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>

          {/* Grid Masonry */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {filteredImages.map((item, index) => (
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
      {lightboxImages.length > 0 && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center animate-fade-in">
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <Image
              src={lightboxImages[currentLightboxIndex].src}
              alt={lightboxImages[currentLightboxIndex].alt}
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
