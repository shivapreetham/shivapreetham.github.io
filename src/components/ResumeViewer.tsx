"use client";

import { useState } from "react";
import { Download } from "lucide-react";

const resumes = [
  { id: "sde", label: "Software Engineering", path: "/resumes/Shivapreetham_s_resume_SDE.pdf" },
  { id: "ai-ds", label: "AI & Data Science", path: "/resumes/Shivapreetham_s_resume_AI_DS.pdf" },
  { id: "research", label: "Research", path: "/resumes/Shivapreetham_s_resume_research.pdf" },
];

export default function ResumeViewer() {
  const [active, setActive] = useState(resumes[0]);

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <div className="flex gap-1.5">
          {resumes.map((resume) => (
            <button
              key={resume.id}
              type="button"
              onClick={() => setActive(resume)}
              className={`text-sm px-3 py-1.5 rounded border transition-colors ${
                active.id === resume.id
                  ? "border-foreground text-foreground"
                  : "border-border text-muted-foreground hover:border-foreground/30"
              }`}
            >
              {resume.label}
            </button>
          ))}
        </div>
        <a
          href={active.path}
          download
          className="inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded border border-border hover:border-foreground/30"
        >
          <Download size={14} /> Download PDF
        </a>
      </div>
      <div className="rounded-lg border border-border overflow-hidden">
        <iframe src={active.path} title={`${active.label} resume`} className="w-full h-[80vh]" />
      </div>
    </div>
  );
}
