"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { serviceGroups } from "@/data/servicesGroupData";
import LayananTabs from "@/components/layanan/LayananTabs";
import LayananGrid from "@/components/layanan/LayananGrid";

gsap.registerPlugin(ScrollTrigger);

export default function LayananInteraktifSection() {
  const sectionRef = useRef(null);
  const [activeTab, setActiveTab] = useState(0);

  const activeServices = serviceGroups[activeTab].services;

  useGSAP(
    () => {
      gsap.from(".service-card-wrapper", {
        key: activeTab,
        opacity: 0,
        y: 50,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
      });
    },
    { scope: sectionRef, dependencies: [activeTab] },
  );

  return (
    <div ref={sectionRef}>
      <LayananTabs
        groups={serviceGroups}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
      <LayananGrid services={activeServices} />
    </div>
  );
}
