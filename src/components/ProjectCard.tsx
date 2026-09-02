import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="card-hover group block rounded-lg border border-border bg-card p-4"
    >
      <div className="flex items-start gap-3">
        {project.images.length > 0 && (
          <div className="relative w-11 h-11 rounded-md overflow-hidden border border-border shrink-0">
            <Image src={project.images[0]} alt="" fill className="object-cover" sizes="44px" />
          </div>
        )}
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-2">
            <h3 className="font-semibold text-sm truncate group-hover:text-brand transition-colors">{project.title}</h3>
            <span className="text-[11px] text-muted-foreground shrink-0">{project.date}</span>
          </div>
          <p className="text-xs text-muted-foreground mt-0.5">{project.subtitle}</p>
        </div>
      </div>
      <p className="text-sm text-muted-foreground mt-3 line-clamp-2">{project.description}</p>
      <p className="text-[11px] text-muted-foreground/70 mt-3">
        {project.techStack.slice(0, 4).join(" · ")}
        {project.techStack.length > 4 && ` +${project.techStack.length - 4}`}
      </p>
    </Link>
  );
}
