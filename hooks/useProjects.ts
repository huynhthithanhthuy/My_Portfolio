"use client";

import { useEffect, useState } from "react";
import { getPublicProjects } from "@/services/projectService";
import { Project } from "@/types/project";

interface UseProjectsResult {
  projects: Project[];
  loading: boolean;
  error: string | null;
}

export function useProjects(): UseProjectsResult {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    getPublicProjects()
      .then((data) => {
        if (!cancelled) setProjects(data);
      })
      .catch((err) => {
        if (!cancelled) setError(err.message ?? "Failed to load projects");
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return { projects, loading, error };
}
