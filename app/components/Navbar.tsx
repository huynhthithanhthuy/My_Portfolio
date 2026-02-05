'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50 
        transition-all duration-500 ease-out
        ${isScrolled 
          ? 'bg-white/80 backdrop-blur-xl shadow-lg shadow-black/5' 
          : 'bg-transparent'
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 xl:px-20">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Left */}
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <div className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all duration-500 ${
              isScrolled 
                ? 'bg-slate-900 shadow-slate-500/20' 
                : 'bg-white/20 backdrop-blur-sm shadow-white/20'
            }`}>
              <span className="text-white text-base font-bold">T</span>
            </div>
            <span className={`font-semibold text-base tracking-tight transition-colors duration-500 ${
              isScrolled ? 'text-slate-700' : 'text-white'
            }`}>
              Thanh Thuy
            </span>
          </button>

          {/* Desktop Navigation - Right */}
          <div className="hidden md:flex items-center gap-1">
            <button
              onClick={() => scrollToSection('about')}
              className={`text-sm font-medium px-4 py-2 rounded-full transition-all duration-300 ${
                isScrolled 
                  ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-900/5' 
                  : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('works')}
              className={`text-sm font-medium px-4 py-2 rounded-full transition-all duration-300 ${
                isScrolled 
                  ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-900/5' 
                  : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}
            >
              Works
            </button>
            <button
              onClick={() => scrollToSection('process')}
              className={`text-sm font-medium px-4 py-2 rounded-full transition-all duration-300 ${
                isScrolled 
                  ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-900/5' 
                  : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}
            >
              Process
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className={`text-sm font-medium px-4 py-2 rounded-full transition-all duration-300 ${
                isScrolled 
                  ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-900/5' 
                  : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}
            >
              Skills
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2.5 rounded-full transition-all duration-300 ${
              isScrolled 
                ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-900/5' 
                : 'text-white/90 hover:text-white hover:bg-white/10'
            }`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-300 ease-out
          ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <div className={`px-6 pb-6 pt-2 ${
          isScrolled 
            ? 'bg-white/80 backdrop-blur-xl' 
            : 'bg-slate-900/90 backdrop-blur-xl'
        }`}>
          <div className="flex flex-col gap-1">
            <button
              onClick={() => scrollToSection('about')}
              className={`text-sm font-medium px-4 py-3 rounded-xl transition-all duration-200 text-left ${
                isScrolled 
                  ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-100' 
                  : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('works')}
              className={`text-sm font-medium px-4 py-3 rounded-xl transition-all duration-200 text-left ${
                isScrolled 
                  ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-100' 
                  : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}
            >
              Works
            </button>
            <button
              onClick={() => scrollToSection('process')}
              className={`text-sm font-medium px-4 py-3 rounded-xl transition-all duration-200 text-left ${
                isScrolled 
                  ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-100' 
                  : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}
            >
              Process
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className={`text-sm font-medium px-4 py-3 rounded-xl transition-all duration-200 text-left ${
                isScrolled 
                  ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-100' 
                  : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`text-sm font-semibold px-4 py-3 rounded-xl transition-all duration-200 mt-2 ${
                isScrolled 
                  ? 'bg-slate-900 text-white hover:bg-slate-800' 
                  : 'bg-white text-slate-900 hover:bg-white/90'
              }`}
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}