import Image from "next/image";

// Daftar nama file logo (tanpa ekstensi .webp)
const logos = [
  "logo-blissful",
  "logo-express",
  "logo-lawfirm",
  "logo-pasticuan",
  "logo-vip",
];

export default function ClientLogos() {
  return (
    <section className="bg-black py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-8">
          {logos.map((logoName) => (
            <div key={logoName} className="relative h-12 w-40">
              <Image
                src={`/logo/${logoName}.webp`}
                alt={`Logo ${logoName}`}
                fill
                className="object-contain opacity-75 transition-all duration-300 ease-in-out hover:opacity-100 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
