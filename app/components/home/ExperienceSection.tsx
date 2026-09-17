"use client";

import { motion, Variants } from "framer-motion";
import { Sparkle } from "lucide-react";
import { experiences } from "@/app/data/data";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative py-0 px-6 lg:px-12 xl:px-20 bg-[#FDF5EF] overflow-hidden"
    >
      {/* Paper texture — đồng bộ với Hero & Works */}
      <div
        className="absolute inset-0 opacity-45 pointer-events-none"
        style={{
          backgroundImage: `url('/images/paper-texture.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Banner tiêu đề — dựng bằng CSS thật, không dùng ảnh */}
      <div className="relative mb-8">
        {/* Dải ren trên */}
        <div
          className="relative z-10 w-screen left-1/2 -translate-x-1/2 h-10 bg-repeat-x"
          style={{
            backgroundImage: `url('/images/lace-border.png')`,
            backgroundSize: "auto 100%",
          }}
        />

        {/* Ruy băng nâu chứa tiêu đề */}
        <div className="relative z-10 w-screen left-1/2 -translate-x-1/2 bg-[#6B4A3F] py-8 text-center">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
            className="text-lg sm:text-lg italic text-[#F6C8D3]"
          >
            Journey
          </motion.p>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-3xl sm:text-2xl font-bold uppercase text-[#F5D8C1]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Experience
          </motion.h2>
        </div>

        {/* Dải ren dưới */}
        <div
          className="relative z-10 w-screen left-1/2 -translate-x-1/2 h-10 bg-repeat-x"
          style={{
            backgroundImage: `url('/images/lace-border.png')`,
            backgroundSize: "auto 100%",
          }}
        />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto pt-4 pb-16">
        {/* Timeline — chiều dọc, mốc là icon sparkle */}
        <div className="relative">
          {/* Đường kẻ dọc */}
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
                {/* Mốc: icon sparkle có nền tròn */}
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

                  {/* Period */}
                  <p className="text-sm text-[#A98F86] mb-2">{exp.period}</p>

                  {/* Description ngắn */}
                  {exp.description && (
                    <p className="text-sm text-[#6B5B56] leading-relaxed">
                      {exp.description}
                    </p>
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