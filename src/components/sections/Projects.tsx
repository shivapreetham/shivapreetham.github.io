"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Calendar, Trophy, Brain, Globe, Code, Database, ChevronLeft, ChevronRight, Users, Star, Target } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const Projects = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState<{[key: string]: number}>({});

  const projects = [
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
        "/nitjsr-hub/Screenshot 2025-09-13 021058.png",
        "/nitjsr-hub/Screenshot 2025-09-13 021201.png",
        "/nitjsr-hub/Screenshot 2025-09-13 021237.png",
        "/nitjsr-hub/Screenshot 2025-09-13 021318.png",
        "/nitjsr-hub/Screenshot 2025-09-13 021417.png",
        "/nitjsr-hub/471189846-ef1bf3c1-727d-4c54-8e46-0b990920a0f4.png"
      ],
      links: {
        github: "https://github.com/shivapreetham/nit-jsr-hub",
        live: "https://nit-jsr-hub-v1.vercel.app",
        design: "https://app.eraser.io/workspace/Apx9i6oQtdCXhSVASqn2"
      },
      category: "Platform",
      impact: "Serving 200+ students daily"
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
      impact: "Hackathon winning solution"
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
        "/qualcomm-hack/soul-sync-team.JPG",
        "/qualcomm-hack/Screenshot 2025-09-13 025221.png",
        "/qualcomm-hack/Screenshot 2025-09-13 025301.png",
        "/qualcomm-hack/Screenshot 2025-09-13 025324.png"
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
        "/ishara/Screenshot 2025-04-24 153839.png",
        "/ishara/Screenshot 2025-04-24 155836.png",
        "/ishara/Screenshot 2025-05-01 121317.png",
        "/ishara/Screenshot 2025-09-13 023300.png",
        "/ishara/Screenshot 2025-09-13 023349.png",
        "/ishara/Screenshot 2025-09-13 023402.png"
      ],
      links: {
        github: "https://github.com/shivapreetham/indian-sign-language-detection"
      },
      category: "AI/ML",
      impact: "Empowering accessibility"
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
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A showcase of full-stack applications, AI/ML experiments, and platforms serving thousands of users
          </p>
        </motion.div>

        <div className="grid gap-8">
          {projects.map((project, index) => {
            const IconComponent = getCategoryIcon(project.category);
            const currentImg = currentImageIndex[project.id] || 0;
            
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-700 overflow-hidden"
              >
                <div className={`grid ${index % 2 === 0 ? 'lg:grid-cols-2' : 'lg:grid-cols-2'} gap-0`}>
                  
                  {/* Project Images Carousel */}
                  <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="aspect-video lg:aspect-auto lg:h-full relative overflow-hidden bg-gray-900 min-h-[450px]">
                      {project.images.length > 0 && (
                        <>
                          <Image
                            src={project.images[currentImg]}
                            alt={`${project.title} - Image ${currentImg + 1}`}
                            fill
                            className="object-contain group-hover:scale-105 transition-transform duration-700"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            style={{
                              objectPosition: 'center'
                            }}
                          />
                          
                          {/* Image Navigation */}
                          {project.images.length > 1 && (
                            <>
                              <button
                                onClick={() => prevImage(project.id, project.images.length)}
                                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/70 hover:bg-black/90 text-white rounded-full flex items-center justify-center transition-all backdrop-blur-sm border border-gray-600"
                              >
                                <ChevronLeft size={24} />
                              </button>
                              <button
                                onClick={() => nextImage(project.id, project.images.length)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/70 hover:bg-black/90 text-white rounded-full flex items-center justify-center transition-all backdrop-blur-sm border border-gray-600"
                              >
                                <ChevronRight size={24} />
                              </button>
                              
                              {/* Image indicators */}
                              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                {project.images.map((_, imgIndex) => (
                                  <button
                                    key={imgIndex}
                                    onClick={() => setCurrentImageIndex(prev => ({ ...prev, [project.id]: imgIndex }))}
                                    className={`w-3 h-3 rounded-full transition-all border border-gray-500 ${ 
                                      imgIndex === currentImg 
                                        ? 'bg-blue-500 scale-125' 
                                        : 'bg-gray-700 hover:bg-gray-600'
                                    }`}
                                  />
                                ))}
                              </div>
                            </>
                          )}
                        </>
                      )}
                      
                      {/* Category badge */}
                      <div className="absolute top-4 left-4">
                        <div className={`flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${getCategoryColor(project.category)} text-white text-sm font-medium shadow-lg`}>
                          <IconComponent size={16} />
                          <span>{project.category}</span>
                        </div>
                      </div>

                      {/* Stats badges */}
                      <div className="absolute top-4 right-4 space-y-2">
                        {project.stats.users && (
                          <div className="bg-gray-800/90 backdrop-blur-sm px-3 py-2 rounded-full text-sm font-semibold text-white flex items-center gap-2 shadow-lg border border-gray-600">
                            <Users size={16} />
                            <span>{project.stats.users}</span>
                          </div>
                        )}
                        {project.stats.rank && (
                          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-2 rounded-full text-sm font-semibold flex items-center gap-2 shadow-lg">
                            <Trophy size={16} />
                            <span>{project.stats.rank}</span>
                          </div>
                        )}
                        {project.stats.accuracy && (
                          <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-2 rounded-full text-sm font-semibold flex items-center gap-2 shadow-lg">
                            <Target size={16} />
                            <span>{project.stats.accuracy}</span>
                          </div>
                        )}
                        {project.stats.stars && (
                          <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-2 rounded-full text-sm font-semibold flex items-center gap-2 shadow-lg">
                            <Star size={16} />
                            <span>{project.stats.stars}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className={`p-8 lg:p-10 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Calendar size={16} />
                        <span>{project.date}</span>
                      </div>
                      <div className="flex gap-3">
                        {project.links.github && (
                          <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-xl bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white transition-all hover:scale-110"
                          >
                            <Github size={20} />
                          </a>
                        )}
                        {project.links.live && (
                          <a
                            href={project.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-xl bg-blue-600 text-white hover:bg-blue-500 transition-all hover:scale-110"
                          >
                            <ExternalLink size={20} />
                          </a>
                        )}
                        {project.links.design && (
                          <a
                            href={project.links.design}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-xl bg-purple-600 text-white hover:bg-purple-500 transition-all hover:scale-110"
                          >
                            <Database size={20} />
                          </a>
                        )}
                      </div>
                    </div>

                    <h3 className="text-2xl lg:text-3xl font-bold mb-3 text-white">
                      {project.title}
                    </h3>
                    <p className="text-blue-400 font-semibold mb-6 text-lg">
                      {project.subtitle}
                    </p>
                    <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                      {project.description}
                    </p>

                    {/* Impact */}
                    <div className="mb-8">
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 text-green-400 rounded-full text-sm font-semibold border border-green-500/20">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <span>{project.impact}</span>
                      </div>
                    </div>

                    {/* Key Features */}
                    <div className="mb-8">
                      <h4 className="font-bold mb-4 text-white text-lg">Key Features:</h4>
                      <ul className="space-y-3">
                        {project.features.slice(0, 4).map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-gray-300">
                            <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                            <span className="leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <h4 className="font-bold mb-4 text-white text-lg">Tech Stack:</h4>
                      <div className="flex flex-wrap gap-3">
                        {project.techStack.slice(0, 6).map((tech) => (
                          <span
                            key={tech}
                            className="px-4 py-2 bg-gray-700 text-gray-300 text-sm font-medium rounded-xl border border-gray-600 hover:bg-gray-600 hover:scale-105 transition-all"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.techStack.length > 6 && (
                          <span className="px-4 py-2 text-gray-500 text-sm font-medium">
                            +{project.techStack.length - 6} more
                          </span>
                        )}
                      </div>
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