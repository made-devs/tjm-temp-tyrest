'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

export default function Cta() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      // Animasi untuk elemen-elemen di dalam CTA
      gsap.from('.cta-element', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 40,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power2.out',
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 text-white text-center overflow-hidden"
    >
      {/* Background Image dengan Efek Fixed */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/hero.webp')" }}
      />
      {/* Lapisan Overlay Gelap */}
      <div className="absolute inset-0 -z-10 bg-black/20" />

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="cta-element font-teko text-5xl md:text-6xl font-medium uppercase">
          Siap Memberikan Perawatan <br />{' '}
          <span className="text-red-600">Terbaik Untuk Mobil Anda?</span>
        </h2>
        <p className="cta-element font-jakarta text-gray-300 max-w-2xl mx-auto mt-4">
          Jangan tunggu sampai ada masalah. Jadwalkan servis Anda sekarang atau
          hubungi kami untuk konsultasi gratis mengenai kebutuhan kendaraan
          Anda.
        </p>
        <div className="cta-element mt-8">
          <Link
            href="/kontak"
            className="inline-block bg-red-600 text-white font-jakarta font-bold text-base px-10 py-4 transition-all duration-300 ease-in-out hover:bg-white hover:text-red-600 hover:-translate-y-1"
          >
            Hubungi Kami Sekarang
          </Link>
        </div>
      </div>
    </section>
  );
}
