import type { Metadata } from "next";
import { papers } from "@/data/research";
import ResearchCard from "@/components/ResearchCard";
export const metadata: Metadata = {
  title: "Research",
  description:
    "Research publications by Shivapreetham on EEG signal processing, computer vision, and medical imaging — including a Best Paper Award at IEEE DSPA 2026.",
  alternates: { canonical: "/research" },
};

export default function ResearchPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <p className="eyebrow mb-2">Publications</p>
      <h1 className="text-2xl font-bold font-display mb-2">Research</h1>
      <p className="text-muted-foreground text-sm max-w-xl mb-8">
        Nine papers on EEG signal processing, computer vision, and medical imaging — one published with a Best Paper
        Award, two accepted, six under review.
      </p>
      <div className="grid sm:grid-cols-2 gap-4">
        {papers.map((paper) => (
          <ResearchCard key={paper.slug} paper={paper} />
        ))}
      </div>
    </main>
  );
}
