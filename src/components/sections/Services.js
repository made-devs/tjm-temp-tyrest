'use client';

import { useRef, useEffect, useCallback, useState } from 'react';
import Image from 'next/image';
import {
  Cog,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  MoveRight,
} from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { servicesData } from '@/data/servicesData';

gsap.registerPlugin(ScrollTrigger);

// Hook untuk mendeteksi perangkat mobile
const useIsMobile = (breakpoint = 1024) => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const checkScreenSize = () => setIsMobile(window.innerWidth < breakpoint);
      checkScreenSize();
      window.addEventListener('resize', checkScreenSize);
      return () => window.removeEventListener('resize', checkScreenSize);
    }
  }, [breakpoint]);
  return isMobile;
};

const ServiceCard = ({ service }) => (
  <div className="relative h-[450px] overflow-hidden border border-transparent transition-all duration-500 ease-in-out group-hover:border-red-500 group-hover:shadow-[0_0_25px_rgba(239,68,68,0.6)] group-[.is-active]:border-red-500 group-[.is-active]:shadow-[0_0_25px_rgba(239,68,68,0.6)]">
    <Image
      src={service.image}
      alt={service.title}
      fill
      className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110 group-[.is-active]:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 from-15% to-transparent" />
    <div className="absolute bottom-0 left-0 w-full p-6 text-white">
      <div className="transition-transform duration-500 ease-in-out group-hover:-translate-y-8 group-[.is-active]:-translate-y-8">
        <h3 className="font-teko text-3xl font-medium uppercase">
          {service.title}
        </h3>
        <p className="font-jakarta text-sm text-gray-300 mt-1">
          {service.description}
        </p>
      </div>
      <a
        href="#"
        className="absolute left-6 bottom-6 flex items-center gap-2 font-jakarta text-sm font-bold text-red-500 opacity-0 transform translate-y-4 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-y-0 group-[.is-active]:opacity-100 group-[.is-active]:translate-y-0"
      >
        Read More <ArrowRight size={16} />
      </a>
    </div>
  </div>
);

export default function Services() {
  const sectionRef = useRef(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });

  const [activeIndex, setActiveIndex] = useState(null);
  const isMobile = useIsMobile();

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const handleCardClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setPrevBtnDisabled(!emblaApi.canScrollPrev());
      setNextBtnDisabled(!emblaApi.canScrollNext());
    };
    emblaApi.on('select', onSelect);
    onSelect();
    return () => emblaApi.off('select', onSelect);
  }, [emblaApi]);

  useGSAP(
    () => {
      gsap.from('.service-header-element', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        opacity: 0,
        y: 30,
        stagger: 0.15,
        duration: 0.6,
        ease: 'power2.out',
      });
      gsap.from('.services-slider', {
        scrollTrigger: { trigger: '.services-slider', start: 'top 85%' },
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power2.out',
      });
    },
    { scope: sectionRef }
  );

  return (
    <div ref={sectionRef}>
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/bg-service.webp')" }} // <-- Path gambar diubah di sini
      />
      <div className="fixed inset-0 -z-10 bg-black/70"></div>

      <div className="bg-transparent pt-20 pb-[4rem]">
        <div className="container mx-auto px-4 text-center">
          <div className="service-header-element flex justify-center items-center gap-2">
            <Cog
              size={20}
              className="text-red-500 animate-spin"
              style={{ animationDuration: '5s' }}
            />
            <p className="font-jakarta text-sm font-bold uppercase tracking-widest text-red-500">
              Paket Layanan TJM
            </p>
          </div>
          <div className="service-header-element flex justify-center items-center gap-4 mt-2">
            <h2 className="font-teko text-5xl font-medium uppercase">
              Pilihan Paket Servis <span className="text-red-500">Terbaik</span>
            </h2>
          </div>
          <p className="service-header-element font-jakarta text-gray-400 max-w-2xl mx-auto mt-2">
            Kami menawarkan berbagai paket layanan yang dirancang untuk memenuhi
            semua kebutuhan perawatan mobil Anda.
          </p>
        </div>
      </div>

      <div className="relative bg-gradient-to-t from-black from-50% to-transparent pb-20">
        <div className="services-slider container mx-auto px-4 relative">
          <div className="absolute top-1/2 -translate-y-1/2 -left-0 z-10 hidden md:block">
            <button
              onClick={scrollPrev}
              disabled={prevBtnDisabled}
              className="bg-[#111] border border-gray-800 p-2 disabled:opacity-50 transition-colors hover:border-red-500"
            >
              <ChevronLeft size={24} />
            </button>
          </div>
          <div className="cursor-grab active:cursor-grabbing">
            <div className="embla" ref={emblaRef}>
              <div className="embla__container">
                {servicesData.map((service, index) => (
                  <div
                    className={`embla__slide group py-4 ${
                      index === activeIndex ? 'is-active' : ''
                    }`}
                    key={index}
                    onClick={() => isMobile && handleCardClick(index)}
                  >
                    <ServiceCard service={service} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 -right-0 z-10 hidden md:block">
            <button
              onClick={scrollNext}
              disabled={nextBtnDisabled}
              className="bg-[#111] border border-gray-800 p-2 disabled:opacity-50 transition-colors hover:border-red-500"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
        {isMobile && (
          <div className="mt-8 flex justify-center items-center gap-2 text-red-500 md:hidden animate-swipe">
            <MoveRight size={16} />
            <p className="font-jakarta text-sm font-bold uppercase tracking-widest">
              Geser
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
