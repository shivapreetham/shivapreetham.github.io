export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  techStack: string[];
  features: string[];
  date: string;
  images: string[];
  links: {
    github?: string;
    live?: string;
    pypi?: string;
    design?: string;
  };
  category: "AI/ML" | "Platform";
  impact: string;
  featured?: boolean;
  /** Set when the deeper write-up still needs to be written by hand. */
  needsWriteup?: boolean;
}

export const projects: Project[] = [
  {
    slug: "ramp",
    title: "RAMP",
    subtitle: "Resource-Aware Model Proxy for local LLMs",
    description:
      "An elastic serving daemon that fronts Ollama and llama.cpp, watching RAM, VRAM, and disk on an async loop and swapping models up and down a quality ladder under memory pressure — transparently, to any OpenAI-API client. Published on PyPI as ramp-llm.",
    techStack: ["Python", "FastAPI", "psutil", "Docker"],
    features: [
      "Watches three signals together (RAM, VRAM, disk) rather than one — raising context length alone increases reported free VRAM because the KV cache spills into system RAM, which is why single-signal monitoring is misleading",
      "Downgrades fast to avoid freezes, upgrades slowly to avoid thrashing, tuned against measured swap costs",
      "155 tests, CI green across three operating systems and four Python versions",
      "Drop-in OpenAI-compatible API — no client changes required",
    ],
    date: "2026",
    images: [],
    links: {
      github: "https://github.com/shivapreetham/resource-aware-model-proxy",
      pypi: "https://pypi.org/project/ramp-llm/",
    },
    category: "AI/ML",
    impact: "Published package (PyPI: ramp-llm)",
    featured: true,
  },
  {
    slug: "safesight",
    title: "SafeSight",
    subtitle: "NSFW content moderation platform",
    description:
      "A production content-moderation service built around a custom attention-based detector, taken from research model to a monitored API: staged inference cascade, drift detection, and an automated retraining loop.",
    techStack: ["Python", "PyTorch", "ONNX Runtime", "FastAPI", "MLflow", "Prometheus", "Docker"],
    features: [
      "Custom attention-based detector beating four baseline architectures at 88% recall on a dense evaluation benchmark",
      "Staged inference cascade spends latency only on ambiguous images",
      "ONNX backend runs roughly 3x faster than eager PyTorch on CPU, small enough for free-tier hosting",
      "MLflow tracking, drift detection against a reference score window, and a CI build gate that fails when recall regresses",
      "User-correction feedback loop feeding a retraining queue",
    ],
    date: "2026",
    images: [],
    links: {
      github: "https://github.com/shivapreetham",
    },
    category: "AI/ML",
    impact: "Research model shipped as a monitored production service",
    featured: true,
  },
  {
    slug: "nitjsr-chatbot",
    title: "NITJSR Chatbot",
    subtitle: "Government of Jharkhand Adopted RAG System",
    description:
      "Production RAG chatbot adopted by the Government of Jharkhand, serving NIT Jamshedpur students. Cohere embeddings, Pinecone vector database, and Gemini generation, with LSH-based response caching.",
    techStack: ["Python", "Cohere v3", "Pinecone", "Gemini", "MongoDB", "Redis", "Puppeteer", "FastAPI"],
    features: [
      "Government of Jharkhand official adoption",
      "RAG architecture with 1024-dim Cohere embeddings",
      "A content-hash ledger re-indexes only modified documents",
      "Semantic caching with conversation summarisation roughly halves the tokens spent per request",
    ],
    date: "2025",
    images: [
      "/RAG-chatbot/nitjsr-chatbot.png",
      "/RAG-chatbot/architecture.png",
      "/RAG-chatbot/workflow.png",
      "/RAG-chatbot/gscc.png",
    ],
    links: {
      github: "https://github.com/shivapreetham/gssc-chatbot",
      live: "https://gscc.jharkhand.gov.in/",
    },
    category: "AI/ML",
    impact: "Government adoption for official deployment",
    featured: true,
  },
  {
    slug: "nitjsr-hub",
    title: "NIT-JSR Hub",
    subtitle: "Comprehensive Student Platform",
    description:
      "Full-stack platform serving NIT Jamshedpur students with marketplace, real-time chat, video conferencing, and automated attendance tracking. Built with a microservices architecture.",
    techStack: ["Next.js", "TypeScript", "MongoDB", "Prisma", "NextAuth.js", "Pusher", "Stream.io", "Express.js"],
    features: [
      "Real-time P2P marketplace with 200+ active users",
      "Automated attendance tracking with web scraping",
      "Video conferencing with Stream.io integration",
      "Anonymous messaging system",
    ],
    date: "2025",
    images: [
      "/nitjsr-hub/home-page.png",
      "/nitjsr-hub/market-place.png",
      "/nitjsr-hub/chat.png",
      "/nitjsr-hub/video-calls.png",
      "/nitjsr-hub/attendance-dashboard.png",
      "/nitjsr-hub/architecture.png",
    ],
    links: {
      github: "https://github.com/shivapreetham/nit-jsr-hub",
      live: "https://nit-jsr-hub-v1.vercel.app",
      design: "https://app.eraser.io/workspace/Apx9i6oQtdCXhSVASqn2",
    },
    category: "Platform",
    impact: "Serving 200+ students daily",
    featured: true,
    needsWriteup: true,
  },
  {
    slug: "codefode",
    title: "CodeFode AI Editor",
    subtitle: "Collaborative Code Editor",
    description:
      "Real-time collaborative code editor with whiteboard integration and multi-user editing. Third of 1,100+ teams at HaXplore, IIT BHU.",
    techStack: ["Next.js", "TypeScript", "Express.js", "Socket.IO", "MongoDB", "Monaco Editor", "Material-UI"],
    features: [
      "Real-time collaborative editing with conflict resolution",
      "Whiteboard integration for visual collaboration",
      "Multi-language syntax highlighting",
      "Live code sharing and execution",
    ],
    date: "2025",
    images: [
      "/haxplore/haxplore-code-fode-winning-team.jpg",
      "/haxplore/im1.png",
      "/haxplore/im2.png",
    ],
    links: {
      github: "https://github.com/shivapreetham/CodeFode-AI-code-editor",
      live: "https://code-fode-ai-code-editor.vercel.app/",
    },
    category: "Platform",
    impact: "Hackathon winning solution",
    featured: true,
    needsWriteup: true,
  },
  {
    slug: "soulsync",
    title: "SoulSync",
    subtitle: "Emotion-Aware AI Companion",
    description:
      "Multimodal AI system analysing facial expressions, voice tone, and text sentiment for context-aware responses, running entirely on-device. Top 10 of 1,700+ teams at Qualcomm Edge AI Hackathon.",
    techStack: ["Python", "MediaPipe", "OpenCV", "HuggingFace", "Vosk", "PyAudio", "Gradio", "Transformers"],
    features: [
      "Real-time facial expression analysis using MediaPipe",
      "Voice-to-text and sentiment analysis integration",
      "Offline processing for complete privacy",
      "Multiple language model backends support",
    ],
    date: "2025",
    images: [
      "/SOUL-SYNC-qualcomm-hack/455238344-ff21e6e6-4ae6-4e20-9aeb-be2626f7fbf9.png",
      "/SOUL-SYNC-qualcomm-hack/soul-sync-team.JPG",
      "/SOUL-SYNC-qualcomm-hack/476A1044.JPG",
      "/SOUL-SYNC-qualcomm-hack/476A1079.JPG",
    ],
    links: {
      github: "https://github.com/shivapreetham/SoulSync",
    },
    category: "AI/ML",
    impact: "Top 10 finalist, Qualcomm Edge AI Hackathon",
    needsWriteup: true,
  },
  {
    slug: "ishara",
    title: "Indian Sign Language Detection",
    subtitle: "Accessibility AI Solution",
    description:
      "Computer vision system supporting 35 ISL gestures for hearing-impaired communication, with voice-to-sign conversion and real-time gesture recognition.",
    techStack: ["Python", "MediaPipe", "scikit-learn", "OpenCV", "Google Speech Recognition", "Tkinter"],
    features: [
      "Real-time detection of 35 ISL gestures",
      "Voice-to-sign conversion with 60% confidence threshold",
      "Data augmentation with 100 images per class",
      "User-friendly GUI for seamless interaction",
    ],
    date: "2024",
    images: [
      "/ishara/1.png",
      "/ishara/live-demo.png",
      "/ishara/accuracy-of-predictions.png",
      "/ishara/gemini-story-interpretation.png",
      "/ishara/feature-index-of-points.png",
    ],
    links: {
      github: "https://github.com/shivapreetham/indian-sign-language-detection",
    },
    category: "AI/ML",
    impact: "94% gesture recognition accuracy",
    needsWriteup: true,
  },
  {
    slug: "agentic-yt-video-gen",
    title: "Agentic YouTube Video Generator",
    subtitle: "Multi-Agent AI Pipeline on Akash Network",
    description:
      "Autonomous video generation pipeline orchestrating 5 LLM agents (script, voiceover, images, music, rendering), deployed on Akash Network.",
    techStack: ["Python", "Gemini", "ElevenLabs", "Pollinations", "FFmpeg", "Akash Network", "Job Queue"],
    features: [
      "Multi-agent orchestration across 5 sequential steps",
      "Cost optimisation: $15/day to $3/day (80% reduction)",
      "Job queue management preventing memory exhaustion",
      "100+ videos generated with a 99% success rate",
    ],
    date: "2025",
    images: ["/agentic-yt/image.png", "/agentic-yt/yt-upload.png"],
    links: {
      github: "https://github.com/shivapreetham/agentic-yt-video-gen",
    },
    category: "AI/ML",
    impact: "Autonomous agent orchestration",
    needsWriteup: true,
  },
  {
    slug: "green-path-optimizer",
    title: "Green Path Optimizer",
    subtitle: "Multi-Objective TSP Solver",
    description:
      "Eco-friendly route optimizer using Google OR-Tools for multi-objective optimisation (time + emissions + AQI), with constraint-based solving and Redis caching.",
    techStack: ["Python", "Google OR-Tools", "Redis", "Google Maps API", "Open-Meteo API", "FastAPI"],
    features: [
      "Multi-objective optimisation (time, emissions, AQI)",
      "Google OR-Tools constraint solving",
      "External API integration (Maps, Weather)",
      "Redis caching for route optimisation",
    ],
    date: "2024",
    images: [
      "/green-path/eco-routing.png",
      "/green-path/order.png",
      "/green-path/order-batching.png",
      "/green-path/client-side-products.png",
    ],
    links: {
      github: "https://github.com/shivapreetham/Green_path_optimizer",
    },
    category: "Platform",
    impact: "Environmental route optimisation",
    needsWriteup: true,
  },
  {
    slug: "shatterbox",
    title: "Shatterbox",
    subtitle: "Anonymous Social Platform",
    description:
      "Real-time anonymous chat application for NIT Jamshedpur students, with photo sharing and group management.",
    techStack: ["Next.js", "TypeScript", "Pusher.js", "MongoDB", "Prisma", "Zustand", "Supabase"],
    features: [
      "Anonymous messaging without registration",
      "Real-time photo sharing",
      "Group management and moderation tools",
      "Campus-specific social networking",
    ],
    date: "2024",
    images: [
      "/shatterbox/Screenshot 2025-09-13 025221.png",
      "/shatterbox/Screenshot 2025-09-13 025301.png",
      "/shatterbox/Screenshot 2025-09-13 025324.png",
    ],
    links: {
      github: "https://github.com/shivapreetham/shatterbox",
      live: "https://shatterboxv3.vercel.app",
    },
    category: "Platform",
    impact: "Campus social engagement",
    needsWriteup: true,
  },
  {
    slug: "professor-portfolio",
    title: "Professor Portfolio Builder",
    subtitle: "No-Code Portfolio Platform",
    description:
      "A portfolio-building platform enabling academics to create professional portfolios without writing code. 1st place, Web Team Hackathon, NIT Jamshedpur.",
    techStack: ["Next.js", "TailwindCSS", "PostgreSQL", "Drizzle ORM", "TypeScript"],
    features: [
      "Drag-and-drop portfolio builder",
      "Real-time preview functionality",
      "Pre-built customisable components",
      "Professional templates for academics",
    ],
    date: "2024",
    images: [
      "/professor-portfolio/Screenshot 2025-09-13 022218.png",
      "/professor-portfolio/Screenshot 2025-09-13 022245.png",
      "/professor-portfolio/Screenshot 2025-09-13 022349.png",
      "/professor-portfolio/Screenshot 2025-09-13 022420.png",
    ],
    links: {
      github: "https://github.com/shivapreetham/professor-portfolio",
      live: "https://webteam-project.vercel.app",
    },
    category: "Platform",
    impact: "1st place, Web Team Hackathon (NIT Jamshedpur)",
    needsWriteup: true,
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
