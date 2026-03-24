"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Calendar, Trophy, Brain, Globe, Code, Database, ChevronLeft, ChevronRight, Users, Star, Target, Award, Filter, Sparkles } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const Projects = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState<{[key: string]: number}>({});
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

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
      date: "2024",
      images: [
        "/nitjsr-chatbot/demo.png"
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
      date: "2024",
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
        "/haxplore/Screenshot 2025-09-13 021658.png",
        "/haxplore/Screenshot 2025-09-13 021806.png",
        "/haxplore/haxplore-code-fode-winning-team.jpg"
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
      date: "2024",
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
        "/ishara/live-demo.png",
        "/ishara/sign-language.png",
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
      date: "2024",
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
      id: "soul-sync-iipa",
      title: "Soul Sync - AI Personality Clone",
      subtitle: "IIPA Research Paper Implementation",
      description: "AI personality clone using RAG and multimodal fusion based on IIPA research paper. Features Big Five personality modeling, WhatsApp chat analysis (10K+ messages), and voice cloning integration.",
      techStack: ["Python", "ChromaDB", "RAG", "HuggingFace", "Big Five Model", "Voice Cloning", "Gradio"],
      features: [
        "Research paper implementation (IIPA proposal)",
        "RAG with ChromaDB vector search",
        "Big Five personality trait modeling",
        "WhatsApp chat import and analysis (10K+ messages)"
      ],
      stats: { data: "100GB+", type: "Research" },
      date: "2024",
      images: [
        "/soul-sync-iipa/demo.png"
      ],
      links: {
        github: "https://github.com/shivapreetham/soul-sync-iipa"
      },
      category: "AI/ML",
      impact: "Research-backed personality AI"
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

  const nextImage = (projectId: string, totalImages: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) + 1) % totalImages
    }));
  };

  const prevImage = (projectId: string, totalImages: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) - 1 + totalImages) % totalImages
    }));
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
            const currentImg = currentImageIndex[project.id] || 0;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-gradient-to-br from-gray-800 via-gray-800 to-gray-900 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-700 hover:border-gray-600 overflow-hidden flex flex-col"
              >
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 z-10">
                    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold rounded-full shadow-lg animate-pulse">
                      <Sparkles size={12} />
                      <span>FEATURED</span>
                    </div>
                  </div>
                )}

                {/* Project Images Carousel */}
                <div className="relative">
                  <div className="aspect-video relative overflow-hidden bg-gray-900">
                    {project.images.length > 0 && (
                      <>
                        <Image
                          src={project.images[currentImg]}
                          alt={`${project.title} - Image ${currentImg + 1}`}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />

                        {/* Image Navigation - Smaller buttons */}
                        {project.images.length > 1 && (
                          <>
                            <button
                              type="button"
                              onClick={() => prevImage(project.id, project.images.length)}
                              aria-label="Previous image"
                              title="Previous image"
                              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/70 hover:bg-black/90 text-white rounded-full flex items-center justify-center transition-all backdrop-blur-sm border border-gray-600"
                            >
                              <ChevronLeft size={16} />
                            </button>
                            <button
                              type="button"
                              onClick={() => nextImage(project.id, project.images.length)}
                              aria-label="Next image"
                              title="Next image"
                              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/70 hover:bg-black/90 text-white rounded-full flex items-center justify-center transition-all backdrop-blur-sm border border-gray-600"
                            >
                              <ChevronRight size={16} />
                            </button>

                            {/* Image indicators */}
                            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                              {project.images.map((_, imgIndex) => (
                                <button
                                  key={imgIndex}
                                  type="button"
                                  onClick={() => setCurrentImageIndex(prev => ({ ...prev, [project.id]: imgIndex }))}
                                  aria-label={`Go to image ${imgIndex + 1}`}
                                  title={`Go to image ${imgIndex + 1}`}
                                  className={`w-2 h-2 rounded-full transition-all ${
                                    imgIndex === currentImg
                                      ? 'bg-blue-500 scale-125'
                                      : 'bg-gray-500 hover:bg-gray-400'
                                  }`}
                                />
                              ))}
                            </div>
                          </>
                        )}
                      </>
                    )}

                    {/* Category badge */}
                    <div className="absolute top-2 right-2">
                      <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gradient-to-r ${getCategoryColor(project.category)} text-white text-xs font-medium shadow-lg`}>
                        <IconComponent size={12} />
                        <span>{project.category}</span>
                      </div>
                    </div>

                    {/* Primary stat badge */}
                    <div className="absolute bottom-2 left-2">
                      {project.stats.adoption && (
                        <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                          <Award size={12} />
                          <span>Govt</span>
                        </div>
                      )}
                      {project.stats.users && (
                        <div className="bg-gray-800/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-bold text-white flex items-center gap-1 shadow-lg">
                          <Users size={12} />
                          <span>{project.stats.users}</span>
                        </div>
                      )}
                      {project.stats.rank && (
                        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                          <Trophy size={12} />
                          <span>{project.stats.rank}</span>
                        </div>
                      )}
                      {project.stats.accuracy && (
                        <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                          <Target size={12} />
                          <span>{project.stats.accuracy}</span>
                        </div>
                      )}
                      {project.stats.videos && (
                        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                          <Database size={12} />
                          <span>{project.stats.videos}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-5 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1.5 text-xs text-gray-400">
                      <Calendar size={12} />
                      <span>{project.date}</span>
                    </div>
                    <div className="flex gap-2">
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="View GitHub repository"
                          title="View GitHub repository"
                          className="p-2 rounded-lg bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white transition-all hover:scale-110"
                        >
                          <Github size={14} />
                        </a>
                      )}
                      {project.links.live && (
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="View live demo"
                          title="View live demo"
                          className="p-2 rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition-all hover:scale-110"
                        >
                          <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold mb-2 text-white group-hover:text-blue-400 transition-colors line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-blue-400 font-semibold mb-3 text-sm line-clamp-1">
                    {project.subtitle}
                  </p>
                  <p className="text-gray-300 mb-4 leading-relaxed text-sm line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">Tech Stack</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 bg-gray-700/50 text-gray-200 text-xs font-medium rounded-lg border border-gray-600 hover:border-blue-500/50 hover:bg-gray-700 transition-all"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 4 && (
                        <span className="px-2.5 py-1 text-gray-400 text-xs font-medium">
                          +{project.techStack.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Impact badge */}
                  <div className="mt-auto">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-green-500/10 text-green-400 rounded-lg text-xs font-semibold border border-green-500/20 hover:bg-green-500/20 transition-all">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                      <span className="line-clamp-1">{project.impact}</span>
                    </div>
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
    </section>
  );
};

export default Projects;