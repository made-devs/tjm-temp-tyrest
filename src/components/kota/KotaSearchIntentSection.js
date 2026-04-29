export default function KotaSearchIntentSection({ city }) {
  return (
    <div className="border border-gray-800 bg-[#0a0a0a] p-6 md:p-8 relative">
      <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/5 blur-[50px] pointer-events-none" />
      <p className="font-jakarta text-[10px] font-bold uppercase tracking-[0.3em] text-red-500">
        BENGKEL KAKI-KAKI MOBIL TERDEKAT DI {city.toUpperCase()}
      </p>
      <h2 className="mt-3 font-teko text-3xl uppercase text-white md:text-4xl drop-shadow-md">
        Yang Paling Sering Dicari Sebelum Booking di Cabang {city}
      </h2>
      <div className="mt-8 grid gap-6 md:grid-cols-2 relative z-10">
        <div className="border-l-4 border-red-600 border-t border-b border-r border-gray-800 bg-[#111] p-5 hover:bg-[#151515] transition-colors shadow-lg">
          <h3 className="font-teko text-2xl uppercase text-white tracking-wide">
            GEJALA YANG DITANGANI
          </h3>
          <div className="w-8 h-[2px] bg-red-600 my-3" />
          <p className="text-sm leading-relaxed text-gray-400 font-jakarta">
            Bunyi gluduk, setir getar, mobil limbung, ban aus tidak rata, rack
            steer bermasalah, dan handling yang mulai tidak presisi.
          </p>
        </div>
        <div className="border-l-4 border-red-600 border-t border-b border-r border-gray-800 bg-[#111] p-5 hover:bg-[#151515] transition-colors shadow-lg">
          <h3 className="font-teko text-2xl uppercase text-white tracking-wide">
            ALASAN MEMILIH CABANG INI
          </h3>
          <div className="w-8 h-[2px] bg-red-600 my-3" />
          <p className="text-sm leading-relaxed text-gray-400 font-jakarta">
            Cabang TJM Auto Care {city} memudahkan Anda cek lokasi, jam
            operasional, dan jalur booking dalam satu tempat, sehingga proses
            booking bisa lebih cepat saat kaki-kaki mobil mulai bermasalah.
          </p>
        </div>
      </div>
    </div>
  );
}
