'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Phone, Menu, X } from 'lucide-react';
// Mengimpor langsung dari servicesData
import { servicesData } from '@/data/servicesData';

// Komponen untuk link dengan animasi slide
const AnimatedNavLink = ({ href, children, onClick }) => (
  <Link
    href={href}
    onClick={onClick}
    className="relative inline-block h-5 overflow-hidden font-jakarta text-sm font-medium group"
  >
    <span className="flex flex-col transition-transform duration-300 ease-in-out group-hover:-translate-y-1/2">
      <span className="flex items-center h-5 text-gray-300">{children}</span>
      <span className="flex items-center h-5 text-red-500">{children}</span>
    </span>
  </Link>
);

// Komponen dropdown untuk services
const ServicesDropdown = ({ isVisible, onItemClick }) => (
  <div
    className={`absolute top-full left-1/2 -translate-x-1/2 w-64 bg-[#111] border border-gray-800 shadow-lg transition-all duration-300 pt-4 -mt-2 ${
      isVisible
        ? 'opacity-100 visible transform translate-y-0'
        : 'opacity-0 invisible transform -translate-y-2'
    }`}
  >
    <div className="py-2 bg-[#111] rounded-md">
      {/* Langsung mapping dari servicesData */}
      {servicesData.map((service, index) => (
        <Link
          key={`service-${index}`}
          href={service.href || '#'}
          onClick={onItemClick}
          className="block px-4 py-2 font-jakarta text-sm text-gray-300 hover:bg-gray-800 hover:text-red-500 transition-colors duration-200"
        >
          {service.title}
        </Link>
      ))}
    </div>
  </div>
);

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const dropdownRef = useRef(null);
  const servicesButtonRef = useRef(null);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === 'Escape') {
        if (isMenuOpen) closeMenu();
        if (isServicesOpen) setIsServicesOpen(false);
      }
    },
    [isMenuOpen, isServicesOpen, closeMenu]
  );

  const handleClickOutside = useCallback((event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsServicesOpen(false);
    }
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen, handleKeyDown, handleClickOutside]);

  const navigationItems = [
    { label: 'Beranda', href: '/' },
    { label: 'Tentang Kami', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Kontak', href: '/contact' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <Link
            href="/"
            className="flex items-center focus:outline-none focus:ring-2 focus:ring-red-500 rounded"
          >
            <Image
              src="/logo/logotjm.webp"
              alt="TJM Auto Care Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            <AnimatedNavLink href="/">Beranda</AnimatedNavLink>
            <div className="relative" ref={dropdownRef}>
              <button
                ref={servicesButtonRef}
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
                className="flex items-center gap-1 py-4 focus:outline-none focus:ring-2 focus:ring-red-500 rounded group"
              >
                <AnimatedNavLink href="/layanan">Layanan</AnimatedNavLink>
                <ChevronDown
                  size={16}
                  className={`text-gray-300 transition-all duration-300 ${
                    isServicesOpen
                      ? 'rotate-180 text-red-500'
                      : 'group-hover:text-red-500'
                  }`}
                />
              </button>
              <div
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <ServicesDropdown
                  isVisible={isServicesOpen}
                  onItemClick={() => setIsServicesOpen(false)}
                />
              </div>
            </div>
            {navigationItems.slice(1).map((item) => (
              <AnimatedNavLink key={item.label} href={item.href}>
                {item.label}
              </AnimatedNavLink>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="tel:+62123456789"
              className="hidden sm:flex items-center gap-2 bg-red-600 text-white font-bold text-sm px-6 py-2.5 rounded transition-all duration-300 hover:bg-white hover:text-red-600 hover:-translate-y-1"
            >
              <Phone size={16} />
              Hubungi Kami
            </a>
            <button
              className="lg:hidden text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-black z-50 flex flex-col lg:hidden">
          <div className="flex items-center justify-between p-4 border-b border-gray-800">
            <Link
              href="/"
              onClick={closeMenu}
              className="focus:outline-none focus:ring-2 focus:ring-red-500 rounded"
            >
              <Image
                src="/logo/logotjm.webp"
                alt="TJM Auto Care"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <button
              onClick={closeMenu}
              className="text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-col items-center justify-center flex-grow gap-8 text-xl">
            {navigationItems.map((item) => (
              <Link
                key={`mobile-${item.label}`}
                href={item.href}
                onClick={closeMenu}
                className="font-jakarta font-medium text-gray-300 hover:text-red-500"
              >
                {item.label}
              </Link>
            ))}
            <div className="text-center">
              <h3 className="font-jakarta font-medium text-gray-300 mb-4">
                Layanan Kami
              </h3>
              <div className="flex flex-col gap-3">
                {/* Langsung mapping dari servicesData */}
                {servicesData.map((service, index) => (
                  <Link
                    key={`mobile-service-${index}`}
                    href={service.href || '#'}
                    onClick={closeMenu}
                    className="font-jakarta text-sm text-gray-400 hover:text-red-500"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>
            <a
              href="tel:+62123456789"
              onClick={closeMenu}
              className="flex items-center gap-2 bg-red-600 text-white font-bold text-sm px-6 py-3 rounded mt-8"
            >
              <Phone size={16} />
              Hubungi Kami
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
