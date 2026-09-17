"use client";

import { motion, Variants } from "framer-motion";
import { Sparkle } from "lucide-react";
import { experiences } from "@/app/data/data";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function AboutExperienceSection() {
  return (
    <section className="relative px-6 lg:px-12 xl:px-20 py-16 pb-28 bg-[#FDF5EF] overflow-hidden">
      {/* Paper texture — riêng cho section này */}
      <div
        className="absolute inset-0 opacity-45 pointer-events-none"
        style={{
          backgroundImage: `url('/images/paper-texture.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <p style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-xl sm:text-2xl italic text-[#C97B93] mb-2">
            Journey
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#4A3B36]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Experience
          </h2>
        </motion.div>

        <div className="relative">
          {/* Đường kẻ — dời sang khớp tâm icon mới */}
          <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-[#D8C4B0]" />

          <div className="space-y-10">
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={scaleIn}
                custom={idx}
                className="relative"
              >
                {/* Mốc: icon sparkle có nền tròn, che đường kẻ phía sau */}
                <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-[#FDF5EF] ring-4 ring-[#FDF5EF] flex items-center justify-center z-10">
                  <Sparkle className="w-3.5 h-3.5 text-[#8B5E63]" fill="#8B5E63" />
                </div>

                <div className="ml-10">
                  {/* Title row */}
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-1.5">
                    <h3 className="text-lg font-semibold text-[#6B4A3F]">{exp.role}</h3>
                    <span className="text-sm text-[#9C8A83]">at</span>
                    <span className="text-lg font-semibold text-[#6B4A3F]">{exp.company}</span>
                    {exp.type && (
                      <span className="ml-auto inline-flex items-center text-[11px] font-semibold uppercase tracking-wide text-[#C97B93] border border-[#F6C8D3] rounded-full px-2.5 py-0.5">
                        {exp.type}
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-[#A98F86] mb-2">{exp.period}</p>

                  {exp.responsibilities && exp.responsibilities.length > 0 && (
                    <ul className="space-y-1.5">
                      {exp.responsibilities.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-[#6B5B56]">
                          <span className="w-1 h-1 rounded-full bg-[#C97B93] mt-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}