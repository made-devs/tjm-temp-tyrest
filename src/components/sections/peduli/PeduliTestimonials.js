'use client';

import Image from 'next/image';

const testimonials = [
  {
    quote:
      'Terima kasih banyak, berkat TJM Peduli kami bisa mendapatkan bantuan kebutuhan sehari-hari. Sangat berarti bagi kami.',
    name: 'Ibu Siti & Keluarga',
    role: 'Penerima Manfaat',
    avatar: 'https://placehold.co/50x50/111/FFFFFF?text=Penerima',
  },
  {
    quote:
      'Konsepnya keren! Senang banget bisa servis mobil sekaligus otomatis ikut berdonasi. Bikin servis jadi lebih bermakna.',
    name: 'Andi Wijaya',
    role: 'Customer TJM Auto Care',
    avatar: 'https://placehold.co/50x50/111/FFFFFF?text=Customer',
  },
];

export default function PeduliTestimonials() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-teko text-center text-5xl font-medium uppercase text-white">
            Cerita & <span className="text-red-500">Testimoni</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-[#111] p-8 border border-gray-800">
                <p className="text-gray-300 italic">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div className="flex items-center gap-4 mt-6">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-red-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
