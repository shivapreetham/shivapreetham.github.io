"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar, Award } from "lucide-react";

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <section id="about" className="py-20 bg-secondary/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-12 sm:mb-16 px-4"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate computer science student with a strong foundation in full-stack development and AI/ML
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Education & Info */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-6 sm:space-y-8"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Education & Background</h3>
              
              {/* Current Education */}
              <div className="bg-card border border-border rounded-lg p-4 sm:p-6 mb-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                    <GraduationCap className="text-primary" size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-base sm:text-lg mb-1">
                      B.Tech in Computer Science & Engineering
                    </h4>
                    <p className="text-primary font-medium mb-2 text-sm sm:text-base">National Institute of Technology Jamshedpur</p>
                    <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-4 text-muted-foreground text-xs sm:text-sm">
                      <span className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span>Aug 2023 - Present</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <MapPin size={14} />
                        <span>Jamshedpur, Jharkhand</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Award size={14} />
                        <span>CGPA: 8.79</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Previous Education */}
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-secondary/50 rounded-lg">
                    <GraduationCap className="text-muted-foreground" size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold mb-1">Class XII</h4>
                    <p className="text-muted-foreground mb-2">Sri Chaitanya Nagarbhavi</p>
                    <div className="flex items-center space-x-4 text-muted-foreground text-sm">
                      <span className="flex items-center space-x-1">
                        <Calendar size={16} />
                        <span>2021 - 2023</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Award size={16} />
                        <span>97.8%</span>
                      </span>
                      <span className="text-primary font-medium">JEE Mains: 99.2 Percentile</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I&apos;m a passionate Computer Science student at NIT Jamshedpur with a strong foundation 
                  in full-stack web development and artificial intelligence. My journey began with a 
                  curiosity for how things work behind the scenes, which led me to explore various 
                  programming languages and technologies.
                </p>
                <p>
                  Throughout my academic journey, I&apos;ve maintained a stellar CGPA of 8.79 while actively 
                  participating in hackathons and building innovative projects. I believe in the power 
                  of technology to solve real-world problems and create meaningful impact.
                </p>
                <p>
                  My experience ranges from building collaborative development platforms to creating 
                  AI-powered applications. I&apos;m particularly interested in the intersection of web 
                  development and artificial intelligence, constantly exploring new ways to integrate 
                  these technologies.
                </p>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="bg-card border border-border rounded-lg p-3 sm:p-4 text-center">
                <div className="text-xl sm:text-2xl font-bold text-primary mb-1">20+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="bg-card border border-border rounded-lg p-3 sm:p-4 text-center">
                <div className="text-xl sm:text-2xl font-bold text-primary mb-1">3</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Hackathon Awards</div>
              </div>
              <div className="bg-card border border-border rounded-lg p-3 sm:p-4 text-center">
                <div className="text-xl sm:text-2xl font-bold text-primary mb-1">6.8M+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Users Served</div>
              </div>
              <div className="bg-card border border-border rounded-lg p-3 sm:p-4 text-center">
                <div className="text-xl sm:text-2xl font-bold text-primary mb-1">15+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Team Collaborations</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;