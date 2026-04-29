"use client";

export default function PromoTabs({
  categories,
  activeCategory,
  onCategoryChange,
}) {
  return (
    <section className="relative z-20 pt-8">
      <div className="container mx-auto px-4">
        <div className="flex overflow-x-auto gap-3 pb-4 scrollbar-hide w-full justify-start md:justify-center">
          {categories.map((cat, idx) => (
            <button
              key={cat.label}
              onClick={() => onCategoryChange(idx)}
              className={`px-8 py-3 rounded-sm font-jakarta text-sm font-bold uppercase tracking-widest whitespace-nowrap border transition-all duration-300 shadow-lg relative overflow-hidden group focus:outline-none
                ${
                  activeCategory === idx
                    ? "bg-red-600 text-white border-red-500 shadow-[0_0_15px_rgba(220,38,38,0.4)]"
                    : "bg-zinc-900/80 backdrop-blur-sm text-gray-400 border-white/5 hover:bg-zinc-800 hover:text-white"
                }
              `}
            >
              <span className="relative z-10">{cat.label}</span>
              {activeCategory !== idx && (
                <div className="absolute inset-0 bg-red-600/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
