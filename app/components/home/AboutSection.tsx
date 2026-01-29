"use client";

import { fadeInUp, scaleIn, stagger } from "@/app/animations/animation";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Profile Image */}
          <motion.div variants={scaleIn} className="relative">
            <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl overflow-hidden shadow-2xl">
              <div className="w-full h-full flex items-center justify-center text-8xl">
                👤
              </div>
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div variants={fadeInUp} className="space-y-6">
            <div>
              <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2">
                About Me
              </h2>
              <h3 className="text-4xl font-bold text-slate-900 mb-4">
                Turning complex problems into simple, beautiful designs
              </h3>
            </div>

            <p className="text-lg text-slate-600 leading-relaxed">
              I&apos;m a UX/UI Designer with 5+ years of experience crafting
              digital products that people love to use. My journey started with
              a fascination for how design can bridge the gap between technology
              and human needs.
            </p>

            <p className="text-lg text-slate-600 leading-relaxed">
              I specialize in{" "}
              <span className="font-semibold text-slate-900">
                UX Research, Product Thinking, and Design Systems
              </span>
              . For me, design isn&apos;t just about making things look
              good—it&apos;s about understanding users deeply and creating
              solutions that genuinely improve their lives.
            </p>

            <div className="pt-4">
              <p className="text-slate-900 font-medium italic">
                &quot;Good design is invisible. Great design tells a
                story.&quot;
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
