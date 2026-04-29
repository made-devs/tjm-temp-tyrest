import Link from "next/link";

export default function KotaLocalContent({ city, localContent }) {
  return (
    <>
      <div className="bg-[#0a0a0a] border border-gray-800 p-6 md:p-8 relative overflow-hidden group hover:border-gray-600 transition-colors duration-500 shadow-xl">
        <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/5 rounded-full blur-[40px] pointer-events-none group-hover:bg-red-600/10 transition-colors" />
        <div className="flex items-center justify-between mb-4 relative z-10 border-b border-gray-800 pb-4">
          <h3 className="font-teko text-3xl text-white uppercase drop-shadow-md">
            INFO <span className="text-red-500">LOKAL</span>
          </h3>
          <div className="h-1 w-12 bg-red-600" />
        </div>

        <p className="text-sm md:text-base text-gray-400 leading-relaxed font-jakarta relative z-10 mt-4">
          {localContent ? (
            <>{localContent.intro}</>
          ) : (
            <>
              Cabang{" "}
              <strong className="text-gray-200">TJM Auto Care {city}</strong>{" "}
              melayani perbaikan kaki-kaki, rack steer, dan perawatan berkala.
              Didukung mekanik spesialis dan tools modern standar TJM Pusat.
              Lokasi strategis dan mudah diakses.
            </>
          )}
        </p>

        <p className="text-sm md:text-base text-gray-400 leading-relaxed font-jakarta mt-4 relative z-10">
          Layanan yang paling dicari pelanggan di {city} adalah{" "}
          <Link
            href="/layanan/paket-kaki-kaki"
            className="text-red-400 hover:text-red-300 font-medium underline underline-offset-[3px] decoration-red-600/30 hover:decoration-red-500"
          >
            service kaki-kaki mobil
          </Link>{" "}
          dan{" "}
          <Link
            href="/layanan/paket-combo-kaki-kaki"
            className="text-red-400 hover:text-red-300 font-medium underline underline-offset-[3px] decoration-red-600/30 hover:decoration-red-500"
          >
            paket combo kaki-kaki
          </Link>
          .
        </p>
      </div>

      {localContent && (
        <div className="border border-red-600/30 bg-[#0a0a0a] p-6 md:p-8 relative shadow-[0_0_30px_rgba(220,38,38,0.05)]">
          <div className="absolute top-0 left-0 w-2 h-full bg-red-600" />
          <p className="font-jakarta text-[10px] font-bold uppercase tracking-[0.3em] text-red-500 mb-2">
            {localContent.eyebrow}
          </p>
          <h2 className="font-teko text-3xl uppercase text-white md:text-4xl drop-shadow-md">
            {localContent.title}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-gray-400 font-jakarta">
            {localContent.intro}
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="border border-gray-800 bg-[#111] p-6 group hover:border-gray-600 transition-colors">
              <h3 className="font-teko text-2xl uppercase text-white border-b border-gray-800 pb-3 mb-4 group-hover:border-red-500/50 transition-colors">
                Area Sekitar Cabang
              </h3>
              <ul className="space-y-3 text-sm leading-relaxed text-gray-400 font-jakarta">
                {localContent.coverageAreas.map((area) => (
                  <li key={area} className="flex gap-2 items-start">
                    <span className="text-red-500 mt-1 block h-1.5 w-1.5 bg-red-500 shrink-0 transform rotate-45" />
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-gray-800 bg-[#111] p-6 group hover:border-gray-600 transition-colors">
              <h3 className="font-teko text-2xl uppercase text-white border-b border-gray-800 pb-3 mb-4 group-hover:border-red-500/50 transition-colors">
                Pola Keluhan Relevan
              </h3>
              <ul className="space-y-3 text-sm leading-relaxed text-gray-400 font-jakarta">
                {localContent.localSignals.map((signal) => (
                  <li key={signal} className="flex gap-2 items-start">
                    <span className="text-red-500 mt-1 block h-1.5 w-1.5 bg-red-500 shrink-0 transform rotate-45" />
                    <span>{signal}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
