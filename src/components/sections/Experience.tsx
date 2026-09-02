import Image from "next/image";

const experiences = [
  {
    id: "ets",
    title: "AI Accessibility Intern",
    company: "ETS",
    location: "Princeton, New Jersey, US · Remote",
    period: "May 2026 – Jul 2026",
    current: false,
    logo: "/expirience-logo/ets.jpg",
    description:
      "Prototyped a face-centering accessibility solution for AI-based assessment interfaces, including a research paper and working prototype targeted for a US patent filing. Led an accessibility audit of 18 AI chatbot platforms against WCAG 2.1/2.2, Section 508, and EN 301 549, informing internal ETS chatbot accessibility guidelines. Built an internal WCAG contrast-checker tool to automate color-contrast conformance checks.",
  },
  {
    id: "mvi-lab",
    title: "Research Intern",
    company: "Machine Vision and Intelligence Lab",
    location: "NIT Jamshedpur",
    period: "Dec 2025 – Present",
    current: true,
    logo: "/expirience-logo/machine_vision_and_intelligence_lab_logo.jpg",
    description:
      "Own the full model lifecycle across eight projects: data collection and auditing, PyTorch training on a single consumer GPU, evaluation and reporting. First author on six manuscripts.",
  },
  {
    id: "flickerwall",
    title: "Software Development Intern",
    company: "Flickerwall",
    location: "Remote",
    period: "Oct 2025 – Jan 2026",
    current: false,
    logo: "/expirience-logo/flickerwall.svg",
    description:
      "Multi-tenant subscription billing service in Go with Postgres and Redis, and an on-premise digital signage server with a Next.js admin dashboard.",
  },
  {
    id: "web-team",
    title: "Member, Web Team",
    company: "NIT Jamshedpur",
    location: "NIT Jamshedpur",
    period: "Feb 2025 – Present",
    current: true,
    logo: "/expirience-logo/web-team-nit-jsr.jpg",
    description:
      "Maintain the official NIT Jamshedpur website for critical changes. Built the NITJSR chatbot alongside fellow web team members, incorporated into the Jharkhand Government's GSCC scheme. Leading the migration of the website from MERN to Next.js.",
  },
  {
    id: "iar-nitjsr",
    title: "Web Administrator",
    company: "Industry and Alumni Relations, NIT Jamshedpur",
    location: "NIT Jamshedpur",
    period: "Aug 2024 – Jan 2026",
    current: false,
    logo: "/expirience-logo/Industry-alumni-relations-nitjsr.jpg",
    description: "Maintained the NITJAA alumni portal database, centralizing a scattered database with minimal redundancy.",
  },
  {
    id: "nss",
    title: "Member, Web Team",
    company: "National Service Scheme",
    location: "NIT Jamshedpur",
    period: "Nov 2023 – Nov 2024",
    current: false,
    logo: null,
    description: "Redesigned the website home page and fixed navbar bugs and issues.",
  },
];

const Experience = () => {
  return (
    <section>
      <h2 className="text-lg font-semibold font-display mb-4">Experience</h2>
      <div className="space-y-4">
        {experiences.map((exp) => (
          <div key={exp.id} className="flex gap-3">
            <div className="relative w-8 h-8 rounded-md overflow-hidden border border-border shrink-0 bg-muted">
              {exp.logo && <Image src={exp.logo} alt="" fill className="object-cover" sizes="32px" />}
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-sm font-semibold">{exp.title}</h3>
                {exp.current && (
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-brand-soft text-brand font-medium">
                    Current
                  </span>
                )}
              </div>
              <p className="text-xs text-muted-foreground">
                {exp.company} · {exp.location} · {exp.period}
              </p>
              <p className="text-sm text-muted-foreground mt-1">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
