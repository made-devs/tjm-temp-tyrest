import Hero from "@/components/sections/Hero";
import ClientLogos from "@/components/sections/ClientLogos"; // 1. Impor komponen baru
import Promos from "@/components/sections/Promos";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ClientLogos />
      <Promos />
    </main>
  );
}
