"use client";

import { motion, Variants } from "framer-motion";

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

// Combined Skills & Tools data
const expertise = [
  {
    step: "01",
    title: "UI Design",
    description: "Creating beautiful, intuitive interfaces with Figma and Adobe XD.",
    icon: "🎨",
    floatDelay: 0,
    floatDuration: 4,
    rotation: -3,
  },
  {
    step: "02",
    title: "UX Research",
    description: "Understanding user needs through research, interviews, and testing.",
    icon: "🔍",
    floatDelay: 0.5,
    floatDuration: 4.5,
    rotation: 2,
  },
  {
    step: "03",
    title: "Prototyping",
    description: "Building interactive prototypes to validate ideas and gather feedback.",
    icon: "⚡",
    floatDelay: 1,
    floatDuration: 3.5,
    rotation: -2,
  },
  {
    step: "04",
    title: "Design Systems",
    description: "Creating scalable component libraries and design guidelines.",
    icon: "📦",
    floatDelay: 0.3,
    floatDuration: 4.2,
    rotation: 3,
  },
  {
    step: "05",
    title: "Visual Design",
    description: "Crafting graphics and illustrations with Photoshop and Illustrator.",
    icon: "✨",
    floatDelay: 0.8,
    floatDuration: 3.8,
    rotation: -1,
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="relative py-24 px-6 lg:px-12 xl:px-20 bg-gradient-to-b from-white via-slate-50/50 to-white overflow-hidden">
      
      {/* Decorative Gradient Shapes */}
      <div className="absolute top-20 left-[5%] w-32 h-32 rounded-full bg-gradient-to-br from-sky-200/60 to-sky-300/40 blur-2xl" />
      <div className="absolute top-10 right-[15%] w-24 h-24 rounded-full bg-gradient-to-bl from-indigo-200/50 to-sky-200/40 blur-xl" />
      <div className="absolute top-1/2 -left-10 w-40 h-24 rounded-full bg-gradient-to-r from-sky-300/40 to-indigo-200/30 blur-2xl -rotate-12" />
      <div className="absolute top-[40%] right-[8%] w-20 h-20 rounded-full bg-gradient-to-tl from-sky-200/50 to-sky-100/40 blur-xl" />
      <div className="absolute bottom-32 left-[20%] w-28 h-28 rounded-full bg-gradient-to-tr from-indigo-200/40 to-sky-200/30 blur-2xl" />
      <div className="absolute bottom-10 right-[5%] w-48 h-32 rounded-full bg-gradient-to-l from-sky-200/50 to-indigo-100/40 blur-3xl rotate-12" />
      <div className="absolute top-32 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-b from-sky-300/50 to-transparent blur-xl" />
      <div className="absolute bottom-40 left-[45%] w-24 h-16 rounded-full bg-gradient-to-t from-indigo-200/40 to-sky-100/30 blur-2xl rotate-45" />

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
      <motion.div 
        animate={{ y: [8, -8, 8], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute bottom-48 right-[25%] w-3 h-3 rounded-full bg-sky-400/30"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-20"
        >
          <h3 className="text-slate-500 font-medium mb-4">Expertise</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Skills & Tools
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            The skills I've developed and tools I use to bring designs to life
          </p>
        </motion.div>

        {/* Floating Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="relative"
        >
          <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
            {expertise.map((item, index) => (
              <motion.div
                key={index}
                variants={floatIn}
                animate={{ y: [-8, 8, -8] }}
                transition={{
                  y: {
                    duration: item.floatDuration,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: item.floatDelay,
                  },
                }}
                className="group"
                style={{
                  marginTop: index % 2 === 0 ? "0px" : "40px",
                }}
              >
                {/* Liquid Glass Card with Blue Shadow */}
                <div
                  className="
                    relative w-[200px] p-[2px] rounded-3xl
                    bg-gradient-to-br from-white/80 via-sky-50/50 to-white/80
                    shadow-[0_8px_32px_rgba(56,189,248,0.15),0_4px_16px_rgba(99,102,241,0.1)]
                    group-hover:shadow-[0_20px_50px_rgba(56,189,248,0.25),0_10px_30px_rgba(99,102,241,0.15)]
                    group-hover:-translate-y-2
                    transition-all duration-500
                  "
                  style={{ transform: `rotate(${item.rotation}deg)` }}
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
                  <div
                    className="
                      relative rounded-[22px] p-6
                      bg-white/80 backdrop-blur-xl
                      border border-sky-100/50
                    "
                  >
                    {/* Step Number */}
                    <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-gradient-to-br from-sky-400 to-sky-600 flex items-center justify-center shadow-lg shadow-sky-500/40">
                      <span className="text-white text-sm font-bold">{item.step}</span>
                    </div>

                    {/* Icon */}
                    <div className="text-4xl mb-4">{item.icon}</div>

                    {/* Title */}
                    <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-sky-700 transition-colors">
                      {item.title}
                    </h4>

                    {/* Description */}
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {item.description}
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