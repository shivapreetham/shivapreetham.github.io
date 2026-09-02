const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "JavaScript", "TypeScript", "C", "C++", "Java", "Go", "SQL"],
  },
  {
    title: "ML / DL",
    skills: ["PyTorch", "TensorFlow", "ONNX Runtime", "scikit-learn", "LightGBM", "XGBoost", "MNE", "Hugging Face", "LangChain"],
  },
  {
    title: "MLOps",
    skills: ["MLflow", "Prometheus + Grafana", "Docker", "GitHub Actions CI", "Drift Detection (KS-test, Evidently)"],
  },
  {
    title: "Web Development",
    skills: ["React", "Next.js", "Node.js", "Express", "REST", "WebSockets", "Tailwind CSS"],
  },
  {
    title: "Data & Backend",
    skills: ["MongoDB", "PostgreSQL", "Redis", "Pinecone", "Prisma", "Drizzle"],
  },
  {
    title: "Statistics",
    skills: ["ROC comparison", "Bootstrap confidence intervals", "Paired significance testing", "Leakage/confound auditing"],
  },
];

const Skills = () => {
  return (
    <section>
      <h2 className="text-lg font-semibold font-display mb-4">Technical Skills</h2>
      <div className="grid sm:grid-cols-2 gap-4">
        {skillCategories.map((category) => (
          <div key={category.title}>
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1.5">
              {category.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{category.skills.join(" · ")}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
