"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/collections", label: "Collections" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Enquire" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isHome = pathname === "/";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || !isHome || menuOpen
          ? "bg-off-white/95 backdrop-blur-md border-b border-linen"
          : "bg-transparent"
      }`}
    >
      <div className="container-wide flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link
          href="/"
          className={`font-serif text-2xl tracking-[0.12em] font-medium transition-colors duration-300 ${
            scrolled || !isHome || menuOpen ? "text-bark" : "text-off-white"
          }`}
        >
          FORMA
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`label-text transition-colors duration-300 hover:text-terracotta ${
                scrolled || !isHome
                  ? "text-stone"
                  : "text-off-white/80 hover:text-off-white"
              } ${pathname === href ? "text-terracotta" : ""}`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-px w-6 transition-all duration-300 ${
              scrolled || !isHome || menuOpen ? "bg-bark" : "bg-off-white"
            } ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`}
          />
          <span
            className={`block h-px w-6 transition-all duration-300 ${
              scrolled || !isHome || menuOpen ? "bg-bark" : "bg-off-white"
            } ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-px w-6 transition-all duration-300 ${
              scrolled || !isHome || menuOpen ? "bg-bark" : "bg-off-white"
            } ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-64 border-t border-linen" : "max-h-0"
        }`}
      >
        <nav className="container-wide py-8 flex flex-col gap-6">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`font-serif text-3xl font-light tracking-wide text-bark hover:text-terracotta transition-colors ${
                pathname === href ? "text-terracotta" : ""
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
