"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { fadeInUp, stagger, scaleIn } from "@/app/animations/animation";
import { caseStudies } from "@/app/data/data";

export default function WorksSection() {
  const handleProjectClick = (link: string) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="works" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2">
            Portfolio
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Selected Works
          </h3>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A collection of projects where research meets creativity
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="space-y-8"
        >
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              onClick={() => handleProjectClick(study.link)}
              className="group cursor-pointer"
            >
              <div
                className={`bg-gradient-to-br ${study.color} rounded-3xl p-8 md:p-12 shadow-lg hover:shadow-2xl transition-all duration-300`}
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Project Image */}
                  <div className="aspect-video bg-white/50 backdrop-blur-sm rounded-2xl flex items-center justify-center text-8xl group-hover:scale-105 transition-transform duration-300">
                    {study.image}
                  </div>

                  {/* Project Info */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-slate-600 uppercase">
                        {study.category}
                      </span>
                      <span className="text-slate-400">•</span>
                      <span className="text-sm text-slate-600">
                        {study.duration}
                      </span>
                    </div>

                    <h4 className="text-3xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {study.title}
                    </h4>

                    <div className="space-y-3">
                      <div>
                        <p className="text-sm font-semibold text-slate-700 mb-1">
                          Problem
                        </p>
                        <p className="text-slate-600">{study.problem}</p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-700 mb-1">
                          Solution
                        </p>
                        <p className="text-slate-600">{study.solution}</p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-700 mb-1">
                          Outcome
                        </p>
                        <p className="text-green-600 font-medium">
                          {study.outcome}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-blue-600 font-medium pt-2 group-hover:gap-4 transition-all">
                      View Case Study
                      <ExternalLink className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
