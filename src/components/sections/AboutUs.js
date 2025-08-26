'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { Cog, Users, Calendar, MapPin, Wrench } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

// Daftarkan plugin
gsap.registerPlugin(ScrollTrigger);

const StatItem = ({ value, label, icon: Icon }) => (
  <div className="stat-item text-center">
    <div className="flex items-center justify-center gap-2">
      {/* FIX: Menggunakan dua ikon berbeda untuk handle responsif */}
      <Icon className="text-red-500 md:hidden" size={24} />{' '}
      {/* Tampil di mobile */}
      <Icon className="text-red-500 hidden md:block" size={32} />{' '}
      {/* Tampil di desktop */}
      <p className="stat-value font-teko text-5xl md:text-6xl font-bold text-white">
        {value}
      </p>
    </div>
    <p className="font-jakarta text-xs md:text-sm uppercase tracking-wider text-gray-400 mt-1">
      {label}
    </p>
  </div>
);

export default function AboutUs() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
          toggleActions: 'play none none none',
        },
      });

      // Animasikan kolom gambar dan teks
      tl.from('.about-image-col', {
        opacity: 0,
        x: -50,
        duration: 0.8,
        ease: 'power2.out',
      }).from(
        '.about-text-col',
        {
          opacity: 0,
          x: 50,
          duration: 0.8,
          ease: 'power2.out',
        },
        '-=0.6'
      );

      // Animasi statistik dengan counter
      const statItems = gsap.utils.toArray('.stat-item');
      statItems.forEach((item) => {
        const valueEl = item.querySelector('.stat-value');
        const targetValue = parseInt(valueEl.textContent.replace('+', ''), 10);
        const suffix = valueEl.textContent.includes('+') ? '+' : '';

        let counter = { val: 0 };

        gsap
          .timeline({
            scrollTrigger: {
              trigger: item,
              start: 'top 90%',
              toggleActions: 'play none none none',
            },
          })
          .from(item, {
            opacity: 0,
            y: 30,
            duration: 0.6,
            ease: 'power2.out',
          })
          .to(
            counter,
            {
              val: targetValue,
              duration: 1.5,
              ease: 'power1.out',
              onUpdate: () => {
                valueEl.textContent = Math.round(counter.val) + suffix;
              },
            },
            '-=0.4'
          );
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="bg-black text-white pt-[9rem] pb-20 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Kolom Kiri: Komposisi Gambar */}
          <div className="about-image-col relative h-[450px] lg:h-[550px]">
            <Image
              src="/features/feature2.webp"
              alt="Detail ban mobil"
              width={500}
              height={500}
              className="absolute top-0 right-0 w-[85%] h-[85%] object-cover"
            />
            <Image
              src="/features/feature1.webp"
              alt="Tim mekanik TJM Auto Care"
              width={400}
              height={400}
              className="absolute bottom-0 left-0 w-[70%] h-[70%] object-cover z-10 border-8 border-black"
            />
          </div>

          {/* Kolom Kanan: Box Teks */}
          <div className="about-text-col lg:-ml-24 lg:mt-[1rem] z-20">
            <div className="bg-[#000000] p-8 md:p-12 ">
              <div className="flex items-center gap-2">
                <Cog
                  size={20}
                  className="text-red-500 animate-spin"
                  style={{ animationDuration: '5s' }}
                />
                <p className="font-jakarta text-sm font-bold uppercase tracking-widest text-red-500">
                  Tentang Kami
                </p>
              </div>
              <h2 className="font-teko text-5xl font-medium uppercase mt-2">
                Pengalaman & Keahlian Terbaik <br />
                <span className="text-red-600">Untuk Mobil Anda</span>
              </h2>
              <p className="font-jakarta text-gray-400 mt-4">
                Sejak berdiri, TJM Auto Care berkomitmen untuk memberikan solusi
                otomotif terbaik. Dengan tim mekanik berpengalaman dan peralatan
                modern, kami memastikan setiap kendaraan mendapatkan penanganan
                presisi dan hasil yang memuaskan.
              </p>
              <Link
                href="/tentang-kami"
                className="inline-block mt-8 bg-red-600 text-white font-jakarta font-bold text-sm px-8 py-3 transition-all duration-300 ease-in-out hover:bg-white hover:text-red-600 hover:-translate-y-1"
              >
                Selengkapnya
              </Link>
            </div>
          </div>
        </div>

        {/* Bagian Angka-angka Statistik */}
        <div className="stats-grid grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          <StatItem value="5000+" label="Pelanggan Puas" icon={Users} />
          <StatItem value="15+" label="Tahun Pengalaman" icon={Calendar} />
          <StatItem value="19" label="Cabang di Indonesia" icon={MapPin} />
          <StatItem value="25+" label="Jenis Layanan" icon={Wrench} />
        </div>
      </div>
    </section>
  );
}
