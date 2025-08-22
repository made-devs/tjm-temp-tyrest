'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { Cog, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { blogData } from '@/data/blogData'; // <-- Impor data dari file baru

gsap.registerPlugin(ScrollTrigger);

const BlogCard = ({ post }) => (
  <div className="blog-card bg-[#111] border border-gray-800 transition-all duration-300 hover:border-red-500 hover:-translate-y-2 group">
    <div className="relative aspect-video overflow-hidden">
      <Image
        src={post.image}
        alt={post.title}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <span className="absolute top-4 left-4 bg-red-600 text-white font-jakarta text-xs font-bold px-3 py-1">
        {post.category}
      </span>
    </div>
    <div className="p-6 flex flex-col">
      <h3 className="font-teko text-2xl font-medium uppercase text-white leading-tight">
        {post.title}
      </h3>
      <p className="font-jakarta text-sm text-gray-400 mt-2 flex-grow">
        {post.excerpt}
      </p>
      <a
        href={post.link}
        className="flex items-center gap-2 font-jakarta text-sm font-bold text-red-500 mt-4 self-start"
      >
        Read More <ArrowRight size={16} />
      </a>
    </div>
  </div>
);

export default function Blog() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      // Animasi untuk header
      gsap.from('.blog-header-element', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 30,
        stagger: 0.15,
        duration: 0.6,
        ease: 'power2.out',
      });
      // Animasi untuk kartu blog
      gsap.from('.blog-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none',
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
        <div className="blog-header-element flex justify-center items-center gap-2">
          <Cog
            size={20}
            className="text-red-500 animate-spin"
            style={{ animationDuration: '5s' }}
          />
          <p className="font-jakarta text-sm font-bold uppercase tracking-widest text-red-500">
            Our Blog
          </p>
        </div>
        <h2 className="blog-header-element font-teko text-5xl font-medium uppercase mt-4">
          Our Blog & <span className="text-red-500">Article</span>
        </h2>
        <p className="blog-header-element font-jakarta text-gray-400 max-w-2xl mx-auto mt-2">
          Dapatkan informasi, tips, dan berita terbaru dari dunia otomotif
          langsung dari para ahli di TJM Auto Care.
        </p>

        <div className="blog-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 text-left">
          {blogData.map((post, index) => (
            <BlogCard key={index} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
