import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, MapPin, Phone } from 'lucide-react';

export const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="contact" className="py-20 bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-400">Let's discuss your next project</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="bg-cyan-500 p-3 rounded-full">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-gray-400">contact@example.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-cyan-500 p-3 rounded-full">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-gray-400">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-cyan-500 p-3 rounded-full">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-medium">Location</h3>
                  <p className="text-gray-400">San Francisco, CA</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
            <div>
              <textarea
                rows={4}
                placeholder="Your Message"
                className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-8 py-3 bg-cyan-500 text-white rounded-lg font-medium hover:bg-cyan-600 transition-colors"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};