"use client";

import { motion, Variants } from "framer-motion";
import { Mail } from "lucide-react";
import { personalInfo, contactData } from "@/app/data/data";

// Animation variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

// Custom Facebook Icon
const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

// Custom Behance Icon
const BehanceIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 1.211.958 1.911 2.298 1.911 1.074 0 1.725-.468 2.007-1.086h2.451zM20.055 13c-.081-.96-.637-1.724-1.974-1.724-1.259 0-1.898.637-2.076 1.724h4.05zM9.089 21.231H1V5.977h8.089c2.54 0 4.141 1.345 4.141 3.623 0 1.554-.754 2.654-2.022 3.182v.039c1.619.394 2.559 1.689 2.559 3.461 0 2.601-1.907 4.949-4.678 4.949zm-1.008-9.808h-4.03v3.545h4.077c1.269 0 2.114-.726 2.114-1.897 0-1.087-.769-1.648-2.161-1.648zm-.241-5.408H4.051v3.199h3.751c1.137 0 1.958-.5 1.958-1.6 0-1.164-.847-1.599-1.92-1.599z" />
  </svg>
);

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-sky-200 via-sky-300 to-sky-400 p-12 md:p-16 shadow-2xl shadow-sky-400/20"
        >
          {/* Spotlight Effects */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-white/40 rounded-full blur-[100px] -translate-y-1/2" />
          <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-white/30 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-sky-400/40 rounded-full blur-[60px]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-sky-500/30 rounded-full blur-[80px]" />

          {/* Decorative Cards - Left */}
          <div className="absolute left-4 md:left-8 top-12 w-20 h-28 md:w-24 md:h-32 bg-white/20 backdrop-blur-sm rounded-2xl border border-white/30 rotate-[-8deg]" />
          <div className="absolute left-2 md:left-6 bottom-20 w-14 h-20 md:w-16 md:h-24 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 rotate-[5deg]" />

          {/* Decorative Cards - Right */}
          <div className="absolute right-4 md:right-8 top-16 w-18 h-26 md:w-22 md:h-30 bg-white/15 backdrop-blur-sm rounded-2xl border border-white/25 rotate-[10deg]" />
          <div className="absolute right-2 md:right-6 bottom-16 w-16 h-24 md:w-20 md:h-28 bg-white/20 backdrop-blur-sm rounded-2xl border border-white/30 rotate-[-6deg]" />

 {/* Content */}
          <div className="relative z-10 text-center">
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight"
            >
              {contactData.heading}
              <span className="block">{contactData.subheading}</span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-white/80 text-lg mb-10 max-w-xl mx-auto"
            >
              {contactData.description}
            </motion.p>

            {/* Email - Prominent Button */}
            <motion.div variants={scaleIn} className="mb-8">
              <a
                href={`mailto:${personalInfo.email}`}
                className="
                  inline-flex items-center gap-3
                  bg-white/20 backdrop-blur-md
                  border border-white/40
                  text-white
                  px-8 py-4
                  rounded-full
                  font-medium text-lg
                  shadow-lg shadow-white/10
                  hover:bg-white/30 hover:scale-105 hover:border-white/60
                  transition-all duration-300
                "
              >
                <Mail className="w-5 h-5" />
                {personalInfo.email}
              </a>
            </motion.div>

            {/* Social Links - Facebook & Behance */}
            <motion.div variants={fadeInUp} className="flex justify-center gap-4">
              <a
                href={personalInfo.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/40 backdrop-blur-sm border border-white/50 flex items-center justify-center text-white hover:bg-white/60 hover:scale-110 transition-all duration-300"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.behance}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/40 backdrop-blur-sm border border-white/50 flex items-center justify-center text-white hover:bg-white/60 hover:scale-110 transition-all duration-300"
                aria-label="Behance"
              >
                <BehanceIcon className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}