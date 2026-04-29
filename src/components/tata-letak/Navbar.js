"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Beranda", href: "/" },
  { name: "Layanan", href: "/layanan" },
  { name: "Promo", href: "/promo" },
  { name: "Galeri", href: "/galeri" },
  { name: "Artikel", href: "/blog" },
  {
    name: "Tentang TJM",
    children: [
      { name: "Tentang Kami", href: "/tentang-kami" },
      { name: "TJM Peduli", href: "/peduli" },
      { name: "Berita", href: "/berita" },
      { name: "Kemitraan", href: "/kemitraan" },
    ],
  },
];

const DesktopNavLink = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} className="relative group px-1 py-2 overflow-hidden">
      <span
        className={`relative z-10 font-jakarta text-[15px] font-bold uppercase tracking-wider transition-colors duration-300 ${
          isActive ? "text-red-600" : "text-gray-300 group-hover:text-white"
        }`}
      >
        {children}
      </span>
      {/* Hover Line */}
      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-red-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
      {/* Active Line */}
      {isActive && (
        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-red-600" />
      )}
    </Link>
  );
};

const DesktopDropdownMenu = ({ name, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isActive = children.some((child) => pathname === child.href);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="relative group px-1 py-2 overflow-hidden flex items-center gap-1.5 cursor-pointer">
        <span
          className={`relative z-10 font-jakarta text-[15px] font-bold uppercase tracking-wider transition-colors duration-300 ${
            isActive || isOpen
              ? "text-red-600"
              : "text-gray-300 group-hover:text-white"
          }`}
        >
          {name}
        </span>
        <ChevronDown
          size={16}
          className={`relative z-10 transition-transform duration-300 ${
            isOpen
              ? "rotate-180 text-red-600"
              : "text-gray-300 group-hover:text-white"
          }`}
        />
        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-red-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
        {(isActive || isOpen) && (
          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-red-600" />
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full left-0 mt-4 min-w-[220px]"
          >
            <div className="relative bg-black border border-zinc-800 shadow-2xl flex flex-col p-2 gap-1 overflow-hidden">
              {/* Glossy overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />

              {children.map((child, index) => (
                <motion.div
                  key={child.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={child.href}
                    className={`block px-4 py-2.5 font-jakarta text-sm font-bold uppercase tracking-wide transition-all duration-300 ${
                      pathname === child.href
                        ? "text-red-500 bg-red-950/30"
                        : "text-gray-400 hover:text-white hover:bg-zinc-900 hover:pl-6"
                    }`}
                  >
                    {child.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const MobileMenu = ({ isOpen, onClose }) => {
  const [openDropdowns, setOpenDropdowns] = useState({});
  const pathname = usePathname();

  const toggleDropdown = (name) => {
    setOpenDropdowns((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] lg:hidden"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-[85%] max-w-[400px] bg-zinc-950 border-l border-red-900/30 z-[70] lg:hidden flex flex-col overflow-y-auto"
          >
            <div className="flex items-center justify-between p-6 border-b border-red-900/30 bg-zinc-900/50">
              <span className="font-teko text-2xl font-bold tracking-wider text-white uppercase">
                Menu Utama
              </span>
              <button
                onClick={onClose}
                className="p-2 text-gray-400 hover:text-white hover:bg-red-600/20 rounded-md transition-colors"
                aria-label="Tutup menu"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 py-6 px-4 flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  {link.children ? (
                    <div className="flex flex-col border border-zinc-800/50 bg-zinc-900/20">
                      <button
                        onClick={() => toggleDropdown(link.name)}
                        className="flex items-center justify-between p-4 w-full"
                      >
                        <span className="font-jakarta text-[15px] font-bold uppercase tracking-wider text-gray-200">
                          {link.name}
                        </span>
                        <ChevronDown
                          size={18}
                          className={`text-gray-400 transition-transform duration-300 ${
                            openDropdowns[link.name]
                              ? "rotate-180 text-red-500"
                              : ""
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {openDropdowns[link.name] && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden bg-black/40 border-t border-zinc-800/50"
                          >
                            <div className="p-2 flex flex-col gap-1">
                              {link.children.map((child) => (
                                <Link
                                  key={child.name}
                                  href={child.href}
                                  onClick={onClose}
                                  className={`block p-3 font-jakarta text-sm font-bold uppercase tracking-wide transition-colors ${
                                    pathname === child.href
                                      ? "text-red-500 bg-red-950/30 border-l-2 border-red-500"
                                      : "text-gray-400 hover:text-white hover:bg-zinc-800/50 pl-4 hover:pl-6 border-l-2 border-transparent"
                                  }`}
                                >
                                  {child.name}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className={`block p-4 border transition-all duration-300 ${
                        pathname === link.href
                          ? "border-red-600/50 bg-red-950/20 text-white"
                          : "border-zinc-800/50 bg-zinc-900/20 text-gray-300 hover:border-zinc-700 hover:bg-zinc-800"
                      }`}
                    >
                      <span className="font-jakarta text-[15px] font-bold uppercase tracking-wider">
                        {link.name}
                      </span>
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>

            <div className="p-6 mt-auto border-t border-red-900/30 bg-zinc-900/50">
              <Link
                href="/kontak"
                onClick={onClose}
                className="w-full relative group overflow-hidden bg-red-600 block text-center"
              >
                <div className="absolute inset-0 w-0 bg-white transition-all duration-[250ms] ease-out group-hover:w-full" />
                <span className="relative font-jakarta text-sm font-bold uppercase tracking-wider text-white group-hover:text-red-600 px-6 py-4 block">
                  HUBUNGI KAMI SEKARANG
                </span>
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out py-5 ${
          scrolled
            ? "bg-black/95 backdrop-blur-lg shadow-lg"
            : "bg-gradient-to-b from-black to-transparent"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo area */}
            <Link href="/" className="relative z-10 flex items-center group">
              <div className="relative overflow-hidden w-[120px] lg:w-[150px] h-[40px] lg:h-[48px]">
                <Image
                  src="/logo/logotjm.webp"
                  alt="TJM Auto Care Logo"
                  fill
                  className="object-contain transform group-hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
              {navLinks.map((link) =>
                link.children ? (
                  <DesktopDropdownMenu key={link.name} name={link.name}>
                    {link.children}
                  </DesktopDropdownMenu>
                ) : (
                  <DesktopNavLink key={link.name} href={link.href}>
                    {link.name}
                  </DesktopNavLink>
                ),
              )}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:block relative">
              <Link
                href="/kontak"
                className="relative group overflow-hidden bg-red-600 block shadow-[0_0_20px_rgba(220,38,38,0.2)] hover:shadow-[0_0_25px_rgba(220,38,38,0.5)] transition-all duration-300 rounded-sm"
              >
                <div className="absolute inset-0 w-full h-full bg-white origin-left transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                <span className="relative z-10 font-jakarta text-[13px] font-bold uppercase tracking-widest text-white group-hover:text-red-700 px-8 py-3.5 block text-center transition-colors">
                  HUBUNGI KAMI
                </span>
              </Link>
            </div>

            {/* Mobile Toggle Button */}
            <button
              className="lg:hidden relative z-10 p-2 text-white bg-zinc-900 border border-zinc-800 rounded hover:bg-zinc-800 hover:text-red-500 transition-colors"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Buka menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
