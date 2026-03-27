"use client";

import { useEffect, useState } from "react";
import { Star, Loader2, Cog } from "lucide-react";
import Image from "next/image";
import TrackedWhatsAppLink from "@/components/integrasi/TrackedWhatsAppLink";

function buildWhatsAppMessage({
  selectedTitle,
  selectedDescription,
  isRackSteerIntentPage,
  isShockbreakerIntentPage,
}) {
  let message = "Halo TJM Auto Care!\n\n";
  message += "Saya ingin memesan paket:\n";
  message += `*${selectedTitle}*\n\n`;

  if (selectedDescription) {
    message += `Deskripsi: ${selectedDescription}\n\n`;
  }

  if (isRackSteerIntentPage) {
    message += "Saya mencari service rack steer terdekat.\n";
    message += "Kota saya: [isi kota Anda]\n\n";
  }

  if (isShockbreakerIntentPage) {
    message += "Saya mencari service shockbreaker mobil terdekat.\n";
    message += "Kota saya: [isi kota Anda]\n\n";
  }

  message += "Mohon informasi lebih lanjut dan harga terbaik.\n";
  message += "Terima kasih!";

  return message;
}

function VariantTabs({ variants, activeVariant, onVariantChange }) {
  return (
    <div className="mb-8 border-t border-gray-800 pt-8 md:border-t-0 md:pt-0">
      <div className="md:hidden overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 pb-2">
          {variants.map((variant) => (
            <button
              key={variant.slug}
              onClick={() => onVariantChange(variant)}
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
      <div className="hidden md:flex flex-wrap gap-4 justify-center">
        {variants.map((variant) => (
          <button
            key={variant.slug}
            onClick={() => onVariantChange(variant)}
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
  );
}

function VariantDetail({
  activeVariant,
  isLoadingImage,
  isTransitioning,
  isKakiKakiPage,
  onImageLoad,
  onPrimaryCtaHref,
  serviceSlug,
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div
        className={`relative aspect-square transition-all duration-300 ${
          isTransitioning ? "opacity-0 blur-sm" : "opacity-100 blur-0"
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
            onLoad={onImageLoad}
          />
        </div>
      </div>

      <div
        className={`transition-all duration-300 ${
          isTransitioning ? "opacity-0 blur-sm" : "opacity-100 blur-0"
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
              Paket ini dirancang untuk pemilik mobil yang mencari bengkel
              kaki-kaki mobil spesialis dengan alur pengecekan yang jelas,
              tindakan yang terarah, dan rekomendasi servis sesuai kondisi
              komponen.
            </p>
          </div>
        )}

        <div className="border-t border-b border-gray-800 my-6">
          {activeVariant.details?.map((item, index) => (
            <div
              key={`${item.title}-${index}`}
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
          href={onPrimaryCtaHref()}
          eventProps={{
            page: "layanan_detail",
            placement: "variant_primary_cta",
            service_slug: serviceSlug,
            variant_slug: activeVariant?.slug,
          }}
          className="inline-block w-full text-center bg-red-600 text-white font-jakarta font-bold text-base px-10 py-3 transition-all duration-300 ease-in-out hover:bg-white hover:text-red-600 hover:-translate-y-1"
        >
          Konsultasi & Booking Paket Ini
        </TrackedWhatsAppLink>

        {isKakiKakiPage && (
          <p className="mt-3 text-center font-jakarta text-xs leading-6 text-gray-500 sm:text-sm">
            Cocok untuk Anda yang ingin cek kaki-kaki mobil sebelum perjalanan
            jauh atau mencari bengkel kaki-kaki mobil terdekat dengan proses
            yang jelas.
          </p>
        )}
      </div>
    </div>
  );
}

function NonVariantDetail({
  service,
  nonVariantCtaHref,
  isRackSteerIntentPage,
  isShockbreakerIntentPage,
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
      <div className="lg:col-span-2">
        <h2 className="font-teko text-3xl font-medium uppercase text-white sm:text-4xl md:text-5xl">
          Deskripsi Layanan
        </h2>
        <p className="mt-4 font-jakarta text-sm leading-7 text-gray-400 sm:text-base md:text-[17px]">
          {service.details}
        </p>
        <TrackedWhatsAppLink
          href={nonVariantCtaHref()}
          eventProps={{
            page: "layanan_detail",
            placement: "non_variant_primary_cta",
            service_slug: service?.slug,
          }}
          className="inline-block mt-8 bg-red-600 text-white font-jakarta font-bold text-sm px-8 py-3 transition-all duration-300 ease-in-out hover:bg-white hover:text-red-600 hover:-translate-y-1"
        >
          Jadwalkan Servis Ini
        </TrackedWhatsAppLink>

        {(isRackSteerIntentPage || isShockbreakerIntentPage) && (
          <p className="mt-3 font-jakarta text-xs leading-6 text-gray-500 sm:text-sm">
            Tim kami akan membantu mengarahkan ke cabang terdekat sesuai kota
            Anda untuk proses booking yang lebih cepat.
          </p>
        )}
      </div>
      <div className="lg:col-span-1" />
    </div>
  );
}

export default function ServiceVariantSection({
  service,
  isKakiKakiPage,
  isRackSteerIntentPage,
  isShockbreakerIntentPage,
}) {
  const [activeVariant, setActiveVariant] = useState(
    service?.variants ? service.variants[0] : null,
  );
  const [isLoadingImage, setIsLoadingImage] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const whatsappNumber = "6285169576890";

  const handleVariantChange = (variant) => {
    if (!activeVariant || variant.slug !== activeVariant.slug) {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveVariant(variant);
        setIsTransitioning(false);
      }, 300);
    }
  };

  useEffect(() => {
    if (service?.variants) {
      setIsLoadingImage(true);
    }
  }, [activeVariant, service]);

  const generateVariantWhatsAppLink = () => {
    const message = buildWhatsAppMessage({
      selectedTitle: activeVariant ? activeVariant.title : service.title,
      selectedDescription: activeVariant?.description,
      isRackSteerIntentPage,
      isShockbreakerIntentPage,
    });

    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  const generateServiceWhatsAppLink = () => {
    const message = buildWhatsAppMessage({
      selectedTitle: service.title,
      selectedDescription: service.details,
      isRackSteerIntentPage,
      isShockbreakerIntentPage,
    });

    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section className="page-element py-16">
      <div className="container mx-auto px-4">
        {service.variants && activeVariant ? (
          <div className="max-w-6xl mx-auto">
            <VariantTabs
              variants={service.variants}
              activeVariant={activeVariant}
              onVariantChange={handleVariantChange}
            />
            <VariantDetail
              activeVariant={activeVariant}
              isLoadingImage={isLoadingImage}
              isTransitioning={isTransitioning}
              isKakiKakiPage={isKakiKakiPage}
              onImageLoad={() => setIsLoadingImage(false)}
              onPrimaryCtaHref={generateVariantWhatsAppLink}
              serviceSlug={service?.slug}
            />
          </div>
        ) : (
          <NonVariantDetail
            service={service}
            nonVariantCtaHref={generateServiceWhatsAppLink}
            isRackSteerIntentPage={isRackSteerIntentPage}
            isShockbreakerIntentPage={isShockbreakerIntentPage}
          />
        )}
      </div>
    </section>
  );
}
