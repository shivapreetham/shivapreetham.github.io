import Link from "next/link";
import type { Paper } from "@/data/research";

export default function ResearchCard({ paper }: { paper: Paper }) {
  return (
    <Link
      href={`/research/${paper.slug}`}
      className="card-hover group block rounded-lg border border-border bg-card p-4"
    >
      <div className="flex items-center justify-between gap-2 mb-1.5">
        <span className="text-[11px] px-1.5 py-0.5 rounded bg-brand-soft text-brand font-medium">
          {paper.status}
        </span>
        <span className="text-[11px] text-muted-foreground">{paper.year}</span>
      </div>
      <h3 className="font-semibold text-sm leading-snug group-hover:text-brand transition-colors">{paper.title}</h3>
      <p className="text-xs text-muted-foreground mt-1">{paper.venue}</p>
      {paper.award && (
        <p className="text-xs text-brand font-medium mt-1">{paper.award}</p>
      )}
      <p className="text-sm text-muted-foreground mt-2.5 line-clamp-3">{paper.description}</p>
    </Link>
  );
}
