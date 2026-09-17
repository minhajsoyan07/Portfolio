'use client'

import { motion } from 'framer-motion'
import { FaCode, FaLaptopCode, FaPalette, FaPlug } from 'react-icons/fa'

export default function Services({ data }: { data: any[] }) {
  // Map icon strings to components
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'FaCode': return FaCode
      case 'FaLaptopCode': return FaLaptopCode
      case 'FaPalette': return FaPalette
      case 'FaPlug': return FaPlug
      default: return FaCode
    }
  }

  // Pre-define accent colors for icon backgrounds
  const accents = [
    'bg-blue-50 text-blue-600',
    'bg-orange-50 text-orange-600',
    'bg-pink-50 text-pink-600',
    'bg-purple-50 text-purple-600',
  ]

  return (
    <section id="services" className="py-32 bg-dark-primary relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-accent-purple uppercase tracking-widest text-sm font-semibold">Specialization</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 text-text-primary">
            My <span className="text-accent-cyan">Services</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {data && data.map((service, index) => {
            const Icon = getIcon(service.icon)
            const accentClass = accents[index % accents.length]

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="group p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              >
                {/* Hover accent line */}
                <div className="absolute top-0 left-0 w-1 h-full bg-transparent group-hover:bg-accent-cyan transition-colors duration-300" />

                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-3xl transition-transform duration-300 group-hover:scale-110 ${accentClass}`}>
                  <Icon />
                </div>

                <h3 className="text-2xl font-bold text-text-primary mb-3">
                  {service.title}
                </h3>

                <p className="text-text-secondary leading-relaxed font-light">
                  {service.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
