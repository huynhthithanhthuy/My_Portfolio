"use client";

import { motion } from "framer-motion";
import { fadeInUp, stagger, scaleIn } from "@/app/animations/animation";
import { designProcess } from "@/app/data/data";

export default function ProcessSection() {
  return (
    <section id="process" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2">
            Process
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            How I Work
          </h3>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A human-centered approach to solving design challenges
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="grid md:grid-cols-5 gap-6"
        >
          {designProcess.map((process, index) => (
            <motion.div key={index} variants={scaleIn} className="relative">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                <div className="text-4xl mb-4">{process.icon}</div>
                <div className="text-sm font-bold text-blue-600 mb-2">
                  {process.step}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">
                  {process.title}
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {process.description}
                </p>
              </div>
              {index < designProcess.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-slate-200" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
