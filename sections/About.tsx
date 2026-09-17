
'use client'

import { motion } from 'framer-motion'
import { FaGraduationCap, FaCode, FaTools } from 'react-icons/fa'

export default function About({ data }: { data: any }) {

  if (!data) return <div>Loading...</div>

  return (
    <section id="about" className="py-32 bg-dark-secondary relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-accent-cyan uppercase tracking-widest text-sm font-semibold">Who I am</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 text-text-primary">
            About <span className="text-accent-purple">Me</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left - Profile Image Area */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full max-w-sm"
            >
              <div className="absolute inset-0 bg-accent-cyan/10 rounded-[2rem] transform rotate-3" />
              <div className="relative bg-white rounded-[2rem] overflow-hidden shadow-xl border border-gray-100 p-3">
                <div className="aspect-[3/4] bg-gray-100 rounded-[1.5rem] overflow-hidden relative">
                  <img
                    src="/profile.jpg"
                    alt="Minhajul Islam"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right - Content */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">
                Hello! I'm Minhajul Islam
              </h3>
              <p className="text-text-secondary text-lg leading-relaxed font-light">
                {data.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h4 className="flex items-center gap-3 font-semibold text-lg text-text-primary mb-3">
                  <FaGraduationCap className="text-accent-orange text-xl" /> Education
                </h4>
                <ul className="space-y-3 text-text-secondary text-sm">
                  <li>
                    <strong className="block text-text-primary font-medium">B.Sc. in CSE</strong>
                    IUBAT (Ongoing)
                  </li>
                  <li>
                    <strong className="block text-text-primary font-medium">HSC (Science)</strong>
                    Bonarpara Govt. College
                  </li>
                </ul>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h4 className="flex items-center gap-3 font-semibold text-lg text-text-primary mb-3">
                  <FaCode className="text-accent-purple text-xl" /> Training
                </h4>
                <ul className="space-y-3 text-text-secondary text-sm">
                  {data.training?.map((t: any, i: number) => (
                    <li key={i}>
                      <strong className="block text-text-primary font-medium">{t.course}</strong>
                      {t.institute}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Stats - Horizontal Strips */}
            <div className="pt-6 border-t border-gray-200 grid grid-cols-3 gap-8">
              {data.stats?.map((stat: any, index: number) => (
                <div key={index} className="text-center">
                  <h5 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-purple to-accent-pink">
                    {stat.value}{stat.suffix}
                  </h5>
                  <span className="text-sm text-text-secondary tracking-wide uppercase mt-1 block">{stat.label}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
