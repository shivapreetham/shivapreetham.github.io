"use client";

import { motion } from "framer-motion";
import { 
  Code2, 
  Globe, 
  Database, 
  Wrench, 
  Brain, 
  Smartphone 
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      skills: ["Python", "JavaScript", "TypeScript", "C", "C++", "Java"],
      color: "text-blue-500"
    },
    {
      title: "Web Development",
      icon: Globe,
      skills: ["React", "Next.js", "Node.js", "Express", "HTML", "CSS", "Tailwind CSS"],
      color: "text-green-500"
    },
    {
      title: "Backend & Database",
      icon: Database,
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Prisma", "Drizzle", "REST APIs", "WebSockets", "WebRTC"],
      color: "text-purple-500"
    },
    {
      title: "Tools & Platforms",
      icon: Wrench,
      skills: ["Git", "GitHub", "Docker", "Vercel", "Cloudflare", "AWS", "Kubernetes"],
      color: "text-orange-500"
    },
    {
      title: "AI & Machine Learning",
      icon: Brain,
      skills: ["OpenCV", "MediaPipe", "scikit-learn", "PyTorch", "HuggingFace", "Gemini API", "Cohere"],
      color: "text-red-500"
    },
    {
      title: "Networking & Systems",
      icon: Smartphone,
      skills: ["Socket.IO", "TCP/IP", "DNS", "TLS", "HTTP/HTTPS", "NAT Traversal", "STUN/TURN"],
      color: "text-cyan-500"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit of technologies and frameworks I use to build innovative solutions
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.title}
                variants={item}
                whileHover={{ 
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300 }
                }}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className={`p-2 rounded-lg bg-secondary mr-3`}>
                    <IconComponent className={category.color} size={24} />
                  </div>
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        delay: index * 0.1 + skillIndex * 0.05,
                        type: "spring",
                        stiffness: 200
                      }}
                      whileHover={{ 
                        scale: 1.1,
                        transition: { type: "spring", stiffness: 400 }
                      }}
                      className="px-3 py-1 bg-secondary/50 hover:bg-accent text-sm rounded-full border border-border/50 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Skills Progress Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Proficiency Levels</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { skill: "JavaScript/TypeScript", level: 90 },
              { skill: "React/Next.js", level: 95 },
              { skill: "Node.js/Express", level: 85 },
              { skill: "Python", level: 80 },
              { skill: "Database Design", level: 85 },
              { skill: "AI/ML Integration", level: 75 }
            ].map((item, index) => (
              <motion.div
                key={item.skill}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="space-y-2"
              >
                <div className="flex justify-between">
                  <span className="font-medium">{item.skill}</span>
                  <span className="text-muted-foreground">{item.level}%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="bg-gradient-to-r from-primary to-primary/80 h-2 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;