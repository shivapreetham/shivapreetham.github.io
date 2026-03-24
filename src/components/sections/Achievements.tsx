"use client";

import { motion } from "framer-motion";
import { Trophy, Medal, Award, Code, Users, Briefcase } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      category: "Competitive Programming",
      icon: Code,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      items: [
        {
          title: "Multi-Platform Problem Solving",
          position: "1,500+ Problems Solved",
          details: "LeetCode (Max 1848), CodeChef (Max 1671), Codeforces (Max 1404), HackerRank",
          date: "2024-2025",
          description: "Consistent problem-solving across major competitive programming platforms with strong algorithmic expertise"
        }
      ]
    },
    {
      category: "Hackathons",
      icon: Trophy,
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
      items: [
        {
          title: "HaXplore Hackathon — IIT BHU",
          position: "3rd Place",
          details: "Among 1,100+ teams",
          date: "Feb 2025",
          description: "Built CodeFode, an AI-assisted collaborative code editor with real-time whiteboard features"
        },
        {
          title: "Edge AI Hackathon - Qualcomm",
          position: "Top 10 Finalist",
          details: "Among 1,700+ teams",
          date: "Jun 2025",
          description: "Developed SoulSync, a multimodal emotion-aware AI companion with real-time facial and voice analysis"
        },
        {
          title: "Web Team Hackathon — NIT Jamshedpur",
          position: "1st Place",
          details: "Professor Portfolio Builder",
          date: "Jan 2025",
          description: "Created a no-code platform for academics to build professional portfolios with drag-and-drop functionality"
        },
        {
          title: "Xavnier Codefest — NIT Jamshedpur",
          position: "3rd Position",
          details: "Team Competitive Coding",
          date: "Apr 2025",
          description: "Demonstrated strong teamwork and problem-solving skills in competitive programming challenges"
        }
      ]
    }
  ];

  const stats = [
    { label: "Problems Solved", value: "1,500+", icon: Code },
    { label: "Hackathon Wins", value: "4", icon: Trophy },
    { label: "Max LeetCode", value: "1848", icon: Medal },
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
    <section id="achievements" className="py-12 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-yellow-500/10 backdrop-blur-sm border border-yellow-500/20 rounded-full mb-4"
          >
            <Trophy className="w-4 h-4 text-yellow-400" />
            <span className="text-xs font-medium text-yellow-300 font-display">Achievements</span>
          </motion.div>
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white font-display">Recognition & Awards</h2>
          <p className="text-sm text-gray-300 max-w-2xl mx-auto">
            Technical excellence in competitive programming and hackathons
          </p>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8"
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
                className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700 rounded-lg p-3 text-center hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 group"
              >
                <div className="mb-2 flex justify-center">
                  <div className="p-2 bg-blue-500/10 rounded-full group-hover:bg-blue-500/20 transition-colors">
                    <IconComponent className="text-blue-400" size={16} />
                  </div>
                </div>
                <div className="text-xl font-bold text-white mb-0.5 font-display">{stat.value}</div>
                <div className="text-[10px] text-gray-400 font-medium">{stat.label}</div>
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
          className="space-y-6"
        >
          {achievements.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <motion.div key={category.category} variants={item} className="space-y-3">
                <div className="flex items-center space-x-2.5 mb-3">
                  <div className={`p-2 ${category.bgColor} rounded-lg border border-gray-700`}>
                    <IconComponent className={category.color} size={18} />
                  </div>
                  <h3 className="text-lg font-bold text-white font-display">{category.category}</h3>
                </div>

                <div className="grid gap-3">
                  {category.items.map((achievement, index) => (
                    <motion.div
                      key={achievement.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: categoryIndex * 0.2 + index * 0.1 }}
                      whileHover={{ scale: 1.01 }}
                      className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700 rounded-lg p-3.5 hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-500/40 transition-all duration-300"
                    >
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                        <div className="flex-1">
                          <h4 className="text-base font-semibold text-white mb-1.5 font-display">{achievement.title}</h4>
                          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2.5 text-xs text-gray-400">
                            <span className="flex items-center gap-1">
                              <Award size={12} className="text-yellow-400" />
                              <span className="text-yellow-400 font-semibold">{achievement.position}</span>
                            </span>
                            <span className="text-gray-300">{achievement.details}</span>
                          </div>
                        </div>
                        <div className="text-[10px] text-gray-400 mt-1.5 md:mt-0 bg-gray-800/50 px-2.5 py-1 rounded border border-gray-700">
                          {achievement.date}
                        </div>
                      </div>
                      <p className="text-xs text-gray-300 leading-relaxed">
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
          className="text-center mt-8"
        >
          <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl p-4 border border-blue-500/25">
            <h3 className="text-base font-bold mb-2 text-white font-display">Ready for New Challenges</h3>
            <p className="text-xs text-gray-300 mb-3 max-w-2xl mx-auto">
              Always looking for opportunities to contribute to innovative projects,
              participate in hackathons, and collaborate with talented teams.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-blue-600 transition-all shadow-lg hover:scale-105 text-sm"
            >
              Let&apos;s Collaborate
              <Users size={16} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;