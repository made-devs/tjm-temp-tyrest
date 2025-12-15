'use client';

import { useState, useRef, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { Cog, Tag, X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { promoData } from '@/data/promoData';

// Daftarkan plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

function buildWhatsAppUrl({ phone, text }) {
  if (!phone) return '#';
  const base = `https://wa.me/${phone}`;
  if (!text) return base;
  return `${base}?text=${encodeURIComponent(text)}`;
}

// --- PROMO MODAL (TETAP SAMA) ---
const PromoModal = ({ promo, startIndex = 0, onClose }) => {
  const modalRef = useRef(null);
  const backdropRef = useRef(null);

  const images = useMemo(() => {
    const arr = promo?.images?.length ? promo.images : [];
    if (!arr.length && promo?.thumbnail) return [promo.thumbnail];
    return arr.filter(Boolean);
  }, [promo]);

  const [index, setIndex] = useState(() => {
    const safe = Math.max(0, Math.min(startIndex, images.length - 1));
    return Number.isFinite(safe) ? safe : 0;
  });

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose?.();
      if (e.key === 'ArrowLeft')
        setIndex((v) => (v - 1 + images.length) % images.length);
      if (e.key === 'ArrowRight') setIndex((v) => (v + 1) % images.length);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [images.length, onClose]);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      backdropRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.25 }
    ).fromTo(
      modalRef.current,
      { scale: 0.95, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.25 },
      '-=0.15'
    );
  });

  const handleClose = () => {
    const tl = gsap.timeline({ onComplete: onClose });
    tl.to(modalRef.current, { scale: 0.95, opacity: 0, duration: 0.2 }).to(
      backdropRef.current,
      { opacity: 0, duration: 0.2 },
      '-=0.1'
    );
  };

  const prev = () => setIndex((v) => (v - 1 + images.length) % images.length);
  const next = () => setIndex((v) => (v + 1) % images.length);

  const waUrl =
    promo?.cta?.href ||
    buildWhatsAppUrl({
      phone: promo?.whatsappPhone || '6285169576890', // <-- override di sini
      text:
        promo?.whatsappText ||
        `Halo admin, saya mau tanya promo: ${promo?.title || ''}`,
    });

  return (
    <div
      ref={backdropRef}
      onClick={handleClose}
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl bg-[#0b0b0b] border border-gray-800 rounded-lg overflow-hidden"
      >
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="relative bg-black">
            <div className="relative aspect-[4/5] w-full">
              <Image
                src={images[index]}
                alt={`${promo?.title || 'Promo'} - ${index + 1}`}
                fill
                className="object-contain"
                priority
              />
            </div>

            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={prev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 text-white border border-gray-700 rounded-full p-2"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  type="button"
                  onClick={next}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 text-white border border-gray-700 rounded-full p-2"
                  aria-label="Next image"
                >
                  <ChevronRight size={20} />
                </button>
              </>
            )}
          </div>

          {/* Details */}
          <div className="p-5 md:p-6">
            <div className="flex items-center gap-2">
              <Tag size={16} className="text-red-500" />
              <h3 className="font-teko text-3xl font-bold uppercase text-white">
                {promo?.title}
              </h3>
            </div>
            {promo?.description && (
              <p className="font-jakarta text-sm text-gray-400 mt-2">
                {promo.description}
              </p>
            )}

            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
                {images.map((src, i) => (
                  <button
                    key={src + i}
                    type="button"
                    onClick={() => setIndex(i)}
                    className={`relative shrink-0 w-16 aspect-[4/5] border rounded-md overflow-hidden ${
                      i === index ? 'border-red-500' : 'border-gray-700'
                    }`}
                    aria-label={`Open image ${i + 1}`}
                  >
                    <Image src={src} alt="" fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}

            <div className="mt-5 flex flex-col gap-3">
              <a
                href={waUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full text-center font-jakarta font-semibold bg-red-600 hover:bg-red-700 transition-colors text-white py-3 rounded-md"
              >
                Chat WhatsApp Admin
              </a>
              <p className="font-jakarta text-xs text-gray-500">
                Foto {index + 1} / {images.length}
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={handleClose}
          className="absolute top-3 right-3 bg-white rounded-full p-1 text-black z-10"
          aria-label="Close modal"
        >
          <X size={22} />
        </button>
      </div>
    </div>
  );
};

// --- MAIN COMPONENT ---
export default function Promos() {
  const sectionRef = useRef(null);
  const [selectedPromo, setSelectedPromo] = useState(null);

  useGSAP(
    () => {
      // 1. Animasi Header
      gsap.from('.promo-header-element', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.6,
        ease: 'power2.out',
      });

      // 2. Animasi Grid Cards (Berjejer)
      gsap.from('.promo-card-item', {
        scrollTrigger: {
          trigger: '.promo-grid-container',
          start: 'top 85%',
        },
        opacity: 0,
        y: 50,
        scale: 0.9,
        stagger: 0.1, // Muncul satu per satu
        duration: 0.6,
        ease: 'back.out(1.2)',
      });
    },
    { scope: sectionRef }
  );

  return (
    <>
      <section ref={sectionRef} className="bg-black py-20">
        <div className="container mx-auto px-4 text-center">
          {/* Header Section */}
          <div className="promo-header-element flex justify-center items-center gap-2">
            <Cog
              size={20}
              className="text-red-500 animate-spin"
              style={{ animationDuration: '5s' }}
            />
            <p className="font-jakarta text-sm font-bold uppercase tracking-widest text-red-500">
              Promo Spesial
            </p>
          </div>

          <h2 className="promo-header-element font-teko text-5xl font-medium uppercase mt-2">
            Penawaran Terbaik Kami
          </h2>

          <p className="promo-header-element font-jakarta text-gray-400 max-w-2xl mx-auto mt-2 mb-12">
            Klik poster di bawah untuk melihat detail promo.
          </p>

          {/* GRID BERJEJER 5 */}
          <div className="promo-grid-container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {promoData.map((promo, index) => {
              // Ambil gambar pertama saja sebagai cover
              const coverImage =
                promo.images && promo.images.length > 0
                  ? promo.images[0]
                  : promo.thumbnail;

              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => setSelectedPromo(promo)}
                  className="promo-card-item group relative flex flex-col text-left w-full"
                >
                  {/* Card Wrapper */}
                  <div className="relative w-full aspect-[4/5] bg-[#111] border border-gray-800 rounded-lg overflow-hidden transition-all duration-300 group-hover:border-red-500 group-hover:shadow-[0_0_20px_rgba(220,38,38,0.3)]">
                    {/* Image */}
                    {coverImage && (
                      <Image
                        src={coverImage}
                        alt={promo.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    )}

                    {/* Overlay Icon on Hover */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="bg-red-600 p-3 rounded-full text-white transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-75">
                        <Eye size={24} />
                      </div>
                    </div>

                    {/* Badge Count Image */}
                    {promo.images && promo.images.length > 1 && (
                      <div className="absolute top-2 right-2 bg-black/70 text-white text-[10px] font-bold px-2 py-1 rounded border border-gray-700">
                        +{promo.images.length - 1}
                      </div>
                    )}
                  </div>

                  {/* Title Below Image */}
                  <div className="mt-3 px-1">
                    <h3 className="font-teko text-xl leading-none uppercase text-white group-hover:text-red-500 transition-colors line-clamp-2">
                      {promo.title}
                    </h3>
                    <p className="font-jakarta text-xs text-gray-500 mt-1 uppercase tracking-wider">
                      {promo.category}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {promoData.length === 0 && (
            <div className="mt-10 p-10 border border-dashed border-gray-800 rounded-lg">
              <p className="text-gray-500">
                Belum ada promo tersedia saat ini.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* MODAL */}
      {selectedPromo && (
        <PromoModal
          promo={selectedPromo}
          startIndex={0}
          onClose={() => setSelectedPromo(null)}
        />
      )}
    </>
  );
}
