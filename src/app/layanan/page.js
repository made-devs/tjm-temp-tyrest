import LayananHero from "@/components/layanan/LayananHero";
import LayananSectionHeader from "@/components/layanan/LayananSectionHeader";
import LayananInteraktifSection from "@/components/layanan/LayananInteraktifSection";
import LayananSeoContent from "@/components/layanan/LayananSeoContent";

export default function LayananPage() {
  return (
    <main className="bg-black text-white">
      <LayananHero />
      <section className="py-20">
        <div className="container mx-auto px-4">
          <LayananSectionHeader />
          <LayananInteraktifSection />
          <LayananSeoContent />
        </div>
      </section>
    </main>
  );
}
