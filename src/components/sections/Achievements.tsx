const achievements = [
  {
    title: "Best Paper Award",
    detail: "28th International DSPA Conference, Russia (IEEE) — \"Spectral-Separable Self-Attention for EEG Decoding\"",
    date: "2026",
  },
  {
    title: "Amazon ML Summer School 2026",
    detail: "Selected among 1.34 lakh applicants",
    date: "2026",
  },
  {
    title: "Meta PyTorch OpenEnv",
    detail: "Finalist of 31,000+",
    date: "2026",
  },
  {
    title: "HaXplore Hackathon — IIT BHU",
    detail: "3rd place among 1,100+ teams — CodeFode",
    date: "Feb 2025",
  },
  {
    title: "Edge AI Hackathon — Qualcomm",
    detail: "Top 10 finalist among 1,700+ teams — SoulSync",
    date: "Jun 2025",
  },
  {
    title: "Web Team Hackathon — NIT Jamshedpur",
    detail: "1st place — Professor Portfolio Builder",
    date: "Jan 2025",
  },
  {
    title: "1,500+ competitive programming problems solved",
    detail: "LeetCode, CodeChef, Codeforces, HackerRank",
    date: "2024–2025",
  },
];

const Achievements = () => {
  return (
    <section>
      <h2 className="text-lg font-semibold font-display mb-4">Achievements</h2>
      <ul className="space-y-2.5">
        {achievements.map((item) => (
          <li key={item.title} className="flex justify-between gap-4 text-sm">
            <div>
              <span className="font-medium">{item.title}</span>
              <span className="text-muted-foreground"> — {item.detail}</span>
            </div>
            <span className="text-xs text-muted-foreground shrink-0">{item.date}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Achievements;
