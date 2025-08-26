import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, ChevronRight, Clock } from 'lucide-react';

// Fungsi untuk mengambil semua data post dari file markdown
const getPosts = () => {
  const postsDirectory = path.join(process.cwd(), 'posts');
  // Filter untuk memastikan hanya file .md yang dibaca
  const fileNames = fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith('.md'));

  const allPostsData = fileNames.map((fileName) => {
    // Hapus .md dari nama file untuk jadi slug
    const slug = fileName.replace(/\.md$/, '');

    // Baca file markdown sebagai string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Gunakan gray-matter untuk mem-parsing metadata post
    const matterResult = matter(fileContents);

    return {
      slug,
      ...matterResult.data,
    };
  });

  // Urutkan post berdasarkan tanggal, dari yang terbaru
  return allPostsData.sort((a, b) => {
    if (new Date(a.date) < new Date(b.date)) {
      return 1;
    } else {
      return -1;
    }
  });
};

export default function BlogPage() {
  const posts = getPosts();

  return (
    <main className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[30vh] flex items-center justify-center text-center text-white p-8">
        <Image
          src="/hero.webp" // Ganti dengan gambar header yang sesuai
          alt="Blog TJM Auto Care"
          fill
          className="object-cover z-0"
          priority
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative z-20">
          <h1 className="font-teko text-4xl md:text-5xl font-medium uppercase">
            Blog & Artikel
          </h1>
          <div className="flex items-center justify-center gap-2 font-jakarta text-sm mt-2">
            <Link href="/" className="text-gray-300 hover:text-red-500">
              Home
            </Link>
            <ChevronRight size={16} className="text-red-500" />
            <span className="text-white">Blog</span>
          </div>
        </div>
      </section>

      {/* Konten Daftar Blog */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block bg-[#111] border border-gray-800 hover:border-red-500/50 transition-all duration-300 overflow-hidden hover:shadow-lg hover:shadow-red-500/20"
              >
                <div className="relative aspect-video bg-gray-900 overflow-hidden">
                  {/* Tampilkan gambar hanya jika post.cover_image ada */}
                  {post.cover_image && (
                    <Image
                      src={post.cover_image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300 ease-in-out"
                    />
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-gray-400 font-jakarta">
                    <Calendar size={14} />
                    <span>
                      {new Date(post.date).toLocaleDateString('id-ID', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </span>
                  </div>
                  <h3 className="font-teko text-2xl font-medium uppercase mt-3 group-hover:text-red-500 transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="font-jakarta text-sm text-gray-400 mt-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="font-jakarta text-sm font-bold text-red-500 mt-4 inline-block">
                    Baca Selengkapnya →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
