"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { personalInfo } from "@/app/data/data";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Project", href: "/project" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FDF5EF] border-b border-[#4A3B36]/15 overflow-hidden">
      {/* Paper texture — đồng bộ với Hero để không lộ đường ranh giới */}
      <div
        className="absolute inset-0 opacity-45 pointer-events-none"
        style={{
          backgroundImage: `url('/images/paper-texture.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 xl:px-20">
        <div className="flex items-center justify-between h-20">
          {/* Logo (Left) */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity z-10">
            <div className="relative w-10 h-10 rounded-full overflow-hidden">
              <Image src="/images/Logo.png" alt={`${personalInfo.name} Logo`} fill className="object-cover" />
            </div>
            <span className="text-xl italic text-[#6B4A3F]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              {personalInfo.name}
            </span>
          </Link>

          {/* Nav Links — Căn giữa */}
          <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  className={`text-base font-semibold tracking-[0.2em] uppercase transition-colors duration-300 ${isActive ? "text-[#C97B93]" : "text-[#C97B93]/60 hover:text-[#C97B93]"
                    }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Social Links (Right) */}
          <div className="flex items-center gap-1 z-10">

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:opacity-80 transition-opacity flex items-center p-1"
            >
              <Image
                src="/images/linkedin.png"
                alt="LinkedIn"
                width={24}
                height={24}
                className="w-8 h-8 object-contain"
              />
            </a>
            <a
              href={personalInfo.behance}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Behance"
              className="hover:opacity-80 transition-opacity flex items-center p-1"
            >
              <Image
                src="/images/behance.png"
                alt="Behance"
                width={24}
                height={24}
                className="w-8 h-8 object-contain"
              />
            </a>

            {/* Mobile toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-full text-[#C97B93] hover:bg-[#F3C9CE]/25 transition-all duration-300 ml-1"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>


          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`relative md:hidden overflow-hidden transition-all duration-300 ease-out ${isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="px-6 pb-6 pt-2 bg-[#FDF5EF]">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  className={`text-sm font-semibold tracking-[0.2em] uppercase px-4 py-3 rounded-xl transition-all duration-200 text-left ${isActive ? "text-[#C97B93] bg-[#F3C9CE]/40" : "text-[#C97B93]/60 hover:text-[#C97B93] hover:bg-[#F3C9CE]/25"
                    }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}