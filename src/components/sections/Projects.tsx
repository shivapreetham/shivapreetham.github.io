"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Brain, Globe, Code, Filter, Sparkles, X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects = [
    {
      id: "nitjsr-chatbot",
      title: "NITJSR Chatbot",
      subtitle: "Government of Jharkhand Adopted RAG System",
      description: "Production RAG chatbot adopted by Government of Jharkhand serving NIT Jamshedpur students. Features Cohere embeddings, Pinecone vector database, and Gemini generation with LSH-based caching.",
      techStack: ["Python", "Cohere v3", "Pinecone", "Gemini", "MongoDB", "Redis", "Puppeteer", "FastAPI"],
      features: [
        "Government of Jharkhand official adoption",
        "RAG architecture with 1024-dim Cohere embeddings",
        "LSH-based response caching for performance",
        "MongoDB change tracking ledger"
      ],
      stats: { adoption: "Govt", type: "RAG System" },
      date: "2025",
      images: [
        "/RAG-chatbot/nitjsr-chatbot.png",
        "/RAG-chatbot/architecture.png",
        "/RAG-chatbot/workflow.png",
        "/RAG-chatbot/gscc.png"
      ],
      links: {
        github: "https://github.com/shivapreetham/nitjsr-chatbot"
      },
      category: "AI/ML",
      impact: "Government adoption for official deployment",
      featured: true
    },
    {
      id: "nitjsr-hub",
      title: "NIT-JSR Hub",
      subtitle: "Comprehensive Student Platform",
      description: "Full-stack platform serving NIT Jamshedpur students with marketplace, real-time chat, video conferencing, and automated attendance tracking. Built with microservices architecture.",
      techStack: ["Next.js", "TypeScript", "MongoDB", "Prisma", "NextAuth.js", "Pusher", "Stream.io", "Express.js"],
      features: [
        "Real-time P2P marketplace with 200+ active users",
        "Automated attendance tracking with web scraping",
        "Video conferencing with Stream.io integration",
        "Anonymous messaging system"
      ],
      stats: { users: "200+", type: "Full-Stack" },
      date: "2025",
      images: [
        "/nitjsr-hub/home-page.png",
        "/nitjsr-hub/market-place.png",
        "/nitjsr-hub/chat.png",
        "/nitjsr-hub/video-calls.png",
        "/nitjsr-hub/attendance-dashboard.png",
        "/nitjsr-hub/architecture.png"
      ],
      links: {
        github: "https://github.com/shivapreetham/nit-jsr-hub",
        live: "https://nit-jsr-hub-v1.vercel.app",
        design: "https://app.eraser.io/workspace/Apx9i6oQtdCXhSVASqn2"
      },
      category: "Platform",
      impact: "Serving 200+ students daily",
      featured: true
    },
    {
      id: "codefode",
      title: "CodeFode AI Editor",
      subtitle: "Collaborative Code Editor",
      description: "Real-time collaborative code editor with whiteboard integration and multi-user editing capabilities. Won 3rd place at HaXplore-IIT-BHU among 1,100+ participants.",
      techStack: ["Next.js", "TypeScript", "Express.js", "Socket.IO", "MongoDB", "Monaco Editor", "Material-UI"],
      features: [
        "Real-time collaborative editing with conflict resolution",
        "Whiteboard integration for visual collaboration",
        "Multi-language syntax highlighting",
        "Live code sharing and execution"
      ],
      stats: { rank: "3rd/1,100+", type: "Collaborative Tool" },
      date: "2025",
      images: [
        "/haxplore/haxplore-code-fode-winning-team.jpg",
        "/haxplore/im1.png",
        "/haxplore/im2.png"
      ],
      links: {
        github: "https://github.com/shivapreetham/CodeFode-AI-code-editor",
        live: "https://code-fode-ai-code-editor.vercel.app/"
      },
      category: "Platform",
      impact: "Hackathon winning solution",
      featured: true
    },
    {
      id: "soulsync",
      title: "SoulSync",
      subtitle: "Emotion-Aware AI Companion",
      description: "Multimodal AI system analyzing facial expressions, voice tone, and text sentiment for context-aware responses. Features real-time emotion detection and adaptive conversation.",
      techStack: ["Python", "MediaPipe", "OpenCV", "HuggingFace", "Vosk", "PyAudio", "Gradio", "Transformers"],
      features: [
        "Real-time facial expression analysis using MediaPipe",
        "Voice-to-text and sentiment analysis integration",
        "Offline processing for complete privacy",
        "Multiple language model backends support"
      ],
      stats: { stars: "3", type: "Computer Vision" },
      date: "2025",
      images: [
        "/SOUL-SYNC-qualcomm-hack/455238344-ff21e6e6-4ae6-4e20-9aeb-be2626f7fbf9.png",
        "/SOUL-SYNC-qualcomm-hack/soul-sync-team.JPG",
        "/SOUL-SYNC-qualcomm-hack/476A1044.JPG",
        "/SOUL-SYNC-qualcomm-hack/476A1079.JPG"
      ],
      links: {
        github: "https://github.com/shivapreetham/SoulSync"
      },
      category: "AI/ML",
      impact: "Innovative human-AI interaction"
    },
    {
      id: "ishara",
      title: "Indian Sign Language Detection",
      subtitle: "Accessibility AI Solution",
      description: "Computer vision system supporting 35 ISL gestures for hearing-impaired communication. Features voice-to-sign conversion and real-time gesture recognition.",
      techStack: ["Python", "MediaPipe", "scikit-learn", "OpenCV", "Google Speech Recognition", "Tkinter"],
      features: [
        "Real-time detection of 35 ISL gestures",
        "Voice-to-sign conversion with 60% confidence threshold",
        "Data augmentation with 100 images per class",
        "User-friendly GUI for seamless interaction"
      ],
      stats: { accuracy: "94%", type: "Accessibility" },
      date: "2024",
      images: [
        "/ishara/1.png",
        "/ishara/live-demo.png",
        "/ishara/accuracy-of-predictions.png",
        "/ishara/gemini-story-interpretation.png",
        "/ishara/feature-index-of-points.png"
      ],
      links: {
        github: "https://github.com/shivapreetham/indian-sign-language-detection"
      },
      category: "AI/ML",
      impact: "Empowering accessibility"
    },
    {
      id: "agentic-yt-video-gen",
      title: "Agentic YouTube Video Generator",
      subtitle: "Multi-Agent AI Pipeline on Akash Network",
      description: "Autonomous video generation pipeline orchestrating 5 LLM agents (script, voiceover, images, music, rendering). Deployed on Akash Network with cost optimization reducing expenses from $15/day to $3/day.",
      techStack: ["Python", "Gemini", "ElevenLabs", "Pollinations", "FFmpeg", "Akash Network", "Job Queue"],
      features: [
        "Multi-agent orchestration with 5 sequential steps",
        "Cost optimization: $15/day → $3/day (80% reduction)",
        "Job queue management preventing memory exhaustion",
        "100+ videos generated with 99% success rate"
      ],
      stats: { videos: "100+", type: "Multi-Agent" },
      date: "2025",
      images: [
        "/agentic-yt/demo.png"
      ],
      links: {
        github: "https://github.com/shivapreetham/agentic-yt-video-gen"
      },
      category: "AI/ML",
      impact: "Autonomous agent orchestration"
    },
    {
      id: "green-path-optimizer",
      title: "Green Path Optimizer",
      subtitle: "Multi-Objective TSP Solver",
      description: "Eco-friendly route optimizer using Google OR-Tools for multi-objective optimization (time + emissions + AQI). Features constraint-based solving with Redis caching for performance.",
      techStack: ["Python", "Google OR-Tools", "Redis", "Google Maps API", "Open-Meteo API", "FastAPI"],
      features: [
        "Multi-objective optimization (time, emissions, AQI)",
        "Google OR-Tools constraint solving",
        "External API integration (Maps, Weather)",
        "Redis caching for route optimization"
      ],
      stats: { waypoints: "50+", type: "Optimization" },
      date: "2024",
      images: [
        "/green-path/eco-routing.png",
        "/green-path/order.png",
        "/green-path/order-batching.png",
        "/green-path/client-side-products.png"
      ],
      links: {
        github: "https://github.com/shivapreetham/Green_path_optimizer"
      },
      category: "Platform",
      impact: "Environmental optimization"
    },
    {
      id: "shatterbox",
      title: "Shatterbox",
      subtitle: "Anonymous Social Platform",
      description: "Real-time anonymous chat application for NIT Jamshedpur students with photo sharing and group management capabilities.",
      techStack: ["Next.js", "TypeScript", "Pusher.js", "MongoDB", "Prisma", "Zustand", "Supabase"],
      features: [
        "Anonymous messaging without registration",
        "Real-time photo sharing capabilities",
        "Group management and moderation tools",
        "Campus-specific social networking"
      ],
      stats: { users: "500+", type: "Social Platform" },
      date: "2024",
      images: [
        "/shatterbox/Screenshot 2025-09-13 025221.png",
        "/shatterbox/Screenshot 2025-09-13 025301.png",
        "/shatterbox/Screenshot 2025-09-13 025324.png"
      ],
      links: {
        github: "https://github.com/shivapreetham/shatterbox",
        live: "https://shatterboxv3.vercel.app"
      },
      category: "Platform",
      impact: "Campus social engagement"
    },
    {
      id: "professor-portfolio",
      title: "Professor Portfolio Builder",
      subtitle: "No-Code Portfolio Platform",
      description: "Professional portfolio-building platform enabling academics to create stunning portfolios without coding knowledge. Features real-time preview and customizable components.",
      techStack: ["Next.js", "TailwindCSS", "PostgreSQL", "Drizzle ORM", "TypeScript"],
      features: [
        "Drag-and-drop portfolio builder",
        "Real-time preview functionality",
        "Pre-built customizable components",
        "Professional templates for academics"
      ],
      stats: { templates: "10+", type: "No-Code Tool" },
      date: "2024",
      images: [
        "/professor-portfolio/Screenshot 2025-09-13 022218.png",
        "/professor-portfolio/Screenshot 2025-09-13 022245.png",
        "/professor-portfolio/Screenshot 2025-09-13 022349.png",
        "/professor-portfolio/Screenshot 2025-09-13 022420.png"
      ],
      links: {
        github: "https://github.com/shivapreetham/professor-portfolio",
        live: "https://webteam-project.vercel.app"
      },
      category: "Platform",
      impact: "Democratizing web presence"
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "AI/ML":
        return Brain;
      case "Platform":
        return Globe;
      default:
        return Code;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "AI/ML":
        return "from-green-500 to-emerald-500";
      case "Platform":
        return "from-blue-500 to-cyan-500";
      default:
        return "from-purple-500 to-pink-500";
    }
  };

  const categories = ["All", "AI/ML", "Platform"];
  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full mb-6"
          >
            <Code className="w-5 h-5 text-blue-400" />
            <span className="text-sm font-medium text-blue-300">Featured Projects</span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Building Digital Solutions
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            A showcase of full-stack applications, AI/ML experiments, and platforms serving thousands of users
          </p>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center gap-3 flex-wrap"
          >
            <div className="flex items-center gap-2 text-gray-400">
              <Filter size={16} />
              <span className="text-sm">Filter:</span>
            </div>
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-500/30'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => {
            const IconComponent = getCategoryIcon(project.category);

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => {
                  setSelectedProject(project);
                  setCurrentImageIndex(0);
                }}
                className="group relative bg-gradient-to-br from-gray-800 via-gray-800 to-gray-900 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-blue-500/40 overflow-hidden p-4 cursor-pointer"
              >
                <div className="flex items-start gap-3">
                  <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-gray-700 bg-gray-900 shrink-0">
                    {project.images.length > 0 ? (
                      <Image
                        src={project.images[0]}
                        alt={`${project.title} icon`}
                        fill
                        className="object-cover"
                        sizes="48px"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <IconComponent size={20} className="text-blue-400" />
                      </div>
                    )}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <h3 className="text-base font-bold text-white line-clamp-1">{project.title}</h3>
                      <div className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-gradient-to-r ${getCategoryColor(project.category)} text-white text-[10px] font-medium shrink-0`}>
                        <IconComponent size={10} />
                        <span>{project.category}</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-300 leading-relaxed line-clamp-2">{project.description}</p>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between text-xs text-gray-400">
                  <span>{project.date}</span>
                  {project.featured && (
                    <span className="inline-flex items-center gap-1 text-yellow-400 font-semibold">
                      <Sparkles size={11} />
                      Featured
                    </span>
                  )}
                </div>

                <div className="mt-3 pt-3 border-t border-gray-700/50">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 bg-gray-800 text-gray-300 text-[10px] font-medium rounded-md border border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="px-2 py-0.5 bg-gray-800 text-gray-400 text-[10px] font-medium rounded-md border border-gray-700">
                        +{project.techStack.length - 4} more
                      </span>
                    )}
                  </div>

                  <div className="text-xs text-blue-400 font-medium group-hover:text-blue-300 transition-colors">
                    Click to view details →
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-20"
        >
          <a
            href="https://github.com/shivapreetham"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-2xl font-semibold hover:from-blue-700 hover:to-blue-600 transition-all shadow-xl hover:scale-105"
          >
            <Github className="mr-3" size={24} />
            Explore All Projects on GitHub
            <ExternalLink className="ml-3" size={20} />
          </a>
        </motion.div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl border border-gray-700 max-w-7xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-gray-800/90 backdrop-blur-sm text-gray-300 hover:bg-gray-700 hover:text-white transition-all"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>

            <div className="grid md:grid-cols-2 h-full max-h-[90vh]">
              {/* Left Side - Image Carousel */}
              <div className="relative bg-gray-950 flex items-center justify-center p-6">
                {selectedProject.images.length > 0 && (
                  <div className="w-full h-full flex flex-col">
                    <div className="relative flex-1 rounded-xl overflow-hidden border border-gray-700">
                      <Image
                        src={selectedProject.images[currentImageIndex]}
                        alt={`${selectedProject.title} screenshot ${currentImageIndex + 1}`}
                        fill
                        className="object-contain"
                        sizes="50vw"
                      />

                      {selectedProject.images.length > 1 && (
                        <>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setCurrentImageIndex((prev) =>
                                prev === 0 ? selectedProject.images.length - 1 : prev - 1
                              );
                            }}
                            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/70 text-white hover:bg-black/90 transition-all"
                            aria-label="Previous image"
                          >
                            <ChevronLeft size={24} />
                          </button>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setCurrentImageIndex((prev) =>
                                prev === selectedProject.images.length - 1 ? 0 : prev + 1
                              );
                            }}
                            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/70 text-white hover:bg-black/90 transition-all"
                            aria-label="Next image"
                          >
                            <ChevronRight size={24} />
                          </button>
                        </>
                      )}
                    </div>

                    {selectedProject.images.length > 1 && (
                      <div className="mt-4 flex justify-center gap-2">
                        {selectedProject.images.map((_, index) => (
                          <button
                            type="button"
                            key={index}
                            onClick={(e) => {
                              e.stopPropagation();
                              setCurrentImageIndex(index);
                            }}
                            className={`w-2 h-2 rounded-full transition-all ${
                              index === currentImageIndex
                                ? 'bg-blue-500 w-8'
                                : 'bg-gray-600 hover:bg-gray-500'
                            }`}
                            aria-label={`View image ${index + 1}`}
                          />
                        ))}
                      </div>
                    )}

                    {selectedProject.images.length > 1 && (
                      <div className="text-center text-sm text-gray-400 mt-2">
                        {currentImageIndex + 1} / {selectedProject.images.length}
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Right Side - Content */}
              <div className="overflow-y-auto p-6 md:p-8">
              {/* Header */}
              <div className="mb-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="relative w-16 h-16 rounded-xl overflow-hidden border border-gray-700 bg-gray-900 shrink-0">
                    {selectedProject.images.length > 0 ? (
                      <Image
                        src={selectedProject.images[0]}
                        alt={selectedProject.title}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <Code size={24} className="text-blue-400" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{selectedProject.title}</h3>
                    <p className="text-base text-gray-400">{selectedProject.subtitle}</p>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed mb-4">{selectedProject.description}</p>

                <div className="flex flex-wrap gap-2 items-center">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r ${getCategoryColor(selectedProject.category)} text-white text-xs font-semibold`}>
                    {selectedProject.category}
                  </span>
                  <span className="px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-300 text-xs font-semibold">
                    {selectedProject.stats.type}
                  </span>
                  <span className="text-sm text-green-400 font-medium">{selectedProject.impact}</span>
                </div>
              </div>

              {/* Features */}
              {selectedProject.features && (
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-300 text-sm">
                        <span className="text-blue-400 mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tech Stack */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-gray-800 text-gray-200 text-sm rounded-lg border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-3">
                {selectedProject.links.github && (
                  <a
                    href={selectedProject.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gray-800 text-gray-200 hover:bg-gray-700 transition-all font-semibold"
                  >
                    <Github size={18} />
                    View Code
                  </a>
                )}
                {selectedProject.links.live && (
                  <a
                    href={selectedProject.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:from-blue-700 hover:to-blue-600 transition-all font-semibold"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                )}
              </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Projects;