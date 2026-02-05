import { Mail, Linkedin, Github } from "lucide-react";
import { personalInfo } from "@/app/data/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-slate-700">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
            <p className="text-sm text-slate-500 mt-1">
              Designed & built with ❤️ by me
            </p>
          </div>

          <div className="flex gap-6">
            <a
              href={personalInfo.linkedin}
              className="text-slate-600 hover:text-slate-900 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.github}
              className="text-slate-600 hover:text-slate-900 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-slate-600 hover:text-slate-900 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}