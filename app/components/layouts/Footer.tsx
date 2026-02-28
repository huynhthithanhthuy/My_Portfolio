import Image from "next/image";
import { personalInfo } from "@/app/data/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-100 py-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          {/* Left - Logo & Name */}
          <div className="flex items-center gap-3">
            <Image
              src="/images/Logo.png"
              alt="Logo"
              width={32}
              height={32}
              className="object-contain"
            />
            <span className="text-slate-900 font-medium">{personalInfo.name}</span>
          </div>

          {/* Right - Copyright */}
          <p className="text-slate-500 text-sm">
            © {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}