"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

// Impor semua komponen seksi
import PartnershipHero from "@/components/sections/partnership/PartnershipHero";
import PartnershipAdvantages from "@/components/sections/partnership/PartnershipAdvantages";
import PartnershipPrograms from "@/components/sections/partnership/PartnershipPrograms";
import PartnershipFlow from "@/components/sections/partnership/PartnershipFlow";
import PartnershipCta from "@/components/sections/partnership/PartnershipCta";

export default function PartnershipPage() {
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
      <PartnershipHero />
      <div className="page-section">
        <PartnershipAdvantages />
      </div>
      <div className="page-section">
        <PartnershipPrograms />
      </div>
      <div className="page-section">
        <PartnershipFlow />
      </div>
      <div className="page-section">
        <PartnershipCta />
      </div>
    </main>
  );
}
