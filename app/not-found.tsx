"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer: Variants = {
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function NotFound() {
  return (
    <main className="relative bg-[#FDF5EF] min-h-screen overflow-hidden flex items-center justify-center px-6">
      {/* Paper texture — đồng bộ toàn trang */}
      <div
        className="absolute inset-0 opacity-45 pointer-events-none"
        style={{
          backgroundImage: `url('/images/paper-texture.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="relative z-10 text-center max-w-md"
      >
        <motion.p
          variants={fadeInUp}
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
          className="text-xl sm:text-2xl italic text-[#C97B93] mb-2"
        >
          Oops
        </motion.p>

        <motion.h1
          variants={fadeInUp}
          className="text-7xl sm:text-8xl font-bold text-[#6B4A3F] mb-4"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          404
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="text-base text-[#6B5B56] leading-relaxed mb-10"
        >
          The page you're looking for doesn't exist or has been moved.
        </motion.p>

        <motion.div variants={fadeInUp}>
          <Link
            href="/"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
            className="inline-flex items-center gap-2 bg-transparent text-[#C97B93] border border-[#C97B93] px-8 py-3.5 text-sm font-bold tracking-[0.2em] uppercase hover:bg-[#F6C8D3] hover:text-white transition-all duration-300"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
        </motion.div>
      </motion.div>
    </main>
  );
}