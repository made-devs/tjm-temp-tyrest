"use client";

import Image from "next/image";
import { DollarSign, ThumbsUp, ShieldCheck, Cog } from "lucide-react";
import { motion } from "framer-motion";

// Data untuk setiap kartu keunggulan
const features = [
  {
    icon: DollarSign,
    title: "Harga Terjangkau",
    description:
      "Kualitas servis terbaik dengan harga yang transparan dan kompetitif.",
    image: "/features/feature1.webp", // Ganti dengan path gambar Anda
  },
  {
    icon: ThumbsUp,
    title: "Pelayanan Terbaik",
    description:
      "Tim kami siap memberikan solusi dan pelayanan yang ramah untuk setiap customer.",
    image: "/features/feature2.webp", // Ganti dengan path gambar Anda
  },
  {
    icon: ShieldCheck,
    title: "Kualitas Terjamin",
    description:
      "Kami menggunakan suku cadang berkualitas dan bergaransi untuk hasil yang maksimal.",
    image: "/features/feature3.webp", // Ganti dengan path gambar Anda
  },
];

const FeatureCard = ({ feature }) => (
  <motion.div
    className="bg-[#111] border border-gray-800 overflow-hidden" // Tambahkan overflow-hidden untuk kerapian
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true, amount: 0.3 }}
  >
    <div className="p-6">
      <div className="flex items-center gap-4">
        <div className="bg-red-600 p-3 rounded-full">
          <feature.icon size={24} className="text-white" />
        </div>
        <div>
          <h3 className="font-teko text-2xl font-bold uppercase text-white">
            {feature.title}
          </h3>
          <p className="font-jakarta text-sm text-gray-400">
            {feature.description}
          </p>
        </div>
      </div>
    </div>
    {/* Ganti tinggi tetap dengan rasio aspek */}
    <div className="relative aspect-[4/3]">
      <Image
        src={feature.image}
        alt={feature.title}
        fill
        className="object-cover"
      />
    </div>
  </motion.div>
);

export default function WhyChooseUs() {
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
            Selamat Datang di TJM Auto Care
          </p>
        </div>
        <h2 className="font-teko text-5xl font-medium uppercase mt-2">
          Semua Kebutuhan Mobil Anda di Satu Tempat
        </h2>
        <p className="font-jakarta text-gray-400 max-w-2xl mx-auto mt-2">
          Kami menyediakan solusi lengkap untuk perawatan dan perbaikan mobil
          Anda, ditangani oleh tim profesional yang berpengalaman di bidangnya.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 text-left">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
