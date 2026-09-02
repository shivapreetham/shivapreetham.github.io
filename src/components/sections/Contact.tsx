"use client";

import { useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/site";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Portfolio Contact");
    const body = encodeURIComponent(
      `Hi Shivapreetham,\n\nMy name is ${formData.name}.\n\n${formData.message}\n\nBest regards,\n${formData.name}\n${formData.email}`
    );
    window.location.href = `mailto:${SOCIAL_LINKS.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 py-12 border-t border-border">
      <h2 className="text-lg font-semibold font-display mb-1">Get in touch</h2>
      <p className="text-sm text-muted-foreground mb-6">Open to internships, full-time roles, and collaborations.</p>

      <div className="grid sm:grid-cols-2 gap-8">
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="px-3 py-2 text-sm bg-background border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-brand"
            />
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="px-3 py-2 text-sm bg-background border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-brand"
            />
          </div>
          <textarea
            name="message"
            required
            rows={3}
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            className="w-full px-3 py-2 text-sm bg-background border border-border rounded-md resize-none focus:outline-none focus:ring-1 focus:ring-brand"
          />
          <button
            type="submit"
            className="text-sm px-4 py-2 rounded-md bg-brand text-brand-foreground hover:opacity-90 transition-opacity"
          >
            Send
          </button>
        </form>

        <div className="space-y-2 text-sm">
          <a href={`mailto:${SOCIAL_LINKS.email}`} className="flex items-center gap-2 text-muted-foreground hover:text-brand transition-colors">
            <Mail size={14} /> {SOCIAL_LINKS.email}
          </a>
          <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-brand transition-colors">
            <Github size={14} /> github.com/shivapreetham
          </a>
          <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-brand transition-colors">
            <Linkedin size={14} /> linkedin.com/in/shivapreetham
          </a>
        </div>
      </div>

      <p className="text-xs text-muted-foreground/60 mt-10">© {new Date().getFullYear()} Shivapreetham H S</p>
    </section>
  );
};

export default Contact;
