import Link from "next/link";
import Image from "next/image";
import { Calendar, ChevronRight, ArrowUpRight } from "lucide-react";
import { beritaData } from "@/data/beritaData";
import PageHero from "@/components/umum/PageHero";

export default function HalamanBerita() {
  const posts = beritaData;

  return (
    <main className="bg-black text-white">
      {/* Hero Section */}
      <PageHero
        imageSrc="/hero.webp"
        breadcrumbText="BERITA"
        titleMain="BERITA"
        titleHighlight="& LIPUTAN MEDIA"
        description="Update terbaru seputar inovasi, layanan cabang, serta liputan media terkait perjalanan TJM Auto Care."
      />

      {/* Konten Daftar Berita */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <a
                key={index}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-[#111] border border-gray-800 hover:border-red-500/50 transition-all duration-300 overflow-hidden hover:shadow-lg hover:shadow-red-500/20"
              >
                <div className="relative aspect-video bg-gray-900 overflow-hidden">
                  {post.image && (
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300 ease-in-out"
                    />
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-gray-400 font-jakarta">
                    <Calendar size={14} />
                    <span>{post.source}</span>
                  </div>
                  <h3 className="font-teko text-2xl font-medium uppercase mt-3 group-hover:text-red-500 transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="font-jakarta text-sm text-gray-400 mt-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-1 font-jakarta text-sm font-bold text-red-500 mt-4">
                    Baca Selengkapnya <ArrowUpRight size={16} />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export const metadata = {
  title: "Berita & Pengumuman | TJM Auto Care",
  description:
    "Berita terbaru, pengumuman cabang, dan update layanan dari TJM Auto Care.",
  keywords: [
    "berita tjm auto care",
    "pengumuman bengkel",
    "update layanan bengkel",
    "berita tjm",
  ],
  alternates: {
    canonical: "https://tjmautocare.id/berita",
  },
};
