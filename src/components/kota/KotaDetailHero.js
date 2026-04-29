import Image from "next/image";
import Link from "next/link";

export default function KotaDetailHero({ city, photo, isPriorityCity }) {
  return (
    <div className="relative h-[50vh] w-full overflow-hidden">
      <div className="absolute inset-0 bg-black/50 z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-20" />
      <Image
        src={photo}
        alt={`TJM Auto Care ${city}`}
        fill
        className="object-cover scale-105 blur-[2px]"
        priority
      />

      <div className="relative z-30 container mx-auto px-4 h-full flex flex-col justify-center">
        <div className="flex items-center gap-2 text-xs md:text-sm font-semibold tracking-wider text-gray-300 mb-4 bg-black/40 w-fit px-3 py-1 rounded-full backdrop-blur-sm border border-white/10">
          <Link href="/" className="hover:text-red-500 transition">
            HOME
          </Link>
          <span className="text-red-600">/</span>
          <Link href="/kota" className="hover:text-red-500 transition">
            KOTA
          </Link>
          <span className="text-red-600">/</span>
          <span className="text-white uppercase">{city}</span>
        </div>

        <h1 className="font-teko text-6xl md:text-8xl font-bold uppercase text-white drop-shadow-2xl leading-none">
          Bengkel Kaki-Kaki Mobil <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-red-500 to-red-800">
            {city}
          </span>
        </h1>
        <p className="mt-4 max-w-3xl font-jakarta text-sm leading-relaxed text-gray-200 md:text-base">
          {isPriorityCity
            ? `Cari bengkel kaki-kaki mobil terdekat di ${city}? Cabang TJM Auto Care ${city} siap membantu pengecekan bunyi gluduk, setir getar, mobil limbung, rack steer, dan shockbreaker dengan booking WhatsApp cepat.`
            : `Cabang TJM Auto Care ${city} melayani service kaki-kaki mobil, rack steer, dan shockbreaker dengan alamat lengkap, peta lokasi, dan jalur booking yang jelas.`}
        </p>
      </div>
    </div>
  );
}
