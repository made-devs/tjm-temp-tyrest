export const metadata = {
  title: "Kontak & Booking | TJM Auto Care",
  description:
    "Hubungi TJM Auto Care untuk konsultasi dan booking servis. Kirim pesan cepat via WhatsApp atau cek alamat cabang terdekat.",
  keywords: [
    "kontak tjm auto care",
    "booking bengkel",
    "whatsapp bengkel",
    "bengkel kaki kaki",
    "tjm auto care",
  ],
  alternates: {
    canonical: "https://tjmautocare.id/kontak",
  },
  openGraph: {
    title: "Kontak & Booking | TJM Auto Care",
    description:
      "Konsultasi dan booking servis TJM Auto Care via WhatsApp. Lihat juga cabang terdekat.",
    url: "https://tjmautocare.id/kontak",
    type: "website",
  },
};

export default function KontakLayout({ children }) {
  return <>{children}</>;
}
