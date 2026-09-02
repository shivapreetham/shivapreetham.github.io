import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getPaper, papers } from "@/data/research";
import { FULL_NAME, SITE_URL } from "@/lib/site";

export function generateStaticParams() {
  return papers.map((paper) => ({ slug: paper.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const paper = getPaper(slug);
  if (!paper) return {};
  return {
    title: paper.title,
    description: paper.description,
    alternates: { canonical: `/research/${paper.slug}` },
  };
}

export default async function PaperPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const paper = getPaper(slug);
  if (!paper) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    headline: paper.title,
    description: paper.description,
    author: {
      "@type": "Person",
      name: FULL_NAME,
      url: SITE_URL,
    },
    ...(paper.doi ? { sameAs: paper.doi } : {}),
  };

  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Link href="/research" className="text-xs text-muted-foreground hover:text-brand">
        ← All research
      </Link>

      <div className="flex items-center justify-between gap-2 mt-4 mb-2">
        <span className="text-[11px] px-1.5 py-0.5 rounded bg-brand-soft text-brand font-medium">
          {paper.status}
        </span>
        <span className="text-[11px] text-muted-foreground">{paper.year}</span>
      </div>

      <h1 className="text-2xl font-bold font-display leading-snug">{paper.title}</h1>
      <p className="text-muted-foreground text-sm mt-1.5">{paper.venue}</p>
      <p className="text-xs text-muted-foreground mt-0.5">{paper.authorPosition}</p>
      {paper.award && (
        <p className="text-sm text-brand font-medium mt-2">{paper.award}</p>
      )}

      <p className="text-sm leading-relaxed mt-6 mb-6">{paper.description}</p>

      <div className="flex flex-wrap gap-1.5 mb-6">
        {paper.tags.map((tag) => (
          <span key={tag} className="px-2 py-0.5 text-xs rounded border border-border text-muted-foreground">
            {tag}
          </span>
        ))}
      </div>

      {paper.doi && (
        <a
          href={paper.doi}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm px-3 py-1.5 rounded border border-border hover:border-brand hover:text-brand transition-colors"
        >
          View DOI
        </a>
      )}
    </main>
  );
}
