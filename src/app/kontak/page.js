"use client";

import { useRef, useState, useEffect, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronDown,
  MessageSquare,
} from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import LocationCarousel from "@/components/LocationCarousel";
import { servicesData } from "@/data/servicesData";
import { useSearchParams } from "next/navigation";
import SectionHeader from "@/components/SectionHeader";

const faqData = [
  {
    question: "Apakah bisa booking servis via telepon?",
    answer:
      "Tentu saja. Anda bisa menghubungi kami di nomor yang tertera untuk membuat janji temu agar tidak perlu mengantri.",
  },
  {
    question: "Berapa lama pengerjaan nano ceramic coating?",
    answer:
      "Estimasi pengerjaan untuk paket nano ceramic coating lengkap biasanya memakan waktu 2-3 hari kerja, tergantung kondisi awal kendaraan.",
  },
  {
    question: "Apakah ada garansi untuk layanan coating?",
    answer:
      "Ya, kami memberikan garansi resmi hingga 2 tahun untuk layanan nano ceramic coating, dengan syarat dan ketentuan perawatan rutin.",
  },
];

// Komponen Form Kontak dengan logika animasi sendiri
function ContactForm() {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    carType: "",
    selectedPackage: "",
    message: "",
  });

  const searchParams = useSearchParams();

  // Animasi masuk untuk form
  useGSAP(
    () => {
      gsap.from(formRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
      });
    },
    { scope: formRef },
  );

  useEffect(() => {
    const selectedPkgSlug = searchParams.get("paket");
    if (selectedPkgSlug) {
      let matchedPackage = null;
      servicesData.forEach((service) => {
        if (service.variants) {
          const foundVariant = service.variants.find(
            (variant) => variant.slug === selectedPkgSlug,
          );
          if (foundVariant) {
            matchedPackage = foundVariant;
          }
        }
      });

      if (matchedPackage) {
        setFormData((prev) => ({
          ...prev,
          selectedPackage: matchedPackage.title,
        }));
      }
    }
  }, [searchParams]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const adminPhoneNumber = "6285169576890";
    const waMessage = `Halo TJM Auto Care, saya ${formData.name}.
Tipe Mobil: ${formData.carType}.
Saya tertarik dengan paket: ${formData.selectedPackage || "Belum memilih"}.

Pesan: 
${formData.message}`;
    const encodedMessage = encodeURIComponent(waMessage);
    const whatsappUrl = `https://wa.me/${adminPhoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    // Hapus class 'page-element' dan tambahkan ref
    <div
      ref={formRef}
      className="max-w-4xl mx-auto mt-24 bg-[#111] border border-gray-800 p-8"
    >
      <h2 className="font-teko text-3xl font-medium uppercase text-white text-center">
        Kirim Pesan Cepat via WhatsApp
      </h2>
      <form onSubmit={handleSubmit} className="mt-6 space-y-5">
        <div>
          <label
            htmlFor="name"
            className="font-jakarta text-sm font-medium text-gray-300"
          >
            Nama Lengkap
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full bg-black border border-gray-700 text-white p-3 mt-2 focus:border-red-500 focus:ring-0 outline-none transition-colors"
          />
        </div>
        <div>
          <label
            htmlFor="carType"
            className="font-jakarta text-sm font-medium text-gray-300"
          >
            Tipe Mobil
          </label>
          <input
            type="text"
            id="carType"
            name="carType"
            value={formData.carType}
            onChange={handleChange}
            required
            className="w-full bg-black border border-gray-700 text-white p-3 mt-2 focus:border-red-500 focus:ring-0 outline-none transition-colors"
          />
        </div>
        <div>
          <label
            htmlFor="selectedPackage"
            className="font-jakarta text-sm font-medium text-gray-300"
          >
            Pilih Paket Layanan (Opsional)
          </label>
          <select
            id="selectedPackage"
            name="selectedPackage"
            value={formData.selectedPackage}
            onChange={handleChange}
            className="w-full bg-black border border-gray-700 text-white p-3 mt-2 focus:border-red-500 focus:ring-0 outline-none transition-colors"
          >
            <option value="">Pilih salah satu...</option>
            {servicesData.map((service) => (
              <optgroup key={service.slug} label={service.title}>
                {service.variants ? (
                  service.variants.map((variant) => (
                    <option key={variant.slug} value={variant.title}>
                      {variant.title}
                    </option>
                  ))
                ) : (
                  <option key={service.slug} value={service.title}>
                    {service.title}
                  </option>
                )}
              </optgroup>
            ))}
          </select>
        </div>
        <div>
          <label
            htmlFor="message"
            className="font-jakarta text-sm font-medium text-gray-300"
          >
            Pesan Anda
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full bg-black border border-gray-700 text-white p-3 mt-2 focus:border-red-500 focus:ring-0 outline-none transition-colors"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full inline-flex items-center justify-center gap-2 bg-red-600 text-white font-jakarta font-bold py-3 transition-all duration-300 ease-in-out hover:bg-white hover:text-red-600 hover:-translate-y-1"
        >
          <MessageSquare size={20} />
          Kirim via WhatsApp
        </button>
      </form>
    </div>
  );
}

export default function ContactPage() {
  const mainRef = useRef(null);
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  useGSAP(
    () => {
      // Animasi ini sekarang hanya menargetkan elemen di luar form
      gsap.from(".page-element", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
      });
    },
    { scope: mainRef },
  );

  return (
    <main ref={mainRef} className="bg-black text-white">
      {/* Hero Section */}
      <section className="page-element relative h-[30vh] flex items-center justify-center text-center text-white p-8">
        <Image
          src="/hero.webp"
          alt="Kontak TJM Auto Care"
          fill
          className="object-cover z-0"
          priority
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative z-20">
          <h1 className="font-teko text-4xl md:text-5xl font-medium uppercase">
            Hubungi Kami
          </h1>
          <div className="flex items-center justify-center gap-2 font-jakarta text-sm mt-2">
            <Link href="/" className="text-gray-300 hover:text-red-500">
              Home
            </Link>
            <span className="text-gray-500">/</span>
            <span className="text-white">Kontak</span>
          </div>
        </div>
      </section>

      {/* Formulir Kontak Baru */}
      <Suspense fallback={<div>Loading...</div>}>
        <ContactForm />
      </Suspense>

      {/* Konten Kontak & Carousel Lokasi */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="page-element mb-16">
            <SectionHeader
              subtitle="KUNJUNGI KAMI"
              title="TEMUKAN LOKASI BENGKEL KAMI"
              description="Kami memiliki beberapa cabang yang tersebar di kota-kota besar. Pilih lokasi terdekat Anda dan kunjungi kami untuk konsultasi langsung."
            />
          </div>

          <div className="page-element">
            <LocationCarousel />
          </div>

          {/* FAQ Section */}
          <div className="page-element max-w-4xl mx-auto mt-24">
            <h2 className="font-teko text-3xl md:text-4xl font-medium uppercase text-white text-center">
              Pertanyaan Umum (FAQ)
            </h2>
            <div className="mt-8 space-y-4">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className="bg-[#111] border border-gray-800 overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex justify-between items-center p-5 text-left"
                  >
                    <span className="font-jakarta font-semibold text-white">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`transform transition-transform duration-300 ${
                        openFaq === index
                          ? "rotate-180 text-red-500"
                          : "text-white"
                      }`}
                    />
                  </button>
                  <div
                    className={`transition-all duration-300 ease-in-out ${
                      openFaq === index ? "max-h-40" : "max-h-0"
                    }`}
                  >
                    <p className="font-jakarta text-gray-400 p-5 pt-0">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
