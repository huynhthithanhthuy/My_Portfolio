"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { fadeInUp, stagger } from "@/app/animations/animation";
import { personalInfo } from "@/app/data/data";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="space-y-8"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm"
          >
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm text-slate-600">
              Available for freelance
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-6xl md:text-7xl font-bold text-slate-900 leading-tight"
          >
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-2xl md:text-3xl text-slate-700 font-medium"
          >
            {personalInfo.role}
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto"
          >
            {personalInfo.tagline}
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-4 pt-4"
          >
            <a
              href="#works"
              className="group bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 flex items-center gap-2 shadow-lg shadow-slate-900/20"
            >
              View Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <button className="bg-white hover:bg-slate-50 text-slate-900 px-8 py-4 rounded-full font-medium transition-all duration-300 border border-slate-200 flex items-center gap-2">
              <Download className="w-5 h-5" />
              Download CV
            </button>
            <a
              href="#contact"
              className="bg-white hover:bg-slate-50 text-slate-900 px-8 py-4 rounded-full font-medium transition-all duration-300 border border-slate-200"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
