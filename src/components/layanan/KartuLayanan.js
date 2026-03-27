"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function KartuLayanan({ service }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="relative aspect-square overflow-hidden border border-transparent transition-all duration-500 ease-in-out group hover:border-red-500 hover:shadow-[0_0_25px_rgba(239,68,68,0.6)]"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <Image
        src={service.image}
        alt={service.title}
        fill
        className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black from-15% to-transparent" />
      <div className="absolute bottom-0 left-0 w-full p-6 text-white">
        <div
          className={`transition-transform duration-500 ease-in-out ${
            isExpanded ? "-translate-y-8" : ""
          } md:group-hover:-translate-y-8`}
        >
          <h3 className="font-teko text-3xl font-medium uppercase">
            {service.title}
          </h3>
          <p className="font-jakarta text-sm text-gray-300 mt-1">
            {service.description}
          </p>
        </div>
        <Link
          href={service.href}
          onClick={(e) => e.stopPropagation()}
          aria-label={`Lihat detail ${service.title}`}
          className={`absolute left-6 bottom-6 flex items-center gap-2 font-jakarta text-sm font-bold text-red-500
          ${
            isExpanded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }
          md:opacity-0 md:translate-y-4
          transition-all duration-500 ease-in-out
          md:group-hover:opacity-100 md:group-hover:translate-y-0`}
        >
          Lihat {service.title} <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
