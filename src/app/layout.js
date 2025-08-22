import './globals.css';
import { Teko, Plus_Jakarta_Sans } from 'next/font/google';
import Navbar from '@/components/Navbar'; // <-- 1. Impor Navbar
import SmoothScrolling from '../components/SmoothScrolling';

// Konfigurasi font Plus Jakarta Sans untuk teks biasa
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jakarta', // Variabel untuk font body
});

// Konfigurasi font Teko untuk judul
const teko = Teko({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  variable: '--font-teko', // Variabel untuk font judul
});

export const metadata = {
  title: 'TJM Auto Care',
  description: 'Solusi perawatan mobil terpercaya.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.variable} ${teko.variable} bg-black text-white font-jakarta`}
      >
        <SmoothScrolling />
        <Navbar /> {/* <-- 2. Tampilkan Navbar di sini */}
        {children}
      </body>
    </html>
  );
}
