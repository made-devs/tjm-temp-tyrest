export const metadata = {
  title: "Cabang TJM Auto Care | Daftar Kota & Booking",
  description:
    "Temukan cabang TJM Auto Care terdekat. Lihat alamat, jam operasional, peta, dan booking via WhatsApp untuk tiap kota.",
  keywords: [
    "tjm auto care terdekat",
    "cabang tjm auto care",
    "bengkel kaki kaki terdekat",
    "bengkel mobil terdekat",
    "tjm auto care",
  ],
  alternates: {
    canonical: "https://tjmautocare.id/kota",
  },
  openGraph: {
    title: "Cabang TJM Auto Care | Daftar Kota",
    description:
      "Daftar cabang TJM Auto Care: alamat, jam operasional, peta, dan booking WhatsApp.",
    url: "https://tjmautocare.id/kota",
    type: "website",
  },
};

export default function KotaLayout({ children }) {
  return <>{children}</>;
}
