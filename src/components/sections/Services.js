"use client"; // Wajib untuk slider interaktif

import Image from "next/image";
import { Cog, ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules"; // 1. Impor FreeMode

// Impor CSS dasar untuk Swiper
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/free-mode";

// Data untuk setiap kartu layanan
const servicesData = [
  {
    title: "Ganti Oli & Filter",
    description: "Perawatan rutin untuk menjaga performa mesin tetap optimal.",
    image: "/services/service1.webp",
  },
  {
    title: "Servis AC Lengkap",
    description:
      "Pastikan kabin mobil Anda sejuk dan bebas dari bau tidak sedap.",
    image: "/services/service2.webp",
  },
  {
    title: "Spooring & Balancing",
    description: "Tingkatkan stabilitas dan kenyamanan berkendara Anda.",
    image: "/services/service3.webp",
  },
  {
    title: "Tune-Up Mesin",
    description: "Mengembalikan tenaga dan efisiensi bahan bakar mobil Anda.",
    image: "/services/service4.webp",
  },
  {
    title: "Pengecekan Kaki-Kaki",
    description: "Inspeksi dan perbaikan suspensi untuk keamanan berkendara.",
    image: "/services/service5.webp",
  },
];

const ServiceCard = ({ service }) => (
  <div className="relative group h-[450px] overflow-hidden">
    <Image
      src={service.image}
      alt={service.title}
      fill
      className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
    {/* 3. Atur ulang posisi awal teks agar ada padding bawah */}
    <div className="absolute bottom-0 left-0 w-full p-6 text-white transition-transform duration-500 ease-in-out transform translate-y-24 group-hover:translate-y-0">
      <h3 className="font-teko text-3xl font-bold uppercase">
        {service.title}
      </h3>
      <p className="font-jakarta text-sm text-gray-300 mt-1">
        {service.description}
      </p>
      <a
        href="#"
        className="flex items-center gap-2 font-jakarta text-sm font-bold text-red-500 mt-4"
      >
        Read More
        <ArrowRight size={16} />
      </a>
    </div>
  </div>
);

export default function Services() {
  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center items-center gap-2">
          <Cog
            size={20}
            className="text-red-500 animate-spin"
            style={{ animationDuration: "5s" }}
          />
          <p className="font-jakarta text-sm font-bold uppercase tracking-widest text-red-500">
            Paket Layanan TJM
          </p>
        </div>
        <h2 className="font-teko text-5xl font-bold uppercase mt-2">
          Pilihan Paket Servis <span className="text-red-500">Terbaik</span>
        </h2>
        <p className="font-jakarta text-gray-400 max-w-2xl mx-auto mt-2">
          Kami menawarkan berbagai paket layanan yang dirancang untuk memenuhi
          semua kebutuhan perawatan mobil Anda, dari servis rutin hingga
          perbaikan spesifik.
        </p>
      </div>

      <div className="mt-12">
        {/* 2. Konfigurasi ulang Swiper untuk animasi yang mulus */}
        <Swiper
          spaceBetween={20}
          slidesPerView={1.2}
          speed={4000} // Kecepatan pergerakan marquee
          breakpoints={{
            640: { slidesPerView: 2.5, spaceBetween: 20 },
            1024: { slidesPerView: 3.5, spaceBetween: 30 },
            1280: { slidesPerView: 4.5, spaceBetween: 30 },
          }}
          className="!py-4 cursor-pointer"
        >
          {servicesData.map((service, index) => (
            <SwiperSlide key={index}>
              <ServiceCard service={service} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
