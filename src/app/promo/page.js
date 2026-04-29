"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeader from "@/components/umum/SectionHeader";
import { promoCategories } from "@/data/promoAutocare";
import PromoHero from "@/components/promo/PromoHero";
import PromoTabs from "@/components/promo/PromoTabs";
import PromoCarousel from "@/components/promo/PromoCarousel";

gsap.registerPlugin(ScrollTrigger);

export default function PromoPage() {
  const pageRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(".promo-fade-up", {
        opacity: 0,
        y: 50,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
      });
    },
    { scope: pageRef },
  );

  // State untuk kategori
  const [activeCategory, setActiveCategory] = useState(0);

  const handleCategoryChange = (idx) => {
    setActiveCategory(idx);
  };

  return (
    <main
      ref={pageRef}
      className="bg-black text-white min-h-screen selection:bg-red-600 selection:text-white"
    >
      <PromoHero />

      <PromoTabs
        categories={promoCategories}
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
      />

      {/* Promo Section */}
      <section className="pt-20 promo-fade-up relative z-10">
        <div className="container mx-auto px-4">
          <div className="mb-4">
            <SectionHeader
              subtitle="PROMO TERBARU"
              title="PENAWARAN SPESIAL TJM AUTO CARE"
              description="Manfaatkan promo menarik kami untuk perawatan kendaraan Anda dengan harga terbaik. Eksklusif bulan ini."
            />
          </div>
        </div>
      </section>

      <div className="promo-fade-up relative z-10">
        <PromoCarousel
          activeItems={promoCategories[activeCategory].items}
          activeCategoryLabel={promoCategories[activeCategory].label}
        />
      </div>
    </main>
  );
}
