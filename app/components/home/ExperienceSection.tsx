"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { fadeInUp, stagger } from "@/app/animations/animation";
import { experiences } from "@/app/data/data";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2">
            Journey
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Experience
          </h3>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="space-y-6"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <h4 className="text-xl font-bold text-slate-900">{exp.role}</h4>
                <span className="text-sm text-slate-500 mt-1 md:mt-0">
                  {exp.period}
                </span>
              </div>
              <p className="text-blue-600 font-medium mb-2">{exp.company}</p>
              <p className="text-slate-600">{exp.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mt-12"
        >
          <button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-lg flex items-center gap-2 mx-auto">
            <Download className="w-5 h-5" />
            Download Full CV
          </button>
        </motion.div>
      </div>
    </section>
  );
}
