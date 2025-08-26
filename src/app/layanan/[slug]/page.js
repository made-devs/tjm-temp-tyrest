import { use } from 'react';
import { servicesData } from '@/data/servicesData';
import { notFound } from 'next/navigation';
import ServiceDetailClient from './ServiceDetailClient'; // Impor komponen client yang baru

// Fungsi untuk mendapatkan data service berdasarkan slug
function getServiceData(slug) {
  const service = servicesData.find((s) => s.slug === slug);
  return service;
}

// --- Server Component untuk Halaman ---
// Komponen ini (default export) berjalan di server untuk mengambil data
// dan kemudian merender Client Component.
export default function ServiceDetailPage({ params }) {
  // Membuka promise 'params' menggunakan React.use() di Server Component
  const resolvedParams = use(params);
  const service = getServiceData(resolvedParams.slug);

  // Jika service tidak ditemukan, tampilkan halaman 404
  if (!service) {
    notFound();
  }

  // Render Client Component dan kirim data 'service' sebagai prop
  return <ServiceDetailClient service={service} />;
}

// Generate static paths untuk semua services (bagus untuk performa)
// Fungsi ini sekarang bisa digunakan dengan benar di Server Component
export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}
