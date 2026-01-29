"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";
import { fadeInUp } from "@/app/animations/animation";
import { personalInfo } from "@/app/data/data";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-12 md:p-16 text-center shadow-2xl"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let&apos;s build something meaningful together
          </h2>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a
              href={`mailto:${personalInfo.email}`}
              className="bg-white hover:bg-slate-50 text-slate-900 px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              {personalInfo.email}
            </a>
          </div>

          <div className="flex justify-center gap-6">
            <a
              href={personalInfo.linkedin}
              className="text-white hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href={personalInfo.github}
              className="text-white hover:text-blue-400 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-white hover:text-blue-400 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
