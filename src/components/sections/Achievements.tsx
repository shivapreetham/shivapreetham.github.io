"use client";

import { motion } from "framer-motion";
import { Trophy, Medal, Award, Code, Users, Briefcase } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      category: "Hackathons",
      icon: Trophy,
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
      items: [
        {
          title: "HaXplore Hackathon – IIT BHU",
          position: "3rd Position Winner",
          details: "Among 2,300+ registered teams",
          date: "Feb 2025",
          description: "Built Code-Fode, an AI-assisted collaborative code editor with real-time features"
        },
        {
          title: "Qualcomm Edge AI Hackathon",
          position: "Top 10 Finalist",
          details: "Among 1,700+ registered teams",
          date: "Jun 2025",
          description: "Developed edge AI solutions for mobile and embedded platforms"
        }
      ]
    },
    {
      category: "Competitive Programming",
      icon: Code,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      items: [
        {
          title: "Codeforces Round 1017",
          position: "Global Rank 1,370",
          details: "International competitive programming contest",
          date: "Apr 2025",
          description: "Demonstrated strong algorithmic thinking and problem-solving skills"
        }
      ]
    }
  ];

  const stats = [
    { label: "Hackathon Wins", value: "3", icon: Trophy },
    { label: "Global Rank", value: "1,370", icon: Medal },
    { label: "Users Served", value: "6.8M+", icon: Users },
    { label: "Projects", value: "15+", icon: Briefcase }
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="achievements" className="py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Achievements</h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Recognition for technical excellence and competitive performance
          </p>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10"
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-card border border-border rounded-lg p-4 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="mb-2.5 flex justify-center">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <IconComponent className="text-primary" size={18} />
                  </div>
                </div>
                <div className="text-xl font-bold mb-1">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Achievement Categories */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {achievements.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <motion.div key={category.category} variants={item} className="space-y-4">
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`p-2.5 ${category.bgColor} rounded-lg`}>
                    <IconComponent className={category.color} size={22} />
                  </div>
                  <h3 className="text-xl font-bold">{category.category}</h3>
                </div>

                <div className="grid gap-4">
                  {category.items.map((achievement, index) => (
                    <motion.div
                      key={achievement.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: categoryIndex * 0.2 + index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      className="bg-card border border-border rounded-lg p-4 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                        <div className="flex-1">
                          <h4 className="text-base font-semibold mb-1">{achievement.title}</h4>
                          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-xs text-muted-foreground">
                            <span className="flex items-center space-x-1">
                              <Award size={14} />
                              <span className="text-primary font-medium">{achievement.position}</span>
                            </span>
                            <span>{achievement.details}</span>
                          </div>
                        </div>
                        <div className="text-xs text-muted-foreground mt-2 md:mt-0">
                          {achievement.date}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {achievement.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-10"
        >
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-5 border border-border">
            <h3 className="text-lg font-bold mb-3">Ready for New Challenges</h3>
            <p className="text-sm text-muted-foreground mb-4 max-w-2xl mx-auto">
              Always looking for opportunities to contribute to innovative projects, 
              participate in hackathons, and collaborate with talented teams.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-2.5 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
            >
              Let&apos;s Collaborate
              <Users className="ml-2" size={16} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;