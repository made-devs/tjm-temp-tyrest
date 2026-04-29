"use client";

import PageHero from "@/components/umum/PageHero";

export default function KemitraanHero() {
  return (
    <div className="page-section">
      <PageHero
        imageSrc="/hero.webp"
        breadcrumbText="KEMITRAAN"
        titleMain="TJM"
        titleHighlight="KEMITRAAN"
        description="Peluang bisnis dan investasi bengkel yang menjanjikan. Bergabunglah bersama kami untuk memajukan industri perawatan otomotif di Indonesia."
      />
    </div>
  );
}
