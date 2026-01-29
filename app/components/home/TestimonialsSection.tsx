"use client";

import { motion } from "framer-motion";
import { fadeInUp, stagger, scaleIn } from "@/app/animations/animation";
import { testimonials } from "@/app/data/data";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2">
            Testimonials
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            What People Say
          </h3>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="grid md:grid-cols-2 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 shadow-lg border border-slate-100"
            >
              <div className="text-4xl text-blue-600 mb-4">&quot;</div>
              <p className="text-lg text-slate-700 leading-relaxed mb-6 italic">
                {testimonial.quote}
              </p>
              <div>
                <p className="font-bold text-slate-900">{testimonial.name}</p>
                <p className="text-sm text-slate-600">
                  {testimonial.role} at {testimonial.company}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
