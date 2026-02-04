"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Impor semua komponen seksi untuk halaman Peduli
import PeduliHero from "@/components/sections/peduli/PeduliHero";
import PeduliAbout from "@/components/sections/peduli/PeduliAbout";
import PeduliHowItWorks from "@/components/sections/peduli/PeduliHowItWorks";
import PeduliImpact from "@/components/sections/peduli/PeduliImpact";
import PeduliPhotoGallery from "@/components/sections/peduli/PeduliPhotoGallery"; // Impor baru
import PeduliVideoReels from "@/components/sections/peduli/PeduliVideoReels"; // Impor baru
import PeduliTestimonials from "@/components/sections/peduli/PeduliTestimonials";
import PeduliCta from "@/components/sections/peduli/PeduliCta";

gsap.registerPlugin(ScrollTrigger);

export default function PeduliPage() {
  const mainRef = useRef(null);

  // Animasi untuk memunculkan setiap section saat di-scroll
  useGSAP(
    () => {
      gsap.utils.toArray(".page-section").forEach((section) => {
        gsap.from(section, {
          opacity: 0,
          y: 50,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });
    },
    { scope: mainRef },
  );

  return (
    <main ref={mainRef} className="bg-black text-white">
      <PeduliHero />
      {/* Setiap section dibungkus dengan div.page-section untuk trigger animasi */}
      <div className="page-section">
        <PeduliAbout />
      </div>
      <div className="page-section">
        <PeduliHowItWorks />
      </div>
      <div className="page-section">
        <PeduliImpact />
      </div>
      {/* Seksi baru ditambahkan di sini */}
      <div className="page-section">
        <PeduliPhotoGallery />
      </div>
      <div className="page-section">
        <PeduliVideoReels />
      </div>
      <div className="page-section">
        <PeduliTestimonials />
      </div>
      <div className="page-section">
        <PeduliCta />
      </div>
    </main>
  );
}
