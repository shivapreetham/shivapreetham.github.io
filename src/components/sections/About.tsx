import { FULL_NAME, SOCIAL_LINKS } from "@/lib/site";

const profiles = [
  { platform: "GitHub", href: SOCIAL_LINKS.github, handle: "@shivapreetham" },
  { platform: "LinkedIn", href: SOCIAL_LINKS.linkedin, handle: "Shivapreetham H S" },
  { platform: "LeetCode", href: SOCIAL_LINKS.leetcode, handle: "Knight" },
  { platform: "CodeChef", href: SOCIAL_LINKS.codechef, handle: "1671" },
  { platform: "Codeforces", href: SOCIAL_LINKS.codeforces, handle: "1404" },
];

const stats = [
  { label: "Research papers", value: "9" },
  { label: "Best Paper Award", value: "1" },
  { label: "Hackathon wins/finals", value: "5" },
  { label: "Problems solved", value: "1,500+" },
];

const About = () => {
  return (
    <section>
      <h2 className="text-lg font-semibold font-display mb-3">About</h2>
      <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
        <p>
          {FULL_NAME} is a Computer Science undergraduate at the National Institute of Technology (NIT) Jamshedpur,
          working as a machine learning engineer and researcher. He trains compact models that outperform much
          larger architectures and takes them the rest of the way into production — nine research papers, one
          published with a Best Paper Award at IEEE DSPA 2026.
        </p>
        <p>
          A habit that distinguishes his work is checking his own results: an audit of one of his own benchmarks
          found most of the evaluation set duplicated from training data, which invalidated the numbers the whole
          project had been reporting until it was rebuilt and re-measured.
        </p>
        <p>
          He also builds full-stack systems — a RAG chatbot adopted by the Government of Jharkhand, and RAMP, an
          elastic local-LLM serving daemon published on PyPI as{" "}
          <code className="text-xs px-1 py-0.5 rounded bg-muted">ramp-llm</code>.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-md border border-border p-3">
            <div className="text-lg font-bold font-display">{stat.value}</div>
            <div className="text-[11px] text-muted-foreground mt-0.5">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Profiles</h3>
        <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-sm">
          {profiles.map((profile) => (
            <a
              key={profile.platform}
              href={profile.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {profile.platform} <span className="text-xs">({profile.handle})</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
