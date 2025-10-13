'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionHeader from '@/components/SectionHeader';
import { promoCategories } from '@/data/promoAutocare';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

gsap.registerPlugin(ScrollTrigger);

export default function PromoPage() {
  const pageRef = useRef(null);
  const autoplayRef = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true, stopOnMouseEnter: true })
  );

  useGSAP(
    () => {
      gsap.from('.promo-card', {
        opacity: 0,
        y: 50,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power2.out',
      });
    },
    { scope: pageRef }
  );

  // State untuk kategori
  const [activeCategory, setActiveCategory] = useState(0);

  const activeItems = promoCategories[activeCategory].items;

  // Embla Carousel setup
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
    },
    [autoplayRef.current]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

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
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  // Reset carousel jika ganti kategori
  const handleCategoryChange = (idx) => {
    setActiveCategory(idx);
    setSelectedIndex(0);
    if (emblaApi) emblaApi.scrollTo(0);
  };

  return (
    <main ref={pageRef} className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[30vh] flex items-center justify-center text-center text-white p-8">
        <Image
          src="/features/feature2.webp"
          alt="Promo TJM Auto Care"
          fill
          className="object-cover z-0"
          priority
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative z-20">
          <h1 className="font-teko text-4xl md:text-5xl font-medium uppercase">
            Promo Kami
          </h1>
          <div className="flex items-center justify-center gap-2 font-jakarta text-sm mt-2">
            <Link href="/" className="text-gray-300 hover:text-red-500">
              Home
            </Link>
            <ChevronRight size={16} className="text-red-500" />
            <span className="text-white">Promo</span>
          </div>
        </div>
      </section>

      {/* Promo Section */}
      <section className="pt-20">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <SectionHeader
              subtitle="PROMO TERBARU"
              title="PENAWARAN SPESIAL TJM AUTO CARE"
              description="Manfaatkan promo menarik kami untuk perawatan kendaraan Anda dengan harga terbaik."
            />
          </div>

          {/* Promo Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Promo cards will be added here */}
          </div>
        </div>
      </section>

      {/* Tab Kategori */}
      <section className="">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto gap-2 pb-2 scrollbar-hide w-full justify-center">
            {promoCategories.map((cat, idx) => (
              <button
                key={cat.label}
                onClick={() => handleCategoryChange(idx)}
                className={`px-4 py-2 rounded-full font-jakarta text-sm whitespace-nowrap border transition-all duration-200
                  ${
                    activeCategory === idx
                      ? 'bg-red-600 text-white border-red-600'
                      : 'bg-[#181818] text-gray-300 border-gray-700 hover:bg-red-900 hover:text-white'
                  }
                `}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Carousel Promo per Kategori */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            {activeItems.length > 0 ? (
              <>
                <div className="relative w-full">
                  <button
                    onClick={scrollPrev}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/70 text-white p-4 rounded-full hover:bg-red-600 transition shadow-lg"
                  >
                    <ChevronLeft size={32} />
                  </button>
                  <div className="embla overflow-hidden" ref={emblaRef}>
                    <div className="embla__container flex">
                      {activeItems.map((item, idx) => (
                        <div
                          key={`${item.title}-${idx}`}
                          className="embla__slide flex-[0_0_33.333%] min-w-0 px-4"
                        >
                          <div className="relative aspect-[4/5] w-full">
                            <Image
                              src={item.image}
                              alt={item.title}
                              fill
                              className="object-cover rounded-lg shadow-xl"
                              priority={idx < 3}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <button
                    onClick={scrollNext}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/70 text-white p-4 rounded-full hover:bg-red-600 transition shadow-lg"
                  >
                    <ChevronRight size={32} />
                  </button>
                </div>
                {/* Indikator Dots */}
                <div className="flex gap-2 mt-8">
                  {scrollSnaps.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => scrollTo(idx)}
                      className={`h-3 rounded-full transition-all duration-300 ${
                        selectedIndex === idx
                          ? 'bg-red-600 w-10'
                          : 'bg-gray-500 hover:bg-gray-400 w-3'
                      }`}
                    />
                  ))}
                </div>
              </>
            ) : (
              <div className="text-gray-400 py-12">
                Belum ada promo di kategori ini.
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
