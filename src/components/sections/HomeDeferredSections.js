"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

const Promos = dynamic(() => import("@/components/sections/Promos"), {
  ssr: false,
});
const WhyChooseUs = dynamic(() => import("@/components/sections/WhyChooseUs"), {
  ssr: false,
});
const AboutUs = dynamic(() => import("@/components/sections/AboutUs"), {
  ssr: false,
});
const Services = dynamic(() => import("@/components/sections/Services"), {
  ssr: false,
});
const Testimonials = dynamic(
  () => import("@/components/sections/Testimonials"),
  {
    ssr: false,
  },
);
const Blog = dynamic(() => import("@/components/sections/Blog"), {
  ssr: false,
});
const Contact = dynamic(() => import("@/components/sections/Contact"), {
  ssr: false,
});
const Cta = dynamic(() => import("@/components/sections/Cta"), {
  ssr: false,
});

function LazySection({ children, rootMargin = "300px 0px" }) {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isVisible) return;

    const currentElement = sectionRef.current;
    if (!currentElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin },
    );

    observer.observe(currentElement);

    return () => observer.disconnect();
  }, [isVisible, rootMargin]);

  return <div ref={sectionRef}>{isVisible ? children : null}</div>;
}

export default function HomeDeferredSections() {
  return (
    <>
      <LazySection>
        <Promos />
      </LazySection>
      <LazySection>
        <WhyChooseUs />
      </LazySection>
      <LazySection>
        <AboutUs />
      </LazySection>
      <LazySection>
        <Services />
      </LazySection>
      <LazySection>
        <Testimonials />
      </LazySection>
      <LazySection>
        <Blog />
      </LazySection>
      <LazySection>
        <Contact />
      </LazySection>
      <LazySection>
        <Cta />
      </LazySection>
    </>
  );
}
