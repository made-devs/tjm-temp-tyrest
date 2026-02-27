import "./globals.css";
import { Teko, Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScrolling from "../components/SmoothScrolling";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
});

const teko = Teko({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-teko",
});

export const metadata = {
  title: {
    default: "TJM Auto Care | Bengkel Kaki-Kaki & Perawatan Mobil Spesialis",
    template: "%s",
  },
  description:
    "TJM Auto Care adalah bengkel spesialis kaki-kaki mobil, rack steer, shockbreaker, dan perawatan otomotif profesional dengan garansi terbaik di Indonesia.",
  keywords: [
    "bengkel kaki kaki",
    "service kaki kaki mobil",
    "perbaikan rack steer",
    "service shockbreaker",
    "tjm auto care",
    "bengkel mobil terdekat",
  ],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#000000",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "TJM Auto Care",
  url: "https://tjmautocare.id",
  logo: "https://tjmautocare.id/logo/logotjm.webp",
  description: "Bengkel spesialis kaki-kaki mobil terpercaya di Indonesia",
  sameAs: [
    "https://www.facebook.com/profile.php?id=100069959570435",
    "https://www.instagram.com/tjmautocare/",
    "https://www.tiktok.com/@tjmautocare",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+6285169576890",
      contactType: "customer service",
      areaServed: "ID",
      availableLanguage: ["Indonesian", "English"],
    },
  ],
};

export default function RootLayout({ children }) {
  const measurementId = process.env.NEXT_PUBLIC_GA_ID || "G-FN9E6HRRMH";

  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              gtag('config', '${measurementId}', { send_page_view: false });
            `,
          }}
        />
      </head>
      <body
        className={`${plusJakartaSans.variable} ${teko.variable} bg-black text-white font-jakarta antialiased overflow-x-hidden`}
      >
        <GoogleAnalytics measurementId={measurementId} />
        <SmoothScrolling />
        <Navbar />
        <main className="pt-[72px]">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
        {/* JSON-LD Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </body>
    </html>
  );
}
