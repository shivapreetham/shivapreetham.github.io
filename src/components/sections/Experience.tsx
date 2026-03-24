"use client";

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
      description: "Working on machine vision and intelligence research projects.",
      highlights: [
        "Computer vision research",
        "AI/ML model development",
        "Research paper implementation"
      ]
    },
    {
      id: "web-team",
      title: "Full Stack Developer",
      company: "Official Web Team, NIT Jamshedpur",
      location: "NIT Jamshedpur",
      period: "Dec 2023 - Present",
      current: true,
      description: "Maintained and optimized the official institute website serving 6.8M+ users, delivering 20+ production merges improving performance and accessibility.",
      highlights: [
        "6.8M+ user traffic management",
        "20+ production deployments",
        "Performance & accessibility optimization"
      ]
    },
    {
      id: "flickerwall",
      title: "Full Stack Developer Intern",
      company: "Flickerwall",
      location: "Remote",
      period: "Oct 2024 - Jan 2025",
      current: false,
      description: "Engineered microservice backend systems and developed lightweight widgets.",
      highlights: [
        "Microservice backend systems (Go)",
        "Lightweight CMS widgets (React)",
        "Backend web development"
      ]
    },
    {
      id: "iar-nitjsr",
      title: "Web Administrator",
      company: "Industry and Alumni Relations, NIT Jamshedpur",
      location: "NIT Jamshedpur",
      period: "Aug 2024 - Jan 2025",
      current: false,
      description: "Full stack web development for college administration.",
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

        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-gray-800 rounded-lg p-4 border border-gray-700 hover:border-blue-500 transition-all"
            >
              <div className="flex items-start gap-2 mb-2">
                <div className="mt-1">
                  <div className={`w-2 h-2 rounded-full ${exp.current ? 'bg-green-500 animate-pulse' : 'bg-gray-600'}`}></div>
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-blue-400 font-semibold text-sm">
                        {exp.company}
                      </p>
                    </div>
                    {exp.current && (
                      <span className="px-2 py-0.5 bg-green-500/20 text-green-400 rounded text-xs font-semibold whitespace-nowrap">
                        Current
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-3 text-xs text-gray-500 mt-2">
                    <div className="flex items-center gap-1">
                      <Calendar size={12} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={12} />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <p className="text-gray-400 text-xs mt-2">
                    {exp.description}
                  </p>
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
