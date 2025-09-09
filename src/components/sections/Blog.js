'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { Cog, ArrowUpRight } from 'lucide-react'; // Mengganti ikon
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { newsData } from '@/data/newsData'; // <-- Impor data baru

gsap.registerPlugin(ScrollTrigger);

// Kartu sekarang menggunakan tag <a> untuk link eksternal
const NewsCard = ({ post }) => (
  <a
    href={post.url}
    target="_blank"
    rel="noopener noreferrer"
    className="news-card bg-[#111] border border-gray-800 transition-all duration-300 hover:border-red-500 hover:-translate-y-2 group block"
  >
    <div className="relative aspect-video overflow-hidden">
      <Image
        src={post.image}
        alt={post.title}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <span className="absolute top-4 left-4 bg-red-600 text-white font-jakarta text-xs font-bold px-3 py-1">
        {post.source}
      </span>
    </div>
    <div className="p-6 flex flex-col">
      <h3 className="font-teko text-2xl font-medium uppercase text-white leading-tight">
        {post.title}
      </h3>
      <p className="font-jakarta text-sm text-gray-400 mt-2 flex-grow">
        {post.excerpt}
      </p>
      <div className="flex items-center gap-2 font-jakarta text-sm font-bold text-red-500 mt-4 self-start">
        Baca Selengkapnya <ArrowUpRight size={16} />
      </div>
    </div>
  </a>
);

export default function Blog() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      gsap.from('.news-header-element', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        y: 30,
        stagger: 0.15,
        duration: 0.6,
        ease: 'power2.out',
      });
      gsap.from('.news-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power2.out',
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="bg-black py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="news-header-element flex justify-center items-center gap-2">
          <Cog
            size={20}
            className="text-red-500 animate-spin"
            style={{ animationDuration: '5s' }}
          />
          <p className="font-jakarta text-sm font-bold uppercase tracking-widest text-red-500">
            Liputan Media
          </p>
        </div>
        <h2 className="news-header-element font-teko text-5xl font-medium uppercase mt-4">
          TJM Dalam <span className="text-red-500">Berita</span>
        </h2>
        <p className="news-header-element font-jakarta text-gray-400 max-w-2xl mx-auto mt-2">
          Lihat apa kata media nasional tentang inovasi dan layanan kami di
          dunia otomotif Indonesia.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 text-left">
          {newsData.map((post, index) => (
            <NewsCard key={index} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
