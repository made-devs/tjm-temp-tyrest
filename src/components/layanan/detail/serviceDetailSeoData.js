export const METADATA_OVERRIDES = {
  "paket-diesel": {
    title: "Paket Diesel Tune Up & Injektor Mobil | TJM Auto Care",
    description:
      "Paket diesel TJM Auto Care untuk tune up, injector cleaner, dan perawatan mesin diesel agar performa tetap bertenaga serta efisien.",
  },
  "paket-kaki-kaki": {
    title:
      "Bengkel Kaki-Kaki Mobil Spesialis | Service Mulai Rp 949 Ribu | TJM",
    description:
      "Bengkel spesialis kaki-kaki mobil TJM melayani service kaki-kaki mobil, rekondisi rack steer, shockbreaker, tie rod, dan bushing arm mulai Rp 949 ribu dengan garansi pengerjaan.",
  },
  "paket-super-hemat": {
    title: "Paket Super Hemat 1 Mulai 1,4 Juta | TJM Auto Care",
    description:
      "Paket Super Hemat 1 TJM Auto Care promo terbatas dengan tune up 65 komponen, gurah mesin, catalytic cleaning, service rem 4 roda, engine flush, dan inspeksi lengkap.",
    keywords: [
      "paket super hemat 1",
      "paket super hemat tjm",
      "promo service mobil",
      "tune up 65 komponen",
      "service rem 4 roda",
      "service kaki kaki mobil",
      "bengkel kaki kaki mobil",
    ],
  },
  "paket-super-hemat-undercarriage": {
    title:
      "Paket Super Hemat Undercarriage Vaporizer UAP Mulai 299 Ribu | TJM Auto Care",
    description:
      "Paket Super Hemat Undercarriage TJM Auto Care dengan vaporizer steamer UAP komplit untuk sterilisasi interior, eksterior, AC mobil, kondensor, engine bay, plus inspeksi kaki-kaki dan AC.",
    keywords: [
      "paket super hemat undercarriage",
      "vaporizer steamer uap komplit",
      "cuci steril vaporizer uap",
      "fogging ac mobil",
      "inspeksi kaki kaki 25 titik",
      "inspeksi ac mobil 20 titik",
    ],
  },
  "paket-triple-combo-undercarriage": {
    title: "Paket Triple Combo Kaki-Kaki & Anti Karat | TJM",
    description:
      "Paket Triple Combo TJM Auto Care untuk service kaki-kaki dan anti karat, termasuk restorasi kolong, detailing, dan proteksi undercarriage.",
  },
  "paket-steering": {
    title: "Paket Steering | Service Rack Steer Terdekat | TJM Auto Care",
    description:
      "Paket Steering TJM Auto Care untuk gejala setir berat, bunyi saat belok, atau handling tidak presisi. Cocok untuk Anda yang mencari service rack steer terdekat dengan diagnosa jelas dan booking cepat via WhatsApp.",
    keywords: [
      "paket steering",
      "service rack steer terdekat",
      "rack steer terdekat",
      "bengkel rack steer terdekat",
      "service steering mobil",
      "rekondisi rack steer",
      "service power steering",
      "TJM Auto Care",
    ],
  },
  "paket-racksteer-ultimate": {
    title: "Paket Racksteer Ultimate | Service Rack Steer Terdekat | TJM",
    description:
      "Paket Racksteer Ultimate TJM Auto Care untuk perbaikan rack steer dan power steering: atasi setir berat, bocor, dan bunyi belok dengan teknisi ahli. Booking cabang terdekat via WhatsApp.",
    keywords: [
      "paket racksteer ultimate",
      "service rack steer terdekat",
      "rack steer terdekat",
      "bengkel rack steer terdekat",
      "service power steering mobil",
      "rebuild rack steer",
      "TJM Auto Care",
    ],
  },
  "paket-shockbreaker": {
    title:
      "Paket Shockbreaker | Service Shockbreaker Mobil Terdekat | TJM Auto Care",
    description:
      "Paket Shockbreaker TJM Auto Care untuk atasi bantingan keras, limbung, dan kebocoran shock. Cocok untuk Anda yang mencari service shockbreaker mobil terdekat dengan diagnosa jelas dan booking cepat via WhatsApp.",
    keywords: [
      "paket shockbreaker",
      "service shockbreaker mobil terdekat",
      "service shockbreaker terdekat",
      "bengkel shockbreaker mobil terdekat",
      "service shockbreaker mobil",
      "rekondisi shockbreaker mobil",
      "shockbreaker bocor",
      "TJM Auto Care",
    ],
  },
};

export const OFFER_OVERRIDES = {
  "paket-kaki-kaki": {
    priceCurrency: "IDR",
    price: "949000",
    lowPrice: "949000",
    availability: "https://schema.org/InStock",
    description:
      "Harga promo mulai dari Rp949 ribu. Harga final mengikuti hasil inspeksi, kondisi part, dan tipe kendaraan.",
  },
  "paket-super-hemat": {
    priceCurrency: "IDR",
    price: "1400000",
    lowPrice: "1400000",
    availability: "https://schema.org/InStock",
    description:
      "Promo paket super hemat 1 dengan cakupan tune up, service rem, engine flush, dan inspeksi lengkap. Harga dapat menyesuaikan kondisi kendaraan.",
  },
  "paket-super-hemat-undercarriage": {
    priceCurrency: "IDR",
    price: "299000",
    lowPrice: "299000",
    availability: "https://schema.org/InStock",
    description:
      "Promo vaporizer steamer UAP komplit untuk sterilisasi interior-eksterior, AC, dan engine bay. Harga dapat menyesuaikan kondisi kendaraan.",
  },
};

export const PRIORITY_CITY_NAMES = [
  "Surabaya",
  "Jogja",
  "Bekasi",
  "Bandung",
  "Samarinda",
  "Bali",
];

export const RACK_STEER_INTENT_SLUGS = [
  "paket-steering",
  "paket-racksteer-ultimate",
];

export const SHOCKBREAKER_INTENT_SLUGS = ["paket-shockbreaker"];

export const KAKI_KAKI_FAQ_SCHEMA = [
  {
    "@type": "Question",
    name: "Di mana bengkel kaki-kaki mobil terdekat yang bagus?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "TJM Auto Care adalah spesialis bengkel kaki-kaki mobil terdekat dengan cabang di banyak kota. Kami menyediakan pengecekan detail, rekomendasi tindakan yang transparan, dan garansi pengerjaan sesuai paket/pekerjaan.",
    },
  },
  {
    "@type": "Question",
    name: "Apa saja gejala kaki-kaki mobil rusak (dan kapan harus dicek sebelum Mudik)?",
    acceptedAnswer: {
      "@type": "Answer",
      text: 'Gejala umum meliputi bunyi gluduk saat jalan rusak/Polisi tidur, setir bergetar, ban aus tidak rata, mobil terasa limbung, atau arah mobil terasa "lari". Disarankan cek kaki-kaki sebelum perjalanan jauh/Mudik agar lebih aman dan nyaman.',
    },
  },
  {
    "@type": "Question",
    name: "Berapa biaya service kaki-kaki mobil?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Biaya service kaki-kaki mobil tergantung hasil pengecekan, kondisi part, dan tindakan (rekondisi/penggantian). TJM Auto Care menyediakan paket dan opsi tindakan sesuai kebutuhan; Anda bisa konsultasi via WhatsApp untuk estimasi setelah pengecekan awal.",
    },
  },
];

export const RACK_STEER_FAQ_SCHEMA = [
  {
    "@type": "Question",
    name: "Di mana service rack steer terdekat?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "TJM Auto Care melayani service rack steer terdekat di berbagai kota. Sebutkan kota Anda saat booking agar tim mengarahkan ke cabang yang paling dekat.",
    },
  },
  {
    "@type": "Question",
    name: "Apa gejala rack steer bermasalah?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Gejala umum meliputi setir terasa berat, bunyi saat belok, setir tidak presisi, hingga kebocoran oli power steering. Segera lakukan inspeksi agar kerusakan tidak merambat ke komponen lain.",
    },
  },
  {
    "@type": "Question",
    name: "Berapa lama dan berapa biaya service rack steer?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Durasi dan biaya mengikuti hasil pengecekan awal, tingkat kerusakan, serta kebutuhan rekondisi atau penggantian part. Konsultasi via WhatsApp untuk estimasi awal sebelum datang ke cabang.",
    },
  },
];

export const SHOCKBREAKER_FAQ_SCHEMA = [
  {
    "@type": "Question",
    name: "Di mana service shockbreaker mobil terdekat?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "TJM Auto Care melayani service shockbreaker mobil terdekat di berbagai kota. Sebutkan kota Anda saat booking agar diarahkan ke cabang terdekat.",
    },
  },
  {
    "@type": "Question",
    name: "Apa gejala shockbreaker mobil mulai rusak?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Gejala umum meliputi bantingan terasa keras, mobil limbung saat bermanuver, bunyi saat melewati jalan rusak, dan kebocoran oli pada shockbreaker.",
    },
  },
  {
    "@type": "Question",
    name: "Berapa lama dan berapa biaya service shockbreaker mobil?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Durasi dan biaya mengikuti hasil inspeksi awal, kondisi komponen, serta kebutuhan rekondisi atau penggantian part. Konsultasi via WhatsApp untuk estimasi awal sebelum datang ke cabang.",
    },
  },
];
