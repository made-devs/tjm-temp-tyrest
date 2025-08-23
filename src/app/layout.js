import './globals.css';
import { Teko, Plus_Jakarta_Sans } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SmoothScrolling from '../components/SmoothScrolling';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jakarta',
});

const teko = Teko({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  variable: '--font-teko',
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
        <Navbar />
        {/* Tambahkan padding atas di sini */}
        <main className="pt-[72px]">
          {' '}
          {/* Sesuaikan angka ini jika tinggi navbar berubah */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
