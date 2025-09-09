import Link from 'next/link';
import Image from 'next/image';
import { Calendar, ChevronRight, ArrowUpRight } from 'lucide-react';
import { newsData } from '@/data/newsData'; // Impor data berita yang baru

// Komponen ini tidak perlu lagi menjadi client component
export default function NewsPage() {
  const posts = newsData; // Langsung gunakan data dari newsData

  return (
    <main className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[30vh] flex items-center justify-center text-center text-white p-8">
        <Image
          src="/hero.webp"
          alt="News TJM Auto Care"
          fill
          className="object-cover z-0"
          priority
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative z-20">
          <h1 className="font-teko text-4xl md:text-5xl font-medium uppercase">
            News & Liputan Media
          </h1>
          <div className="flex items-center justify-center gap-2 font-jakarta text-sm mt-2">
            <Link href="/" className="text-gray-300 hover:text-red-500">
              Home
            </Link>
            <ChevronRight size={16} className="text-red-500" />
            <span className="text-white">News</span>
          </div>
        </div>
      </section>

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
