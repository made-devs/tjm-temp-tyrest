// src/data/galleryData.js

// Kategori untuk tab di halaman galeri
export const galleryTabs = [
  { id: 'detailing-nano', name: 'DETAILING & NANO CERAMIC COATING' },
  { id: 'rust-steam', name: 'RUST PROTECTION & VAPORIZER STEAMER' },
  { id: 'kaki-kaki', name: 'SERVICE KAKI - KAKI' },
  { id: 'berkala', name: 'SERVICE BERKALA' },
  { id: 'ac', name: 'SERVICE AC' },
  { id: 'overhaul', name: 'SERVICE OVERHAUL ENGINE' },
];

// Daftar semua gambar galeri dengan kategorinya masing-masing
export const galleryImages = [
  // Kategori: DETAILING & NANO CERAMIC COATING
  {
    id: 1,
    src: '/galeri/detail1.webp',
    alt: 'Proses detailing mobil',
    span: 'row-span-2',
    category: 'detailing-nano',
  },
  {
    id: 2,
    src: '/galeri/detail2.webp',
    alt: 'Poles bodi mobil',
    span: 'col-span-1',
    category: 'detailing-nano',
  },
  {
    id: 3,
    src: '/galeri/detail3.webp',
    alt: 'Pembersihan interior mobil',
    span: 'col-span-1',
    category: 'detailing-nano',
  },
  {
    id: 5,
    src: '/galeri/detail4.webp',
    alt: 'Coating velg mobil',
    span: 'col-span-1',
    category: 'detailing-nano',
  },
  {
    id: 6,
    src: '/galeri/detail5.webp',
    alt: 'Hasil akhir detailing',
    span: 'col-span-1',
    category: 'detailing-nano',
  },

  // Kategori: RUST PROTECTION & VAPORIZER STEAMER
  {
    id: 13,
    src: '/bengkel/bengkel14.webp',
    alt: 'Promo Anti Karat',
    span: 'col-span-1',
    category: 'rust-steam',
  },
  {
    id: 15,
    src: '/bengkel/bengkel7.webp',
    alt: 'Peralatan Modern untuk Anti Karat',
    span: 'row-span-2',
    category: 'rust-steam',
  },

  // Kategori: SERVICE KAKI - KAKI
  {
    id: 14,
    src: '/bengkel/bengkel15.webp',
    alt: 'Pengecekan Kaki-kaki',
    span: 'col-span-1',
    category: 'kaki-kaki',
  },
  {
    id: 10,
    src: '/bengkel/bengkel10.webp',
    alt: 'Peralatan bengkel modern',
    span: 'col-span-1',
    category: 'kaki-kaki',
  },
  {
    id: 16,
    src: '/features/feature3.webp',
    alt: 'Perbaikan suspensi mobil',
    span: 'row-span-2',
    category: 'kaki-kaki',
  },
  {
    id: 17,
    src: '/services/service6.webp',
    alt: 'Spooring dan Balancing',
    span: 'col-span-1',
    category: 'kaki-kaki',
  },

  // Kategori: SERVICE BERKALA
  {
    id: 4,
    src: '/bengkel/bengkel4.webp',
    alt: 'Pengecekan mesin mobil',
    span: 'row-span-2',
    category: 'berkala',
  },
  {
    id: 7,
    src: '/features/feature1.webp',
    alt: 'Mekanik sedang melakukan inspeksi',
    span: 'col-span-1',
    category: 'berkala',
  },
  {
    id: 18,
    src: '/services/service2.webp',
    alt: 'Proses ganti oli',
    span: 'col-span-1',
    category: 'berkala',
  },

  // Kategori: SERVICE AC
  {
    id: 19,
    src: '/services/service5.webp',
    alt: 'Peralatan servis AC canggih',
    span: 'row-span-2',
    category: 'ac',
  },
  {
    id: 20,
    src: '/services/service3.webp',
    alt: 'Pembersihan sistem AC mobil',
    span: 'col-span-1',
    category: 'ac',
  },

  // Kategori: SERVICE OVERHAUL ENGINE
  {
    id: 12,
    src: '/bengkel/bengkel12.webp',
    alt: 'Mobil dalam proses overhaul',
    span: 'row-span-2',
    category: 'overhaul',
  },
  {
    id: 21,
    src: '/services/service1.webp',
    alt: 'Pengerjaan detail pada mesin',
    span: 'col-span-1',
    category: 'overhaul',
  },
];
