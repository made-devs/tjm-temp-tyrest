"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[85vh] flex items-center text-white">
      <Image
        src="/hero.webp"
        alt="Mekanik TJM Auto Care sedang bekerja"
        priority
        fill
        className="object-cover z-0"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/60 z-10" />

      <div className="relative z-20 container mx-auto px-4 w-full">
        {/*
          PERBAIKAN:
          - Konten rata kiri di mobile (justify-start).
          - Konten kembali ke kanan di desktop (lg:justify-end).
        */}
        <div className="flex justify-start lg:justify-end lg:pr-[7rem]">
          <div className="max-w-2xl text-left">
            <h1 className="hero-element font-teko text-5xl sm:text-6xl lg:text-7xl font-medium uppercase leading-none mt-2">
              Solusi Dari semua <br /> permasalahan anda
            </h1>

            <p className="hero-element font-jakarta text-gray-300 mt-4 max-w-lg">
              Spesialis {""}
              <Link
                href="/layanan/paket-kaki-kaki"
                className="text-red-500 hover:text-white transition-colors duration-300 font-bold underline decoration-red-500/50"
              >
                Bengkel Kaki-Kaki
              </Link>
              , Suspensi, Rack Steer, Anti Karat, Detailing & Coating, Quick
              Service hingga mesin Diesel, kami menangani setiap masalah dengan
              detail dan keahlian. Percayakan kendaraan Anda pada mekanik
              berpengalaman kami.
            </p>

            <div className="hero-element mt-8 flex flex-wrap gap-4">
              <Link
                href="/layanan/paket-kaki-kaki"
                className="inline-block bg-red-600 text-white font-jakarta font-bold text-sm px-8 py-3 transition-all duration-300 ease-in-out hover:bg-white hover:text-red-600 hover:-translate-y-1"
              >
                Spesialis Kaki-Kaki
              </Link>
              <Link
                href="/layanan"
                className="inline-block border border-white text-white font-jakarta font-bold text-sm px-8 py-3 transition-all duration-300 ease-in-out hover:bg-white hover:text-black hover:-translate-y-1"
              >
                Semua Layanan
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
