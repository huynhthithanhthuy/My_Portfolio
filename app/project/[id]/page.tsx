"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { X, ArrowUpRight, Loader2 } from "lucide-react";
import { getProjectById } from "@/services/projectService";
import { Project } from "@/types/project";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
};

const imageBounceIn: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.96 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 180,
            damping: 18,
            mass: 0.8,
            opacity: { duration: 0.7, ease: "easeOut" },
        },
    },
};

const staggerContainer: Variants = {
    visible: { transition: { staggerChildren: 0.08 } },
};

// Màu nền — khớp với ảnh reference
const PAGE_BG = "#F5F1E7";

export default function DetailProject() {
    const params = useParams();
    const id = params?.id as string;

    const [project, setProject] = useState<Project | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!id) return;
        setLoading(true);
        getProjectById(id)
            .then((data) => {
                if (data) {
                    setProject(data);
                } else {
                    setError("Project not found.");
                }
            })
            .catch((err) => {
                console.error("Failed to fetch project detail:", err);
                setError("Could not load project details.");
            })
            .finally(() => setLoading(false));
    }, [id]);

    if (loading) {
        return (
            <main
                className="min-h-screen flex items-center justify-center"
                style={{ backgroundColor: PAGE_BG }}
            >
                <div className="flex flex-col items-center gap-3">
                    <Loader2 className="w-8 h-8 text-[#C97B93] animate-spin" />
                    <p className="text-[#A98F86] text-sm font-medium">Loading project details...</p>
                </div>
            </main>
        );
    }

    if (error || !project) {
        return (
            <main
                className="min-h-screen flex items-center justify-center px-6"
                style={{ backgroundColor: PAGE_BG }}
            >
                <div className="text-center max-w-md">
                    <h2
                        className="text-2xl font-bold text-[#4A3B36] mb-2"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                        Project Not Found
                    </h2>
                    <p className="text-[#6B5B56] mb-6">
                        {error || "The project you are looking for does not exist or has been removed."}
                    </p>
                    <Link
                        href="/project"
                        className="text-sm font-semibold text-[#C97B93] underline underline-offset-4 hover:text-[#8B5E63] transition-colors duration-300"
                    >
                        Back to all projects
                    </Link>
                </div>
            </main>
        );
    }

    const projectInfo = [
        { label: "Client", value: project.client },
        { label: "Industry", value: project.industry },
        { label: "Service", value: project.service },
        { label: "Platform", value: project.platform },
        { label: "My Role", value: project.myRole },
        { label: "Timeline", value: project.timeline },
    ].filter((item): item is { label: string; value: string } => Boolean(item.value));

    return (
        <main className="relative min-h-screen" style={{ backgroundColor: PAGE_BG }}>
            {/* Sticky Nút đóng — luôn nằm ở top khi cuộn, có hiệu ứng zoom & xoay khi hover */}
            <div className="sticky top-6 z-50 flex justify-center pt-6 pb-4 pointer-events-none">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    whileHover={{ scale: 1.15, rotate: 90 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="pointer-events-auto"
                >
                    <Link
                        href="/project"
                        aria-label="Close"
                        className="w-11 h-11 rounded-full bg-white/90 backdrop-blur-md border border-[#E3D9CC] shadow-md flex items-center justify-center text-[#4A3B36] hover:bg-white hover:border-[#D8C4B0] hover:shadow-lg transition-all duration-300"
                    >
                        <X className="w-5 h-5" />
                    </Link>
                </motion.div>
            </div>

            {/* Hero */}
            <section className="px-6 lg:px-12 xl:px-20 pt-8 pb-16">
                <div className="max-w-7xl mx-auto">
                    <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
                        {/* Title + description */}
                        <div className="w-full">
                            <motion.h1
                                variants={fadeInUp}
                                className="text-2xl md:text-3xl font-bold text-[#4A3B36] leading-tight mb-5"
                            >
                                {project.title}
                            </motion.h1>

                            <motion.p
                                variants={fadeInUp}
                                className="text-lg text-[#6B5B56] leading-relaxed"
                            >
                                {project.description}
                            </motion.p>

                            {project.projectLink && (
                                <motion.div variants={fadeInUp} className="mt-6">
                                    <a
                                        href={project.projectLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 text-base font-medium text-[#C97B93] underline underline-offset-4 hover:text-[#8B5E63] transition-colors duration-300"
                                    >
                                        View Project
                                        <ArrowUpRight className="w-4 h-4" />
                                    </a>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>

                    {/* Thumbnail */}
                    {project.thumbnail && (
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-60px" }}
                            variants={imageBounceIn}
                            className="relative mt-14 aspect-[16/9] overflow-hidden bg-[#F0E6D9] shadow-[0_20px_45px_rgba(74,59,54,0.18)]"
                        >
                            <Image
                                src={project.thumbnail}
                                alt={project.title}
                                fill
                                priority
                                unoptimized
                                className="object-cover"
                            />
                        </motion.div>
                    )}
                </div>
            </section>

            {/* ===== Info + Gallery ===== */}
            <section className="px-6 lg:px-12 xl:px-20 pb-28">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-[minmax(0,240px)_1fr] gap-12 lg:gap-20">
                    {projectInfo.length > 0 && (
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-80px" }}
                            variants={staggerContainer}
                            className="lg:sticky lg:top-8 lg:self-start"
                        >
                            <motion.h2
                                variants={fadeInUp}
                                style={{ fontFamily: "'Cormorant Garamond', serif" }}
                                className="text-sm font-semibold tracking-[0.15em] uppercase text-[#C97B93] mb-6"
                            >
                                Project Info
                            </motion.h2>

                            <dl className="space-y-5">
                                {projectInfo.map((item) => (
                                    <motion.div
                                        key={item.label}
                                        variants={fadeInUp}
                                        className="pb-5 border-b border-[#F6C8D3]/40 last:border-b-0"
                                    >
                                        <dt className="text-sm text-[#A98F86] mb-1">{item.label}</dt>
                                        <dd className="text-base font-normal text-[#4A3B36]">{item.value}</dd>
                                    </motion.div>
                                ))}
                            </dl>
                        </motion.div>
                    )}

                    {project.contentImages && project.contentImages.length > 0 && (
                        <div className="space-y-6">
                            {project.contentImages.map((img, index) => (
                                <motion.div
                                    key={img.id || index}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: "-80px" }}
                                    variants={imageBounceIn}
                                    className="relative overflow-hidden bg-[#F0E6D9]"
                                >
                                    <Image
                                        src={img.url}
                                        alt={`${project.title} — detail image ${index + 1}`}
                                        width={1600}
                                        height={1200}
                                        unoptimized
                                        className="w-full h-auto object-cover"
                                    />
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
}