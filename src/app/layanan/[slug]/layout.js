import { servicesData } from "@/data/servicesData";
import { METADATA_OVERRIDES } from "@/components/layanan/detail/serviceDetailSeoData";

function getServiceData(slug) {
  return servicesData.find((service) => service.slug === slug);
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://tjmautocare.id";
  const service = getServiceData(slug);
  const readable = slug.replace(/-/g, " ");

  let title = service?.title
    ? `${service.title} | TJM Auto Care`
    : `Layanan ${readable} | TJM Auto Care`;
  let description = service?.description
    ? service.description
    : `Detail layanan ${readable} di TJM Auto Care — perbaikan dan servis kaki-kaki mobil profesional.`;
  let keywords = [
    readable,
    "service kaki kaki mobil",
    "bengkel kaki kaki mobil",
    "perbaikan kaki kaki mobil",
    "rekondisi kaki kaki mobil",
    "TJM Auto Care",
  ];

  if (slug === "paket-kaki-kaki") {
    title =
      "Bengkel Kaki-Kaki Mobil Spesialis | Service Mulai Rp 949 Ribu | TJM";
    description =
      "Bengkel spesialis kaki-kaki mobil dengan paket service mulai Rp 949 ribu. Solusi bunyi gluduk, setir getar, dan mobil limbung dengan 93 item pengecekan detail serta garansi pengerjaan di cabang TJM Auto Care.";
    keywords = [
      "service kaki kaki mobil",
      "bengkel kaki kaki mobil",
      "bengkel kaki kaki",
      "spesialis kaki kaki mobil",
      "bengkel spesialis kaki kaki mobil",
      "bengkel kaki kaki mobil terdekat",
      "bengkel kaki mobil",
      "harga service kaki kaki mobil",
      "biaya service kaki kaki mobil",
      "paket kaki kaki mobil murah",
      "paket kaki kaki mobil",
      "rekondisi kaki kaki mobil",
      "bunyi gluduk kaki kaki",
      "setir getar",
      "mobil limbung",
      "rack steer",
      "tie rod",
      "bushing arm",
      "shockbreaker",
      "cek mobil sebelum mudik",
      "TJM Auto Care",
    ];
  }

  if (METADATA_OVERRIDES[slug]) {
    title = METADATA_OVERRIDES[slug].title;
    description = METADATA_OVERRIDES[slug].description;
    if (METADATA_OVERRIDES[slug].keywords) {
      keywords = METADATA_OVERRIDES[slug].keywords;
    }
  }

  const url = `${siteUrl}/layanan/${slug}`;
  let ogImageUrl = service?.image
    ? `${siteUrl}${service.image}`
    : `${siteUrl}/logo/logotjm.webp`;

  if (slug === "paket-kaki-kaki") {
    ogImageUrl = `${siteUrl}/galeri/combokaki1.webp`;
  }

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url,
      type: "website",
      images: [
        {
          url: ogImageUrl,
          alt: `${service?.title || readable} - TJM Auto Care`,
        },
      ],
    },
    alternates: {
      canonical: url,
    },
  };
}

export default function ServiceDetailLayout({ children }) {
  return children;
}
