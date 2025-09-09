// src/components/sections/peduli/PeduliHero.js
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function PeduliHero() {
  return (
    <section className="relative h-[30vh] flex items-center justify-center text-center text-white p-8">
      {/* Gambar latar belakang, bisa diganti nanti */}
      <Image
        src="/hero.webp"
        alt="Inisiatif TJM Peduli"
        fill
        className="object-cover z-0"
        priority
      />
      <div className="absolute inset-0 bg-black/60 z-10" />
      <div className="relative z-20">
        <h1 className="font-teko text-4xl md:text-5xl font-medium uppercase">
          TJM Peduli
        </h1>
        <div className="flex items-center justify-center gap-2 font-jakarta text-sm mt-2">
          <Link href="/" className="text-gray-300 hover:text-red-500">
            Home
          </Link>
          <ChevronRight size={16} className="text-red-500" />
          <span className="text-white">TJM Peduli</span>
        </div>
      </div>
    </section>
  );
}
