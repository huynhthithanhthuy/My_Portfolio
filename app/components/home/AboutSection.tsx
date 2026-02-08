"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { GraduationCap, Sparkles } from "lucide-react";
import { aboutData } from "@/app/data/data";

// Animation variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger: Variants = {
  visible: { transition: { staggerChildren: 0.15 } },
};

// Icon mapping
const iconMap = {
  GraduationCap,
  Sparkles,
};

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 px-6 lg:px-12 xl:px-20 bg-white overflow-hidden">
      {/* Decorative Gradient Blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-sky-100/60 via-sky-50/40 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-100/40 via-sky-50/30 to-transparent rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Left - Profile Image */}
          <motion.div variants={fadeInLeft} className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-sky-100 via-white to-indigo-50 rounded-[2rem] -rotate-2" />
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl shadow-slate-200/60">
              <Image
                src={aboutData.image}
                alt={aboutData.imageAlt}
                fill
                priority
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Right - Text Content */}
          <motion.div variants={fadeInRight} className="space-y-6">
            <h3 className="text-sky-500 font-medium text-2xl">{aboutData.sectionLabel}</h3>

            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 leading-snug">
              {aboutData.heading}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-500">
                {aboutData.headingAccent}
              </span>
            </h2>

            <div className="space-y-4 text-slate-600 leading-relaxed text-justify">
              {aboutData.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Quick Info */}
            <div className="flex flex-wrap gap-3 pt-2">
              {aboutData.quickInfo.map((item, index) => {
                const IconComponent = iconMap[item.icon as keyof typeof iconMap];
                return (
                  <div
                    key={index}
                    className="inline-flex items-center gap-2 bg-slate-50 rounded-full px-4 py-2 text-sm text-slate-600 border border-slate-100"
                  >
                    <IconComponent className="w-4 h-4 text-sky-500" />
                    <span>{item.label}</span>
                  </div>
                );
              })}
            </div>

            {/* Quote */}
            <motion.div
              variants={fadeInUp}
              className="relative pl-6 border-l-2 border-sky-500/50"
            >
              <p className="text-slate-500 italic">&quot;{aboutData.quote}&quot;</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}