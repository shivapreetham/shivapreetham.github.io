import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink, Package } from "lucide-react";
import { getProject, projects } from "@/data/projects";
import { pageTitle, FULL_NAME, SITE_URL } from "@/lib/site";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: pageTitle(project.title),
      description: project.description,
      images: project.images[0] ? [project.images[0]] : undefined,
    },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    name: project.title,
    description: project.description,
    programmingLanguage: project.techStack,
    codeRepository: project.links.github,
    author: {
      "@type": "Person",
      name: FULL_NAME,
      url: SITE_URL,
    },
  };

  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Link href="/projects" className="text-xs text-muted-foreground hover:text-foreground">
        ← All projects
      </Link>

      <div className="flex items-start gap-4 mt-4 mb-2">
        {project.images.length > 0 && (
          <div className="relative w-14 h-14 rounded-lg overflow-hidden border border-border shrink-0">
            <Image src={project.images[0]} alt="" fill className="object-cover" sizes="56px" />
          </div>
        )}
        <div>
          <h1 className="text-2xl font-bold font-display">{project.title}</h1>
          <p className="text-muted-foreground text-sm mt-1">{project.subtitle}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground mb-6">
        <span>{project.date}</span>
        <span>{project.impact}</span>
      </div>

      <p className="text-sm leading-relaxed mb-6">{project.description}</p>

      <section className="mb-6">
        <h2 className="text-sm font-semibold mb-2">Highlights</h2>
        <ul className="space-y-1.5 text-sm text-muted-foreground">
          {project.features.map((feature) => (
            <li key={feature} className="flex gap-2">
              <span className="text-muted-foreground/50">—</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-sm font-semibold mb-2">Stack</h2>
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <span key={tech} className="px-2 py-0.5 text-xs rounded border border-border text-muted-foreground">
              {tech}
            </span>
          ))}
        </div>
      </section>

      {project.needsWriteup && (
        <p className="text-xs text-muted-foreground/60 italic mb-6">
          {/* TODO: write-up — expand with problem, approach, and results narrative */}
          Full write-up coming soon.
        </p>
      )}

      {project.images.length > 1 && (
        <section className="mb-6">
          <div className="grid grid-cols-2 gap-2">
            {project.images.slice(1).map((image) => (
              <div key={image} className="relative aspect-video rounded-md overflow-hidden border border-border">
                <Image src={image} alt="" fill className="object-cover" sizes="(max-width: 640px) 50vw, 25vw" />
              </div>
            ))}
          </div>
        </section>
      )}

      <div className="flex flex-wrap gap-3">
        {project.links.github && (
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded border border-border hover:border-foreground/30"
          >
            <Github size={14} /> Code
          </a>
        )}
        {project.links.live && (
          <a
            href={project.links.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded border border-border hover:border-foreground/30"
          >
            <ExternalLink size={14} /> Live
          </a>
        )}
        {project.links.pypi && (
          <a
            href={project.links.pypi}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded border border-border hover:border-foreground/30"
          >
            <Package size={14} /> PyPI
          </a>
        )}
      </div>
    </main>
  );
}
