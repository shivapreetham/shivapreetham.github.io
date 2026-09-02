import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { FULL_NAME, SOCIAL_LINKS } from "@/lib/site";

const Hero = () => {
  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 pt-14 pb-10">
      <div className="flex flex-col sm:flex-row items-start gap-6">
        <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-brand shrink-0">
          <Image src="/DP.jpg" alt={FULL_NAME} fill className="object-cover" priority />
        </div>

        <div className="flex-1">
          <p className="eyebrow mb-2">Software Engineer · ML Researcher</p>
          <h1 className="text-2xl font-bold font-display">{FULL_NAME}</h1>
          <p className="text-muted-foreground text-sm mt-1">
            Computer Science undergraduate at NIT Jamshedpur.
          </p>

          <p className="text-sm leading-relaxed mt-4 max-w-xl">
            I build production systems (a RAG chatbot adopted by the Government of Jharkhand, an elastic local-LLM
            proxy published on PyPI) and publish research on EEG signal processing and computer vision — nine
            papers, one with a Best Paper Award at IEEE DSPA 2026.
          </p>

          <div className="flex flex-wrap gap-3 mt-6">
            <Link
              href="/projects"
              className="text-sm px-3 py-1.5 rounded bg-brand text-brand-foreground hover:opacity-90 transition-opacity"
            >
              View projects
            </Link>
            <Link
              href="/research"
              className="text-sm px-3 py-1.5 rounded border border-border hover:border-brand hover:text-brand transition-colors"
            >
              View research
            </Link>
            <Link
              href="/resume"
              className="inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded border border-border hover:border-brand hover:text-brand transition-colors"
            >
              <Download size={14} /> Resume
            </Link>
          </div>

          <div className="flex gap-4 mt-5 text-muted-foreground">
            <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github size={18} className="hover:text-brand transition-colors" />
            </a>
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin size={18} className="hover:text-brand transition-colors" />
            </a>
            <a href={`mailto:${SOCIAL_LINKS.email}`} aria-label="Email">
              <Mail size={18} className="hover:text-brand transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
