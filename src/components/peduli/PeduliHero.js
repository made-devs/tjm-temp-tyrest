// src/components/sections/peduli/PeduliHero.js
"use client";

import PageHero from "@/components/umum/PageHero";

export default function PeduliHero() {
  return (
    <div className="page-section">
      <PageHero
        imageSrc="/hero.webp"
        breadcrumbText="PEDULI"
        titleMain="TJM"
        titleHighlight="PEDULI"
        description="Program aksi sosial pengabdian kami kepada masyarakat, berbagi kebahagiaan untuk meringankan beban mereka yang membutuhkan."
      />
    </div>
  );
}
