"use client";

import Image from "next/image";
import { Cog } from "lucide-react"; // 1. Ganti Wrench dengan Cog
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-[85vh] flex items-center text-white">
      {/* Gambar Background */}
      <Image
        src="/hero.webp"
        alt="Mekanik TJM Auto Care sedang bekerja"
        fill
        className="object-cover z-0"
        priority
      />
      {/* Lapisan Overlay Gelap */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Konten Hero */}
      <div className="relative z-20 container mx-auto px-4">
        {/* Pembungkus untuk mendorong konten ke kanan */}
        <div className="flex justify-end pr-[7rem]">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2">
              {/* 2. Ganti ikon dan tambahkan animasi */}
              <Cog
                size={20}
                className="text-red-500 animate-spin"
                style={{ animationDuration: "5s" }}
              />
              <p className="font-jakarta text-sm font-bold uppercase tracking-widest text-red-500">
                Bengkel Spesialis TJM
              </p>
            </div>

            <h1 className="font-teko text-6xl md:text-7xl font-medium uppercase leading-none mt-2">
              Perbaikan Presisi <br />
              Untuk Mobil Anda
            </h1>

            <p className="font-jakarta text-gray-300 mt-4 max-w-lg">
              Dari kaki-kaki, suspensi, rack steer, hingga mesin diesel, kami
              menangani setiap masalah dengan detail dan keahlian. Percayakan
              kendaraan Anda pada mekanik berpengalaman kami.
            </p>

            <a
              href="#"
              className="inline-block mt-8 bg-red-600 text-white font-jakarta font-bold text-sm px-8 py-3 transition-all duration-300 ease-in-out hover:bg-white hover:text-red-600 hover:-translate-y-1"
            >
              Lihat Layanan Kami
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
