"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      id: "mvi-lab",
      title: "Research Intern",
      company: "Machine Vision and Intelligence Lab",
      location: "NIT Jamshedpur",
      period: "Dec 2024 - Present",
      current: true,
      logo: "/expirience-logo/machine_vision_and_intelligence_lab_logo.jpg",
      highlights: [
        "GNN, CNN, Transformer systems",
        "3 research papers",
        "NSFW edge model"
      ]
    },
    {
      id: "web-team",
      title: "Full Stack Developer",
      company: "Official Web Team, NIT Jamshedpur",
      location: "NIT Jamshedpur",
      period: "Dec 2023 - Present",
      current: true,
      logo: "/expirience-logo/nit-logo.jpg",
      highlights: [
        "6.8M+ traffic served",
        "20+ production merges",
        "Performance + accessibility"
      ]
    },
    {
      id: "flickerwall",
      title: "Software Development Intern",
      company: "Flickerwall",
      location: "Remote",
      period: "Oct 2025 - Jan 2026",
      current: false,
      logo: "/expirience-logo/flickerwall.svg",
      highlights: [
        "Go backend modules",
        "Cron jobs + API integrations",
        "React signage widgets"
      ]
    },
    {
      id: "iar-nitjsr",
      title: "Web Administrator",
      company: "Industry and Alumni Relations, NIT Jamshedpur",
      location: "NIT Jamshedpur",
      period: "Aug 2024 - Jan 2025",
      current: false,
      logo: "/expirience-logo/Industry-alumni-relations-nitjsr.jpg",
      highlights: [
        "Full-stack web development",
        "Administrative portal management",
        "Database management"
      ]
    }
  ];

  return (
    <section id="experience" className="py-12 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="flex items-center gap-2 mb-2">
            <Briefcase className="text-blue-400" size={24} />
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Experience
            </h2>
          </div>
          <p className="text-gray-500 text-sm">
            Research, internships, and campus positions
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-blue-500/60 via-cyan-400/40 to-gray-600/20" />
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-11 pb-3 last:pb-0"
            >
              <div className={`absolute left-4 top-5 -translate-x-1/2 w-3 h-3 rounded-full border-2 ${exp.current ? "bg-green-400 border-green-200 shadow-[0_0_0_4px_rgba(34,197,94,0.2)]" : "bg-gray-600 border-gray-400"}`} />

              <div className="group bg-gray-800/80 backdrop-blur-sm rounded-xl px-3 py-2.5 border border-gray-700 hover:border-blue-500 transition-all">
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <div className="min-w-0 md:w-[40%]">
                    <div className="flex items-center gap-2">
                      {exp.logo && (
                        <div className="relative w-6 h-6 rounded-md overflow-hidden bg-gray-700 border border-gray-600 flex-shrink-0">
                          <Image
                            src={exp.logo}
                            alt={`${exp.company} logo`}
                            fill
                            className="object-cover"
                            sizes="24px"
                          />
                        </div>
                      )}
                      <p className="text-blue-400 font-semibold text-sm truncate">
                        {exp.company}
                      </p>
                    </div>
                    <h3 className="text-sm md:text-base font-bold text-white group-hover:text-blue-400 transition-colors mt-1 truncate">
                      {exp.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-gray-500 md:w-[33%]">
                    <div className="flex items-center gap-1">
                      <Calendar size={12} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={12} />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-1.5 md:w-[27%] md:justify-end">
                    {exp.current && (
                      <span className="px-2 py-0.5 bg-green-500/20 text-green-400 rounded text-[10px] font-semibold whitespace-nowrap">
                        Current
                      </span>
                    )}
                    {exp.highlights.slice(0, 2).map((highlight: string) => (
                      <span
                        key={highlight}
                        className="px-1.5 py-0.5 rounded text-[10px] text-gray-300 bg-gray-700/80 border border-gray-600 whitespace-nowrap"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
