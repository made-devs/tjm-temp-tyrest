'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { serviceGroups } from '@/data/servicesData'; // Impor data baru
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionHeader from '@/components/SectionHeader';

gsap.registerPlugin(ScrollTrigger);

const ServiceCard = ({ service }) => (
  <div className="relative h-[450px] overflow-hidden border border-transparent transition-all duration-500 ease-in-out group hover:border-red-500 hover:shadow-[0_0_25px_rgba(239,68,68,0.6)]">
    <Image
      src={service.image}
      alt={service.title}
      fill
      className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black from-15% to-transparent" />
    <div className="absolute bottom-0 left-0 w-full p-6 text-white">
      <div className="transition-transform duration-500 ease-in-out group-hover:-translate-y-8">
        <h3 className="font-teko text-3xl font-medium uppercase">
          {service.title}
        </h3>
        <p className="font-jakarta text-sm text-gray-300 mt-1">
          {service.description}
        </p>
      </div>
      <Link
        href={service.href}
        className="absolute left-6 bottom-6 flex items-center gap-2 font-jakarta text-sm font-bold text-red-500 opacity-0 transform translate-y-4 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-y-0"
      >
        Lihat Detail <ArrowRight size={16} />
      </Link>
    </div>
  </div>
);

export default function ServicesPage() {
  const pageRef = useRef(null);
  const [activeTab, setActiveTab] = useState(0); // State untuk tab yang aktif

  const activeServices = serviceGroups[activeTab].services;

  useGSAP(
    () => {
      gsap.from('.service-card-wrapper', {
        key: activeTab, // Animasikan ulang saat tab berubah
        opacity: 0,
        y: 50,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power2.out',
      });
    },
    { scope: pageRef, dependencies: [activeTab] } // Re-run a
  );

  return (
    <main ref={pageRef} className="bg-black text-white">
      {/* Headline Section */}
      <section className="relative h-[30vh] flex items-center justify-center text-center text-white p-8">
        <Image
          src="/services/service5.webp"
          alt="Layanan TJM Auto Care"
          fill
          className="object-cover z-0"
          priority
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative z-20">
          <h1 className="font-teko text-4xl md:text-5xl font-medium uppercase">
            Layanan
          </h1>
          <div className="flex items-center justify-center gap-2 font-jakarta text-sm mt-2">
            <Link href="/" className="text-gray-300 hover:text-red-500">
              Home
            </Link>
            <ChevronRight size={16} className="text-red-500" />
            <span className="text-white">Layanan</span>
          </div>
        </div>
      </section>

      {/* Grid Daftar Servis */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <SectionHeader
              subtitle="LAYANAN KAMI"
              title="SOLUSI PERAWATAN KENDARAAN ANDA"
              description="Dari perawatan rutin hingga detailing premium, kami menawarkan rangkaian layanan lengkap yang dirancang untuk menjaga kendaraan Anda dalam kondisi terbaik."
            />
          </div>

          {/* Navigasi Tab */}
          <div className="flex justify-center flex-wrap gap-4 mb-12">
            {serviceGroups.map((group, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`font-jakarta font-bold text-sm px-6 py-3 transition-colors duration-300 ${
                  activeTab === index
                    ? 'bg-red-600 text-white'
                    : 'bg-[#111] border border-gray-800 text-gray-300 hover:bg-gray-800'
                }`}
              >
                {group.brand}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activeServices.map((service) => (
              <div key={service.slug} className="service-card-wrapper">
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
