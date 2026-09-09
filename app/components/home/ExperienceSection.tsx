"use client";

import { motion, Variants } from "framer-motion";
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
    <section id="experience" className="relative py-12 px-6 lg:px-12 xl:px-20 bg-gradient-to-b from-white via-slate-50/50 to-white overflow-hidden">
      {/* Decorative shapes giữ nguyên */}
      <div className="absolute top-20 left-[5%] w-32 h-32 rounded-full bg-gradient-to-br from-sky-200/60 to-sky-300/40 blur-2xl" />
      <div className="absolute top-10 right-[15%] w-24 h-24 rounded-full bg-gradient-to-bl from-indigo-200/50 to-sky-200/40 blur-xl" />
      <div className="absolute top-1/2 -left-10 w-40 h-24 rounded-full bg-gradient-to-r from-sky-300/40 to-indigo-200/30 blur-2xl -rotate-12" />
      <div className="absolute top-[40%] right-[8%] w-20 h-20 rounded-full bg-gradient-to-tl from-sky-200/50 to-sky-100/40 blur-xl" />
      <div className="absolute bottom-32 left-[20%] w-28 h-28 rounded-full bg-gradient-to-tr from-indigo-200/40 to-sky-200/30 blur-2xl" />
      <div className="absolute bottom-10 right-[5%] w-48 h-32 rounded-full bg-gradient-to-l from-sky-200/50 to-indigo-100/40 blur-3xl rotate-12" />

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

        {/* Timeline */}
        <div className="relative">
          {/* Đường kẻ dọc */}
          <div className="absolute left-[5px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-sky-400 via-sky-300 to-sky-100" />

          <div className="space-y-8">
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
                {/* Hàng mốc: dấu chấm + period */}
                <div className="flex items-center gap-3 mb-3 relative z-10">
                  <div className="w-3 h-3 rounded-full bg-sky-500 ring-4 ring-white shadow-md shadow-sky-500/40 flex-shrink-0" />
                  <span className="text-sm font-semibold text-sky-700 bg-sky-50 px-3 py-1.5 rounded-full border border-sky-200 whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>

                {/* Card */}
                <div className="ml-8 bg-white rounded-2xl p-6 shadow-[0_8px_40px_rgba(56,189,248,0.1)]">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
                    <div>
                      <h4 className="text-lg font-semibold text-slate-700">
                        {exp.role}{" "}
                        <span className="text-base font-normal text-slate-500">at</span>{" "}
                        <span className="text-lg font-semibold text-sky-600">{exp.company}</span>
                      </h4>
                    </div>

                    {exp.type && (
                      <span className="text-sm font-medium text-sky-600 bg-sky-50 px-4 py-1.5 rounded-full border border-sky-100 self-start sm:self-auto">
                        {exp.type}
                      </span>
                    )}
                  </div>

                  {exp.responsibilities && exp.responsibilities.length > 0 && (
                    <div className="pt-4">
                      <ul className="space-y-2">
                        {exp.responsibilities.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 flex-shrink-0" />
                            <span className="text-md text-slate-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
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