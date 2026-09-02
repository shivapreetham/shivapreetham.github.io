import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block rounded-lg border border-border bg-card p-4 hover:border-foreground/30 transition-colors"
    >
      <div className="flex items-start gap-3">
        {project.images.length > 0 && (
          <div className="relative w-11 h-11 rounded-md overflow-hidden border border-border shrink-0">
            <Image src={project.images[0]} alt="" fill className="object-cover" sizes="44px" />
          </div>
        )}
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-2">
            <h3 className="font-semibold text-sm truncate">{project.title}</h3>
            <span className="text-[11px] text-muted-foreground shrink-0">{project.date}</span>
          </div>
          <p className="text-xs text-muted-foreground mt-0.5">{project.subtitle}</p>
        </div>
      </div>
      <p className="text-sm text-muted-foreground mt-3 line-clamp-2">{project.description}</p>
      <div className="flex flex-wrap gap-1.5 mt-3">
        {project.techStack.slice(0, 4).map((tech) => (
          <span key={tech} className="px-1.5 py-0.5 text-[11px] rounded border border-border text-muted-foreground">
            {tech}
          </span>
        ))}
        {project.techStack.length > 4 && (
          <span className="text-[11px] text-muted-foreground">+{project.techStack.length - 4}</span>
        )}
      </div>
    </Link>
  );
}
