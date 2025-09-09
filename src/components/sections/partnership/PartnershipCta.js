'use client';

import Link from 'next/link';

export default function PartnershipCta() {
  return (
    <section className="py-24 bg-black text-center">
      <div className="container mx-auto px-4">
        <h2 className="font-teko text-5xl md:text-6xl font-medium uppercase text-white">
          Siap Bertumbuh Bersama Kami?
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mt-4">
          Hubungi tim kami sekarang untuk mendapatkan informasi lebih lanjut
          mengenai peluang kemitraan dan mulailah perjalanan bisnis Anda di
          dunia otomotif.
        </p>
        <div className="mt-8">
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
