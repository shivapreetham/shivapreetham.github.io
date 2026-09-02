import type { Metadata } from "next";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
export const metadata: Metadata = {
  title: "Projects",
  description:
    "Full-stack platforms, AI/ML systems, and hackathon builds by Shivapreetham, including a Government of Jharkhand-adopted RAG chatbot and an elastic local-LLM serving daemon.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-2xl font-bold font-display mb-2">Projects</h1>
      <p className="text-muted-foreground text-sm max-w-xl mb-8">
        Full-stack platforms, AI/ML systems, and hackathon builds — from a government-adopted RAG chatbot to a
        local-LLM serving daemon published on PyPI.
      </p>
      <div className="grid sm:grid-cols-2 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </main>
  );
}
