import {
  KAKI_KAKI_INTENT_BLOCKS,
  SHOCKBREAKER_INTENT_BLOCKS,
  STEERING_INTENT_BLOCKS,
} from "@/components/layanan/detail/intentData";

export default function ServiceIntentBlocksSection({
  isRackSteerIntentPage,
  isShockbreakerIntentPage,
}) {
  const blocks = isRackSteerIntentPage
    ? STEERING_INTENT_BLOCKS
    : isShockbreakerIntentPage
      ? SHOCKBREAKER_INTENT_BLOCKS
      : KAKI_KAKI_INTENT_BLOCKS;

  return (
    <section className="page-element relative border-t border-gray-800 bg-[#050505] py-20 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-900/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-900/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container relative mx-auto px-4 z-10">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
            <div className="mb-4 flex items-center gap-3">
              <div className="h-[2px] w-8 bg-red-600"></div>
              <p className="font-jakarta text-[11px] font-bold uppercase tracking-[0.24em] text-red-500 md:text-xs">
                {isShockbreakerIntentPage
                  ? "Panduan Spesialis Shockbreaker"
                  : "Panduan Spesialis Kaki-Kaki"}
              </p>
              <div className="h-[2px] w-8 bg-red-600"></div>
            </div>
            <h2 className="font-teko text-4xl uppercase leading-[0.95] text-white sm:text-5xl md:text-6xl">
              Info Penting Sebelum{" "}
              <span className="text-red-600">
                {isRackSteerIntentPage
                  ? "Service Rack Steer"
                  : isShockbreakerIntentPage
                    ? "Service Shockbreaker"
                    : "Service Kaki-Kaki"}
              </span>
            </h2>
            <p className="mt-5 max-w-2xl font-jakarta text-sm leading-7 text-gray-300 sm:text-base md:text-lg md:leading-8">
              Kami merangkum rincian terpenting yang wajib Anda ketahui sebelum
              booking service, mulai dari titik masalah, gejala umum, hingga
              jaminan layanan di bengkel TJM Auto Care.
            </p>
          </div>

          <div className="relative mt-14 grid gap-5 md:mt-16 md:grid-cols-2 md:gap-6 xl:grid-cols-4">
            {blocks.map((item, index) => (
              <article
                key={item.title}
                className="group relative flex flex-col overflow-hidden border border-gray-800 border-t-4 border-t-red-600 bg-[#0d0d0d] p-5 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_-15px_rgba(220,38,38,0.2)] sm:p-6 md:p-7"
              >
                <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-red-600/10 to-transparent pointer-events-none" />

                <div className="relative z-10 mb-3 flex items-start justify-between md:mb-4">
                  <h3 className="pr-4 font-teko text-2xl uppercase tracking-wide text-white sm:text-[1.75rem] md:text-3xl">
                    {item.title}
                  </h3>
                  <span className="select-none font-teko text-4xl font-bold leading-none text-red-600/40 sm:text-5xl">
                    0{index + 1}
                  </span>
                </div>

                <p className="relative z-10 mt-1 font-jakarta text-sm leading-7 text-gray-400 transition-colors group-hover:text-gray-300 sm:text-base">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
