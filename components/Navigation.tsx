"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "Studio" },
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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-off-white/95 backdrop-blur-md border-b border-linen ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="container-wide flex items-center justify-between h-16 md:h-20">
        {/* Logo — always shown in its original form */}
        <Link href="/" aria-label="ADA Design" className="flex items-center h-10 md:h-12">
          <Image
            src="/ada-logo.jpg"
            alt="ADA Design"
            width={220}
            height={120}
            priority
            className="h-full w-auto mix-blend-multiply"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`label-text transition-colors duration-300 relative
                after:absolute after:bottom-0 after:left-0 after:h-px after:transition-all after:duration-300
                ${pathname === href
                  ? "text-terracotta after:w-full after:bg-terracotta"
                  : "text-stone hover:text-bark after:w-0 hover:after:w-full after:bg-bark"
                }`}
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
          <span className={`block h-px w-6 bg-bark transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block h-px w-6 bg-bark transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-px w-6 bg-bark transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
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
