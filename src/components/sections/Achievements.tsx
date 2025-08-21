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
    },
    {
      category: "Leadership & Experience",
      icon: Users,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      items: [
        {
          title: "Official Web Team, NIT Jamshedpur",
          position: "Core Developer",
          details: "Serving 6.8 million+ users",
          date: "Jan 2024 - Present",
          description: "Maintained institute website, built faculty portfolios, contributed 20+ merged PRs"
        },
        {
          title: "Industry & Alumni Relations Cell",
          position: "Web Lead",
          details: "Managing alumni database and outreach",
          date: "Aug 2024 - Present",
          description: "Leading a team of 6 members for alumni engagement initiatives"
        },
        {
          title: "NSS NIT Jamshedpur",
          position: "Web Developer",
          details: "Team of 15+ developers",
          date: "2024 - Present",
          description: "Developed key modules for landing pages, event management, and volunteer coordination"
        }
      ]
    }
  ];

  const stats = [
    { label: "Hackathon Wins", value: "3", icon: Trophy },
    { label: "Global Rank", value: "1,370", icon: Medal },
    { label: "Users Served", value: "6.8M+", icon: Users },
    { label: "Team Projects", value: "15+", icon: Briefcase }
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
    <section id="achievements" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Achievements & Leadership</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recognition for technical excellence, leadership, and contribution to the developer community
          </p>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
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
                className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="mb-4 flex justify-center">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <IconComponent className="text-primary" size={24} />
                  </div>
                </div>
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
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
          className="space-y-12"
        >
          {achievements.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <motion.div key={category.category} variants={item} className="space-y-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`p-3 ${category.bgColor} rounded-lg`}>
                    <IconComponent className={category.color} size={28} />
                  </div>
                  <h3 className="text-2xl font-bold">{category.category}</h3>
                </div>

                <div className="grid gap-6">
                  {category.items.map((achievement, index) => (
                    <motion.div
                      key={achievement.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: categoryIndex * 0.2 + index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold mb-1">{achievement.title}</h4>
                          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-sm text-muted-foreground">
                            <span className="flex items-center space-x-1">
                              <Award size={16} />
                              <span className="text-primary font-medium">{achievement.position}</span>
                            </span>
                            <span>{achievement.details}</span>
                          </div>
                        </div>
                        <div className="text-sm text-muted-foreground mt-2 md:mt-0">
                          {achievement.date}
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
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
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-border">
            <h3 className="text-xl font-bold mb-4">Ready for New Challenges</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Always looking for opportunities to contribute to innovative projects, 
              participate in hackathons, and collaborate with talented teams.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              Let&apos;s Collaborate
              <Users className="ml-2" size={20} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;