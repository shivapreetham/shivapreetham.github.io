"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, ExternalLink, Download, MapPin, Award } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            {/* Professional greeting */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-center lg:justify-start mb-4"
            >
              <div className="flex items-center gap-2 text-sm text-blue-300 bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="font-medium">Available for opportunities</span>
              </div>
            </motion.div>

            {/* Name and title */}
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Shivapreetham
              <br />
              <span className="text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-medium">H S</span>
            </motion.h1>

            {/* Role */}
            <motion.h2 
              className="text-xl md:text-2xl text-gray-300 mb-6 font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Full Stack Developer | CS Student
            </motion.h2>

            {/* Location and education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8 text-sm text-gray-400"
            >
              <div className="flex items-center gap-1">
                <MapPin size={16} />
                <span>NIT Jamshedpur</span>
              </div>
              <div className="flex items-center gap-1">
                <Award size={16} />
                <span>CGPA: 8.79</span>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-gray-300 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed"
            >
              Computer Science student at NIT Jamshedpur specializing in <span className="text-blue-400 font-semibold">full-stack development</span> and <span className="text-blue-400 font-semibold">AI/ML systems</span>.
              Built RAG chatbot adopted by <span className="text-green-400 font-semibold">Government of Jharkhand</span> and won <span className="text-yellow-400 font-semibold">3rd place at HaXplore IIT-BHU</span> competing against 1,100+ teams.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 mb-10 justify-center lg:justify-start"
            >
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-blue-600 transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                View My Work
                <ExternalLink className="ml-2" size={18} />
              </a>
              
              <a
                href="/resumes/Shivapreetham_s_resume_SDE.pdf"
                target="_blank"
                className="inline-flex items-center justify-center px-8 py-3 border border-gray-600 text-gray-300 rounded-xl font-semibold bg-gray-800/50 backdrop-blur-sm hover:bg-gray-700/50 hover:border-gray-500 transition-all hover:scale-105"
              >
                Download Resume
                <Download className="ml-2" size={18} />
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex justify-center lg:justify-start space-x-4"
            >
              <a
                href="https://github.com/shivapreetham"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                title="GitHub Profile"
                className="p-3 rounded-lg bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white transition-all hover:scale-110"
              >
                <Github size={20} />
              </a>
              
              <a
                href="https://linkedin.com/in/shivapreetham"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                title="LinkedIn Profile"
                className="p-3 rounded-lg bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-blue-400 transition-all hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
              
              <a
                href="mailto:shivapreethamofficial@gmail.com"
                aria-label="Send Email"
                title="Send Email"
                className="p-3 rounded-lg bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-green-400 transition-all hover:scale-110"
              >
                <Mail size={20} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right - Profile Image and Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              {/* Main profile image */}
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl transform rotate-3"></div>
                <div className="relative w-full h-full bg-gray-800 rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
                  <Image
                    src="/DP.jpg"
                    alt="Shivapreetham H S"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Floating achievement cards */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.4 }}
                className="absolute -top-4 -right-4 bg-gradient-to-br from-blue-600/20 to-blue-800/20 backdrop-blur-md rounded-xl shadow-2xl p-4 border border-blue-500/30"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">hungry!!</div>
                  <div className="text-xs text-gray-300 font-medium">Always Learning</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.4 }}
                className="absolute -bottom-4 -left-4 bg-gradient-to-br from-green-600/20 to-emerald-800/20 backdrop-blur-md rounded-xl shadow-2xl p-4 border border-green-500/30"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">8.79</div>
                  <div className="text-xs text-gray-300 font-medium">CGPA</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <a
            href="#about"
            className="flex flex-col items-center text-gray-400 hover:text-white transition-colors"
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowDown size={20} />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;