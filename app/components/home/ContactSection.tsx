"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { personalInfo, contactData } from "@/app/data/data";

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

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-24 px-6 overflow-hidden">
      {/* Ảnh nền full-bleed, làm mờ nhạt */}
      <div className="absolute inset-0">
        <Image
          src="/images/contact_bg.png"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#FDF5EF]/55" />
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
        className="relative z-10 max-w-3xl mx-auto"
      >
        {/* Card nền cream — rộng hơn theo chiều ngang */}
        <div className="relative bg-[#FDF5EF] shadow-[0_20px_50px_rgba(74,59,54,0.15)] px-12 sm:px-20 py-16 sm:py-20 text-center">
          {/* Hoa hồng 2 bên */}
          <div className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-14 sm:w-20 hidden sm:block">
            <Image
              src="/images/rose-left.png"
              alt=""
              width={200}
              height={280}
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-14 sm:w-20 hidden sm:block">
            <Image
              src="/images/rose-right.png"
              alt=""
              width={200}
              height={280}
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Heading */}
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[#4A3B36] leading-snug mb-12"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {contactData.heading}
            <br />
            <span className="italic text-[#8B5E63]">{contactData.subheading}</span>
          </motion.h2>

          {/* Email link — rõ ràng có thể bấm được */}
          <motion.div variants={fadeInUp}>
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-1.5 text-[#3D2E29] text-base underline underline-offset-4 decoration-[#3D2E29] hover:text-[#C97B93] hover:decoration-[#C97B93] transition-colors duration-300"
            >
              {personalInfo.email}
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}