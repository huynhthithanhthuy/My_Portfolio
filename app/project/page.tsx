"use client";

import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { getPublicProjects } from "@/services/projectService";
import { Project } from "@/types/project";

// Animation variants
const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
};

const staggerContainer: Variants = {
    visible: { transition: { staggerChildren: 0.08 } },
};

// Skeleton card placeholder — tông ấm thay cho slate
function SkeletonCard() {
    return (
        <div className="animate-pulse">
            <div className="relative aspect-square overflow-hidden bg-[#F0E6D9] mb-5" />
            <div className="h-6 w-3/4 rounded bg-[#F0E6D9] mb-2" />
            <div className="h-4 w-full rounded bg-[#F0E6D9] mb-1" />
            <div className="h-4 w-2/3 rounded bg-[#F0E6D9]" />
        </div>
    );
}

export default function ProjectPage() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        getPublicProjects()
            .then(setProjects)
            .catch((err) => {
                console.error("Failed to fetch projects:", err);
                setError("Could not load projects. Please try again later.");
            })
            .finally(() => setLoading(false));
    }, []);

    return (
        <main className="relative bg-[#FDF5EF] min-h-screen overflow-hidden">
            {/* Paper texture — đồng bộ toàn trang */}
            <div
                className="absolute inset-0 opacity-45 pointer-events-none"
                style={{
                    backgroundImage: `url('/images/paper-texture.png')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            />

            {/* Header */}
            <section className="relative z-10 px-6 lg:px-12 xl:px-20 pt-32 pb-12">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
                        <motion.p
                            variants={fadeInUp}
                            style={{ fontFamily: "'Cormorant Garamond', serif" }}
                            className="text-lg sm:text-xl italic text-[#C97B93] mb-2"
                        >
                            Case Studies
                        </motion.p>

                        <motion.h1
                            variants={fadeInUp}
                            className="text-4xl sm:text-5xl font-bold text-[#4A3B36] mb-4"
                            style={{ fontFamily: "'Cormorant Garamond', serif" }}
                        >
                            All Projects
                        </motion.h1>

                        <motion.p
                            variants={fadeInUp}
                            className="text-base text-[#6B5B56] leading-relaxed max-w-3xl mx-auto"
                        >
                            A collection of design work spanning mobile apps, web platforms, and landing pages.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="relative z-10 px-6 lg:px-12 xl:px-20 pb-28">
                <div className="max-w-7xl mx-auto">
                    {/* Loading state */}
                    {loading && (
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
                            {Array.from({ length: 6 }).map((_, i) => (
                                <SkeletonCard key={i} />
                            ))}
                        </div>
                    )}

                    {/* Error state */}
                    {!loading && error && (
                        <div className="flex flex-col items-center justify-center py-32 text-center">
                            <p className="text-[#A98F86] text-lg">{error}</p>
                        </div>
                    )}

                    {/* Empty state */}
                    {!loading && !error && projects.length === 0 && (
                        <div className="flex flex-col items-center justify-center py-32 text-center">
                            <p className="text-[#A98F86] text-lg">No projects to display yet.</p>
                        </div>
                    )}

                    {/* Project cards */}
                    {!loading && !error && projects.length > 0 && (
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-80px" }}
                            variants={staggerContainer}
                            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14"
                        >
                            {projects.map((project) => (
                                <motion.article key={project.id} variants={fadeInUp} className="group">
                                    <Link href={`/project/${project.id}`} className="block">
                                        <ProjectCardContent project={project} />
                                    </Link>
                                </motion.article>
                            ))}
                        </motion.div>
                    )}
                </div>
            </section>
        </main>
    );
}

// Card content — tông nâu-hồng, không viền
function ProjectCardContent({ project }: { project: Project }) {
    return (
        <>
            {/* Thumbnail */}
            <div className="relative aspect-square overflow-hidden bg-[#F0E6D9] mb-5">
                {project.thumbnail ? (
                    <Image
                        src={project.thumbnail}
                        alt={project.title}
                        fill
                        unoptimized
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center">
                        <span className="text-[#A98F86] text-sm">No image</span>
                    </div>
                )}
            </div>

            {/* Title */}
            <h2 className="text-lg font-bold text-[#4A3B36] leading-snug line-clamp-1">
                {project.title}
            </h2>

            {/* Description */}
            <p className="text-sm text-[#6B5B56] leading-relaxed mt-2 line-clamp-2">
                {project.description}
            </p>
        </>
    );
}