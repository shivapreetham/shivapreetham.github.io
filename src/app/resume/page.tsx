import type { Metadata } from "next";
import ResumeViewer from "@/components/ResumeViewer";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Resumes of Shivapreetham H S — Computer Science undergraduate at NIT Jamshedpur — in Software Engineering, AI & Data Science, and Research variants.",
  alternates: { canonical: "/resume" },
};

export default function ResumePage() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-2xl font-bold font-display mb-6">Resume</h1>
      <ResumeViewer />
    </main>
  );
}
