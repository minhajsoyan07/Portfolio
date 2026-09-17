'use client'

import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import Link from 'next/link'

export default function Projects({ data }: { data: any[] }) {
  return (
    <section id="projects" className="py-32 bg-dark-secondary relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-accent-orange uppercase tracking-widest text-sm font-semibold">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 text-text-primary">
            Recent <span className="text-accent-cyan">Works</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {data && data.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Project Image Area */}
              <div className="relative h-60 bg-gray-100 overflow-hidden">
                {project.image && project.image !== '/project1.jpg' && project.image !== '' ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-tr from-gray-100 to-gray-200 flex items-center justify-center">
                    <span className="text-4xl font-bold text-gray-300 select-none">{project.title.charAt(0)}</span>
                  </div>
                )}

                {/* Overlay Links */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4 backdrop-blur-[2px]">
                  <Link href={project.demo || '#'} target="_blank" className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform">
                    <FaExternalLinkAlt />
                  </Link>
                  <Link href={project.github || '#'} target="_blank" className="p-3 bg-gray-900 text-white rounded-full hover:scale-110 transition-transform">
                    <FaGithub />
                  </Link>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-text-primary mb-3">
                  {project.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-6 font-light line-clamp-3">
                  {project.description}
                </p>

                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech: string) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-50 text-gray-600 text-xs font-medium rounded-full border border-gray-100"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
