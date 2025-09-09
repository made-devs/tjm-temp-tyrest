// src/components/sections/peduli/PeduliHowItWorks.js
import SectionHeader from '@/components/SectionHeader';

const steps = [
  {
    number: '01',
    title: 'Pilih Paket Servis',
    description:
      'Pilih paket servis apa pun yang sesuai dengan kebutuhan mobil Anda.',
  },
  {
    number: '02',
    title: 'Dapatkan Harga Spesial',
    description:
      'Anda tetap mendapatkan harga terbaik dari kami untuk setiap layanan.',
  },
  {
    number: '03',
    title: 'Donasi Otomatis',
    description: 'Sebagian dari pembayaran Anda kami sisihkan untuk donasi.',
  },
  {
    number: '04',
    title: 'Kebaikan Tersalurkan',
    description:
      'Anda ikut berbagi tanpa biaya tambahan, kami yang menyalurkannya.',
  },
];

export default function PeduliHowItWorks() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <SectionHeader
          subtitle="MEKANISME PROGRAM"
          title="Bagaimana Cara Kerjanya?"
        />
        <div className="relative mt-16">
          {/* Garis Timeline */}
          <div className="absolute left-1/2 top-5 h-[calc(100%-2.5rem)] w-0.5 bg-gray-800 hidden md:block" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex items-start gap-6 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="flex-shrink-0 font-teko text-6xl text-red-500">
                  {step.number}
                </div>
                <div
                  className={index % 2 === 0 ? 'text-left' : 'md:text-right'}
                >
                  <h3 className="font-teko text-3xl font-medium uppercase text-white">
                    {step.title}
                  </h3>
                  <p className="font-jakarta text-gray-400 mt-1">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
