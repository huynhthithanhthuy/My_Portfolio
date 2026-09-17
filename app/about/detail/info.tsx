"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { aboutData } from "@/app/data/data";
import { GraduationCap, Sparkles } from "lucide-react";

const iconMap = { GraduationCap, Sparkles };

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const fadeInLeft: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const staggerContainer: Variants = {
    visible: { transition: { staggerChildren: 0.08 } },
};

export default function AboutIntroSection() {
    return (
        <section className="relative px-6 lg:px-12 xl:px-20 pt-40 pb-16 bg-[#FDF5EF] overflow-hidden">
            {/* Paper texture — riêng cho section này */}
            <div
                className="absolute inset-0 opacity-45 pointer-events-none"
                style={{
                    backgroundImage: `url('/images/paper-texture.png')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            />
            <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 lg:gap-16 items-center">
                {/* Left - Ảnh */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeInLeft}
                    className="relative flex justify-center lg:justify-start"
                >
                    <div className="relative w-full max-w-sm ml-8 sm:ml-14">
                        {/* Khối nền phía sau — giờ là ảnh thật thay cho màu đặc */}
                        <div className="absolute -top-10 -left-8 w-full h-full overflow-hidden">
                            <Image
                                src="/images/about-bg.png"
                                alt=""
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="relative aspect-[4/5] overflow-hidden shadow-[0_20px_45px_rgba(74,59,54,0.18)]">
                            <Image src={aboutData.image} alt={aboutData.imageAlt} fill priority className="object-cover" />
                        </div>

                        <div className="absolute -top-14 -left-14 w-32 h-32 sm:w-44 sm:h-44 z-10 hidden sm:block">
                            <Image src="/images/bow.png" alt="" fill className="object-contain drop-shadow-md" />
                        </div>

                        <div className="absolute -bottom-6 -right-12 w-28 h-28 sm:w-32 sm:h-32 z-10 hidden sm:block rotate-12">
                            <Image src="/images/flower-corner-v1.png" alt="" fill className="object-contain drop-shadow-md" />
                        </div>
                    </div>
                </motion.div>

                {/* Right - Text */}
                <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="flex flex-col">
                    <motion.p
                        variants={fadeInUp}
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                        className="text-xl sm:text-2xl italic text-[#C97B93] mb-2"
                    >
                        {aboutData.sectionLabel}
                    </motion.p>

                    <motion.h1
                        variants={fadeInUp}
                        className="text-4xl sm:text-5xl font-bold leading-snug text-[#4A3B36] mb-6"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                        {aboutData.heading}
                        <br />
                        <span className="italic text-[#8B5E63]">{aboutData.headingAccent}</span>
                    </motion.h1>

                    <motion.div variants={fadeInUp} className="space-y-4 text-[#6B5B56] leading-relaxed text-justify mb-6">
                        {aboutData.description.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </motion.div>

                    <motion.div variants={fadeInUp} className="flex flex-wrap gap-3">
                        {aboutData.quickInfo.map((item, index) => {
                            const IconComponent = iconMap[item.icon as keyof typeof iconMap];
                            return (
                                <div key={index} className="inline-flex items-center gap-2 border border-[#F6C8D3] rounded-full px-4 py-2 text-sm text-[#6B5B56]">
                                    <IconComponent className="w-4 h-4 text-[#C97B93]" />
                                    <span>{item.label}</span>
                                </div>
                            );
                        })}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}