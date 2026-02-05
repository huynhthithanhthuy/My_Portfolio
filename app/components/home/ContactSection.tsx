"use client";

import { motion, Variants } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";
import { personalInfo } from "@/app/data/data";

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

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-sky-200 via-sky-300 to-sky-400 p-12 md:p-16 shadow-2xl shadow-sky-400/20"
        >
          {/* Spotlight / Light beam effects */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-white/40 rounded-full blur-[100px] -translate-y-1/2" />
          <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-white/30 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-sky-400/40 rounded-full blur-[60px]" />
          
          {/* Darker areas for contrast */}
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-sky-500/30 rounded-full blur-[80px]" />
          <div className="absolute top-1/2 right-0 w-64 h-64 bg-sky-500/20 rounded-full blur-[70px]" />

          {/* Left Side Cards - Random positions */}
          <div className="absolute left-4 md:left-8 top-12 w-20 h-28 md:w-24 md:h-32 bg-white/20 backdrop-blur-sm rounded-2xl border border-white/30 rotate-[-8deg]" />
          <div className="absolute left-12 md:left-20 bottom-16 w-16 h-24 md:w-20 md:h-28 bg-white/15 backdrop-blur-sm rounded-2xl border border-white/25 rotate-[5deg]" />
          <div className="absolute left-2 md:left-6 top-1/2 w-14 h-20 md:w-16 md:h-24 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 rotate-[-3deg]" />

          {/* Right Side Cards - Random positions */}
          <div className="absolute right-4 md:right-8 top-16 w-18 h-26 md:w-22 md:h-30 bg-white/15 backdrop-blur-sm rounded-2xl border border-white/25 rotate-[10deg]" />
          <div className="absolute right-10 md:right-16 bottom-12 w-20 h-28 md:w-24 md:h-32 bg-white/20 backdrop-blur-sm rounded-2xl border border-white/30 rotate-[-6deg]" />
          <div className="absolute right-2 md:right-4 top-1/3 w-12 h-18 md:w-14 md:h-20 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 rotate-[4deg]" />

          {/* Content */}
          <div className="relative z-10 text-center">
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight"
            >
              Let&apos;s build something
              <span className="block">meaningful together</span>
            </motion.h2>
            
            <motion.p
              variants={fadeInUp}
              className="text-white/80 text-lg mb-10 max-w-xl mx-auto"
            >
              I&apos;m always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </motion.p>

            {/* Email Pill Button */}
            <motion.div variants={scaleIn} className="flex justify-center mb-10">
              <a
                href={`mailto:${personalInfo.email}`}
                className="
                  inline-flex items-center gap-3
                  bg-slate-800/90 backdrop-blur-sm
                  pl-6 pr-2 py-2
                  rounded-full
                  shadow-xl shadow-black/20
                  hover:bg-slate-800 hover:scale-105
                  transition-all duration-300
                  group
                "
              >
                <span className="text-white/70 text-sm md:text-base">{personalInfo.email}</span>
                <span className="bg-white text-slate-800 px-4 py-2 rounded-full font-medium text-sm flex items-center gap-2 group-hover:bg-sky-50 transition-colors">
                  <Mail className="w-4 h-4" />
                  Contact
                </span>
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={fadeInUp} className="flex justify-center gap-4">
              <a
                href={personalInfo.linkedin}
                className="w-12 h-12 rounded-full bg-white/30 backdrop-blur-sm border border-white/40 flex items-center justify-center text-slate-700 hover:bg-white/50 hover:scale-110 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.github}
                className="w-12 h-12 rounded-full bg-white/30 backdrop-blur-sm border border-white/40 flex items-center justify-center text-slate-700 hover:bg-white/50 hover:scale-110 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="w-12 h-12 rounded-full bg-white/30 backdrop-blur-sm border border-white/40 flex items-center justify-center text-slate-700 hover:bg-white/50 hover:scale-110 transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}