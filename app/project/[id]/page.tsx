"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { X, ArrowUpRight, Loader2, ZoomIn } from "lucide-react";
import { getProjectById, incrementProjectViews } from "@/services/projectService";
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
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    useEffect(() => {
        if (!id) return;
        setLoading(true);
        getProjectById(id)
            .then((data) => {
                if (data) {
                    setProject(data);
                    // Tăng số lượt xem ngầm trong Firestore (chỉ đếm 1 lần mỗi phiên truy cập)
                    const viewedKey = `viewed_project_${id}`;
                    if (typeof window !== "undefined" && !sessionStorage.getItem(viewedKey)) {
                        sessionStorage.setItem(viewedKey, "true");
                        incrementProjectViews(id);
                    }
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

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setSelectedImage(null);
            }
        };

        if (selectedImage) {
            document.body.style.overflow = "hidden";
            window.addEventListener("keydown", handleKeyDown);
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [selectedImage]);

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
            <div className="sticky top-6 z-40 flex justify-center pt-6 pb-4 pointer-events-none">
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
                            onClick={() => setSelectedImage(project.thumbnail)}
                            className="relative mt-14 aspect-[16/9] overflow-hidden bg-[#F0E6D9] shadow-[0_20px_45px_rgba(74,59,54,0.18)] cursor-zoom-in group"
                        >
                            <Image
                                src={project.thumbnail}
                                alt={project.title}
                                fill
                                priority
                                unoptimized
                                className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                                <div className="w-12 h-12 rounded-full bg-white/85 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center text-[#4A3B36] shadow-lg scale-90 group-hover:scale-100">
                                    <ZoomIn className="w-6 h-6 text-[#4A3B36]" />
                                </div>
                            </div>
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
                                    onClick={() => setSelectedImage(img.url)}
                                    className="relative overflow-hidden bg-[#F0E6D9] cursor-zoom-in group"
                                >
                                    <Image
                                        src={img.url}
                                        alt={`${project.title} — detail image ${index + 1}`}
                                        width={1600}
                                        height={1200}
                                        unoptimized
                                        className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                                        <div className="w-12 h-12 rounded-full bg-white/85 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center text-[#4A3B36] shadow-lg scale-90 group-hover:scale-100">
                                            <ZoomIn className="w-6 h-6 text-[#4A3B36]" />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Lightbox / Fullscreen Image Zoom Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 cursor-zoom-out select-none"
                    >
                        {/* Nút đóng Lightbox */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedImage(null);
                            }}
                            className="absolute top-6 right-6 z-10 w-11 h-11 rounded-full bg-white/20 hover:bg-white/40 border border-white/30 text-white flex items-center justify-center transition-all duration-200"
                            aria-label="Close zoomed image"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        {/* Thẻ ảnh Zoom */}
                        <motion.div
                            initial={{ scale: 0.92, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.92, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative max-w-[95vw] max-h-[92vh] flex items-center justify-center"
                        >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={selectedImage}
                                alt="Zoomed detail"
                                className="max-w-full max-h-[92vh] w-auto h-auto object-contain rounded-lg shadow-2xl cursor-default"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
}