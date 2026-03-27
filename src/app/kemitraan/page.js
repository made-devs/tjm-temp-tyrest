"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

// Impor semua komponen seksi
import KemitraanHero from "@/components/kemitraan/KemitraanHero";
import KemitraanKeunggulan from "@/components/kemitraan/KemitraanKeunggulan";
import KemitraanProgram from "@/components/kemitraan/KemitraanProgram";
import KemitraanAlur from "@/components/kemitraan/KemitraanAlur";
import KemitraanAjakan from "@/components/kemitraan/KemitraanAjakan";

export default function HalamanKemitraan() {
  const mainRef = useRef(null);

  useGSAP(
    () => {
      // Animasi dasar untuk setiap seksi
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
      <KemitraanHero />
      <div className="page-section">
        <KemitraanKeunggulan />
      </div>
      <div className="page-section">
        <KemitraanProgram />
      </div>
      <div className="page-section">
        <KemitraanAlur />
      </div>
      <div className="page-section">
        <KemitraanAjakan />
      </div>
    </main>
  );
}

