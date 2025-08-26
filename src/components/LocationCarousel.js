'use client';

import { useState } from 'react';
import { workshopLocations } from '@/data/locations';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';

// Komponen ini hanya berisi Peta dan Carousel Lokasi
export default function LocationCarousel() {
  const [activeLocation, setActiveLocation] = useState(workshopLocations[0]);

  const handleNext = () => {
    const currentIndex = workshopLocations.findIndex(
      (loc) => loc.id === activeLocation.id
    );
    const nextIndex = (currentIndex + 1) % workshopLocations.length;
    setActiveLocation(workshopLocations[nextIndex]);
  };

  const handlePrev = () => {
    const currentIndex = workshopLocations.findIndex(
      (loc) => loc.id === activeLocation.id
    );
    const prevIndex =
      (currentIndex - 1 + workshopLocations.length) % workshopLocations.length;
    setActiveLocation(workshopLocations[prevIndex]);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      {/* Peta Interaktif */}
      <div className="aspect-video lg:aspect-auto lg:h-full relative overflow-hidden border-2 border-gray-800">
        <iframe
          key={activeLocation.id}
          src={activeLocation.mapUrl} // Menggunakan mapUrl
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="animate-fade-in"
        ></iframe>
      </div>

      {/* Carousel Detail Lokasi */}
      <div className="bg-[#111] border border-gray-800 p-8 relative">
        <div className="overflow-hidden min-h-[280px] md:min-h-[250px]">
          {workshopLocations.map((location) => (
            <div
              key={location.id}
              className={`transition-opacity duration-500 ease-in-out ${
                activeLocation.id === location.id
                  ? 'opacity-100'
                  : 'opacity-0 absolute invisible'
              }`}
            >
              <div className="aspect-video bg-black">
                {/* Menggunakan location.photo */}
                {location.photo && (
                  <Image
                    src={location.photo}
                    alt={location.city} // Menggunakan city
                    width={800}
                    height={600}
                    className="aspect-video object-cover"
                  />
                )}
              </div>
              <h3 className="font-teko text-2xl font-medium uppercase text-red-500 mt-6">
                {location.city} {/* Menggunakan city */}
              </h3>
              <p className="font-jakarta text-gray-400 mt-2">
                {location.address}
              </p>
              <p className="font-jakarta text-sm text-white mt-2 inline-block">
                Jam Buka: {location.hours}
              </p>
            </div>
          ))}
        </div>

        {/* Tombol Navigasi */}
        <div className="flex items-center gap-4 mt-6">
          <button
            onClick={handlePrev}
            className="bg-black border border-gray-700 p-3 text-white hover:bg-red-600 hover:border-red-600 transition-colors"
          >
            <ArrowLeft size={20} />
          </button>
          <button
            onClick={handleNext}
            className="bg-black border border-gray-700 p-3 text-white hover:bg-red-600 hover:border-red-600 transition-colors"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
