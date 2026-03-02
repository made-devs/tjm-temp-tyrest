import { client } from "@/lib/contentful";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, Calendar, ArrowLeft } from "lucide-react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";

// TAMBAHAN: data layanan + komponen rekomendasi
import { servicesData } from "@/data/servicesData";
import RecommendationCard from "@/components/blog/RecommendationCard";

export const revalidate = 300;

const BLOG_TITLE_OVERRIDES = {
  "bengkel-kaki-kaki-mobil-terdekat-cara-memilih":
    "Bengkel Kaki-Kaki Terdekat: Cara Memilih | TJM Blog",
  "ciri-kaki-kaki-mobil-rusak": "Ciri Kaki-Kaki Mobil Rusak | TJM Blog",
  "service-kaki-kaki-mobil-gejala-penyebab-biaya":
    "Service Kaki-Kaki: Gejala, Penyebab, Biaya | TJM Blog",
  "tanda-kaki-kaki-mobil-rusak-dan-solusi":
    "5 Tanda Kaki-Kaki Rusak & Solusi | TJM Blog",
};

const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://tjmautocare.id"
).replace(/\/+$/, "");

function isInternalHref(href) {
  if (!href) return false;
  const h = String(href).trim();
  if (h.startsWith("/") || h.startsWith("#")) return true;
  if (h.startsWith("mailto:") || h.startsWith("tel:")) return true;

  // Treat both www and non-www as internal.
  if (/^https?:\/\/(www\.)?tjmautocare\.id(\/|$)/i.test(h)) return true;

  // Also treat configured SITE_URL as internal.
  if (SITE_URL && h.startsWith(SITE_URL)) return true;

  return false;
}

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
    [INLINES.HYPERLINK]: (node, children) => {
      const href = node?.data?.uri;
      const internal = isInternalHref(href);

      return (
        <a
          href={href}
          className="text-red-500 hover:text-red-400 underline decoration-red-500/30 underline-offset-4 transition-colors"
          target={internal ? undefined : "_blank"}
          rel={internal ? undefined : "nofollow noopener noreferrer"}
        >
          {children}
        </a>
      );
    },
    // Render gambar di dalam konten artikel
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const fields = node?.data?.target?.fields;
      const title = fields?.title || "Blog Image";
      const file = fields?.file;
      const url = file?.url ? `https:${file.url}` : null;

      if (!url) return null;

      return (
        <div className="my-8 relative aspect-video w-full rounded-lg overflow-hidden border border-gray-800">
          <Image
            src={url}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 768px"
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
      content_type: "tjmBlog",
      "fields.slug": slug,
      limit: 1,
    });
    return response.items?.[0] ?? null;
  } catch (error) {
    console.error("Error fetching post:", error);
    return null;
  }
}

// Helper: ambil plain text dari rich text Contentful (kasar, tapi cukup untuk keyword scoring)
function richTextToPlain(value) {
  try {
    if (!value) return "";
    return JSON.stringify(value);
  } catch {
    return "";
  }
}

// HELPER: rekomendasi paket servis berdasarkan konten blog
function findRelatedServices({ title, summary, content }) {
  const searchText =
    `${title || ""} ${summary || ""} ${richTextToPlain(content)}`.toLowerCase();

  const keywords = [
    // kaki-kaki / suspensi
    "kaki kaki",
    "kaki-kaki",
    "suspensi",
    "limbung",
    "bunyi",
    "gluduk",
    "bantingan",
    "lower arm",
    "bushing",
    "bushing arm",
    "ball joint",
    "tie rod",
    "long tie rod",
    "link stabilizer",
    "bearing",
    "chamber",
    "caster",

    // steering / rack steer
    "steering",
    "setir",
    "rack steer",
    "racksteer",
    "power steering",
    "eps",

    // shockbreaker
    "shock",
    "shockbreaker",
    "shock absorber",
    "bocor",

    // rem / safety
    "rem",
    "kampas",
    "disc",
    "discbrake",
    "bleeding",
    "minyak rem",

    // mesin / tune up
    "tune up",
    "gurah",
    "injector",
    "injektor",
    "overhaul",
    "oli",
    "radiator",
    "overheat",

    // AC (kadang paket combo)
    "ac",
    "freon",
    "evaporator",
    "kondensor",
  ];

  // token umum (buat menangkap variasi kata)
  const tokens = searchText
    .replace(/[^\p{L}\p{N}\s-]/gu, " ")
    .split(/\s+/)
    .map((t) => t.trim())
    .filter((t) => t.length >= 4); // minimal 4 karakter biar nggak noise

  const scored = (servicesData || []).map((service) => {
    let score = 0;

    const variantText = (service.variants || [])
      .map((v) => {
        const detailText = (v.details || [])
          .map((d) => `${d?.title || ""} ${d?.description || ""}`)
          .join(" ");
        return `${v.title || ""} ${v.description || ""} ${detailText}`;
      })
      .join(" ");

    const serviceText =
      `${service.title || ""} ${service.description || ""} ${service.details || ""} ${service.slug || ""} ${variantText}`.toLowerCase();

    // keyword intersection (bobot tinggi)
    keywords.forEach((kw) => {
      if (searchText.includes(kw) && serviceText.includes(kw)) score += 12;
    });

    // token overlap (bobot ringan)
    // tambah poin kalau token blog sering muncul di serviceText
    let tokenHits = 0;
    for (const t of tokens) {
      if (serviceText.includes(t)) tokenHits += 1;
      if (tokenHits >= 12) break;
    }
    score += Math.min(tokenHits, 12); // limit

    // boost kalau service memang core untuk kaki-kaki
    const slug = (service.slug || "").toLowerCase();
    if (searchText.includes("kaki") && slug.includes("kaki")) score += 8;
    if (searchText.includes("rack") && slug.includes("rack")) score += 6;
    if (searchText.includes("shock") && slug.includes("shock")) score += 6;
    if (searchText.includes("steering") && slug.includes("steering"))
      score += 6;

    return { service, score };
  });

  scored.sort((a, b) => b.score - a.score);

  const matches = scored.filter((x) => x.score > 0).map((x) => x.service);

  // fallback aman: paket paling relevan (kaki-kaki/steering/shock)
  if (matches.length === 0) {
    const fallbackSlugs = new Set([
      "paket-kaki-kaki",
      "paket-steering",
      "paket-shockbreaker",
      "paket-racksteer-ultimate",
      "paket-kaki-kaki-racksteer",
    ]);

    const fallback = (servicesData || []).filter((s) =>
      fallbackSlugs.has(s.slug),
    );
    return fallback.slice(0, 3);
  }

  // hindari duplikat slug
  const unique = [];
  const seen = new Set();
  for (const s of matches) {
    if (!s?.slug || seen.has(s.slug)) continue;
    seen.add(s.slug);
    unique.push(s);
    if (unique.length >= 3) break;
  }

  return unique;
}

// Generate Metadata untuk SEO (lebih akurat: pakai judul & summary Contentful)
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) {
    return {
      title: "Artikel Tidak Ditemukan | TJM Auto Care",
      robots: { index: false, follow: false },
    };
  }

  const { title, summary } = post.fields;
  const seoTitle =
    BLOG_TITLE_OVERRIDES[slug] || `${title} | TJM Auto Care Blog`;

  return {
    title: seoTitle,
    description:
      summary || "Artikel dan tips perawatan mobil dari TJM Auto Care.",
    alternates: { canonical: `https://tjmautocare.id/blog/${slug}` },
    openGraph: {
      title: seoTitle,
      description:
        summary || "Artikel dan tips perawatan mobil dari TJM Auto Care.",
      url: `https://tjmautocare.id/blog/${slug}`,
      type: "article",
    },
  };
}

// Generate Static Params untuk performa (SSG)
export async function generateStaticParams() {
  const response = await client.getEntries({
    content_type: "tjmBlog",
    select: "fields.slug",
  });

  return (response.items || [])
    .map((post) => post?.fields?.slug)
    .filter(Boolean)
    .map((slug) => ({ slug }));
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const { title, date, featuredImage, content, summary } = post.fields;

  const recommendations = findRelatedServices({ title, summary, content });

  return (
    <main className="bg-black text-white min-h-screen pb-20">
      {/* Header / Hero Section Khusus Artikel */}
      <section className="relative h-[50vh] min-h-[400px] w-full">
        {featuredImage?.fields?.file?.url && (
          <Image
            src={`https:${featuredImage.fields.file.url}`}
            alt={title}
            fill
            sizes="100vw"
            className="object-cover opacity-60"
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 pb-12">
          <div className="container mx-auto max-w-6xl">
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
              <span className="text-white truncate max-w-[240px]">{title}</span>
            </div>

            <h1 className="font-teko text-4xl md:text-6xl font-medium uppercase leading-tight mb-4 text-white drop-shadow-lg max-w-4xl">
              {title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-sm md:text-base text-gray-300 font-jakarta">
              {date && (
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
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Body: konten + sidebar rekomendasi */}
      <section className="container mx-auto px-4 max-w-6xl -mt-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Main article */}
          <article className="w-full lg:w-3/4">
            <div className="bg-[#111] border border-gray-800 p-6 md:p-12 rounded-t-xl shadow-2xl shadow-black">
              {summary && (
                <p className="text-xl md:text-2xl font-jakarta text-gray-200 mb-10 leading-relaxed font-light border-b border-gray-800 pb-10">
                  {summary}
                </p>
              )}

              <div className="rich-text-content">
                {documentToReactComponents(content, renderOptions)}
              </div>

              {/* Rekomendasi (mobile) */}
              {recommendations?.length > 0 && (
                <div className="mt-14 pt-10 border-t border-gray-800 lg:hidden">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-teko text-3xl uppercase text-white">
                      Solusi Untukmu
                    </h3>
                    <Link
                      href="/layanan"
                      className="text-sm font-jakarta font-bold text-red-500 hover:text-red-400"
                    >
                      Lihat Semua →
                    </Link>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {recommendations.map((s, idx) => (
                      <RecommendationCard
                        key={s.slug}
                        service={s}
                        isTopPick={idx === 0}
                      />
                    ))}
                  </div>
                </div>
              )}

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

          {/* Sidebar (desktop) */}
          <aside className="hidden lg:block w-full lg:w-1/4">
            <div className="sticky top-28 space-y-6">
              {recommendations?.length > 0 && (
                <div className="bg-[#0f0f0f] border border-gray-800 rounded-xl p-5">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-teko text-2xl uppercase text-white">
                      Solusi Untukmu
                    </h4>
                    <Link
                      href="/layanan"
                      className="text-xs font-jakarta font-bold text-red-500 hover:text-red-400"
                    >
                      Semua →
                    </Link>
                  </div>

                  <div className="flex flex-col gap-4">
                    {recommendations.map((s, idx) => (
                      <RecommendationCard
                        key={s.slug}
                        service={s}
                        isTopPick={idx === 0}
                      />
                    ))}
                  </div>
                </div>
              )}

              <div className="bg-[#0f0f0f] border border-gray-800 rounded-xl p-5">
                <p className="font-jakarta text-sm text-gray-300">
                  Masih bingung pilih paket?
                </p>
                <p className="font-jakarta text-xs text-gray-500 mt-1">
                  Konsultasi dan booking lewat halaman kontak.
                </p>
                <Link
                  href="/kontak"
                  className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-red-500 hover:bg-red-400 text-black font-jakarta font-bold text-sm px-4 py-2 transition-colors"
                >
                  Konsultasi / Booking
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
