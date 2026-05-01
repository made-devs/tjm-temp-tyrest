"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Cog, MapPin, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { workshopLocations } from "@/data/locations";
import { slugify } from "@/lib/slug";

gsap.registerPlugin(ScrollTrigger);

const risingOutletCities = ["Bandung", "Jogja", "Samarinda", "Malang"];

export default function KontakBeranda() {
  const [activeLocation, setActiveLocation] = useState(workshopLocations[0]);
  const sectionRef = useRef(null);
  const mapRef = useRef(null);
  const risingOutlets = workshopLocations.filter((location) =>
    risingOutletCities.includes(location.city),
  );

  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: true });

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi],
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi],
  );

  // Fungsi ini HANYA mengubah peta, tidak menggerakkan carousel
  const handleLocationSelect = useCallback(
    (location) => {
      if (location.id === activeLocation.id) return;

      gsap.to(mapRef.current, {
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
          setActiveLocation(location);
          gsap.to(mapRef.current, { opacity: 1, duration: 0.3, delay: 0.1 });
        },
      });
    },
    [activeLocation],
  );

  // Efek ini HANYA berjalan saat carousel di-DRAG/GESER
  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      const selectedIndex = emblaApi.selectedScrollSnap();
      const selectedLocation = workshopLocations[selectedIndex];
      setActiveLocation(selectedLocation); // Langsung set lokasi aktif
      setPrevBtnDisabled(!emblaApi.canScrollPrev());
      setNextBtnDisabled(!emblaApi.canScrollNext());
    };

    emblaApi.on("select", onSelect);
    onSelect();
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi]);

  useGSAP(
    () => {
      gsap.from(".contact-header-element", {
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        opacity: 0,
        y: 30,
        stagger: 0.15,
        duration: 0.6,
        ease: "power2.out",
      });
      gsap.from(".embla__slide", {
        scrollTrigger: { trigger: sectionRef.current, start: "top 65%" },
        opacity: 0,
        y: 50,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
      });
      gsap.from(mapRef.current, {
        scrollTrigger: { trigger: sectionRef.current, start: "top 40%" },
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power2.out",
      });
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="bg-black py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="contact-header-element flex justify-center items-center gap-2">
            <Cog
              size={20}
              className="text-red-500 animate-spin"
              style={{ animationDuration: "5s" }}
            />
            <p className="font-jakarta text-sm font-bold uppercase tracking-widest text-red-500">
              Lokasi Kami
            </p>
          </div>
          <h2 className="contact-header-element font-teko text-5xl font-medium uppercase mt-2">
            Temukan Bengkel <span className="text-red-500">Terdekat</span>
          </h2>
          <p className="contact-header-element font-jakarta text-gray-400 max-w-2xl mx-auto mt-2">
            Kunjungi salah satu cabang kami yang tersebar di berbagai kota untuk
            mendapatkan pelayanan terbaik dari TJM Auto Care.
          </p>

          {risingOutlets.length > 0 && (
            <div className="contact-header-element mt-8 max-w-4xl mx-auto rounded-2xl border border-gray-800 bg-[#111] px-5 py-6 text-left">
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="font-jakarta text-[11px] font-bold uppercase tracking-[0.24em] text-red-500">
                    Rising Outlet
                  </p>
                  <p className="mt-2 font-jakarta text-sm leading-6 text-gray-400 md:text-base">
                    Outlet dengan performa paling baik minggu ini. Buka halaman
                    kota pilihan di bawah untuk lihat detail cabang, layanan,
                    dan jalur booking yang lebih cepat.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 md:justify-end">
                  {risingOutlets.map((location) => (
                    <Link
                      key={location.id}
                      href={`/kota/${slugify(location.city)}`}
                      className="inline-flex items-center rounded-full border border-gray-700 bg-black px-4 py-2 font-jakarta text-xs font-semibold text-gray-200 transition-all duration-300 hover:-translate-y-1 hover:border-red-500 hover:text-white md:text-sm"
                    >
                      {`Bengkel Kaki-Kaki Mobil ${location.city}`}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Carousel Lokasi dengan Tombol Navigasi */}
        <div className="relative mt-12">
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 z-10 hidden md:block">
            <button
              onClick={scrollPrev}
              disabled={prevBtnDisabled}
              className="bg-[#111] border border-gray-800 p-2 disabled:opacity-50 transition-colors hover:border-red-500"
            >
              <ChevronLeft size={24} />
            </button>
          </div>
          <div className="cursor-grab active:cursor-grabbing">
            <div className="embla embla--contact" ref={emblaRef}>
              <div className="embla__container">
                {workshopLocations.map((location) => (
                  <div
                    className="embla__slide"
                    key={location.id}
                    onClick={() => handleLocationSelect(location)} // <-- Diubah agar tidak menggerakkan carousel
                  >
                    <div
                      className={`h-full bg-[#111] p-4 border transition-all duration-300 ${
                        activeLocation.id === location.id
                          ? "border-red-500"
                          : "border-gray-800"
                      }`}
                    >
                      <div className="relative w-full h-48 overflow-hidden">
                        <Image
                          src={location.photo}
                          alt={location.city}
                          fill
                          sizes="(max-width: 768px) 90vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover"
                        />
                      </div>
                      <div className="pt-4">
                        <h3 className="font-teko text-2xl font-bold uppercase text-white">
                          {location.city}
                        </h3>
                        <div className="flex items-start gap-2 mt-2">
                          <MapPin
                            size={16}
                            className="text-gray-400 mt-1 flex-shrink-0"
                          />
                          <p className="font-jakarta text-sm text-gray-400">
                            {location.address}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                          <Clock
                            size={16}
                            className="text-gray-400 flex-shrink-0"
                          />
                          <p className="font-jakarta text-sm text-gray-400">
                            {location.hours}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 z-10 hidden md:block">
            <button
              onClick={scrollNext}
              disabled={nextBtnDisabled}
              className="bg-[#111] border border-gray-800 p-2 disabled:opacity-50 transition-colors hover:border-red-500"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Peta Interaktif */}
        <div
          ref={mapRef}
          className="mt-16 w-full h-[450px] md:h-[550px] border border-gray-800 overflow-hidden"
        >
          <iframe
            key={activeLocation.id}
            src={activeLocation.mapUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
