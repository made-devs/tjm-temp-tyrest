'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Phone,
  Mail,
} from 'lucide-react';

// Komponen kecil untuk link sosial media
const SocialLink = ({ href, icon: Icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-red-500 transition-colors duration-300"
  >
    <Icon size={20} />
  </a>
);

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-gray-800 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Kolom 1: Tentang Kami & Logo */}
          <div className="md:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logo/logotjm.webp"
                alt="TJM Auto Care Logo"
                width={150}
                height={50}
                className="h-12 w-auto"
              />
            </Link>
            <p className="font-jakarta text-gray-400 text-sm leading-relaxed">
              TJM Auto Care adalah bengkel spesialis terpercaya yang menyediakan
              solusi lengkap untuk perawatan dan perbaikan mobil Anda.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <SocialLink href="#" icon={Facebook} />
              <SocialLink href="#" icon={Twitter} />
              <SocialLink href="#" icon={Instagram} />
              <SocialLink href="#" icon={Linkedin} />
            </div>
          </div>

          {/* Kolom 2: Link Cepat */}
          <div>
            <h4 className="font-teko text-2xl font-medium uppercase text-white mb-4">
              Link Cepat
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="font-jakarta text-sm text-gray-400 hover:text-red-500 transition-colors"
                >
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="font-jakarta text-sm text-gray-400 hover:text-red-500 transition-colors"
                >
                  Layanan
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="font-jakarta text-sm text-gray-400 hover:text-red-500 transition-colors"
                >
                  Testimoni
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="font-jakarta text-sm text-gray-400 hover:text-red-500 transition-colors"
                >
                  Hubungi Kami
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Info Kontak */}
          <div>
            <h4 className="font-teko text-2xl font-medium uppercase text-white mb-4">
              Hubungi Kami
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-red-500 mt-1 flex-shrink-0" />
                <span className="font-jakarta text-sm text-gray-400">
                  +62 123 4567 890
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-red-500 mt-1 flex-shrink-0" />
                <span className="font-jakarta text-sm text-gray-400">
                  info@tjmautocare.com
                </span>
              </li>
            </ul>
          </div>

          {/* Kolom 4: Jam Operasional */}
          <div>
            <h4 className="font-teko text-2xl font-medium uppercase text-white mb-4">
              Jam Buka
            </h4>
            <ul className="space-y-2 font-jakarta text-sm text-gray-400">
              <li>
                Senin - Sabtu: <strong>08:30 - 18:30</strong>
              </li>
              <li>
                Minggu: <strong>Tutup</strong>
              </li>
            </ul>
          </div>
        </div>

        {/* Garis Pemisah & Copyright */}
        <div className="text-center border-t border-gray-800 mt-12 pt-8">
          <p className="font-jakarta text-xs text-gray-500">
            &copy; {new Date().getFullYear()} TJM Auto Care. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
