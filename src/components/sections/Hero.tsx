"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, ExternalLink } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />

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

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                Get In Touch
                <Mail className="ml-2" size={20} />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-8 py-3 border border-border rounded-lg hover:bg-accent transition-colors font-medium"
              >
                View My Work
                <ExternalLink className="ml-2" size={20} />
              </a>
            </motion.div>

            {/* Social Links */}
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
                className="p-3 rounded-lg bg-secondary hover:bg-accent transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/shivapreetham"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-secondary hover:bg-accent transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:shivapreethamofficial@gmail.com"
                className="p-3 rounded-lg bg-secondary hover:bg-accent transition-colors"
              >
                <Mail size={24} />
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
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 p-1">
                <div className="w-full h-full bg-background rounded-2xl overflow-hidden">
                  {/* Placeholder for profile image */}
                  <div className="w-full h-full bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                    <div className="text-6xl font-bold text-muted-foreground/30">SH</div>
                  </div>
                </div>
              </div>
              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium"
              >
                CGPA: 8.79
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium"
              >
                NIT Jamshedpur
              </motion.div>
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