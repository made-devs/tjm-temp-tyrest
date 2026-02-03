import "./globals.css";
import { Teko, Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScrolling from "../components/SmoothScrolling";
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
    template: "%s | TJM Auto Care",
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
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  themeColor: "#000000",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${plusJakartaSans.variable} ${teko.variable} bg-black text-white font-jakarta antialiased overflow-x-hidden`}
      >
        <SmoothScrolling />
        <Navbar />
        <main className="pt-[72px]">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
