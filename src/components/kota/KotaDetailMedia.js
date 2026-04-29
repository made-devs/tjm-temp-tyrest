import Image from "next/image";

export default function KotaDetailMedia({ city, photo, mapSrc }) {
  return (
    <>
      <div className="relative aspect-[16/8] w-full overflow-hidden border border-gray-800 shadow-2xl group bg-[#0a0a0a]">
        <Image
          src={photo}
          alt={`Cabang ${city}`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-[1.03] opacity-80 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-black/90 via-black/40 to-transparent" />

        {/* Accent Red Lights */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-red-600/10 to-transparent pointer-events-none" />

        <div className="absolute -bottom-1 -left-1">
          <div className="px-6 py-3 bg-red-600 text-white font-jakarta text-[10px] font-bold uppercase tracking-[0.3em] inline-block shadow-lg">
            OFFICIAL WORKSHOP
          </div>
        </div>
        <div className="absolute bottom-16 left-6 max-w-[80%]">
          <h2 className="text-4xl md:text-5xl font-teko font-bold uppercase tracking-wide drop-shadow-xl text-white">
            CABANG TJM <span className="text-red-500">{city}</span>
          </h2>
        </div>
      </div>

      <div className="relative w-full aspect-[16/9] lg:aspect-auto lg:flex-1 bg-[#0a0a0a] overflow-hidden border border-gray-800 min-h-[300px] shadow-inner group">
        <iframe
          title={`Peta TJM Auto Care ${city}`}
          src={mapSrc}
          className="absolute inset-0 w-full h-full opacity-60 group-hover:opacity-90 transition-opacity duration-500 grayscale group-hover:grayscale-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />

        <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md border border-white/10 px-4 py-2 font-jakarta text-[10px] font-bold uppercase tracking-widest text-red-500 pointer-events-none">
          PETA LOKASI
        </div>

        {/* Framing Lines */}
        <div className="absolute top-0 left-0 w-8 h-[2px] bg-red-600 pointer-events-none" />
        <div className="absolute top-0 left-0 w-[2px] h-8 bg-red-600 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-8 h-[2px] bg-red-600 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[2px] h-8 bg-red-600 pointer-events-none" />
      </div>
    </>
  );
}
