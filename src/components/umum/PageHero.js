import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function PageHero({
  imageSrc,
  imageAlt,
  breadcrumbText,
  breadcrumbItems,
  titleMain,
  titleHighlight,
  description,
}) {
  const items =
    breadcrumbItems?.length > 0
      ? breadcrumbItems
      : breadcrumbText
        ? [{ label: breadcrumbText }]
        : [];

  return (
    <section className="relative min-h-[45vh] flex items-center justify-center text-center text-white pt-[120px] pb-16 overflow-hidden">
      <Image
        src={imageSrc}
        alt={imageAlt || titleMain}
        fill
        className="object-cover z-0"
        priority
      />
      {/* Modern Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/60 to-black z-10" />

      {/* Accent Red Lights */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-red-900/20 to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-zinc-900/30 to-transparent z-10 pointer-events-none" />

      {/* Subtle bottom separator */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-900/50 to-transparent z-20" />

      <div className="relative z-20 flex flex-col items-center max-w-4xl px-4 mt-4">
        <div className="inline-flex flex-wrap items-center justify-center gap-2 font-jakarta text-xs md:text-sm font-bold tracking-widest uppercase mb-6 px-5 py-2 border border-white/5 bg-white/5 backdrop-blur-sm rounded-sm">
          <Link
            href="/"
            className="text-gray-400 hover:text-red-500 transition-colors"
          >
            BERANDA
          </Link>
          {items.map((item, index) => (
            <div
              key={`${item.label}-${index}`}
              className="inline-flex items-center gap-2"
            >
              <ChevronRight size={14} className="text-red-600" />
              {item.href ? (
                <Link
                  href={item.href}
                  className="text-gray-400 hover:text-red-500 transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-white drop-shadow-md">{item.label}</span>
              )}
            </div>
          ))}
        </div>

        <h1 className="font-teko text-5xl md:text-7xl font-bold uppercase leading-[0.9] tracking-wide drop-shadow-2xl">
          {titleMain} <br />
          <span className="text-red-600 relative inline-block mt-3">
            {titleHighlight}
            <span className="absolute -bottom-2 left-1/4 w-1/2 h-[3px] bg-red-600/80 blur-[1px]" />
            <span className="absolute -bottom-2 left-[35%] w-[30%] h-[3px] bg-red-500 rounded-full" />
          </span>
        </h1>

        {description && (
          <p className="font-jakarta text-gray-400 mt-8 max-w-xl text-sm md:text-base font-medium tracking-wide">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
