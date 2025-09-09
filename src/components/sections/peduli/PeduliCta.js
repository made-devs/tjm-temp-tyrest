// src/components/sections/peduli/PeduliCta.js
import Link from 'next/link';

export default function PeduliCta() {
  return (
    <section className="py-24 bg-gray-900 text-center">
      <div className="container mx-auto px-4">
        <h2 className="font-teko text-6xl font-medium uppercase text-white">
          Ayo Servis Mobil, <span className="text-red-500">Ayo Peduli!</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mt-4">
          Jadikan setiap servis mobil Anda sebagai langkah kebaikan. Pesan paket
          servis sekarang dan jadilah bagian dari perubahan.
        </p>
        <div className="mt-8">
          <Link
            href="/layanan"
            className="inline-block bg-red-600 text-white font-jakarta font-bold text-base px-10 py-4 transition-all duration-300 ease-in-out hover:bg-white hover:text-red-600 hover:-translate-y-1"
          >
            Pesan Paket Servis Sekarang
          </Link>
        </div>
      </div>
    </section>
  );
}
