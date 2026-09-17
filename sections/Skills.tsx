'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const skillCategories = [
  {
    category: 'Languages',
    skills: [
      { name: 'C / C++', level: 85 },
      { name: 'Java', level: 80 },
      { name: 'Python', level: 85 },
      { name: 'Solidity', level: 60 },
    ],
  },
  {
    category: 'Web Dev',
    skills: [
      { name: 'HTML / CSS', level: 90 },
      { name: 'React', level: 80 },
      { name: 'Node.js', level: 75 },
      { name: 'Flutter', level: 70 },
    ],
  },
  {
    category: 'Software',
    skills: [
      { name: 'Premiere Pro', level: 85 },
      { name: 'Photoshop', level: 80 },
      { name: 'MS Office', level: 95 },
      { name: 'VSCode', level: 90 },
    ],
  },
  {
    category: 'Spoken Languages',
    skills: [
      { name: 'Bengali', level: 100 },
      { name: 'English', level: 85 },
      { name: 'Hindi', level: 75 },
    ],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" ref={ref} className="py-20 bg-dark-secondary relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-orange to-accent-cyan mx-auto"></div>
          <p className="text-gray-400 mt-4 text-lg">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
              className="bg-dark-primary p-6 rounded-2xl border border-white/10"
            >
              <h3 className="text-2xl font-bold text-gradient mb-6">{category.category}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-accent-cyan text-sm font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-3 bg-dark-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{
                          duration: 1.5,
                          delay: categoryIndex * 0.2 + skillIndex * 0.1,
                          ease: 'easeOut',
                        }}
                        className="h-full bg-gradient-to-r from-accent-orange to-accent-cyan rounded-full glow-effect"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

