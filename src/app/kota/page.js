import Link from "next/link";
import Image from "next/image";
import { workshopLocations } from "@/data/locations";
import { slugify } from "@/lib/slug";

export const metadata = {
  title: "Cabang TJM Auto Care | Daftar Kota",
  description:
    "Temukan cabang TJM Auto Care di kota Anda. Lihat alamat, jam operasional, dan booking via WhatsApp.",
};

export default function KotaIndexPage() {
  const locations = [...workshopLocations].sort((a, b) =>
    a.city.localeCompare(b.city, "id"),
  );

  return (
    <main className="bg-black text-white">
      <section className="container mx-auto px-4 py-14">
        <h1 className="font-teko text-4xl md:text-5xl uppercase">
          Cabang TJM Auto Care
        </h1>
        <p className="mt-3 text-gray-300 max-w-2xl">
          Pilih kota untuk melihat detail cabang, peta, dan informasi booking.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((loc) => {
            const slug = slugify(loc.city);
            return (
              <Link
                key={loc.id}
                href={`/kota/${slug}`}
                className="group rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition overflow-hidden"
              >
                <div className="relative w-full aspect-[16/10]">
                  <Image
                    src={loc.photo}
                    alt={`TJM Auto Care ${loc.city}`}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-5">
                  <h2 className="font-teko text-2xl uppercase">{loc.city}</h2>
                  <p className="mt-2 text-sm text-gray-300 line-clamp-2">
                    {loc.address}
                  </p>
                  <p className="mt-3 text-sm text-gray-200">
                    Jam: <span className="text-gray-300">{loc.hours}</span>
                  </p>

                  <span className="inline-block mt-4 text-sm text-red-400 group-hover:text-red-300">
                    Lihat detail →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}
