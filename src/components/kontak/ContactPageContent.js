"use client";

import { useRef, useState, useEffect, Suspense } from "react";
import { ChevronDown, MessageSquare } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import LocationCarousel from "@/components/umum/LocationCarousel";
import { servicesData } from "@/data/servicesData";
import { useSearchParams } from "next/navigation";
import SectionHeader from "@/components/umum/SectionHeader";
import PageHero from "@/components/umum/PageHero";
import { track } from "@vercel/analytics";

const faqData = [
  {
    question: "Apakah bisa booking servis via telepon atau WhatsApp?",
    answer:
      "Bisa. Anda dapat menghubungi tim TJM Auto Care lewat WhatsApp untuk konsultasi awal, memilih cabang, dan mengatur jadwal kedatangan agar proses servis lebih cepat.",
  },
  {
    question: "Apakah saya bisa tanya estimasi biaya sebelum datang?",
    answer:
      "Bisa untuk estimasi awal. Tim kami akan membantu membaca keluhan kendaraan Anda terlebih dahulu, lalu memberi arahan awal sebelum pengecekan langsung di cabang.",
  },
  {
    question: "Apakah bisa pilih paket layanan langsung dari halaman kontak?",
    answer:
      "Bisa. Anda dapat memilih paket layanan pada form kontak agar tim TJM Auto Care lebih cepat memahami kebutuhan servis Anda saat membalas pesan.",
  },
];

function ContactForm() {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    carType: "",
    selectedPackage: "",
    message: "",
  });

  const searchParams = useSearchParams();

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

    try {
      track("whatsapp_click", {
        page: "kontak",
        placement: "contact_form_submit",
        has_selected_package: Boolean(formData.selectedPackage),
      });
    } catch {
      // no-op
    }

    window.open(whatsappUrl, "_blank");
  };

  return (
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

export default function ContactPageContent() {
  const mainRef = useRef(null);
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  useGSAP(
    () => {
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
      <div className="page-element">
        <PageHero
          imageSrc="/hero.webp"
          breadcrumbText="KONTAK"
          titleMain="HUBUNGI"
          titleHighlight="KAMI"
          description="Hubungi TJM Auto Care untuk booking servis, konsultasi kebutuhan kendaraan, dan arahan ke cabang terdekat dengan respon WhatsApp yang cepat."
        />
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <ContactForm />
      </Suspense>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="page-element mb-16">
            <SectionHeader
              subtitle="KUNJUNGI KAMI"
              title="TEMUKAN LOKASI BENGKEL KAMI"
              description="Kami memiliki beberapa cabang di kota-kota besar. Pilih lokasi terdekat Anda untuk konsultasi, booking, dan pengecekan awal kebutuhan servis mobil Anda."
            />
          </div>

          <div className="page-element">
            <LocationCarousel />
          </div>

          <div className="page-element max-w-4xl mx-auto mt-24">
            <h2 className="font-teko text-3xl md:text-4xl font-medium uppercase text-white text-center">
              Pertanyaan Umum (FAQ)
            </h2>
            <div className="mt-8 space-y-4">
              {faqData.map((faq, index) => (
                <div
                  key={faq.question}
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
