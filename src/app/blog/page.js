import { client } from "@/lib/contentful";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

export const metadata = {
  title: "Blog & Artikel Perawatan Kaki-Kaki Mobil | TJM Auto Care",
  description:
    "Baca tips dan artikel terbaru seputar bengkel kaki-kaki, perawatan suspensi, dan panduan service mobil.",
  keywords: [
    "artikel kaki kaki mobil",
    "tips perawatan kaki kaki",
    "blog bengkel mobil",
    "cara merawat suspensi mobil",
    "TJM Auto Care",
  ],
  openGraph: {
    title: "Blog & Artikel Perawatan Kaki-Kaki Mobil",
    description: "Baca tips dan artikel terbaru seputar bengkel kaki-kaki...",
    url: "https://tjmautocare.id/blog",
    type: "website",
    images: [
      {
        url: "https://tjmautocare.id/og-image-blog.webp",
        width: 1200,
        height: 630,
        alt: "Blog TJM Auto Care",
      },
    ],
  },
  alternates: {
    canonical: "https://tjmautocare.id/blog",
  },
};

async function getPosts() {
  try {
    const response = await client.getEntries({
      content_type: "tjmBlog",
      order: "-fields.date", // Urutkan dari tanggal terbaru
    });
    return response.items;
  } catch (error) {
    console.error("Error fetching posts from Contentful:", error);
    return [];
  }
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <main className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[30vh] flex items-center justify-center text-center text-white p-8">
        <Image
          src="/hero.webp"
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
            {posts.length > 0 ? (
              posts.map((post) => (
                <Link
                  key={post.sys.id}
                  href={`/blog/${post.fields.slug}`}
                  className="group block bg-[#111] border border-gray-800 hover:border-red-500/50 transition-all duration-300 overflow-hidden hover:shadow-lg hover:shadow-red-500/20"
                >
                  <div className="relative aspect-video bg-gray-900 overflow-hidden">
                    {post.fields.featuredImage && (
                      <Image
                        src={`https:${post.fields.featuredImage.fields.file.url}`}
                        alt={post.fields.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300 ease-in-out"
                      />
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-gray-400 font-jakarta">
                      <span>
                        {new Date(post.fields.date).toLocaleDateString(
                          "id-ID",
                          {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          },
                        )}
                      </span>
                    </div>
                    <h3 className="font-teko text-2xl font-medium uppercase mt-3 group-hover:text-red-500 transition-colors duration-300 line-clamp-2">
                      {post.fields.title}
                    </h3>
                    <p className="font-jakarta text-sm text-gray-400 mt-2 leading-relaxed line-clamp-3">
                      {post.fields.summary}
                    </p>
                    <div className="font-jakarta text-sm font-bold text-red-500 mt-4 inline-block">
                      Baca Selengkapnya →
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-400">Belum ada artikel tersedia.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
