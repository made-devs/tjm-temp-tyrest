"use client";

import { peduliReels } from "@/data/peduliData";
import InstagramEmbed from "@/components/InstagramEmbed";
import SectionHeader from "@/components/SectionHeader";

// Komponen untuk menampilkan embed video Reels dari Instagram.
export default function PeduliVideoReels() {
  return (
    <section className="py-20 bg-[#111]">
      <div className="container mx-auto px-4">
        <SectionHeader
          subtitle="LIPUTAN VIDEO"
          title="Momen Kegiatan TJM Peduli"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {peduliReels.map((reel) => (
            <div key={reel.id} className="border border-gray-800 flex flex-col">
              {/* Wrapper scroll dan max-height dihapus */}
              <div>
                {/* Prop hideCaption ditambahkan */}
                <InstagramEmbed postUrl={reel.url} hideCaption={true} />
              </div>
              <h3 className="font-jakarta font-semibold text-center p-4 text-white mt-auto">
                {reel.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
