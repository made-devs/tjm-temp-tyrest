"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Phone, Menu } from "lucide-react";

const NavLink = ({ href, children, hasDropdown = false, isActive = false }) => (
  <a
    href={href}
    className={`flex items-center gap-1 font-jakarta text-sm font-medium transition-colors ${
      isActive ? "text-red-500" : "text-gray-300 hover:text-red-500"
    }`}
  >
    {children}
    {hasDropdown && <ChevronDown size={16} />}
  </a>
);

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Bagian Logo */}
        <Link href="/" className="flex items-center">
          {/* Hanya menampilkan logo, teks dihapus */}
          <Image
            src="/logo/logotjm.webp"
            alt="TJM Auto Care Logo"
            width={120} // Ukuran diperbesar agar lebih jelas
            height={40}
            className="h-10 w-auto" // Tinggi tetap, lebar otomatis
          />
        </Link>

        {/* Bagian Navigasi (Desktop) */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink href="#" isActive={true}>
            Home
          </NavLink>
          <NavLink href="#">About Us</NavLink>
          <NavLink href="#">Services</NavLink>
          <NavLink href="#" hasDropdown>
            Page
          </NavLink>
          <NavLink href="#" hasDropdown>
            Blog
          </NavLink>
          <NavLink href="#">Contact Us</NavLink>
        </nav>

        {/* Tombol CTA & Menu Mobile */}
        <div className="flex items-center gap-4">
          <a
            href="tel:+62123456789"
            className="hidden sm:flex items-center gap-2 bg-red-600 text-white font-jakarta font-bold text-sm px-6 py-2.5 transition-all duration-300 ease-in-out hover:bg-white hover:text-red-600 hover:-translate-y-1"
          >
            <Phone size={16} />
            Contact Us
          </a>
          <button className="md:hidden text-white">
            <Menu size={28} />
          </button>
        </div>
      </div>
    </header>
  );
}
