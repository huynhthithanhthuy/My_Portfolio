"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import TypewriterText from "@/app/components/TypewriterText";

// Animation variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger: Variants = {
  visible: { transition: { staggerChildren: 0.15 } },
};

const bounceZoomLeft: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.85 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", bounce: 0.25, duration: 1.4 },
  },
};

const bounceZoomRight: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.85 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", bounce: 0.25, duration: 1.4, delay: 0.15 },
  },
};

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-[#FDF5EF]"
    >
      {/* Paper texture */}
      <div
        className="absolute inset-0 opacity-45 pointer-events-none"
        style={{
          backgroundImage: `url('/images/paper-texture.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />


      {/* Collage trái */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={bounceZoomLeft}
        className="absolute left-2 sm:left-4 lg:left-8 top-1/2 -translate-y-1/2 w-[134px] sm:w-[230px] lg:w-[288px] pointer-events-none hidden md:block opacity-90"
      >
        <motion.div
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1.4 }}
          className="relative aspect-[3/4]"
        >
          <Image src="/images/collage-left.png" alt="" fill className="object-contain" />
        </motion.div>
      </motion.div>

      {/* Collage phải */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={bounceZoomRight}
        className="absolute right-2 sm:right-4 lg:right-8 top-1/2 -translate-y-1/2 w-[134px] sm:w-[230px] lg:w-[288px] pointer-events-none hidden md:block opacity-90"
      >
        <motion.div
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.55 }}
          className="relative aspect-[3/4]"
        >
          <Image src="/images/collage-right.png" alt="" fill className="object-contain" />
        </motion.div>
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-20 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="max-w-md sm:max-w-lg w-full flex flex-col items-center"
        >
          {/* Dòng 1 — lời chào: Cormorant italic (display) */}
          <motion.div variants={fadeInUp} className="mb-2">
            <TypewriterText
              text="Hi, I'm Thanh Thuy"
              delay={300}
              speed={65}
              showCursor={false}
              className="text-5xl sm:text-6xl lg:text-7xl italic text-[#6B4A3F]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            />
          </motion.div>

          {/* Dòng 2 — subtitle: Cormorant đứng, uppercase, giống nav label */}
          <motion.p
            variants={fadeInUp}
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
            className="text-md md:text-lg font-semibold text-[#C97B93] tracking-[0.25em] uppercase mb-5"
          >
            UI/UX Designer
          </motion.p>

          {/* Decorative divider */}
          <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-[#E3B8CB]" />
            <span className="w-1.5 h-1.5 rotate-45 bg-[#C97B93]" />
            <span className="h-px w-8 bg-[#E3B8CB]" />
          </motion.div>

          {/* Description — body text: Poppins (kế thừa font-sans) */}
          <motion.p
            variants={fadeInUp}
            className="text-sm sm:text-base text-[#6B4A3F]/80 leading-relaxed mb-8"
          >
            I design thoughtful digital experiences that connect people and technology seamlessly.
          </motion.p>

          {/* CTA — Cormorant, không bo góc, weight đậm hơn */}
          <motion.div variants={fadeInUp} className="flex gap-3">
            <button
              onClick={scrollToContact}
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
              className="inline-flex items-center bg-transparent text-[#C97B93] border border-[#C97B93] px-8 py-3.5 rounded-none text-sm font-bold tracking-[0.2em] uppercase hover:bg-[#C97B93] hover:text-white transition-all duration-300 cursor-pointer"
            >
              Contact me
            </button>

            <a
              href="https://drive.google.com/drive/folders/1lGc7X0VSzOU7pM_Ni7BdBxCudBpEK2ES?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
              className="inline-flex items-center bg-transparent text-[#C97B93] border border-[#C97B93] px-8 py-3.5 rounded-none text-sm font-bold tracking-[0.2em] uppercase hover:bg-[#C97B93] hover:text-white transition-all duration-300"
            >
              Download CV
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}