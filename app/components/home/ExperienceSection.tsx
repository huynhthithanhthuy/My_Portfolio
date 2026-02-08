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

const staggerContainer: Variants = {
  visible: {
    transition: { staggerChildren: 0.2 },
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
  return (
    <section id="experience" className="relative py-12 px-6 lg:px-12 xl:px-20 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-100/80 to-white" />

      {/* Decorative Gradient Shapes */}
      <div className="absolute top-20 left-[8%] w-40 h-40 rounded-full bg-gradient-to-br from-sky-200/40 to-sky-300/20 blur-3xl" />
      <div className="absolute top-32 right-[12%] w-32 h-32 rounded-full bg-gradient-to-bl from-indigo-200/30 to-sky-200/20 blur-2xl" />
      <div className="absolute bottom-20 left-[15%] w-28 h-28 rounded-full bg-gradient-to-tr from-sky-100/40 to-indigo-100/20 blur-2xl" />
      <div className="absolute bottom-32 right-[8%] w-36 h-36 rounded-full bg-gradient-to-tl from-indigo-200/20 to-sky-100/10 blur-3xl" />

      {/* Floating Dots */}
      <motion.div
        animate={{ y: [-8, 8, -8], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 left-[20%] w-3 h-3 rounded-full bg-sky-400/30"
      />
      <motion.div
        animate={{ y: [8, -8, 8], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-48 right-[25%] w-2 h-2 rounded-full bg-indigo-400/30"
      />
      <motion.div
        animate={{ y: [-6, 6, -6], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute bottom-40 left-[30%] w-4 h-4 rounded-full bg-sky-300/40"
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h3 className="text-2xl text-sky-500 font-medium mb-4">Journey</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Experience
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">
            My professional journey in design
          </p>
        </motion.div>

        {/* Experience Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="space-y-8"
        >
          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              variants={scaleIn}
              className="group"
            >
              <div
                className="
                  relative p-[2px] rounded-3xl
                  bg-gradient-to-br from-sky-100 via-white to-indigo-100
                  shadow-[0_8px_32px_rgba(56,189,248,0.12),0_4px_16px_rgba(99,102,241,0.08)]
                  group-hover:shadow-[0_16px_48px_rgba(56,189,248,0.18),0_8px_24px_rgba(99,102,241,0.12)]
                  transition-all duration-500
                "
              >
                {/* Shimmer Effect */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden">
                  <div
                    className="
                      absolute inset-0
                      bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.8)_50%,transparent_100%)]
                      translate-x-[-100%]
                      group-hover:translate-x-[100%]
                      transition-transform duration-1000 ease-in-out
                    "
                  />
                </div>

                {/* Inner Content */}
                <div className="relative rounded-[22px] p-8 bg-white">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-400 to-sky-600 flex items-center justify-center shadow-lg shadow-sky-500/30">
                        <Briefcase className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-slate-900">{exp.role}</h4>
                        <p className="text-sky-600 font-medium">{exp.company}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {exp.type && (
                        <span className="text-sm text-slate-500 bg-slate-100 px-3 py-1.5 rounded-full">
                          {exp.type}
                        </span>
                      )}
                      <span className="text-sm text-slate-500 bg-slate-100 px-4 py-2 rounded-full whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 leading-relaxed mb-6 text-justify">
                    {exp.description}
                  </p>

                  {/* Responsibilities */}
                  {exp.responsibilities && exp.responsibilities.length > 0 && (
                    <div className="mb-6">
                      <h5 className="text-sm font-semibold text-slate-700 mb-3">Key Responsibilities:</h5>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((responsibility, index) => (
                          <li key={index} className="flex items-start gap-2 text-slate-600">
                            <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 flex-shrink-0" />
                            <span className="text-sm leading-relaxed">{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Technologies */}
                  {exp.technologies && exp.technologies.length > 0 && (
                    <div>
                      <h5 className="text-sm font-semibold text-slate-700 mb-3">Tools & Technologies:</h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="text-xs text-slate-600 bg-slate-100 px-3 py-1.5 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}