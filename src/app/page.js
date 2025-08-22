import Hero from '@/components/sections/Hero';
import ClientLogos from '@/components/sections/ClientLogos'; // 1. Impor komponen baru
import Promos from '@/components/sections/Promos';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import AboutUs from '@/components/sections/AboutUs';
import Services from '@/components/sections/Services';
import Testimonials from '../components/sections/Testimonials';
import Blog from '../components/sections/Blog';
import Contact from '../components/sections/Contact';
import Cta from '../components/sections/Cta';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ClientLogos />
      <Promos />
      <WhyChooseUs />
      <AboutUs />
      <Services />
      <Testimonials />
      <Blog />
      <Contact />
      <Cta />
    </main>
  );
}
