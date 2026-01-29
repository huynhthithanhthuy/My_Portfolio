"use client";

import { motion } from "framer-motion";
import { fadeInUp, stagger, scaleIn } from "@/app/animations/animation";
import { skills, tools } from "@/app/data/data";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2">
            Expertise
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Skills & Tools
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Skills */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <h4 className="text-2xl font-bold text-slate-900 mb-6">Skills</h4>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-slate-700">
                      {skill.name}
                    </span>
                    <span className="text-slate-500">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                      className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tools */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <h4 className="text-2xl font-bold text-slate-900 mb-6">Tools</h4>
            <div className="grid grid-cols-2 gap-4">
              {tools.map((tool, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ scale: 1.05 }}
                  className="bg-slate-50 rounded-xl p-6 text-center hover:bg-slate-100 transition-colors cursor-default"
                >
                  <div className="text-4xl mb-2">{tool.icon}</div>
                  <p className="font-medium text-slate-900">{tool.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
