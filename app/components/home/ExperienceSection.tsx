"use client";

import { motion, Variants } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experiences } from "@/app/data/data";

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
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ExperienceSection() {
  const exp = experiences[0];

  return (
    <section id="experience" className="relative py-24 px-6 lg:px-12 xl:px-20 bg-gradient-to-b from-white via-slate-50/50 to-white overflow-hidden">
      {/* Decorative Gradient Shapes */}
      <div className="absolute top-20 left-[5%] w-32 h-32 rounded-full bg-gradient-to-br from-sky-200/60 to-sky-300/40 blur-2xl" />
      <div className="absolute top-10 right-[15%] w-24 h-24 rounded-full bg-gradient-to-bl from-indigo-200/50 to-sky-200/40 blur-xl" />
      <div className="absolute top-1/2 -left-10 w-40 h-24 rounded-full bg-gradient-to-r from-sky-300/40 to-indigo-200/30 blur-2xl -rotate-12" />
      <div className="absolute top-[40%] right-[8%] w-20 h-20 rounded-full bg-gradient-to-tl from-sky-200/50 to-sky-100/40 blur-xl" />
      <div className="absolute bottom-32 left-[20%] w-28 h-28 rounded-full bg-gradient-to-tr from-indigo-200/40 to-sky-200/30 blur-2xl" />
      <div className="absolute bottom-10 right-[5%] w-48 h-32 rounded-full bg-gradient-to-l from-sky-200/50 to-indigo-100/40 blur-3xl rotate-12" />

      {/* Floating Dots */}
      <motion.div
        animate={{ y: [-10, 10, -10], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-40 left-[12%] w-4 h-4 rounded-full bg-sky-400/40"
      />
      <motion.div
        animate={{ y: [10, -10, 10], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-60 right-[20%] w-3 h-3 rounded-full bg-indigo-400/40"
      />
      <motion.div
        animate={{ y: [-8, 8, -8], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute bottom-40 left-[30%] w-5 h-5 rounded-full bg-sky-300/50"
      />
      <motion.div
        animate={{ y: [8, -8, 8], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute bottom-60 right-[25%] w-3 h-3 rounded-full bg-sky-400/30"
      />
      <motion.div
        animate={{ y: [-6, 6, -6], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-32 right-[35%] w-2 h-2 rounded-full bg-indigo-300/50"
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h3 className="text-2xl text-sky-500 font-medium mb-4">Journey</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Experience</h2>
        </motion.div>

        {/* Experience Card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={scaleIn}
        >
          <div className="bg-white rounded-2xl p-8 shadow-[0_8px_40px_rgba(56,189,248,0.1)] border border-slate-100">
            {/* Top - Header Row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
              {/* Left - Role & Company */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-400 to-sky-600 flex items-center justify-center shadow-lg shadow-sky-500/25">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900">{exp.role}</h4>
                  <p className="text-sky-600 font-medium">{exp.company}</p>
                </div>
              </div>

              {/* Right - Badges */}
              <div className="flex items-center gap-2">
                {exp.type && (
                  <span className="text-sm font-medium text-sky-600 bg-sky-50 px-4 py-1.5 rounded-full border border-sky-100">
                    {exp.type}
                  </span>
                )}
                <span className="text-sm text-slate-500 bg-slate-100 px-4 py-1.5 rounded-full">
                  {exp.period}
                </span>
              </div>
            </div>

            {/* Bottom - Description & Responsibilities */}
            <div className="pt-6">
              <p className="text-slate-600 leading-relaxed mb-6">
                {exp.description}
              </p>

              {/* Responsibilities */}
              {exp.responsibilities && exp.responsibilities.length > 0 && (
                <div>
                  <h5 className="text-md font-semibold text-slate-700 mb-3">Key Responsibilities</h5>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 flex-shrink-0" />
                        <span className="text-md text-slate-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}