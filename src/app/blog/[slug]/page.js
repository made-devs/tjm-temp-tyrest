import { client } from "@/lib/contentful";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, Calendar, ArrowLeft } from "lucide-react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";

// Konfigurasi styling untuk Rich Text Contentful agar sesuai tema
const renderOptions = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <p className="mb-6 font-jakarta text-gray-300 leading-relaxed text-base md:text-lg">
        {children}
      </p>
    ),
    [BLOCKS.HEADING_2]: (node, children) => (
      <h2 className="font-teko text-3xl md:text-4xl font-medium text-white mt-10 mb-4 uppercase">
        {children}
      </h2>
    ),
    [BLOCKS.HEADING_3]: (node, children) => (
      <h3 className="font-teko text-2xl md:text-3xl font-medium text-red-500 mt-8 mb-3 uppercase">
        {children}
      </h3>
    ),
    [BLOCKS.UL_LIST]: (node, children) => (
      <ul className="list-disc list-outside ml-6 mb-6 text-gray-300 font-jakarta space-y-2">
        {children}
      </ul>
    ),
    [BLOCKS.OL_LIST]: (node, children) => (
      <ol className="list-decimal list-outside ml-6 mb-6 text-gray-300 font-jakarta space-y-2">
        {children}
      </ol>
    ),
    [BLOCKS.QUOTE]: (node, children) => (
      <blockquote className="border-l-4 border-red-500 pl-4 py-2 my-6 italic text-gray-400 bg-gray-900/50 rounded-r">
        {children}
      </blockquote>
    ),
    [INLINES.HYPERLINK]: (node, children) => (
      <a
        href={node.data.uri}
        className="text-red-500 hover:text-red-400 underline decoration-red-500/30 underline-offset-4 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
    // Render gambar di dalam konten artikel
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { title, file } = node.data.target.fields;
      return (
        <div className="my-8 relative aspect-video w-full rounded-lg overflow-hidden border border-gray-800">
          <Image
            src={`https:${file.url}`}
            alt={title || "Blog Image"}
            fill
            className="object-cover"
          />
        </div>
      );
    },
  },
  renderMark: {
    [MARKS.BOLD]: (text) => (
      <strong className="text-white font-bold">{text}</strong>
    ),
  },
};

// Fungsi fetch single post berdasarkan slug
async function getPost(slug) {
  try {
    const response = await client.getEntries({
      content_type: "tjmBlog", // Pastikan sesuai Content Model ID
      "fields.slug": slug,
      limit: 1,
    });
    return response.items[0];
  } catch (error) {
    console.error("Error fetching post:", error);
    return null;
  }
}

// Generate Metadata untuk SEO
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const title = `${slug.replace(/-/g, " ")} | TJM Auto Care Blog`;
  return {
    title,
    description: `Artikel: ${slug.replace(/-/g, " ")} — panduan dan tips perawatan mobil.`,
    keywords: [
      slug.replace(/-/g, " "),
      "artikel kaki kaki mobil",
      "tips perawatan",
    ],
    openGraph: {
      title,
      description: `Artikel: ${slug.replace(/-/g, " ")} — TJM Auto Care`,
      url: `https://tjmautocare.id/blog/${slug}`,
      type: "article",
      images: [
        {
          url: `https://tjmautocare.id/og/blog-${slug}.webp`,
          width: 1200,
          height: 630,
          alt: `${slug.replace(/-/g, " ")} - TJM Blog`,
        },
      ],
    },
    alternates: {
      canonical: `https://tjmautocare.id/blog/${slug}`,
    },
  };
}

// Generate Static Params untuk performa (SSG)
export async function generateStaticParams() {
  const response = await client.getEntries({
    content_type: "tjmBlog",
    select: "fields.slug",
  });

  return response.items.map((post) => ({
    slug: post.fields.slug,
  }));
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  const { title, date, featuredImage, content, summary } = post.fields;

  return (
    <main className="bg-black text-white min-h-screen pb-20">
      {/* Header / Hero Section Khusus Artikel */}
      <section className="relative h-[50vh] min-h-[400px] w-full">
        {featuredImage && (
          <Image
            src={`https:${featuredImage.fields.file.url}`}
            alt={title}
            fill
            className="object-cover opacity-60"
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 pb-12">
          <div className="container mx-auto max-w-4xl">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 font-jakarta text-sm text-gray-400 mb-6">
              <Link href="/" className="hover:text-red-500 transition-colors">
                Home
              </Link>
              <ChevronRight size={14} />
              <Link
                href="/blog"
                className="hover:text-red-500 transition-colors"
              >
                Blog
              </Link>
              <ChevronRight size={14} />
              <span className="text-white truncate max-w-[200px]">{title}</span>
            </div>

            <h1 className="font-teko text-4xl md:text-6xl font-medium uppercase leading-tight mb-4 text-white drop-shadow-lg">
              {title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-sm md:text-base text-gray-300 font-jakarta">
              <div className="flex items-center gap-2">
                <Calendar size={18} className="text-red-500" />
                <span>
                  {new Date(date).toLocaleDateString("id-ID", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Konten Artikel */}
      <article className="container mx-auto px-4 max-w-4xl -mt-8 relative z-10">
        <div className="bg-[#111] border border-gray-800 p-6 md:p-12 rounded-t-xl shadow-2xl shadow-black">
          {/* Summary / Lead Paragraph */}
          {summary && (
            <p className="text-xl md:text-2xl font-jakarta text-gray-200 mb-10 leading-relaxed font-light border-b border-gray-800 pb-10">
              {summary}
            </p>
          )}

          {/* Main Content Rendered from Rich Text */}
          <div className="rich-text-content">
            {documentToReactComponents(content, renderOptions)}
          </div>

          {/* Tombol Back */}
          <div className="mt-16 pt-8 border-t border-gray-800 flex justify-between items-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-white hover:text-red-500 transition-colors font-jakarta font-medium group"
            >
              <ArrowLeft
                size={20}
                className="group-hover:-translate-x-1 transition-transform"
              />
              Kembali ke Daftar Artikel
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
