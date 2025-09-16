"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { X, ArrowLeft, ArrowRight } from "lucide-react";
import { peduliPhotos } from "@/data/peduliData";
import SectionHeader from "@/components/SectionHeader";

// Komponen ini menampilkan galeri foto dengan fitur lightbox.
export default function PeduliPhotoGallery() {
  const [lightboxImage, setLightboxImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxImage(peduliPhotos[index]);
  };

  const closeLightbox = () => setLightboxImage(null);

  const goToNext = () => {
    const nextIndex = (currentImageIndex + 1) % peduliPhotos.length;
    setCurrentImageIndex(nextIndex);
    setLightboxImage(peduliPhotos[nextIndex]);
  };

  const goToPrev = () => {
    const prevIndex =
      (currentImageIndex - 1 + peduliPhotos.length) % peduliPhotos.length;
    setCurrentImageIndex(prevIndex);
    setLightboxImage(peduliPhotos[prevIndex]);
  };

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <SectionHeader
          subtitle="GALERI KEGIATAN"
          title="Dokumentasi Foto TJM Peduli"
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {peduliPhotos.map((photo, index) => (
            <div
              key={photo.id}
              className="group relative cursor-pointer overflow-hidden aspect-square"
              onClick={() => openLightbox(index)}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                <p className="text-white font-jakarta text-center text-sm">
                  {photo.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center animate-fade-in p-4">
          <div className="relative max-w-4xl max-h-[90vh] w-full h-full">
            <Image
              src={lightboxImage.src}
              alt={lightboxImage.alt}
              fill
              className="object-contain"
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
    </section>
  );
}
