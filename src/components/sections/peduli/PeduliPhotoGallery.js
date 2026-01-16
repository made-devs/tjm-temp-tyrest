'use client';

import { useState, useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { X, ArrowLeft, ArrowRight, Maximize2, ZoomIn } from 'lucide-react';
import { peduliGalleryData } from '@/data/peduliData';
import SectionHeader from '@/components/SectionHeader';

export default function PeduliPhotoGallery() {
  const [activeTabId, setActiveTabId] = useState('all'); // Default 'all'
  const [lightboxImage, setLightboxImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [visibleCount, setVisibleCount] = useState(8); // State untuk view more

  // 1. Logic untuk menggabungkan semua foto jika tab 'all'
  const allPhotos = useMemo(() => {
    return peduliGalleryData.flatMap((category) => category.photos);
  }, []);

  // 2. Tentukan foto mana yang akan ditampilkan berdasarkan tab aktif
  const filteredPhotos = useMemo(() => {
    if (activeTabId === 'all') {
      return allPhotos;
    }
    const category = peduliGalleryData.find((tab) => tab.id === activeTabId);
    return category ? category.photos : [];
  }, [activeTabId, allPhotos]);

  // 3. Logic slicing untuk View More
  const displayPhotos = filteredPhotos.slice(0, visibleCount);
  const hasMore = visibleCount < filteredPhotos.length;

  useEffect(() => {
    setMounted(true);
  }, []);

  // Reset visibleCount saat ganti tab
  useEffect(() => {
    setVisibleCount(8);
  }, [activeTabId]);

  useEffect(() => {
    if (lightboxImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [lightboxImage]);

  const openLightbox = (photo) => {
    // Cari index photo di dalam filteredPhotos (bukan displayPhotos, agar navigasi next/prev jalan untuk semua)
    const index = filteredPhotos.findIndex((p) => p.id === photo.id);
    setCurrentImageIndex(index);
    setLightboxImage(photo);
  };

  const closeLightbox = () => setLightboxImage(null);

  const goToNext = (e) => {
    e?.stopPropagation();
    const nextIndex = (currentImageIndex + 1) % filteredPhotos.length;
    setCurrentImageIndex(nextIndex);
    setLightboxImage(filteredPhotos[nextIndex]);
  };

  const goToPrev = (e) => {
    e?.stopPropagation();
    const prevIndex =
      (currentImageIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
    setCurrentImageIndex(prevIndex);
    setLightboxImage(filteredPhotos[prevIndex]);
  };

  const handleViewMore = () => {
    setVisibleCount((prev) => prev + 8);
  };

  return (
    <section className="py-24 bg-black relative">
      <div className="container mx-auto px-4 z-10 relative">
        <SectionHeader
          subtitle="GALERI KEGIATAN"
          title="Dokumentasi Foto TJM Peduli"
        />

        {/* Improved Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mt-10 mb-12">
          {/* Tab All Manual */}
          <button
            onClick={() => setActiveTabId('all')}
            className={`px-6 py-2.5 rounded-full font-jakarta text-sm font-medium transition-all duration-300 transform active:scale-95 ${
              activeTabId === 'all'
                ? 'bg-[#D4000D] text-white shadow-[0_0_20px_rgba(212,0,13,0.4)] border border-[#D4000D]'
                : 'bg-white/5 text-white/70 border border-white/10 hover:border-[#D4000D] hover:text-white hover:bg-white/10'
            }`}
          >
            Semua Foto
          </button>

          {/* Dynamic Tabs */}
          {peduliGalleryData.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTabId(tab.id)}
              className={`px-6 py-2.5 rounded-full font-jakarta text-sm font-medium transition-all duration-300 transform active:scale-95 ${
                activeTabId === tab.id
                  ? 'bg-[#D4000D] text-white shadow-[0_0_20px_rgba(212,0,13,0.4)] border border-[#D4000D]'
                  : 'bg-white/5 text-white/70 border border-white/10 hover:border-[#D4000D] hover:text-white hover:bg-white/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Enhanced Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-6 animate-fade-in">
          {displayPhotos.map((photo) => (
            <div
              key={photo.id}
              className="group relative cursor-pointer overflow-hidden aspect-[4/5] md:aspect-square rounded-xl bg-neutral-900 border border-white/5 hover:border-white/20 transition-all duration-500 shadow-lg"
              onClick={() => openLightbox(photo)}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 25vw"
              />

              {/* Modern Overlay Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-end p-6">
                {/* Icon Zoom di tengah saat hover */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-0 group-hover:scale-100 transition-transform duration-300 delay-75 bg-white/20 backdrop-blur-md p-4 rounded-full border border-white/30 text-white">
                  <Maximize2 size={24} strokeWidth={1.5} />
                </div>

                <p className="text-white/90 font-jakarta text-sm text-center line-clamp-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                  {photo.alt}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* "View More" Button */}
        {hasMore && (
          <div className="flex justify-center mt-12 animate-fade-in-up">
            <button
              onClick={handleViewMore}
              className="group relative px-8 py-3 bg-transparent overflow-hidden rounded-full border border-white/20 hover:border-[#D4000D] transition-colors duration-300"
            >
              <div className="absolute inset-0 w-0 bg-[#D4000D] transition-all duration-[250ms] ease-out group-hover:w-full opacity-10"></div>
              <span className="relative text-white font-jakarta text-sm tracking-wider uppercase flex items-center gap-2 group-hover:text-[#D4000D]">
                Lihat Lebih Banyak <ZoomIn size={16} />
              </span>
            </button>
          </div>
        )}
      </div>

      {/* Modern Lightbox Modal */}
      {mounted &&
        lightboxImage &&
        createPortal(
          <div
            className="fixed inset-0 bg-black/95 backdrop-blur-xl z-[9999] flex flex-col items-center justify-center animate-fade-in"
            onClick={closeLightbox}
          >
            {/* Top Bar Controls */}
            <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-center z-[10001]">
              <div className="text-white/50 text-sm font-jakarta tracking-widest hidden md:block">
                {currentImageIndex + 1} / {filteredPhotos.length}
              </div>
              <button
                onClick={closeLightbox}
                className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 text-white/80 hover:text-white"
              >
                <span className="text-xs uppercase tracking-wider font-medium">
                  Close
                </span>
                <X
                  size={20}
                  className="group-hover:rotate-90 transition-transform duration-300"
                />
              </button>
            </div>

            {/* Main Image Container with Constraints */}
            <div
              className="relative w-full h-[75vh] md:h-[85vh] flex items-center justify-center px-4 md:px-16"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightboxImage.src}
                alt={lightboxImage.alt}
                fill
                className="object-contain drop-shadow-2xl"
                sizes="100vw"
                priority
              />
            </div>

            {/* Bottom Caption Area */}
            <div
              className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/90 to-transparent pt-20 pb-10 px-6 z-[10000]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="max-w-3xl mx-auto text-center">
                <p className="text-white font-jakarta text-lg md:text-xl font-light leading-relaxed tracking-wide">
                  {lightboxImage.alt}
                </p>
                <div className="mt-4 flex justify-center gap-2">
                  <div className="h-1 w-12 rounded-full bg-[#D4000D]"></div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons (Floating) */}
            <button
              onClick={goToPrev}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-black/20 hover:bg-[#D4000D] backdrop-blur-sm border border-white/10 hover:border-[#D4000D] p-4 rounded-full transition-all duration-300 z-[10001] group"
            >
              <ArrowLeft
                size={24}
                className="group-hover:-translate-x-1 transition-transform"
              />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-black/20 hover:bg-[#D4000D] backdrop-blur-sm border border-white/10 hover:border-[#D4000D] p-4 rounded-full transition-all duration-300 z-[10001] group"
            >
              <ArrowRight
                size={24}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>,
          document.body
        )}
    </section>
  );
}
