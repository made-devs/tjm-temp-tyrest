"use client";

import Image from "next/image";
import { Cog, Users, Calendar, MapPin, Wrench } from "lucide-react"; // 1. Impor ikon baru
import { motion } from "framer-motion";

const StatItem = ({ value, label, icon: Icon }) => (
  <div className="text-center">
    <div className="flex items-center justify-center gap-2">
      <Icon className="text-red-500" size={32} />
      <p className="font-teko text-6xl font-bold text-white">{value}</p>
    </div>
    <p className="font-jakarta text-sm uppercase tracking-wider text-gray-400 mt-1">
      {label}
    </p>
  </div>
);

export default function AboutUs() {
  return (
    <section className="bg-black text-white mt-[4rem] py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Kolom Kiri: Komposisi Gambar */}
          <motion.div
            className="relative h-[450px] lg:h-[550px]"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Foto Garis Kuning (Latar Belakang) */}
            <Image
              src="/features/feature2.webp"
              alt="Detail ban mobil"
              width={500}
              height={500}
              className="absolute top-0 right-0 w-[85%] h-[85%] object-cover"
            />
            {/* Foto Garis Merah (Depan) */}
            <Image
              src="/features/feature1.webp"
              alt="Tim mekanik TJM Auto Care"
              width={400}
              height={400}
              className="absolute bottom-0 left-0 w-[70%] h-[70%] object-cover z-10 border-8 border-black"
            />
          </motion.div>

          {/* Kolom Kanan: Box Teks (Garis Biru) */}
          <motion.div
            className="lg:-ml-24 lg:mt-[1rem] z-20"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="bg-[#000000] p-8 md:p-12 ">
              <div className="flex items-center gap-2">
                <Cog
                  size={20}
                  className="text-red-500 animate-spin"
                  style={{ animationDuration: "5s" }}
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
              <a
                href="#"
                className="inline-block mt-8 bg-red-600 text-white font-jakarta font-bold text-sm px-8 py-3 transition-all duration-300 ease-in-out hover:bg-white hover:text-red-600 hover:-translate-y-1"
              >
                Selengkapnya
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bagian Angka-angka Statistik */}
        {/* 2. Perbarui layout grid dan tambahkan item baru */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          <StatItem value="5000+" label="Pelanggan Puas" icon={Users} />
          <StatItem value="15+" label="Tahun Pengalaman" icon={Calendar} />
          <StatItem value="19" label="Cabang di Indonesia" icon={MapPin} />
          <StatItem value="25+" label="Jenis Layanan" icon={Wrench} />
        </div>
      </div>
    </section>
  );
}
