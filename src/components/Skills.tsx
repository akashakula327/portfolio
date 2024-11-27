import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skills = [
  { name: "React", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "Python", level: 75 },
  { name: "AWS", level: 70 },
  { name: "Docker", level: 65 }
];

export const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Skills</h2>
          <p className="text-gray-400">Technologies I work with</p>
        </motion.div>

        <div className="space-y-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex justify-between mb-2">
                <span className="text-white font-medium">{skill.name}</span>
                <span className="text-gray-400">{skill.level}%</span>
              </div>
              <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className="h-full bg-cyan-500 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};