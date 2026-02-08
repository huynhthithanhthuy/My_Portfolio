"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { caseStudies } from "@/app/data/data";

// Animation variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function WorksSection() {
  return (
    <section id="works" className="py-24 px-6 lg:px-12 xl:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-20"
        >
          <h3 className="text-2xl text-sky-500 font-medium mb-4">Case Studies</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Featured Works
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Explore my latest design projects and case studies
          </p>
        </motion.div>

        {/* Projects List */}
        <div className="space-y-32">
          {caseStudies.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={project.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                  isEven ? "" : "lg:grid-flow-dense"
                }`}
              >
                {/* Image Card */}
                <motion.div
                  variants={isEven ? fadeInLeft : fadeInRight}
                  className={`group ${isEven ? "" : "lg:col-start-2"}`}
                >
                  <div
                    className="
                      relative p-2 rounded-[2rem]
                      bg-gradient-to-br from-slate-100 via-white to-slate-50
                      shadow-[0_4px_24px_rgba(0,0,0,0.06)]
                      group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)]
                      group-hover:-translate-y-2
                      transition-all duration-500
                    "
                  >
                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 rounded-[2rem] overflow-hidden">
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

                    {/* Image */}
                    <div className="relative aspect-[4/3] rounded-[1.5rem] overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div
                  variants={isEven ? fadeInRight : fadeInLeft}
                  className={`space-y-6 ${isEven ? "" : "lg:col-start-1 lg:row-start-1"}`}
                >
                  {/* Badge & Year */}
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center gap-2 bg-slate-100 rounded-full px-4 py-1.5">
                      <span className="w-2 h-2 bg-emerald-400 rounded-full" />
                      <span className="text-sm font-medium text-slate-600">
                        {project.badge}
                      </span>
                    </span>
                    <span className="text-sm text-slate-400">{project.year}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 leading-relaxed text-lg text-justify">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-sm text-slate-600 bg-slate-100 px-3 py-1.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA Link */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex items-center gap-2
                      text-slate-800 font-semibold
                      group/link
                      hover:text-slate-600
                      transition-colors duration-300
                    "
                  >
                    <span className="relative">
                      View Detail
                      <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-slate-300 group-hover/link:bg-slate-500 transition-colors duration-300" />
                    </span>
                  </a>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}