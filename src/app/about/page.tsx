import type { Metadata } from "next";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Responsibilities from "@/components/sections/Responsibilities";
import Achievements from "@/components/sections/Achievements";

export const metadata: Metadata = {
  title: "About",
  description:
    "Shivapreetham H S is a Computer Science undergraduate at NIT Jamshedpur, working as a machine learning engineer and researcher with nine research papers and production ML systems.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 space-y-10">
      <About />
      <Skills />
      <Experience />
      <Responsibilities />
      <Achievements />
    </main>
  );
}
