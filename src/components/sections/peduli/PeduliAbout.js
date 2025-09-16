// src/components/sections/peduli/PeduliAbout.js
import { Car, Heart, Handshake } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import Link from "next/link";
import Image from "next/image";

export default function PeduliAbout() {
  return (
    <section className="py-20 bg-[#111]">
      <div className="container mx-auto px-4">
        <SectionHeader
          subtitle="TENTANG PROGRAM KAMI"
          title="Servis Mobil, Berbagi Kebaikan"
          description="Setiap Anda melakukan servis, Anda turut membantu mereka yang membutuhkan. TJM Peduli adalah inisiatif sosial dari TJM AutoCare Group dimana sebagian keuntungan disalurkan untuk membantu masyarakat."
        />

        <div className="text-center mt-8">
          <Link
            href="/layanan"
            className="inline-block bg-red-600 text-white font-jakarta font-bold text-base px-10 py-4 transition-all duration-300 ease-in-out hover:bg-white hover:text-red-600 hover:-translate-y-1"
          >
            Ikut Berpartisipasi
          </Link>
        </div>

        {/* Mengganti placeholder dengan gambar yang relevan dari proyek */}
        <div className="max-w-3xl mx-auto mt-16">
          <div className="relative aspect-video">
            <Image
              src="/peduli/peduli5.webp" // Gambar relevan dengan program peduli
              alt="Kegiatan TJM Peduli"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex justify-center items-center gap-8 md:gap-16 mt-16">
          <div className="flex flex-col items-center text-center">
            <Car size={48} className="text-red-500" />
            <p className="font-jakarta text-gray-300 mt-2">Servis Mobil</p>
          </div>
          <div className="text-5xl text-gray-600">+</div>
          <div className="flex flex-col items-center text-center">
            <Heart size={48} className="text-red-500" />
            <p className="font-jakarta text-gray-300 mt-2">Hati Ikhlas</p>
          </div>
          <div className="text-5xl text-gray-600">=</div>
          <div className="flex flex-col items-center text-center">
            <Handshake size={48} className="text-red-500" />
            <p className="font-jakarta text-gray-300 mt-2">Membantu Sesama</p>
          </div>
        </div>
      </div>
    </section>
  );
}
