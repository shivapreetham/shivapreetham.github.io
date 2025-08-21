"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Star, Users, Calendar } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "NIT-JSR Hub",
      subtitle: "Student's Web Store and Campus Companion",
      description: "Comprehensive campus services platform with automated attendance tracking, peer marketplace, real-time communication systems, and AI-powered features serving 200+ active users.",
      techStack: ["Next.js", "Prisma ORM", "MongoDB", "Express", "NextAuth", "Pusher", "Stream.io"],
      highlights: [
        "O(n) scraping sync engine with 10-15 min refresh cycles",
        "Real-time AI messenger with anonymous chats",
        "WebRTC-based video conferencing",
        "Plugin-based extensible architecture"
      ],
      stats: { users: "200+", github: "Open Source" },
      date: "Apr 2025",
      image: "/projects/nit-hub.jpg",
      links: {
        github: "https://github.com/shivapreetham/nit-jsr-hub",
        live: "https://nitjsr-hub.vercel.app"
      }
    },
    {
      title: "Code-Fode",
      subtitle: "AI-Assisted Collaborative Code Editor",
      description: "Enterprise-grade collaborative IDE supporting 100+ concurrent users with AI-powered error analysis, real-time editing, and intelligent code suggestions using Monaco Editor.",
      techStack: ["Next.js", "Node.js", "Express", "MongoDB", "Socket.IO", "Cohere API", "Monaco Editor"],
      highlights: [
        "Sub-100ms latency with optimized WebSocket infrastructure",
        "AI-native development environment with intelligent analysis",
        "Real-time collaborative editing with conflict resolution",
        "Distributed session management for scalability"
      ],
      stats: { rank: "3rd/1,100+", event: "HaXplore-IIT-BHU" },
      date: "Jan 2025",
      image: "/projects/code-fode.jpg",
      links: {
        github: "https://github.com/shivapreetham/code-fode",
        live: "https://code-fode.vercel.app"
      }
    },
    {
      title: "SoulSync",
      subtitle: "Emotion-Aware AI Chat Application",
      description: "Multimodal emotion detection system combining facial expression analysis, text sentiment, and audio tone processing for context-aware AI responses with real-time speech integration.",
      techStack: ["Python", "PyTorch", "HuggingFace", "MediaPipe", "OpenCV", "Vosk", "Gradio", "Flask"],
      highlights: [
        "Multimodal emotion detection (facial, text, audio)",
        "Real-time speech-to-text and text-to-speech",
        "Emotion-aware LLM responses with contextual memory",
        "Configurable inference parameters for optimization"
      ],
      stats: { accuracy: "92%", modalities: "3" },
      date: "Apr 2025",
      image: "/projects/soulsync.jpg",
      links: {
        github: "https://github.com/shivapreetham/soulsync"
      }
    },
    {
      title: "Ishara",
      subtitle: "Indian Sign-Language Recognition",
      description: "Real-time detection of 35 ISL gestures using MediaPipe feature extraction and optimized Random Forest model with hyperparameter tuning for practical deployment.",
      techStack: ["MediaPipe", "OpenCV", "Albumentations", "Scikit-learn", "Gemini API", "tkinter"],
      highlights: [
        "Real-time detection of 35 ISL gestures",
        "End-to-end pipeline from data capture to inference",
        "Multilingual text-to-sign and voice input support",
        "Optimized for low-latency desktop deployment"
      ],
      stats: { gestures: "35", accuracy: "94%" },
      date: "May 2025",
      image: "/projects/ishara.jpg",
      links: {
        github: "https://github.com/shivapreetham/ishara"
      }
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

  const projectItem = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="projects" className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work in full-stack development, AI/ML, and collaborative platforms
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={projectItem}
              className="group"
            >
              <div className={`bg-card border border-border rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } flex flex-col lg:flex`}>
                
                {/* Project Image/Visual */}
                <div className="lg:w-1/2 relative overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
                  <div className="aspect-video lg:aspect-auto lg:h-full flex items-center justify-center p-8">
                    <div className="text-6xl font-bold text-muted-foreground/20">
                      {project.title.split('')[0]}{project.title.split('').find(c => c === '-') ? project.title.split('-')[1][0] : project.title.split(' ')[1]?.[0] || ''}
                    </div>
                  </div>
                  {/* Floating stats */}
                  <div className="absolute top-4 right-4 space-y-2">
                    {project.stats.users && (
                      <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                        <Users size={14} />
                        <span>{project.stats.users}</span>
                      </div>
                    )}
                    {project.stats.rank && (
                      <div className="bg-yellow-500 text-yellow-50 px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                        <Star size={14} />
                        <span>{project.stats.rank}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Project Details */}
                <div className="lg:w-1/2 p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Calendar size={16} />
                      <span>{project.date}</span>
                    </div>
                    <div className="flex space-x-2">
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-secondary hover:bg-accent transition-colors"
                        >
                          <Github size={20} />
                        </a>
                      )}
                      {project.links.live && (
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-secondary hover:bg-accent transition-colors"
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-primary font-medium mb-4">{project.subtitle}</p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="font-semibold mb-3">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-secondary/70 text-sm rounded-full border border-border/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* More Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/shivapreetham"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 border border-border rounded-lg hover:bg-accent transition-colors font-medium"
          >
            View All Projects on GitHub
            <Github className="ml-2" size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;