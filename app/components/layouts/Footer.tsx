"use client";

import { personalInfo } from "@/app/data/data";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { label: "Facebook", href: personalInfo.facebook },
    { label: "Behance", href: personalInfo.behance },
  ].filter((link) => link.href);

  return (
    <footer className="bg-[#FDF5EF] px-6 lg:px-12 xl:px-20">
      <div className="max-w-6xl mx-auto border-t border-[#E3D9CC] py-6">
        <div className="relative flex items-center justify-between text-sm">
          {/* Left - Copyright */}
          <p className="text-[#8B7873]">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>

          {/* Center - Social Links, căn giữa tuyệt đối */}
          <div className="hidden sm:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8B7873] hover:text-[#4A3B36] transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right - Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-[#4A3B36] hover:text-[#8B5E63] transition-colors duration-300"
          >
            Back to top
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Social links — hiển thị riêng dòng dưới trên mobile */}
        <div className="flex sm:hidden items-center justify-center gap-6 mt-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#8B7873] hover:text-[#4A3B36] transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}