'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { Cog, Star, BadgeCheck } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay'; // <-- Impor Autoplay
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const testimonialsData = [
  {
    name: 'Andi Pratama',
    handle: '@andipratama',
    avatar: '',
    stars: 5,
    text: 'Servis kaki-kakinya juara! Mobil jadi senyap lagi pas di jalan rusak. Mekaniknya juga ramah dan jelasin masalahnya detail banget. Recommended!',
    service: 'Paket Kaki Kaki',
  },
  {
    name: 'Budi Santoso',
    handle: '@budisan',
    avatar: '',
    stars: 5,
    text: 'Ambil paket super komplit, hasilnya memuaskan. Dari mesin sampai AC semua beres. Harganya juga transparan, nggak ada biaya aneh-aneh. Pasti balik lagi.',
    service: 'Paket Combo Super Komplit',
  },
  {
    name: 'Citra Lestari',
    handle: '@citralstr',
    avatar: '',
    stars: 4,
    text: 'Tempatnya bersih, ruang tunggunya nyaman. Pengerjaannya lumayan cepat untuk servis rutin. Mungkin bisa ditambah opsi booking online biar lebih praktis.',
    service: 'Paket Super Hemat',
  },
  {
    name: 'Dewi Anggraini',
    handle: '@dewianggraini',
    avatar: '',
    stars: 5,
    text: 'Rack steer mobil saya bunyi-bunyi, dibawa ke sini langsung beres. Sekarang setirnya enteng dan presisi lagi. Terima kasih TJM Auto Care!',
    service: 'Paket Racksteer Hemat',
  },
];

const TestimonialCard = ({ testimonial }) => {
  const avatarSrc =
    testimonial.avatar || 'https://placehold.co/48x48/222/FFFFFF?text=TJM';

  return (
    <div className="relative h-full bg-[#111] border border-gray-800 p-6 flex flex-col overflow-hidden transition-all duration-300 group-hover:shadow-[0_0_10px_rgba(239,68,68,0.8)]">
      <div className="flex items-center gap-4">
        <Image
          src={avatarSrc}
          alt={testimonial.name}
          width={48}
          height={48}
          className="rounded-full object-cover bg-gray-700"
          onError={(e) => {
            e.currentTarget.src =
              'https://placehold.co/48x48/222/FFFFFF?text=TJM';
          }}
        />
        <div>
          <div className="flex items-center gap-1.5">
            <h4 className="font-jakarta font-bold text-white">
              {testimonial.name}
            </h4>
            <BadgeCheck size={16} className="text-blue-500" />
          </div>
          <p className="font-jakarta text-sm text-gray-500">
            {testimonial.handle}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-0.5 my-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={16}
            className={
              i < testimonial.stars
                ? 'text-yellow-400 fill-current'
                : 'text-gray-600'
            }
          />
        ))}
      </div>
      <p className="font-jakarta text-gray-300 text-sm leading-relaxed flex-grow">
        {`"${testimonial.text}"`}
      </p>
      <p className="font-jakarta text-xs text-red-500 font-bold uppercase mt-4 pt-4 border-t border-gray-800">
        Layanan: {testimonial.service}
      </p>
    </div>
  );
};

export default function Testimonials() {
  const sectionRef = useRef(null);
  // Konfigurasi Embla Carousel dengan Autoplay
  const [emblaRef] = useEmblaCarousel({ align: 'start', loop: true }, [
    Autoplay({
      playOnInit: true,
      delay: 4000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
  ]);

  useGSAP(
    () => {
      gsap.from('.testimonial-header-element', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 30,
        stagger: 0.15,
        duration: 0.6,
        ease: 'power2.out',
      });
      gsap.from('.testimonials-slider', {
        scrollTrigger: {
          trigger: '.testimonials-slider',
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
    <section
      ref={sectionRef}
      className="bg-black pt-10 pb-20 md:py-20 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        {/* Menggunakan grid 5 kolom untuk rasio 2:3 */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12 items-center">
          {/* Kolom Kiri: Teks Header (mengambil 2 dari 5 kolom) */}
          <div className="lg:col-span-2 text-center lg:pr-[3rem] lg:text-left">
            <div className="testimonial-header-element flex justify-center lg:justify-start items-center gap-2">
              <Cog
                size={20}
                className="text-red-500 animate-spin"
                style={{ animationDuration: '5s' }}
              />
              <p className="font-jakarta text-sm font-bold uppercase tracking-widest text-red-500">
                Testimoni Pelanggan
              </p>
            </div>
            <h2 className="testimonial-header-element font-teko text-5xl font-medium uppercase mt-2">
              Apa Kata Mereka Tentang Kami
            </h2>
            <p className="testimonial-header-element font-jakarta text-gray-400 max-w-2xl mx-auto lg:mx-0 mt-2">
              Kami bangga dengan kepercayaan yang telah diberikan oleh ribuan
              pelanggan. Berikut adalah beberapa cerita dari mereka.
            </p>
          </div>

          {/* Kolom Kanan: Slider Testimoni (mengambil 3 dari 5 kolom) */}
          <div className="lg:col-span-4 testimonials-slider w-full cursor-grab active:cursor-grabbing">
            <div className="embla embla--testimonials" ref={emblaRef}>
              <div className="embla__container">
                {testimonialsData.map((testimonial, index) => (
                  <div className="embla__slide !h-auto p-2 group" key={index}>
                    <TestimonialCard testimonial={testimonial} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
