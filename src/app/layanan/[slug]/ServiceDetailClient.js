// Tandai komponen ini sebagai Client Component
"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, Loader2, Cog, ChevronRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import TrackedWhatsAppLink from "@/components/TrackedWhatsAppLink";

const KAKI_KAKI_INTENT_BLOCKS = [
  {
    title: "Apa Yang Dicek",
    description:
      "Pengecekan fokus pada komponen yang paling sering memicu bunyi gluduk, setir getar, ban aus tidak rata, dan mobil limbung seperti rack steer, tie rod, ball joint, bushing arm, bearing, dan shockbreaker.",
  },
  {
    title: "Gejala Umum",
    description:
      "Keluhan yang paling sering masuk adalah bunyi saat polisi tidur, handling terasa lari, setir tidak presisi, kabin bergetar, dan kaki-kaki terasa kasar saat melewati jalan rusak.",
  },
  {
    title: "Kapan Harus Servis",
    description:
      "Segera cek bila gejala mulai terasa, sebelum perjalanan jauh, atau saat ban mulai aus tidak merata. Tindakan lebih cepat biasanya membantu biaya servis tetap lebih efisien.",
  },
  {
    title: "Kenapa Pilih TJM",
    description:
      "TJM fokus sebagai bengkel spesialis kaki-kaki mobil dengan inspeksi detail, rekomendasi transparan, pilihan paket sesuai kondisi mobil, dan jalur booking cepat ke cabang terdekat.",
  },
];

// --- Client Component untuk Tampilan Detail ---
export default function ServiceDetailClient({ service }) {
  const [activeVariant, setActiveVariant] = useState(
    service?.variants ? service.variants[0] : null,
  );
  const [isLoadingImage, setIsLoadingImage] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const mainRef = useRef(null);
  const whatsappNumber = "6285169576890";
  const isKakiKakiPage = service?.slug === "paket-kaki-kaki";
  const heroTitle = isKakiKakiPage
    ? "Bengkel Kaki-Kaki Mobil Spesialis"
    : service.title;
  const breadcrumbTitle = isKakiKakiPage ? "Paket Kaki-Kaki" : service.title;

  // Animasi saat komponen pertama kali dimuat
  useGSAP(
    () => {
      gsap.from(".page-element", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.2,
      });
    },
    { scope: mainRef },
  );

  // Handler untuk mengganti varian dengan animasi
  const handleVariantChange = (variant) => {
    if (variant.slug === activeVariant.slug) return;

    setIsTransitioning(true);
    setTimeout(() => {
      setActiveVariant(variant);
      setIsTransitioning(false);
    }, 300);
  };

  useEffect(() => {
    if (service?.variants) {
      setIsLoadingImage(true);
    }
  }, [activeVariant, service]);

  // Handler untuk generate WhatsApp link
  const generateWhatsAppLink = () => {
    let message = `Halo TJM Auto Care!\n\n`;
    message += `Saya ingin memesan paket:\n`;
    message += `*${activeVariant ? activeVariant.title : service.title}*\n\n`;

    if (activeVariant?.description) {
      message += `Deskripsi: ${activeVariant.description}\n\n`;
    }

    message += `Mohon informasi lebih lanjut dan harga terbaik.\n`;
    message += `Terima kasih!`;

    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
  };

  // JSX untuk tampilan
  return (
    <main ref={mainRef} className="bg-black text-white">
      {/* Hero Section */}
      <section className="page-element relative h-[30vh] flex items-center justify-center text-center text-white p-8">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover z-0"
          priority
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative z-20">
          <h1 className="font-teko text-4xl md:text-5xl font-medium uppercase">
            {heroTitle}
          </h1>
          {isKakiKakiPage && (
            <p className="font-jakarta text-sm md:text-base text-gray-200 mt-2 max-w-2xl mx-auto">
              Bengkel spesialis kaki-kaki mobil untuk service kaki-kaki mobil
              mulai Rp 949 ribu, solusi bunyi gluduk, setir getar, dan mobil
              limbung dengan pengecekan detail serta garansi pengerjaan.
            </p>
          )}
          <div className="flex items-center justify-center gap-2 font-jakarta text-sm mt-2 max-w-full px-2">
            <Link
              href="/"
              className="text-gray-300 hover:text-red-500 shrink-0 whitespace-nowrap"
            >
              Home
            </Link>
            <ChevronRight size={16} className="text-red-500 shrink-0" />
            <Link
              href="/layanan"
              className="text-gray-300 hover:text-red-500 shrink-0 whitespace-nowrap"
            >
              Layanan
            </Link>
            <ChevronRight size={16} className="text-red-500 shrink-0" />
            <span className="text-white max-w-[170px] truncate md:max-w-none">
              {breadcrumbTitle}
            </span>
          </div>
        </div>
      </section>

      {/* Konten Detail Servis */}
      <section className="page-element py-16">
        <div className="container mx-auto px-4">
          {service.variants && activeVariant ? (
            // Tampilkan layout varian jika ada
            <div>
              <div className="max-w-6xl mx-auto">
                {/* Toggle Pilihan Varian */}
                <div className="mb-8 border-t border-gray-800 pt-8 md:border-t-0 md:pt-0">
                  {/* Mobile: Scrollable */}
                  <div className="md:hidden overflow-x-auto scrollbar-hide">
                    <div className="flex gap-4 pb-2">
                      {service.variants.map((variant) => (
                        <button
                          key={variant.slug}
                          onClick={() => handleVariantChange(variant)}
                          className={`font-jakarta font-bold text-sm px-6 py-3 whitespace-nowrap transition-colors duration-300 ${
                            activeVariant.slug === variant.slug
                              ? "bg-red-600 text-white"
                              : "bg-[#111] border border-gray-800 text-gray-300 hover:bg-gray-800"
                          }`}
                        >
                          {variant.title}
                        </button>
                      ))}
                    </div>
                  </div>
                  {/* Desktop: Flex Wrap Center */}
                  <div className="hidden md:flex flex-wrap gap-4 justify-center">
                    {service.variants.map((variant) => (
                      <button
                        key={variant.slug}
                        onClick={() => handleVariantChange(variant)}
                        className={`font-jakarta font-bold text-sm px-6 py-3 whitespace-nowrap transition-colors duration-300 ${
                          activeVariant.slug === variant.slug
                            ? "bg-red-600 text-white"
                            : "bg-[#111] border border-gray-800 text-gray-300 hover:bg-gray-800"
                        }`}
                      >
                        {variant.title}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Kolom Kiri: Gambar Varian dengan transisi */}
                  <div
                    className={`relative aspect-square transition-all duration-300 ${
                      isTransitioning
                        ? "opacity-0 blur-sm"
                        : "opacity-100 blur-0"
                    }`}
                  >
                    <div className="relative aspect-square bg-gray-900">
                      {isLoadingImage && (
                        <div className="absolute inset-0 flex items-center justify-center z-10">
                          <Loader2 className="w-12 h-12 text-red-500 animate-spin" />
                        </div>
                      )}
                      <Image
                        key={activeVariant.slug}
                        src={activeVariant.image}
                        alt={activeVariant.title}
                        fill
                        className={`object-cover transition-opacity duration-500 ${
                          isLoadingImage ? "opacity-0" : "opacity-100"
                        }`}
                        onLoad={() => setIsLoadingImage(false)}
                      />
                    </div>
                  </div>
                  {/* Kolom Kanan: Detail Varian dengan transisi */}
                  <div
                    className={`transition-all duration-300 ${
                      isTransitioning
                        ? "opacity-0 blur-sm"
                        : "opacity-100 blur-0"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <Cog
                        size={16}
                        className="text-red-500 animate-spin"
                        style={{ animationDuration: "5s" }}
                      />
                      <p className="font-jakarta text-sm font-bold uppercase tracking-widest text-red-500">
                        VARIAN PAKET
                      </p>
                    </div>
                    <h2 className="font-teko text-4xl font-medium uppercase mt-2">
                      {activeVariant.title}
                    </h2>
                    <p className="font-jakarta text-gray-400 mt-4 leading-relaxed">
                      {activeVariant.description}
                    </p>
                    {isKakiKakiPage && (
                      <div className="mt-6 rounded-2xl border border-gray-800 bg-[#0d0d0d] p-5">
                        <p className="font-jakarta text-xs font-bold uppercase tracking-[0.22em] text-red-500">
                          Service Kaki-Kaki Mobil
                        </p>
                        <p className="mt-3 font-jakarta text-sm leading-relaxed text-gray-300">
                          Paket ini dirancang untuk pemilik mobil yang mencari
                          bengkel kaki-kaki mobil spesialis dengan alur
                          pengecekan yang jelas, tindakan yang terarah, dan
                          rekomendasi servis sesuai kondisi komponen.
                        </p>
                      </div>
                    )}
                    <div className="border-t border-b border-gray-800 my-6">
                      {activeVariant.details?.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-4 py-3 border-b border-gray-800 last:border-b-0"
                        >
                          <div className="bg-[#111] p-2 border border-gray-700 rounded-full">
                            <Star size={18} className="text-red-500" />
                          </div>
                          <p className="font-jakarta text-sm text-gray-300">
                            <strong>{item.title}:</strong> {item.description}
                          </p>
                        </div>
                      ))}
                    </div>
                    <TrackedWhatsAppLink
                      href={generateWhatsAppLink()}
                      eventProps={{
                        page: "layanan_detail",
                        placement: "variant_primary_cta",
                        service_slug: service?.slug,
                        variant_slug: activeVariant?.slug,
                      }}
                      className="inline-block w-full text-center bg-red-600 text-white font-jakarta font-bold text-base px-10 py-3 transition-all duration-300 ease-in-out hover:bg-white hover:text-red-600 hover:-translate-y-1"
                    >
                      Konsultasi & Booking Paket Ini
                    </TrackedWhatsAppLink>
                    {isKakiKakiPage && (
                      <p className="mt-3 text-center font-jakarta text-xs leading-6 text-gray-500 sm:text-sm">
                        Cocok untuk Anda yang ingin cek kaki-kaki mobil sebelum
                        perjalanan jauh atau mencari bengkel kaki-kaki mobil
                        terdekat dengan proses yang jelas.
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            // Tampilkan deskripsi umum jika tidak ada varian
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="font-teko text-3xl font-medium uppercase text-white sm:text-4xl md:text-5xl">
                  Deskripsi Layanan
                </h2>
                <p className="mt-4 font-jakarta text-sm leading-7 text-gray-400 sm:text-base md:text-[17px]">
                  {service.details}
                </p>
                <TrackedWhatsAppLink
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                    `Halo TJM Auto Care!\n\nSaya ingin memesan paket:\n*${service.title}*\n\nMohon informasi lebih lanjut dan harga terbaik.\nTerima kasih!`,
                  )}`}
                  eventProps={{
                    page: "layanan_detail",
                    placement: "non_variant_primary_cta",
                    service_slug: service?.slug,
                  }}
                  className="inline-block mt-8 bg-red-600 text-white font-jakarta font-bold text-sm px-8 py-3 transition-all duration-300 ease-in-out hover:bg-white hover:text-red-600 hover:-translate-y-1"
                >
                  Jadwalkan Servis Ini
                </TrackedWhatsAppLink>
              </div>
              <div className="lg:col-span-1">
                {/* ... (Layanan Lainnya) ... */}
              </div>
            </div>
          )}
        </div>
      </section>

      {isKakiKakiPage && (
        <section className="page-element relative border-t border-gray-800 bg-[#050505] py-20 overflow-hidden">
          {/* Background glowing red accent */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-900/10 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-900/5 blur-[120px] rounded-full pointer-events-none" />

          <div className="container relative mx-auto px-4 z-10">
            <div className="mx-auto max-w-6xl">
              <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
                <div className="mb-4 flex items-center gap-3">
                  <div className="h-[2px] w-8 bg-red-600"></div>
                  <p className="font-jakarta text-[11px] font-bold uppercase tracking-[0.24em] text-red-500 md:text-xs">
                    Panduan Spesialis Kaki-Kaki
                  </p>
                  <div className="h-[2px] w-8 bg-red-600"></div>
                </div>
                <h2 className="font-teko text-4xl uppercase leading-[0.95] text-white sm:text-5xl md:text-6xl">
                  Info Penting Sebelum{" "}
                  <span className="text-red-600">Service Kaki-Kaki</span>
                </h2>
                <p className="mt-5 max-w-2xl font-jakarta text-sm leading-7 text-gray-300 sm:text-base md:text-lg md:leading-8">
                  Kami merangkum rincian terpenting yang wajib Anda ketahui
                  sebelum booking service, mulai dari titik masalah, gejala
                  umum, hingga jaminan layanan di bengkel TJM Auto Care.
                </p>
              </div>

              <div className="relative mt-14 grid gap-5 md:mt-16 md:grid-cols-2 md:gap-6 xl:grid-cols-4">
                {KAKI_KAKI_INTENT_BLOCKS.map((item, index) => (
                  <article
                    key={item.title}
                    className="group relative flex flex-col overflow-hidden border border-gray-800 border-t-4 border-t-red-600 bg-[#0d0d0d] p-5 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_-15px_rgba(220,38,38,0.2)] sm:p-6 md:p-7"
                  >
                    {/* Subtle red glow inside the top of the card */}
                    <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-red-600/10 to-transparent pointer-events-none" />

                    <div className="relative z-10 mb-3 flex items-start justify-between md:mb-4">
                      <h3 className="pr-4 font-teko text-2xl uppercase tracking-wide text-white sm:text-[1.75rem] md:text-3xl">
                        {item.title}
                      </h3>
                      <span className="select-none font-teko text-4xl font-bold leading-none text-red-600/40 sm:text-5xl">
                        0{index + 1}
                      </span>
                    </div>

                    <p className="relative z-10 mt-1 font-jakarta text-sm leading-7 text-gray-400 transition-colors group-hover:text-gray-300 sm:text-base">
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <ServiceFAQ slug={service.slug} />
    </main>
  );
}

const ServiceFAQ = ({ slug }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  // FAQ hanya tampil untuk kategori kaki-kaki
  if (!slug.includes("kaki-kaki") && !slug.includes("undercarriage"))
    return null;

  const faqs = [
    {
      question: "Di mana bengkel kaki-kaki mobil terdekat yang bagus?",
      answer:
        "TJM Auto Care adalah spesialis bengkel kaki-kaki mobil. Kami menyediakan pengecekan detail, rekomendasi tindakan yang transparan, serta garansi pengerjaan sesuai paket/pekerjaan.",
    },
    {
      question:
        "Apa saja gejala kaki-kaki mobil rusak (dan kapan harus dicek sebelum Mudik)?",
      answer:
        'Gejala umum meliputi bunyi gluduk saat jalan rusak/Polisi tidur, setir bergetar, ban aus tidak rata, mobil terasa limbung, atau arah mobil terasa "lari". Disarankan cek kaki-kaki sebelum perjalanan jauh/Mudik agar lebih aman dan nyaman.',
    },
    {
      question: "Berapa biaya service kaki-kaki mobil?",
      answer:
        "Biaya service kaki-kaki mobil tergantung hasil pengecekan, kondisi part, dan tindakan (rekondisi/penggantian). Kami menyediakan paket dan opsi tindakan sesuai kebutuhan—konsultasi via WhatsApp untuk estimasi setelah pengecekan awal.",
    },
  ];

  return (
    <section className="py-16 bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="font-teko text-3xl font-bold uppercase tracking-wider text-white sm:text-4xl md:text-5xl">
            Pertanyaan Umum{" "}
            <span className="text-red-600">Seputar Kaki-Kaki</span>
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mt-2"></div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-800 rounded-xl bg-[#111] shadow-sm overflow-hidden transition-all duration-300"
            >
              <button
                className="w-full text-left p-5 focus:outline-none flex justify-between items-center hover:bg-gray-900 transition-colors"
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
              >
                <span className="pr-4 font-jakarta text-sm font-semibold leading-6 text-gray-200 sm:text-base md:text-lg">
                  {faq.question}
                </span>
                <span
                  className={`text-red-600 transition-transform duration-300 ${activeIndex === index ? "rotate-180" : ""}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${activeIndex === index ? "max-h-96" : "max-h-0"}`}
              >
                <div className="border-t border-gray-800 bg-[#0a0a0a] p-5 font-jakarta text-sm leading-7 text-gray-400 sm:text-base">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
