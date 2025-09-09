'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

// Impor semua komponen seksi untuk halaman Peduli
import PeduliHero from '@/components/sections/peduli/PeduliHero';
import PeduliAbout from '@/components/sections/peduli/PeduliAbout';
import PeduliHowItWorks from '@/components/sections/peduli/PeduliHowItWorks';
import PeduliImpact from '@/components/sections/peduli/PeduliImpact';
import PeduliTestimonials from '@/components/sections/peduli/PeduliTestimonials';
import PeduliCta from '@/components/sections/peduli/PeduliCta';

export default function PeduliPage() {
  const mainRef = useRef(null);

  // Animasi untuk memunculkan elemen halaman saat di-scroll
  useGSAP(
    () => {
      gsap.from('.page-element', {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.2,
      });
    },
    { scope: mainRef }
  );

  return (
    <main ref={mainRef} className="bg-black text-white">
      <PeduliHero />
      <div className="page-element">
        <PeduliAbout />
      </div>
      <div className="page-element">
        <PeduliHowItWorks />
      </div>
      <div className="page-element">
        <PeduliImpact />
      </div>
      <div className="page-element">
        <PeduliTestimonials />
      </div>
      <div className="page-element">
        <PeduliCta />
      </div>
    </main>
  );
}
