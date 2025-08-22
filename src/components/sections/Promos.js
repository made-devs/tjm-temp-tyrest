'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Cog, Tag, X } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import InstagramEmbed from '@/components/InstagramEmbed';

// Daftarkan plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const promoData = [
  {
    title: 'Promo Kemerdekaan HUT RI',
    description:
      'Dapatkan 21 promo gratis senilai 4,1 juta rupiah. Promo terbatas khusus bulan ini!',
    thumbnail: '/promo/promo1.webp',
    videoUrl: 'https://www.instagram.com/p/DMzxjnwxO3C',
  },
  {
    title: '19 Promo Service AC Gratis',
    description:
      'Nikmati 19 promo gratis service AC senilai 3.7jt, termasuk Diskon Coating, Free Spooring, Tune-Up, dan banyak lagi!',
    thumbnail: '/promo/promo2.webp',
    videoUrl: 'https://www.instagram.com/p/DMx4TdMyeFm',
  },
  {
    title: 'Promo Kaki-Kaki Terbesar',
    description:
      'Promo kemerdekaan terbesar! Dapatkan bagian dari total hadiah senilai 80,8jt rupiah untuk servis kaki-kaki.',
    thumbnail: '/promo/promo3.webp',
    videoUrl: 'https://www.instagram.com/p/DMx1_qSyS6T/',
  },
];

const VideoModal = ({ videoUrl, onClose }) => {
  const isInstagram = videoUrl.includes('instagram.com');
  const modalRef = useRef(null);
  const backdropRef = useRef(null);

  // Animasi untuk memunculkan dan menyembunyikan modal
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      backdropRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.3 }
    ).fromTo(
      modalRef.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.3 },
      '-=0.2'
    );
  });

  // Fungsi untuk menutup modal dengan animasi
  const handleClose = () => {
    const tl = gsap.timeline({ onComplete: onClose });
    tl.to(modalRef.current, { scale: 0.8, opacity: 0, duration: 0.3 }).to(
      backdropRef.current,
      { opacity: 0, duration: 0.3 },
      '-=0.2'
    );
  };

  return (
    <div
      ref={backdropRef}
      onClick={handleClose}
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className="relative"
      >
        {isInstagram ? (
          <div className="bg-white rounded-lg min-w-[80vw] md:min-w-[30vw] max-h-[90vh] overflow-y-auto">
            <InstagramEmbed postUrl={videoUrl} />
          </div>
        ) : (
          <div className="relative w-full max-w-4xl aspect-video bg-black">
            <iframe
              src={videoUrl}
              title="Video Promo TJM Auto Care"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        )}
        <button
          onClick={handleClose}
          className="absolute -top-4 -right-4 bg-white rounded-full p-1 text-black z-10"
        >
          <X size={24} />
        </button>
      </div>
    </div>
  );
};

const PromoCard = ({ promo, onClick }) => {
  const cardRef = useRef(null);

  // Animasi hover pada kartu
  useGSAP(
    () => {
      const card = cardRef.current;
      const animation = gsap.to(card, {
        y: -8,
        duration: 0.3,
        paused: true,
        ease: 'power2.inOut',
      });

      card.addEventListener('mouseenter', () => animation.play());
      card.addEventListener('mouseleave', () => animation.reverse());

      return () => {
        card.removeEventListener('mouseenter', () => animation.play());
        card.removeEventListener('mouseleave', () => animation.reverse());
      };
    },
    { scope: cardRef }
  );

  return (
    <div
      ref={cardRef}
      className="promo-card bg-[#111] border border-gray-800 transition-colors duration-300 hover:border-red-500 cursor-pointer"
      onClick={onClick}
    >
      <div className="relative aspect-[3/4] overflow-hidden">
        <Image
          src={promo.thumbnail}
          alt={promo.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2">
          <Tag size={16} className="text-red-500" />
          <h3 className="font-teko text-2xl font-bold uppercase text-white">
            {promo.title}
          </h3>
        </div>
        <p className="font-jakarta text-sm text-gray-400 mt-2">
          {promo.description}
        </p>
      </div>
    </div>
  );
};

export default function Promos() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const sectionRef = useRef(null);

  // Animasi scroll-triggered untuk memunculkan kartu promo
  useGSAP(
    () => {
      gsap.from('.promo-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power2.out',
      });
    },
    { scope: sectionRef }
  );

  return (
    <>
      <section ref={sectionRef} className="bg-black py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center items-center gap-2">
            <Cog
              size={20}
              className="text-red-500 animate-spin"
              style={{ animationDuration: '5s' }}
            />
            <p className="font-jakarta text-sm font-bold uppercase tracking-widest text-red-500">
              Promo Bulan Ini
            </p>
          </div>
          <h2 className="font-teko text-5xl font-medium uppercase mt-2">
            Jangan Lewatkan Penawaran Kami
          </h2>
          <p className="font-jakarta text-gray-400 max-w-2xl mx-auto mt-2">
            Ikuti terus update terbaru dari bengkel kami, mulai dari promo
            servis bulanan hingga tips perawatan mobil langsung dari mekanik
            kami.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 text-left">
            {promoData.map((promo, index) => (
              <PromoCard
                key={index}
                promo={promo}
                onClick={() => setSelectedVideo(promo.videoUrl)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Render modal secara kondisional */}
      {selectedVideo && (
        <VideoModal
          videoUrl={selectedVideo}
          onClose={() => setSelectedVideo(null)}
        />
      )}
    </>
  );
}
