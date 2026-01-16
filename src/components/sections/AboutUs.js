'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { Cog, Users, Calendar, MapPin, Wrench } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

// Daftarkan plugin GSAP
gsap.registerPlugin(ScrollTrigger);

/**
 * Komponen StatItem sekarang menangani animasinya sendiri untuk mencegah hydration mismatch.
 * Ia akan merender nilai akhir di server & render awal client, lalu menganimasikan angka di client.
 */
const StatItem = ({ value, label, icon: Icon }) => {
  const valueRef = useRef(null);

  useGSAP(() => {
    const element = valueRef.current;
    if (!element) return;

    // Ekstrak angka dan sufiks (cth: '+') dari prop 'value'
    const targetValue = parseInt(value.replace(/[^0-9]/g, ''), 10);
    const suffix = value.includes('+') ? '+' : '';

    // Objek untuk dianimasikan oleh GSAP
    const counter = { val: 0 };

    // Animasi counter dari 0 ke nilai target
    gsap.to(counter, {
      val: targetValue,
      duration: 2,
      ease: 'power1.out',
      scrollTrigger: {
        trigger: element.closest('.stat-item'),
        start: 'top 90%',
        toggleActions: 'play none none none',
      },
      onUpdate: () => {
        // Update textContent dengan format angka ribuan (pakai titik)
        element.textContent =
          Math.round(counter.val)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, '.') + suffix;
      },
    });
  }, [value]); // Jalankan ulang animasi jika 'value' berubah

  return (
    <div className="stat-item text-center">
      <div className="flex items-center justify-center gap-2">
        <Icon className="text-red-500 md:hidden" size={24} />
        <Icon className="text-red-500 hidden md:block" size={32} />
        <p
          ref={valueRef}
          className="stat-value font-teko text-5xl md:text-6xl font-bold text-white"
        >
          {/* Nilai awal ini cocok antara server dan client, mencegah error */}
          {value}
        </p>
      </div>
      <p className="font-jakarta text-xs md:text-sm uppercase tracking-wider text-gray-400 mt-1">
        {label}
      </p>
    </div>
  );
};

export default function AboutUs() {
  const sectionRef = useRef(null);

  // Logika animasi untuk komponen utama disederhanakan
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

      // Animasi untuk memunculkan setiap item statistik
      gsap.from('.stat-item', {
        scrollTrigger: {
          trigger: '.stats-grid',
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.2,
        ease: 'power2.out',
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
            </div>
          </div>
        </div>

        {/* Bagian Angka-angka Statistik dengan nilai yang diperbarui */}
        <div className="stats-grid grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          <StatItem value="100.000+" label="Pelanggan Puas" icon={Users} />
          <StatItem value="15+" label="Tahun Pengalaman" icon={Calendar} />
          <StatItem value="28" label="Cabang di Indonesia" icon={MapPin} />
          <StatItem value="50+" label="Jenis Layanan" icon={Wrench} />
        </div>
      </div>
    </section>
  );
}
