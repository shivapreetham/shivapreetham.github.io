"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, ExternalLink } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      
      {/* Animated background orbs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-primary/10 to-secondary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-secondary/10 to-primary/5 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-3xl animate-pulse delay-500" />
      
      {/* Floating geometric elements */}
      <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-primary/20 rounded-full animate-bounce delay-1000" />
      <div className="absolute bottom-1/3 left-1/4 w-6 h-6 bg-secondary/20 rounded animate-bounce delay-2000" />
      <div className="absolute top-2/3 right-1/3 w-3 h-3 bg-primary/30 rounded-full animate-bounce delay-3000" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full bg-grid-pattern"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <p className="text-lg text-muted-foreground mb-2">Hello, I&apos;m</p>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                <span className="gradient-text">Shivapreetham H S</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground mb-4">
                Full Stack Developer & AI/ML Enthusiast
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                B.Tech CSE student at NIT Jamshedpur with a passion for building innovative 
                web applications, AI-powered solutions, and collaborative development platforms.
              </p>
            </motion.div>

            {/* Enhanced CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <a
                href="#contact"
                className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-xl hover:from-primary/90 hover:to-primary/70 transition-all duration-300 font-medium shadow-lg hover:shadow-xl hover:scale-105 transform"
              >
                Get In Touch
                <Mail className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
              </a>
              <a
                href="#projects"
                className="group inline-flex items-center justify-center px-8 py-4 border-2 border-primary/20 bg-background/50 backdrop-blur-sm rounded-xl hover:bg-primary/5 hover:border-primary/40 transition-all duration-300 font-medium shadow-lg hover:shadow-xl hover:scale-105 transform"
              >
                View My Work
                <ExternalLink className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
              </a>
            </motion.div>

            {/* Enhanced Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex justify-center lg:justify-start space-x-6"
            >
              <a
                href="https://github.com/shivapreetham"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-xl bg-gradient-to-br from-secondary/50 to-secondary/30 backdrop-blur-sm border border-border/50 hover:bg-gradient-to-br hover:from-secondary/70 hover:to-secondary/50 hover:border-primary/20 transition-all duration-300 hover:scale-110 transform hover:shadow-lg"
              >
                <Github size={24} className="group-hover:text-primary transition-colors duration-300" />
              </a>
              <a
                href="https://linkedin.com/in/shivapreetham"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-xl bg-gradient-to-br from-secondary/50 to-secondary/30 backdrop-blur-sm border border-border/50 hover:bg-gradient-to-br hover:from-secondary/70 hover:to-secondary/50 hover:border-primary/20 transition-all duration-300 hover:scale-110 transform hover:shadow-lg"
              >
                <Linkedin size={24} className="group-hover:text-primary transition-colors duration-300" />
              </a>
              <a
                href="mailto:shivapreethamofficial@gmail.com"
                className="group p-4 rounded-xl bg-gradient-to-br from-secondary/50 to-secondary/30 backdrop-blur-sm border border-border/50 hover:bg-gradient-to-br hover:from-secondary/70 hover:to-secondary/50 hover:border-primary/20 transition-all duration-300 hover:scale-110 transform hover:shadow-lg"
              >
                <Mail size={24} className="group-hover:text-primary transition-colors duration-300" />
              </a>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Main profile container with enhanced styling */}
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                {/* Animated background rings */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 animate-spin-slow"></div>
                <div className="absolute inset-2 rounded-full bg-gradient-to-br from-secondary/20 to-primary/20 animate-pulse"></div>
                
                {/* Profile image container */}
                <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-background shadow-2xl">
                  <img
                    src="/DP.jpg"
                    alt="Shivapreetham H S"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  {/* Overlay gradient for better text contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                
                {/* Glowing effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 blur-xl animate-pulse"></div>
              </div>
              
              {/* Enhanced floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg backdrop-blur-sm border border-primary/20"
              >
                CGPA: 8.79
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 bg-gradient-to-r from-secondary to-secondary/80 text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg backdrop-blur-sm border border-secondary/20"
              >
                NIT Jamshedpur
              </motion.div>
              
              {/* Additional floating elements */}
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.1, 1] 
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
                className="absolute top-1/4 -left-8 w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-sm"
              ></motion.div>
              <motion.div
                animate={{ 
                  rotate: [360, 0],
                  scale: [1, 1.2, 1] 
                }}
                transition={{ 
                  duration: 10, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
                className="absolute bottom-1/4 -right-8 w-12 h-12 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full blur-sm"
              ></motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;