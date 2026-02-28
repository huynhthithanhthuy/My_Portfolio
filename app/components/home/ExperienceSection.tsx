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
    <section id="experience" className="relative py-12 px-6 lg:px-12 xl:px-20 bg-gradient-to-b from-white via-slate-50/50 to-white overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute top-20 left-[8%] w-40 h-40 rounded-full bg-gradient-to-br from-sky-200/40 to-sky-300/20 blur-3xl" />
      <div className="absolute bottom-20 right-[10%] w-48 h-48 rounded-full bg-gradient-to-tl from-indigo-200/30 to-sky-200/20 blur-3xl" />

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
                  <h5 className="text-sm font-semibold text-slate-700 mb-3">Key Responsibilities</h5>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 flex-shrink-0" />
                        <span className="text-sm text-slate-600">{item}</span>
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