"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
] as const;

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // ✅ CLEAN ACTIVE LINK LOGIC
  const isActiveLink = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <>
      {/* NAVBAR */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 h-[70px] flex items-center justify-between px-6 md:px-10 border-b border-amber-900/20 transition-all duration-300 ${
          scrolled
            ? "bg-[#0e0b07]/90 backdrop-blur-2xl"
            : "bg-[#0e0b07]/50 backdrop-blur-xl"
        }`}
      >
        {/* Logo */}
        <Link
          href="/"
          onClick={() => setMobileOpen(false)}
          className="flex items-center gap-3 group"
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-sm font-semibold text-amber-950 shadow-lg shadow-amber-900/40 ring-1 ring-amber-400/30 shrink-0">
            BH
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-serif text-[17px] font-semibold text-amber-100 tracking-wide">
              Brew Haven
            </span>
            <span className="text-[10px] font-light text-amber-600/60 tracking-[0.18em] uppercase mt-0.5">
              Est. 2026 · Café
            </span>
          </div>
        </Link>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative px-4 py-2 text-[13px] uppercase tracking-widest transition-colors duration-200 group ${
                isActiveLink(item.href)
                  ? "text-amber-100"
                  : "text-amber-200/60 hover:text-amber-100"
              }`}
            >
              {item.label}
              <span
                className={`absolute bottom-1 left-4 right-4 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent transition-transform duration-300 ${
                  isActiveLink(item.href)
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-amber-600 to-amber-500 text-amber-950 text-[13px] font-medium uppercase tracking-wider rounded-md shadow-lg shadow-amber-900/30 hover:-translate-y-0.5 hover:shadow-amber-900/50 transition-all duration-200"
        >
          Reserve a Table
        </Link>

        {/* Hamburger */}
        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
          className="md:hidden flex flex-col gap-[5px] p-2 rounded-md hover:bg-amber-900/20 transition-colors"
        >
          <span
            className={`block w-[22px] h-[1.5px] bg-amber-400 rounded transition-transform duration-300 ${
              mobileOpen ? "translate-y-[6.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`block w-[22px] h-[1.5px] bg-amber-400 rounded transition-all duration-300 ${
              mobileOpen ? "opacity-0 scale-x-0" : ""
            }`}
          />
          <span
            className={`block w-[22px] h-[1.5px] bg-amber-400 rounded transition-transform duration-300 ${
              mobileOpen ? "-translate-y-[6.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </header>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          onClick={() => setMobileOpen(false)}
        >
          <div
            className="absolute top-[70px] left-0 right-0 bottom-0 bg-[#0c0905]/98 backdrop-blur-2xl border-t border-amber-900/20 flex flex-col px-6 pt-4 pb-8"
            onClick={(e) => e.stopPropagation()}
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`py-4 text-sm uppercase tracking-[0.12em] border-b border-amber-900/20 ${
                  isActiveLink(item.href)
                    ? "text-amber-100"
                    : "text-amber-200/70 hover:text-amber-100"
                }`}
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-6 py-4 bg-gradient-to-r from-amber-600 to-amber-500 text-amber-950 text-sm font-medium uppercase tracking-wider rounded-md text-center shadow-lg shadow-amber-900/30"
            >
              Reserve a Table
            </Link>
          </div>
        </div>
      )}
    </>
  );
}