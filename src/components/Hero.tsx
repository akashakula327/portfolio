import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm <span className="text-cyan-400">John Doe</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Full Stack Developer crafting exceptional digital experiences
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex justify-center space-x-6 mb-12"
        >
          {[
            { Icon: Github, href: "https://github.com" },
            { Icon: Linkedin, href: "https://linkedin.com" },
            { Icon: Mail, href: "mailto:contact@example.com" }
          ].map(({ Icon, href }, index) => (
            <motion.a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
            >
              <Icon className="w-6 h-6" />
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-cyan-500 text-white rounded-full font-medium hover:bg-cyan-600 transition-colors inline-block"
          >
            View My Work
          </a>
        </motion.div>
      </div>
    </section>
  );
};