"use client";

import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { getPublicProjects } from "@/services/projectService";
import { Project } from "@/types/project";

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
  visible: { transition: { staggerChildren: 0.12 } },
};

// Số project hiển thị ở homepage (preview), phần còn lại xem ở /project
const FEATURED_COUNT = 6;

// Skeleton card — tông ấm, khớp bảng màu
function SkeletonCard() {
  return (
    <div className="animate-pulse">
      <div className="relative aspect-square overflow-hidden bg-[#F0E6D9] mb-5" />
      <div className="h-6 w-3/4 rounded bg-[#F0E6D9] mb-2" />
      <div className="h-4 w-full rounded bg-[#F0E6D9]" />
    </div>
  );
}

export default function WorksSection() {
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

  const featured = projects.slice(0, FEATURED_COUNT);

  return (
    <section
      id="works"
      className="relative py-0 pb-20 px-6 lg:px-12 xl:px-20 bg-[#FDF5EF] overflow-hidden"
    >
      {/* Paper texture background */}
      <div
        className="absolute inset-0 opacity-45 pointer-events-none"
        style={{
          backgroundImage: `url('/images/paper-texture.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Banner tiêu đề — dựng bằng CSS thật, không dùng ảnh */}
      <div className="relative mb-14">
        {/* Dải ren trên */}
        <div
          className="relative z-10 w-screen left-1/2 -translate-x-1/2 h-10 bg-repeat-x"
          style={{
            backgroundImage: `url('/images/lace-border.png')`,
            backgroundSize: "auto 100%",
          }}
        />

        {/* Ruy băng nâu chứa tiêu đề */}
        <div className="relative z-10 w-screen left-1/2 -translate-x-1/2 bg-[#6B4A3F] py-8 text-center">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
            className="text-lg sm:text-lg italic text-[#F6C8D3]"
          >
            Case Study
          </motion.p>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-3xl sm:text-2xl font-bold uppercase text-[#F5D8C1]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            My Project
          </motion.h2>
        </div>

        {/* Dải ren dưới */}
        <div
          className="relative z-10 w-screen left-1/2 -translate-x-1/2 h-10 bg-repeat-x"
          style={{
            backgroundImage: `url('/images/lace-border.png')`,
            backgroundSize: "auto 100%",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Loading state */}
        {loading && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {Array.from({ length: FEATURED_COUNT }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        )}

        {/* Error state */}
        {!loading && error && (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <p className="text-[#A98F86] text-base">{error}</p>
          </div>
        )}

        {/* Empty state */}
        {!loading && !error && featured.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <p className="text-[#A98F86] text-base">No projects to display yet.</p>
          </div>
        )}

        {/* Project Cards — cùng UI với /project */}
        {!loading && !error && featured.length > 0 && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 items-stretch"
          >
            {featured.map((project) => (
              <motion.article key={project.id} variants={fadeInUp} className="group h-full">
                <Link
                  href={`/project/${project.id}`}
                  className="flex flex-col h-full transition-all duration-500 group-hover:-translate-y-1"
                >
                    {/* Ảnh */}
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
                    <h3 className="text-lg font-bold text-[#4A3B36] leading-snug line-clamp-1">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-[#6B5B56] leading-relaxed mt-2 line-clamp-2">
                      {project.description}
                    </p>
                  </Link>
                </motion.article>
            ))}
          </motion.div>
        )}

        {/* View all projects */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="flex justify-center mt-16"
        >
          <Link
            href="/project"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
            className="inline-flex items-center gap-2 bg-transparent text-[#C97B93] border border-[#C97B93] px-8 py-3.5 rounded-none text-sm font-bold tracking-[0.2em] uppercase hover:bg-[#C97B93] hover:text-white transition-all duration-300"
          >
            View all projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
}