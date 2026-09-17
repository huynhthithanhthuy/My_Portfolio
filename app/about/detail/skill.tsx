"use client";

import { motion, Variants } from "framer-motion";
import { skills, tools } from "@/app/data/data";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const staggerContainer: Variants = {
    visible: { transition: { staggerChildren: 0.08 } },
};

function TextList({ items }: { items: string[] }) {
    return (
        <div
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
            className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2"
        >
            {items.map((item, i) => (
                <span key={item} className="flex items-center gap-4">
                    <span className="text-lg sm:text-xl text-[#FDF5EF]">{item}</span>
                    {i < items.length - 1 && (
                        <span className="w-2 h-2 rotate-45 border border-[#FDF5EF] bg-transparent" />
                    )}
                </span>
            ))}
        </div>
    );
}

export default function AboutSkillsToolsSection() {
    return (
        <section className="relative bg-[#6B4A3F] overflow-hidden">
            {/* Paper texture */}
            <div
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                    backgroundImage: `url('/images/paper-texture.png')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            />

            {/* Dải ren trên */}
            <div
                className="relative z-10 w-screen left-1/2 -translate-x-1/2 h-10 bg-repeat-x"
                style={{
                    backgroundImage: `url('/images/lace-border.png')`,
                    backgroundSize: "auto 100%",
                }}
            />

            <div className="relative z-10 px-6 lg:px-12 xl:px-20 py-10 bg-[#6B4A3F]">
                <div className="max-w-3xl mx-auto">


                    {/* Skills */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        className="text-center"
                    >
                        <motion.h3
                            variants={fadeInUp}
                            style={{ fontFamily: "'Cormorant Garamond', serif" }}
                            className="text-sm font-semibold tracking-[0.25em] uppercase text-[#F6C8D3] mb-3"
                        >
                            Skills
                        </motion.h3>
                        <motion.div variants={fadeInUp}>
                            <TextList items={skills.map((s) => s.name)} />
                        </motion.div>
                    </motion.div>

                    {/* Divider giữa 2 nhóm */}
                    <div className="flex items-center justify-center gap-3 my-6">
                        <span className="h-px w-16 bg-[#F6C8D3]/30" />
                        <span className="w-1.5 h-1.5 rotate-45 bg-[#F6C8D3]" />
                        <span className="h-px w-16 bg-[#F6C8D3]/30" />
                    </div>

                    {/* Tools */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        className="text-center"
                    >
                        <motion.h3
                            variants={fadeInUp}
                            style={{ fontFamily: "'Cormorant Garamond', serif" }}
                            className="text-sm font-semibold tracking-[0.25em] uppercase text-[#F6C8D3] mb-3"
                        >
                            Tools
                        </motion.h3>
                        <motion.div variants={fadeInUp}>
                            <TextList items={tools.map((t) => t.name)} />
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Dải ren dưới */}
            <div
                className="relative z-10 w-screen left-1/2 -translate-x-1/2 h-10 bg-repeat-x"
                style={{
                    backgroundImage: `url('/images/lace-border.png')`,
                    backgroundSize: "auto 100%",
                }}
            />
        </section>
    );
}