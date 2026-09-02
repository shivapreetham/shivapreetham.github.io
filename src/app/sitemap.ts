import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { papers } from "@/data/research";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/projects", "/research", "/resume"].map((path) => ({
    url: `${SITE_URL}${path}`,
  }));

  const projectRoutes = projects.map((project) => ({
    url: `${SITE_URL}/projects/${project.slug}`,
  }));

  const researchRoutes = papers.map((paper) => ({
    url: `${SITE_URL}/research/${paper.slug}`,
  }));

  return [...staticRoutes, ...projectRoutes, ...researchRoutes];
}
