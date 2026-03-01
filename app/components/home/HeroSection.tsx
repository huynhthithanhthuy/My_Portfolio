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

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

// Card data
const cardImages = [
  { src: "/images/hero-1.jpg", alt: "Mobile App Design", rotate: -6, position: "top-[12%] left-[12%]", duration: 4, delay: 0 },
  { src: "/images/hero-2.jpg", alt: "Dashboard UI", rotate: 3, position: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10", duration: 4.5, delay: 0.3, isCenter: true },
  { src: "/images/hero-3.jpg", alt: "E-Commerce App", rotate: 6, position: "bottom-[12%] right-[12%]", duration: 3.5, delay: 0.6 },
];

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/images/background_cloud.png')` }}
      />

      {/* Top Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-500/30 via-sky-500/10 to-transparent pointer-events-none" />

      {/* Bottom Blur Gradient - Sky to White */}
      <div className="absolute inset-x-0 bottom-0 h-64 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(
              to bottom,
              transparent 0%,
              rgba(255, 255, 255, 0.2) 20%,
              rgba(255, 255, 255, 0.5) 40%,
              rgba(255, 255, 255, 0.8) 70%,
              rgba(255, 255, 255, 1) 100%
            )`,
          }}
        />
        <div className="absolute bottom-0 left-[5%] w-[400px] h-[150px] bg-white/70 rounded-full blur-[80px]" />
        <div className="absolute bottom-0 right-[10%] w-[350px] h-[120px] bg-white/60 rounded-full blur-[70px]" />
        <div className="absolute bottom-0 left-[40%] w-[500px] h-[180px] bg-white/80 rounded-full blur-[100px]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center px-6 lg:px-12 xl:px-20 pt-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

            {/* Left Side - Text & CTA */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              <motion.p
                variants={fadeInUp}
                className="text-2xl sm:text-4xl font-medium text-white/70 mb-6"
              >
                Hi, I&apos;m Thanh Thuy
              </motion.p>

              <motion.p
                variants={fadeInUp}
                className="text-5xl sm:text-6xl font-bold text-white/90 tracking-tight mb-6"
              >
                UX/UI Designer
              </motion.p>

              <TypewriterText
                text="A 21-year-old UX/UI designer crafting simple experiences that connect people and technology seamlessly."
                delay={500}
                speed={30}
                showCursor
                className="text-base sm:text-lg text-white max-w-lg leading-relaxed mb-10"
              />

              <motion.div variants={fadeInUp} className="flex gap-4">
                <button
                  onClick={scrollToContact}
                  className="inline-flex items-center gap-2 bg-white text-slate-800 px-6 py-3 rounded-full font-medium hover:bg-white/90 hover:scale-105 transition-all shadow-lg shadow-black/10 cursor-pointer"
                >
                  Contact
                </button>
                
                <a
                  href="/HuynhThiThanhThuy_UXUI-Designer_CV.pdf"
                  download
                  className="inline-flex items-center gap-2 bg-slate-800 text-white px-6 py-3 rounded-full font-medium hover:bg-slate-700 hover:scale-105 transition-all shadow-lg shadow-black/10"
                >
                  Download CV
                </a>
              </motion.div>

            </motion.div>

            {/* Right Side - Floating Image Cards */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="relative h-[500px] lg:h-[600px] hidden md:block"
            >
              {cardImages.map((card, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  animate={{ y: [-8, 8, -8] }}
                  transition={{
                    duration: card.duration,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: card.delay,
                  }}
                  className={`
                    absolute ${card.position}
                    ${card.isCenter ? "w-56 lg:w-64" : "w-52 lg:w-56"}
                    aspect-[4/3] rounded-2xl overflow-hidden
                    shadow-2xl shadow-sky-900/20
                    hover:rotate-0 hover:scale-105
                    transition-all duration-300 cursor-pointer group
                  `}
                  style={{ rotate: `${card.rotate}deg` }}
                >
                  <Image
                    src={card.src}
                    alt={card.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}