'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { Cog, ArrowRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useIsMobile = (breakpoint = 1024) => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < breakpoint);
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, [breakpoint]);
  return isMobile;
};

const servicesData = [
  {
    title: 'Paket Combo Kaki Kaki',
    description:
      'Solusi lengkap untuk kenyamanan dan keamanan kaki-kaki mobil Anda.',
    image: '/services/service1.webp',
  },
  {
    title: 'Paket Combo Super Komplit',
    description:
      'Perawatan menyeluruh dari mesin hingga kaki-kaki untuk performa maksimal.',
    image: '/services/service2.webp',
  },
  {
    title: 'Paket Custom Suspension',
    description:
      'Tingkatkan handling dan gaya dengan suspensi yang disesuaikan.',
    image: '/services/service3.webp',
  },
  {
    title: 'Paket Diesel',
    description:
      'Perawatan khusus untuk mesin diesel agar tetap bertenaga dan efisien.',
    image: '/services/service4.webp',
  },
  {
    title: 'Paket Kaki Kaki',
    description:
      'Fokus pada perbaikan dan perawatan komponen suspensi dan kemudi.',
    image: '/services/service5.webp',
  },
  {
    title: 'Paket Overhoul Engine',
    description:
      'Mengembalikan kondisi mesin seperti baru untuk performa puncak.',
    image: '/services/service6.webp',
  },
  {
    title: 'Paket Racksteer Hemat',
    description: 'Solusi ekonomis untuk perbaikan sistem kemudi rack steer.',
    image: '/services/service1.webp',
  },
  {
    title: 'Paket Special',
    description: 'Penawaran khusus dengan kombinasi layanan paling populer.',
    image: '/services/service2.webp',
  },
  {
    title: 'Paket Steering',
    description:
      'Perbaikan dan perawatan sistem kemudi untuk handling yang presisi.',
    image: '/services/service3.webp',
  },
  {
    title: 'Paket Super Hemat',
    description: 'Pilihan cerdas untuk perawatan rutin dengan harga terbaik.',
    image: '/services/service4.webp',
  },
];

const ServiceCard = ({ service }) => (
  <div className="relative h-[450px] overflow-hidden border border-transparent transition-all duration-500 ease-in-out group-hover:border-red-500 group-hover:shadow-[0_0_25px_rgba(239,68,68,0.6)] group-[.is-active]:border-red-500 group-[.is-active]:shadow-[0_0_25px_rgba(239,68,68,0.6)]">
    <Image
      src={service.image}
      alt={service.title}
      fill
      className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110 group-[.is-active]:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black from-15% to-transparent" />
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
  const [activeIndex, setActiveIndex] = useState(null);
  const isMobile = useIsMobile();
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start' },
    [
      Autoplay({
        playOnInit: true,
        delay: 3000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ]
  );

  const handleCardClick = (index) => {
    if (emblaApi) emblaApi.plugins().autoplay.stop();
    setActiveIndex(activeIndex === index ? null : index);
  };

  useGSAP(
    () => {
      gsap.from('.service-header-element', {
        scrollTrigger: {
          trigger: '.service-header-container',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 30,
        stagger: 0.15,
        duration: 0.6,
        ease: 'power2.out',
      });
      gsap.from('.services-slider', {
        scrollTrigger: {
          trigger: '.services-slider',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
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
      {/* Background Image & Overlay (tetap fixed) */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/services/service6.webp')" }}
      />
      <div className="fixed inset-0 -z-10 bg-black/70"></div>

      {/* Bagian Atas Section (Transparan) */}
      <div className="bg-transparent pt-20 pb-[4rem]">
        <div className="service-header-container container mx-auto px-4 text-center">
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
          <h2 className="service-header-element font-teko text-5xl font-medium uppercase mt-2">
            Pilihan Paket Servis <span className="text-red-500">Terbaik</span>
          </h2>
          <p className="service-header-element font-jakarta text-gray-400 max-w-2xl mx-auto mt-2">
            Kami menawarkan berbagai paket layanan yang dirancang untuk memenuhi
            semua kebutuhan perawatan mobil Anda, dari servis rutin hingga
            perbaikan spesifik.
          </p>
        </div>
      </div>

      {/* Bagian Bawah Section dengan Background Gradasi */}
      {/* Ganti 'from-50%' ke persentase lain (misal: from-30%, from-70%) untuk atur tinggi bg hitam */}
      <div className="relative bg-gradient-to-t from-black from-50% to-transparent pb-20">
        <div className="services-slider cursor-grab active:cursor-grabbing">
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
      </div>
    </div>
  );
}
