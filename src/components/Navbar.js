'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Daftar link navigasi diperbarui dengan menu baru
const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Layanan', href: '/layanan' },
  { name: 'Tentang Kami', href: '/tentang-kami' },
  { name: 'Galeri', href: '/galeri' },
  { name: 'TJM Peduli', href: '/peduli' },
  { name: 'Promo', href: '/promo' },
  { name: 'News', href: '/news' }, // Menggantikan Blog dengan News
  { name: 'Partnership', href: '/partnership' },
  { name: 'TJM Group', href: '/group' },
];

const AnimatedNavLink = ({ href, children }) => {
  return (
    <Link
      href={href}
      className="relative inline-block h-5 overflow-hidden font-jakarta text-sm font-medium text-gray-300"
    >
      <motion.div
        className="flex flex-col"
        whileHover={{ y: '-50%' }}
        transition={{ duration: 0.3 }}
      >
        <span className="flex items-center h-5">{children}</span>
        <span className="flex items-center h-5 text-red-500">{children}</span>
      </motion.div>
    </Link>
  );
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/80 backdrop-blur-sm shadow-lg'
          : 'bg-black/80 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-[72px]">
          <Link href="/">
            <Image
              src="/logo/logotjm.webp"
              alt="TJM Auto Care Logo"
              width={120}
              height={40}
              className="object-contain"
            />
          </Link>

          {/* Jarak antar menu disesuaikan untuk mengakomodasi link baru */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <AnimatedNavLink key={link.name} href={link.href}>
                {link.name}
              </AnimatedNavLink>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link
              href="/kontak"
              className="bg-red-600 text-white font-jakarta font-bold text-sm px-6 py-2.5 transition-all duration-300 ease-in-out hover:bg-white hover:text-red-600 hover:-translate-y-1"
            >
              Hubungi Kami
            </Link>
          </div>

          <button
            className="lg:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  mobileMenuOpen
                    ? 'M6 18L18 6M6 6l12 12'
                    : 'M4 6h16M4 12h16m-7 6h7'
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-black/90 backdrop-blur-sm py-4">
          <nav className="flex flex-col items-center gap-4">
            {[...navLinks, { name: 'Kontak', href: '/kontak' }].map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-red-500 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
