"use client";

import { motion } from "framer-motion";
import { Code, Brain, Globe, User, Award, Target } from "lucide-react";
import Image from "next/image";

const About = () => {
  const skills = [
    {
      category: "Frontend",
      icon: Globe,
      color: "from-blue-500 to-cyan-500",
      technologies: ["React", "Next.js", "TypeScript", "TailwindCSS", "Framer Motion"]
    },
    {
      category: "Backend",
      icon: Code,
      color: "from-purple-500 to-pink-500",
      technologies: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "Prisma"]
    },
    {
      category: "AI/ML",
      icon: Brain,
      color: "from-green-500 to-emerald-500",
      technologies: ["Python", "OpenCV", "MediaPipe", "HuggingFace", "scikit-learn"]
    }
  ];

  const stats = [
    { label: "Active Users", value: "500+", icon: User },
    { label: "Projects Built", value: "15+", icon: Target },
    { label: "Hackathon Wins", value: "3", icon: Award },
    { label: "Research Papers", value: "3", icon: Brain }
  ];

  const profiles = [
    {
      platform: "GitHub",
      image: "/profiles/github-profile.png",
      description: "Open source contributions and project repositories"
    },
    {
      platform: "LeetCode",
      image: "/profiles/leetcode-profile.png",
      description: "Problem solving and algorithmic skills"
    },
    {
      platform: "CodeForces",
      image: "/profiles/codeforces-profile.png",
      description: "Competitive programming achievements"
    }
  ];

  return (
    <section id="about" className="py-20 bg-black relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.15) 1px, transparent 0)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
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
            <User className="w-5 h-5 text-blue-400" />
            <span className="text-sm font-medium text-blue-300">About Me</span>
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Passionate About Technology
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Computer Science student with a drive for innovation, creating solutions that impact real users
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-6">My Journey</h3>
            
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                I'm a Computer Science student at NIT Jamshedpur with a passion for building 
                scalable web applications and exploring cutting-edge AI/ML technologies. My journey 
                in tech has been driven by curiosity and the desire to solve real-world problems.
              </p>
              
              <p>
                With experience in full-stack development, I've built platforms serving hundreds of users, 
                won hackathons, and authored 3 research papers. I believe in the power of 
                technology to transform lives and communities.
              </p>
              
              <p>
                When I'm not coding, you'll find me exploring new technologies, participating in 
                competitive programming contests, or working on innovative AI projects that push 
                the boundaries of what's possible.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700 hover:border-blue-500/50 rounded-xl p-5 text-center backdrop-blur-sm transition-all hover:shadow-xl hover:shadow-blue-500/10 group"
                  >
                    <IconComponent className="w-7 h-7 text-blue-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">{stat.value}</div>
                    <div className="text-xs text-gray-400 mt-1 font-medium">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Technical Skills</h3>
            
            <div className="space-y-6">
              {skills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <motion.div
                    key={skill.category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700 hover:border-gray-600 rounded-xl p-6 backdrop-blur-sm transition-all hover:shadow-xl group"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${skill.color} shadow-lg group-hover:scale-110 transition-transform`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-xl font-semibold text-white">{skill.category}</h4>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {skill.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 bg-gray-800 text-gray-200 text-sm rounded-lg border border-gray-600 hover:border-blue-500/50 hover:bg-gray-700 transition-all"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Coding Profiles Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Coding Profiles</h3>
            <p className="text-gray-300">My presence across various coding platforms</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {profiles.map((profile, index) => (
              <motion.div
                key={profile.platform}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900/50 border border-gray-700 rounded-xl overflow-hidden backdrop-blur-sm hover:border-blue-500/50 transition-all group"
              >
                <div className="aspect-video relative bg-gray-800">
                  <Image
                    src={profile.image}
                    alt={`${profile.platform} profile`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-white mb-2">{profile.platform}</h4>
                  <p className="text-gray-400 text-sm">{profile.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;