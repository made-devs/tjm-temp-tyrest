"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Impor semua komponen seksi untuk halaman Peduli
import PeduliHero from "@/components/peduli/PeduliHero";
import PeduliTentang from "@/components/peduli/PeduliTentang";
import PeduliCaraKerja from "@/components/peduli/PeduliCaraKerja";
import PeduliDampak from "@/components/peduli/PeduliDampak";
import PeduliGaleriFoto from "@/components/peduli/PeduliGaleriFoto";
import PeduliVideo from "@/components/peduli/PeduliVideo";
import PeduliTestimoni from "@/components/peduli/PeduliTestimoni";
import PeduliAjakan from "@/components/peduli/PeduliAjakan";

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
        <PeduliTentang />
      </div>
      <div className="page-section">
        <PeduliCaraKerja />
      </div>
      <div className="page-section">
        <PeduliDampak />
      </div>
      {/* Seksi baru ditambahkan di sini */}
      <div className="page-section">
        <PeduliGaleriFoto />
      </div>
      <div className="page-section">
        <PeduliVideo />
      </div>
      <div className="page-section">
        <PeduliTestimoni />
      </div>
      <div className="page-section">
        <PeduliAjakan />
      </div>
    </main>
  );
}

