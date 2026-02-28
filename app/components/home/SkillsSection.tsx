"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { skills, tools } from "@/app/data/data";

// Animation variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger: Variants = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const floatIn: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

// Card positioning for staggered effect
const skillPositions = [
  { marginTop: "0px", rotation: -2 },
  { marginTop: "30px", rotation: 1 },
  { marginTop: "10px", rotation: -1 },
  { marginTop: "40px", rotation: 2 },
];

const toolPositions = [
  { marginTop: "20px", rotation: 1 },
  { marginTop: "0px", rotation: -2 },
  { marginTop: "35px", rotation: 2 },
  { marginTop: "10px", rotation: -1 },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="relative py-12 px-6 lg:px-12 xl:px-20 bg-gradient-to-b from-white via-slate-50/50 to-white overflow-hidden">
      
      {/* Decorative Gradient Shapes */}
      <div className="absolute top-20 left-[5%] w-32 h-32 rounded-full bg-gradient-to-br from-sky-200/60 to-sky-300/40 blur-2xl" />
      <div className="absolute top-10 right-[15%] w-24 h-24 rounded-full bg-gradient-to-bl from-indigo-200/50 to-sky-200/40 blur-xl" />
      <div className="absolute top-1/2 -left-10 w-40 h-24 rounded-full bg-gradient-to-r from-sky-300/40 to-indigo-200/30 blur-2xl -rotate-12" />
      <div className="absolute top-[40%] right-[8%] w-20 h-20 rounded-full bg-gradient-to-tl from-sky-200/50 to-sky-100/40 blur-xl" />
      <div className="absolute bottom-32 left-[20%] w-28 h-28 rounded-full bg-gradient-to-tr from-indigo-200/40 to-sky-200/30 blur-2xl" />
      <div className="absolute bottom-10 right-[5%] w-48 h-32 rounded-full bg-gradient-to-l from-sky-200/50 to-indigo-100/40 blur-3xl rotate-12" />

      {/* Small Floating Dots */}
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
        className="absolute bottom-60 left-[30%] w-5 h-5 rounded-full bg-sky-300/50"
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h3 className="text-2xl text-sky-500 font-medium mb-4">Expertise</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Skills & Tools
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            The skills I've developed and tools I use to bring designs to life
          </p>
        </motion.div>

        {/* Skills Row - 4 cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
            {skills.slice(0, 4).map((skill, index) => (
              <motion.div
                key={`skill-${index}`}
                variants={floatIn}
                animate={{ y: [-6, 6, -6] }}
                transition={{
                  y: {
                    duration: 4 + index * 0.3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2,
                  },
                }}
                className="group"
                style={{ marginTop: skillPositions[index]?.marginTop || "0px" }}
              >
                <div
                  className="
                    relative w-[200px] p-[2px] rounded-3xl
                    bg-gradient-to-br from-white/80 via-sky-50/50 to-white/80
                    shadow-[0_8px_32px_rgba(56,189,248,0.12),0_4px_16px_rgba(99,102,241,0.08)]
                    group-hover:shadow-[0_16px_48px_rgba(56,189,248,0.2),0_8px_24px_rgba(99,102,241,0.12)]
                    group-hover:-translate-y-2
                    transition-all duration-500
                  "
                  style={{ transform: `rotate(${skillPositions[index]?.rotation || 0}deg)` }}
                >
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 rounded-3xl overflow-hidden">
                    <div
                      className="
                        absolute inset-0
                        bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.6)_50%,transparent_100%)]
                        translate-x-[-100%]
                        group-hover:translate-x-[100%]
                        transition-transform duration-1000 ease-in-out
                      "
                    />
                  </div>

                  {/* Inner Glass */}
                  <div className="relative rounded-[22px] p-6 bg-white/90 backdrop-blur-xl border border-sky-100/50">
                    {/* Icon */}
                    <div className="text-4xl mb-4 text-center">{skill.icon}</div>

                    {/* Title */}
                    <h4 className="text-md font-bold text-slate-900 mb-2 text-center group-hover:text-sky-700 transition-colors">
                      {skill.name}
                    </h4>

                    {/* Description */}
                    <p className="text-sm text-slate-600 leading-relaxed text-center">
                      {skill.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tools Row - 4 cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
            {tools.slice(0, 4).map((tool, index) => (
              <motion.div
                key={`tool-${index}`}
                variants={floatIn}
                animate={{ y: [-6, 6, -6] }}
                transition={{
                  y: {
                    duration: 3.8 + index * 0.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.3,
                  },
                }}
                className="group"
                style={{ marginTop: toolPositions[index]?.marginTop || "0px" }}
              >
                <div
                  className="
                    relative w-[200px] p-[2px] rounded-3xl
                    bg-gradient-to-br from-white/80 via-sky-50/50 to-white/80
                    shadow-[0_8px_32px_rgba(56,189,248,0.12),0_4px_16px_rgba(99,102,241,0.08)]
                    group-hover:shadow-[0_16px_48px_rgba(56,189,248,0.2),0_8px_24px_rgba(99,102,241,0.12)]
                    group-hover:-translate-y-2
                    transition-all duration-500
                  "
                  style={{ transform: `rotate(${toolPositions[index]?.rotation || 0}deg)` }}
                >
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 rounded-3xl overflow-hidden">
                    <div
                      className="
                        absolute inset-0
                        bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.6)_50%,transparent_100%)]
                        translate-x-[-100%]
                        group-hover:translate-x-[100%]
                        transition-transform duration-1000 ease-in-out
                      "
                    />
                  </div>

                  {/* Inner Glass */}
                  <div className="relative rounded-[22px] p-6 bg-white/90 backdrop-blur-xl border border-sky-100/50">
                    {/* Logo */}
                    <div className="mb-4 flex items-center justify-center h-12">
                      <Image
                        src={tool.logo}
                        alt={tool.name}
                        width={48}
                        height={48}
                        className="object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>

                    {/* Title */}
                    <h4 className="text-md font-bold text-slate-900 mb-2 text-center group-hover:text-sky-700 transition-colors">
                      {tool.name}
                    </h4>

                    {/* Description */}
                    <p className="text-sm text-slate-600 leading-relaxed text-center">
                      {tool.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Decorative */}
        <div className="relative mt-16 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="
              inline-flex items-center gap-3
              bg-white/60 backdrop-blur-sm
              px-6 py-3 rounded-full
              border border-sky-100
              shadow-lg shadow-sky-500/10
            "
          >
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-sm text-slate-600">
              Always learning and exploring new tools
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}