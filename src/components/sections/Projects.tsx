import Link from "next/link";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

const Projects = () => {
  const featured = projects.filter((p) => p.featured).slice(0, 4);

  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 py-10 border-t border-border">
      <div className="flex items-baseline justify-between mb-4">
        <h2 className="text-lg font-semibold font-display">Featured projects</h2>
        <Link href="/projects" className="text-xs text-muted-foreground hover:text-foreground">
          All projects →
        </Link>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        {featured.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
