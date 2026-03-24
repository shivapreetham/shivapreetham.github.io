"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageCircle } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "shivapreethamofficial@gmail.com",
      href: "mailto:shivapreethamofficial@gmail.com",
      color: "text-blue-500"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-9845920244",
      href: "tel:+919845920244",
      color: "text-green-500"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bengaluru, Karnataka",
      href: "#",
      color: "text-red-500"
    }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/shivapreetham",
      username: "@shivapreetham",
      color: "hover:text-gray-900 dark:hover:text-gray-100"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com/in/shivapreetham",
      username: "@shivapreetham",
      color: "hover:text-blue-600"
    }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Portfolio Contact");
    const body = encodeURIComponent(
      `Hi Shivapreetham,\n\nMy name is ${formData.name}.\n\n${formData.message}\n\nBest regards,\n${formData.name}\n${formData.email}`
    );
    
    window.location.href = `mailto:shivapreethamofficial@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-12 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute -top-20 left-0 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full" />
        <div className="absolute top-40 right-0 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-xs font-medium mb-3">
            <MessageCircle size={14} />
            <span>Let&apos;s Collaborate</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">Get In Touch</h2>
          <p className="text-sm text-gray-300 max-w-xl mx-auto">
            Open to internships, full-time roles, and impactful collaborations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-5">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/80 border border-gray-700 rounded-xl p-4 md:p-5 backdrop-blur-sm shadow-2xl">
              <h3 className="text-lg font-bold mb-3 flex items-center text-white">
                <MessageCircle className="mr-2 text-blue-400" size={20} />
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium mb-1 text-gray-200">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-gray-900/70 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors placeholder:text-gray-500 text-sm"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium mb-1 text-gray-200">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-gray-900/70 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors placeholder:text-gray-500 text-sm"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-medium mb-1 text-gray-200">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-3 py-2 bg-gray-900/70 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none placeholder:text-gray-500 text-sm"
                    placeholder="Share a quick overview..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg hover:from-blue-700 hover:to-cyan-600 transition-all font-semibold text-sm shadow-lg shadow-blue-600/30"
                >
                  Send Message
                  <Send className="ml-2" size={15} />
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {/* Direct Contact */}
            <div>
              <h3 className="text-lg font-bold mb-3 text-white">Contact Information</h3>
              <div className="space-y-2.5">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <motion.a
                      key={info.label}
                      href={info.href}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.01 }}
                      className={`flex items-center space-x-2.5 p-2.5 bg-gradient-to-br from-gray-900/90 to-gray-800/80 border border-gray-700 rounded-lg hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 ${
                        info.href === "#" ? "cursor-default" : "cursor-pointer"
                      }`}
                    >
                      <div className={`p-2 bg-gray-800 rounded-lg ${info.color}`}>
                        <IconComponent size={16} />
                      </div>
                      <div>
                        <p className="font-medium text-white text-xs">{info.label}</p>
                        <p className="text-gray-400 text-xs">{info.value}</p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-base font-semibold mb-2.5 text-white">Connect</h3>
              <div className="grid sm:grid-cols-2 gap-2.5">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.01 }}
                      className={`flex items-center space-x-2.5 p-2.5 bg-gradient-to-br from-gray-900/90 to-gray-800/80 border border-gray-700 rounded-lg hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 ${social.color}`}
                    >
                      <IconComponent size={16} className="text-gray-200" />
                      <div>
                        <p className="font-medium text-white text-xs">{social.name}</p>
                        <p className="text-gray-400 text-xs">{social.username}</p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/25 rounded-xl p-3">
              <p className="text-gray-200 text-xs">
                Typical response time: within 24 hours.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 pt-5 border-t border-gray-800 text-center"
        >
          <p className="text-gray-500 text-xs">
            Built with Next.js, TypeScript, and Tailwind CSS
          </p>
          <p className="text-xs text-gray-600 mt-1">
            © 2025 Shivapreetham H S. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;