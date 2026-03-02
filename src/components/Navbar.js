"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

// Data link navigasi baru dengan struktur dropdown
const navLinks = [
  { name: "Home", href: "/" },
  { name: "Layanan", href: "/layanan" },
  { name: "Promo", href: "/promo" },
  { name: "Galeri", href: "/galeri" },
  { name: "Blog", href: "/blog" },
  {
    name: "Tentang TJM",
    children: [
      { name: "Tentang Kami", href: "/tentang-kami" },
      { name: "TJM Peduli", href: "/peduli" },
      { name: "News", href: "/news" },
      { name: "Partnership", href: "/partnership" },
      // { name: "TJM Group", href: "/group" },
    ],
  },
];

const NavLink = ({ href, children, onClick }) => (
  <Link
    href={href}
    onClick={onClick}
    className="font-jakarta text-sm font-medium text-gray-300 hover:text-red-500 transition-colors duration-200"
  >
    {children}
  </Link>
);

const DropdownMenu = ({ name, children }) => {
  return (
    <div className="relative group">
      <button className="flex items-center gap-1 font-jakarta text-sm font-medium text-gray-300 group-hover:text-red-500 transition-colors duration-200">
        <span>{name}</span>
        <ChevronDown
          size={16}
          className="transition-transform duration-200 group-hover:rotate-180"
        />
      </button>
      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
        <ul className="w-48 bg-black border border-gray-800 shadow-lg">
          {children.map((child) => (
            <li key={child.name}>
              <Link
                href={child.href}
                className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-900 hover:text-red-500 transition-colors"
              >
                {child.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeAllMenus = () => {
    setMobileMenuOpen(false);
    setMobileDropdownOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-sm shadow-lg"
          : "bg-black/80 backdrop-blur-sm"
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

          {/* Navigasi Desktop */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
              link.children ? (
                <DropdownMenu key={link.name} name={link.name}>
                  {link.children}
                </DropdownMenu>
              ) : (
                <NavLink key={link.name} href={link.href}>
                  {link.name}
                </NavLink>
              ),
            )}
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
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16m-7 6h7"
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-black/90 backdrop-blur-sm">
          <nav className="flex flex-col items-center gap-2 py-4">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.name} className="text-center w-full">
                  <button
                    onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                    className="flex items-center justify-center gap-1 text-gray-300 hover:text-red-500 py-2 w-full"
                  >
                    {link.name}
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${
                        mobileDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {mobileDropdownOpen && (
                    <div className="flex flex-col items-center bg-gray-900/50 w-full">
                      {link.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="text-gray-400 hover:text-red-500 py-2 w-full"
                          onClick={closeAllMenus}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-red-500 py-2"
                  onClick={closeAllMenus}
                >
                  {link.name}
                </Link>
              ),
            )}
            <Link
              href="/kontak"
              className="text-gray-300 hover:text-red-500 py-2"
              onClick={closeAllMenus}
            >
              Kontak
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
