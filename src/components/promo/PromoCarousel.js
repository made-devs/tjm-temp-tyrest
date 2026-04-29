"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import TrackedWhatsAppLink from "@/components/integrasi/TrackedWhatsAppLink";

export default function PromoCarousel({ activeItems, activeCategoryLabel }) {
  const autoplayRef = useRef(
    Autoplay({ delay: 3500, stopOnInteraction: true, stopOnMouseEnter: true }),
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [autoplayRef.current],
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);
  const [lightboxImage, setLightboxImage] = useState(null);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (emblaApi) emblaApi.scrollTo(0);
  }, [activeItems, emblaApi]);

  // Close lightbox on ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setLightboxImage(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <section className="py-8 pb-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          {activeItems.length > 0 ? (
            <>
              <div className="relative w-full max-w-[1400px] group">
                <button
                  onClick={scrollPrev}
                  className="absolute -left-2 md:-left-8 lg:-left-12 top-1/2 transform -translate-y-1/2 z-10 bg-zinc-900 border border-white/10 text-white p-3 sm:p-5 rounded-sm hover:bg-red-600 hover:border-red-500 hover:scale-105 transition-all duration-300 shadow-xl opacity-0 group-hover:opacity-100 focus:outline-none"
                >
                  <ChevronLeft size={28} className="sm:w-10 sm:h-10" />
                </button>
                <div
                  className="embla overflow-hidden mx-4 md:mx-16 lg:mx-20"
                  ref={emblaRef}
                >
                  <div className="embla__container flex">
                    {activeItems.map((item, idx) => (
                      <div
                        key={`${item.title}-${idx}`}
                        className="embla__slide flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 px-4 md:px-6 py-8"
                      >
                        <div
                          className="relative aspect-[4/5] w-full cursor-pointer group/image overflow-hidden outline outline-1 outline-white/5 rounded-sm shadow-2xl hover:shadow-[0_0_20px_rgba(220,38,38,0.2)] transition-all duration-500"
                          onClick={() => setLightboxImage(item)}
                        >
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover/image:scale-[1.05]"
                            priority={idx < 3}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                            <span className="font-jakarta text-white font-bold text-sm uppercase tracking-widest text-center">
                              KLIK UNTUK DETAIL
                            </span>
                            <div className="w-full h-[2px] bg-red-600 mt-3 scale-x-0 group-hover/image:scale-x-100 transition-transform duration-500 origin-left" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <button
                  onClick={scrollNext}
                  className="absolute -right-2 md:-right-8 lg:-right-12 top-1/2 transform -translate-y-1/2 z-10 bg-zinc-900 border border-white/10 text-white p-3 sm:p-5 rounded-sm hover:bg-red-600 hover:border-red-500 hover:scale-105 transition-all duration-300 shadow-xl opacity-0 group-hover:opacity-100 focus:outline-none"
                >
                  <ChevronRight size={28} className="sm:w-10 sm:h-10" />
                </button>
              </div>

              {/* Indikator Dots */}
              <div className="flex gap-3 mt-6">
                {scrollSnaps.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => scrollTo(idx)}
                    className={`h-2 rounded-sm transition-all duration-500 focus:outline-none ${
                      selectedIndex === idx
                        ? "bg-red-600 w-12 shadow-[0_0_10px_rgba(220,38,38,0.6)]"
                        : "bg-zinc-700 hover:bg-zinc-500 w-4"
                    }`}
                  />
                ))}
              </div>

              {/* WhatsApp Button */}
              <div className="mt-14 text-center">
                <TrackedWhatsAppLink
                  href={`https://wa.me/6285169576890?text=${encodeURIComponent(
                    `Halo, saya tertarik dengan promo dari kategori ${activeCategoryLabel}. Bisa berikan informasi lebih lanjut?`,
                  )}`}
                  eventProps={{
                    page: "promo",
                    placement: "category_whatsapp_cta",
                    promo_category: activeCategoryLabel,
                  }}
                  className="inline-block relative group overflow-hidden bg-red-600 shadow-[0_0_20px_rgba(220,38,38,0.2)] hover:shadow-[0_0_25px_rgba(220,38,38,0.5)] transition-all duration-300 rounded-sm"
                >
                  <div className="absolute inset-0 w-full h-full bg-white origin-left transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                  <span className="relative z-10 font-jakarta text-[14px] font-bold uppercase tracking-widest text-white group-hover:text-red-700 px-12 py-4 block text-center transition-colors">
                    AMBIL PROMO VIA WHATSAPP
                  </span>
                </TrackedWhatsAppLink>
              </div>
            </>
          ) : (
            <div className="text-gray-400 py-16 font-jakarta text-center bg-zinc-900/30 border border-white/5 w-full max-w-2xl rounded-sm">
              <span className="block text-xl md:text-2xl font-teko uppercase tracking-widest text-white mb-2">
                Opss..
              </span>
              Belum ada promo yang tersedia di kategori ini untuk sementara
              waktu.
            </div>
          )}
        </div>
      </div>

      {/* Lightbox Popup */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 lg:p-12 transition-all duration-300"
          onClick={() => setLightboxImage(null)}
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-6 right-6 lg:top-10 lg:right-10 text-white bg-zinc-900 border border-white/10 hover:bg-red-600 hover:border-red-500 p-3 rounded-sm transition-all duration-300 z-[110] focus:outline-none shadow-2xl"
          >
            <X size={24} />
          </button>
          <div
            className="relative w-full h-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightboxImage.image}
              alt={lightboxImage.title}
              fill
              className="object-contain drop-shadow-2xl"
              priority
              onError={(e) => {
                console.error("Image failed to load:", lightboxImage.image);
                e.target.src = "/placeholder.webp"; // Fallback
              }}
            />
          </div>
        </div>
      )}
    </section>
  );
}
