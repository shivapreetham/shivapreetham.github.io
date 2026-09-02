import Link from "next/link";
import { papers } from "@/data/research";
import ResearchCard from "@/components/ResearchCard";

const Research = () => {
  const highlighted = papers.slice(0, 4);

  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 py-10 border-t border-border">
      <div className="flex items-baseline justify-between mb-4">
        <h2 className="text-lg font-semibold font-display">Research</h2>
        <Link href="/research" className="text-xs text-muted-foreground hover:text-foreground">
          All research →
        </Link>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        {highlighted.map((paper) => (
          <ResearchCard key={paper.slug} paper={paper} />
        ))}
      </div>
    </section>
  );
};

export default Research;
