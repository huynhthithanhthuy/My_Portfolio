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

// Process data
const designProcess = [
  {
    step: "01",
    title: "Discover",
    description: "Research and understand user needs, business goals, and market context.",
    icon: "🔍",
    floatDelay: 0,
    floatDuration: 4,
    rotation: -3,
  },
  {
    step: "02",
    title: "Define",
    description: "Synthesize insights to identify problems and opportunities.",
    icon: "🎯",
    floatDelay: 0.5,
    floatDuration: 4.5,
    rotation: 2,
  },
  {
    step: "03",
    title: "Ideate",
    description: "Generate creative solutions through brainstorming and sketching.",
    icon: "💡",
    floatDelay: 1,
    floatDuration: 3.5,
    rotation: -2,
  },
  {
    step: "04",
    title: "Design",
    description: "Create wireframes, prototypes, and high-fidelity designs.",
    icon: "✨",
    floatDelay: 0.3,
    floatDuration: 4.2,
    rotation: 3,
  },
  {
    step: "05",
    title: "Test",
    description: "Validate solutions with users and iterate based on feedback.",
    icon: "🚀",
    floatDelay: 0.8,
    floatDuration: 3.8,
    rotation: -1,
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-24 px-6 lg:px-12 xl:px-20 bg-gradient-to-b from-white via-sky-50/50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-20"
        >
          <h3 className="text-sky-600 font-medium mb-4">Process</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            How I Work
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A human-centered approach to solving design challenges
          </p>
        </motion.div>

        {/* Floating Process Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="relative"
        >
          {/* Cards Container */}
          <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
            {designProcess.map((process, index) => (
              <motion.div
                key={index}
                variants={floatIn}
                animate={{ y: [-8, 8, -8] }}
                transition={{
                  y: {
                    duration: process.floatDuration,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: process.floatDelay,
                  },
                }}
                className="group"
                style={{ 
                  marginTop: index % 2 === 0 ? "0px" : "40px",
                }}
              >
                {/* Liquid Glass Card */}
                <div
                  className="
                    relative w-[200px] p-[2px] rounded-3xl
                    bg-gradient-to-br from-white/80 via-sky-100/50 to-white/80
                    shadow-[0_8px_32px_rgba(56,189,248,0.12)]
                    group-hover:shadow-[0_16px_48px_rgba(56,189,248,0.2)]
                    group-hover:-translate-y-2
                    transition-all duration-500
                  "
                  style={{ transform: `rotate(${process.rotation}deg)` }}
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
                      bg-white/70 backdrop-blur-xl
                      border border-white/50
                    "
                  >
                    {/* Step Number */}
                    <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-gradient-to-br from-sky-400 to-indigo-500 flex items-center justify-center shadow-lg shadow-sky-500/30">
                      <span className="text-white text-sm font-bold">{process.step}</span>
                    </div>

                    {/* Icon */}
                    <div className="text-4xl mb-4">{process.icon}</div>

                    {/* Title */}
                    <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-sky-700 transition-colors">
                      {process.title}
                    </h4>

                    {/* Description */}
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {process.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Decorative Elements */}
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
              Iterative process with continuous feedback
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}