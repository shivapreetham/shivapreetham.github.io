"use client";

import { motion } from "framer-motion";
import { BookOpen, FileText, TrendingUp, Zap } from "lucide-react";
import Image from "next/image";

const Research = () => {
  const submittedPapers = [
    {
      id: "gcn",
      title: "Graph Convolutional Networks for EEG Signal Processing",
      venue: "Pattern Recognition (Elsevier)",
      status: "Under Review",
      domain: "EEG Signal Processing",
      year: "2024",
      description: "Novel GCN architecture with gating mechanism for enhanced EEG signal classification and analysis.",
      coverImage: "/research-works/GCN-architecture.png",
      tags: ["Graph Neural Networks", "EEG", "Deep Learning", "Signal Processing"],
      impact: "Submitted to Elsevier",
      type: "Journal"
    },
    {
      id: "s3a",
      title: "Shallow Mirror Transformer with S3A Mechanism",
      venue: "DSPA Conference",
      status: "Under Review",
      domain: "EEG Signal Processing",
      year: "2024",
      description: "Efficient transformer architecture with shallow mirror design and S3A attention mechanism for EEG analysis.",
      coverImage: "/research-works/s3a_mechanism.pdf",
      tags: ["Transformers", "Attention Mechanism", "EEG", "Efficiency"],
      impact: "Conference Submission",
      type: "Conference"
    },
    {
      id: "dacs",
      title: "DACS: Deep Adaptive Convolutional System",
      venue: "Computers in Medicine and Biology (Elsevier)",
      status: "Under Review",
      domain: "EEG Signal Processing",
      year: "2024",
      description: "Multi-stage deep adaptive CNN architecture for robust EEG signal classification and medical applications.",
      coverImage: "/research-works/stage1+2-architecture-dacs.png",
      tags: ["CNN", "Medical AI", "EEG", "Adaptive Systems"],
      impact: "Submitted to CMPB Elsevier",
      type: "Journal"
    }
  ];

  const ongoingResearch = [
    {
      title: "Deepfake Detection",
      domain: "Computer Vision",
      description: "Advanced techniques for detecting AI-generated synthetic media"
    },
    {
      title: "NSFW Content Detection",
      domain: "Computer Vision",
      description: "Robust classification models for content moderation"
    },
    {
      title: "MRI Reconstruction",
      domain: "Medical Imaging",
      description: "Deep learning approaches for accelerated MRI imaging"
    },
    {
      title: "EEG Contrastive Learning",
      domain: "Signal Processing",
      description: "Self-supervised learning methods for EEG representations"
    }
  ];

  return (
    <section id="research" className="py-20 bg-gradient-to-b from-black to-gray-900 relative">
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.15) 1px, transparent 0)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
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
            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 backdrop-blur-sm border border-purple-500/20 rounded-full mb-6"
          >
            <BookOpen className="w-5 h-5 text-purple-400" />
            <span className="text-sm font-medium text-purple-300">Research Works</span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Academic Research & Publications
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Contributing to cutting-edge research in EEG signal processing, computer vision, and medical imaging
          </p>
        </motion.div>

        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl font-bold text-white mb-2">Submitted Papers</h3>
            <p className="text-gray-400">Research under review at top-tier venues</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {submittedPapers.map((paper, index) => (
              <motion.div
                key={paper.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-purple-500/50 overflow-hidden transition-all hover:shadow-xl hover:shadow-purple-500/10 flex flex-col"
              >
                <div className="relative bg-gray-900 p-4 flex items-center justify-center min-h-[150px]">
                  <div className="relative w-full h-full flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5" />
                    {paper.coverImage.toLowerCase().endsWith(".pdf") ? (
                      <iframe
                        src={`${paper.coverImage}#toolbar=0&navpanes=0&scrollbar=0`}
                        title={`${paper.title} preview`}
                        className="relative rounded-md w-full max-w-[260px] h-[130px] border border-gray-700 bg-gray-800"
                      />
                    ) : (
                      <Image
                        src={paper.coverImage}
                        alt={paper.title}
                        width={300}
                        height={200}
                        className="relative rounded-md object-contain max-h-[130px] w-auto group-hover:scale-105 transition-transform duration-500"
                        style={{ filter: 'brightness(0.95)' }}
                      />
                    )}
                  </div>

                  <div className="absolute top-3 right-3">
                    <div className="px-2.5 py-1 bg-purple-600 text-white text-[10px] font-bold rounded-full shadow-lg">
                      {paper.type}
                    </div>
                  </div>
                </div>

                <div className="p-4 flex flex-col flex-grow">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded-md bg-purple-500/10 border border-purple-500/20">
                        <FileText className="w-3.5 h-3.5 text-purple-400" />
                      </div>
                      <div className="text-[11px] text-gray-400">{paper.domain}</div>
                    </div>
                    <span className="text-[11px] text-gray-500">{paper.year}</span>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-2 py-1 bg-yellow-500/10 text-yellow-400 text-[10px] font-semibold rounded-full border border-yellow-500/20 mb-2 self-start">
                    <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full animate-pulse" />
                    {paper.status}
                  </div>

                  <h3 className="text-base font-bold text-white mb-1.5 group-hover:text-purple-400 transition-colors line-clamp-2">
                    {paper.title}
                  </h3>

                  <div className="text-blue-400 font-semibold text-xs mb-2">
                    {paper.venue}
                  </div>

                  <p className="text-gray-300 mb-3 leading-relaxed text-xs line-clamp-3">
                    {paper.description}
                  </p>

                  <div className="mb-3">
                    <h4 className="text-[10px] font-semibold text-gray-400 mb-1.5 uppercase tracking-wider">Research Areas</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {paper.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 bg-gray-700/50 text-gray-200 text-[10px] font-medium rounded-md border border-gray-600 hover:border-purple-500/50 hover:bg-gray-700 transition-all"
                        >
                          {tag}
                        </span>
                      ))}
                      {paper.tags.length > 3 && (
                        <span className="px-2 py-0.5 text-gray-400 text-[10px] font-medium">
                          +{paper.tags.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="mt-auto">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-purple-500/10 text-purple-400 rounded-md text-[10px] font-semibold border border-purple-500/20">
                      <Zap className="w-3 h-3" />
                      {paper.impact}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-2">Ongoing Research</h3>
            <p className="text-gray-400">Current research projects in computer vision and medical imaging</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {ongoingResearch.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm border border-gray-700 hover:border-blue-500/50 rounded-lg p-4 transition-all hover:shadow-lg hover:shadow-blue-500/10 group"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-2 rounded-md bg-blue-500/10 border border-blue-500/20 group-hover:scale-110 transition-transform">
                    <TrendingUp className="w-4 h-4 text-blue-400" />
                  </div>
                  <div className="text-[11px] text-gray-400 font-medium">{project.domain}</div>
                </div>

                <h4 className="text-base font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h4>

                <p className="text-xs text-gray-400 leading-relaxed">
                  {project.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Research;
