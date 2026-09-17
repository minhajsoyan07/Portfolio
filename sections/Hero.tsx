'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope, FaDownload } from 'react-icons/fa'
import { HiOutlineArrowRight } from 'react-icons/hi'

export default function Hero({ data }: { data: any }) {
  const socialLinks = [
    { icon: FaGithub, href: data.socialLinks.github, label: 'GitHub', color: 'hover:text-gray-900' },
    { icon: FaLinkedin, href: data.socialLinks.linkedin, label: 'LinkedIn', color: 'hover:text-blue-600' },
    { icon: FaFacebook, href: data.socialLinks.facebook, label: 'Facebook', color: 'hover:text-blue-700' },
    { icon: FaEnvelope, href: data.socialLinks.email, label: 'Email', color: 'hover:text-red-500' },
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-dark-primary pt-32 pb-20">
      {/* Background Decor - clean & subtle */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-purple/5 rounded-full blur-[130px] mix-blend-multiply pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-cyan/5 rounded-full blur-[130px] mix-blend-multiply pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left space-y-8"
          >
            <div>
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="inline-block px-4 py-2 bg-accent-cyan/10 text-accent-cyan rounded-full text-sm font-semibold tracking-wide uppercase mb-4"
              >
                Software Developer
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-text-primary leading-[1.1]"
              >
                Hello, I'm <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-purple via-accent-pink to-accent-orange animate-gradient-x">
                  Minhajul Islam
                </span>
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg sm:text-xl text-text-secondary max-w-xl mx-auto lg:mx-0 leading-relaxed font-light"
            >
              {data.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4"
            >
              <a
                href="mailto:misoyan07@gmail.com"
                className="px-8 py-4 bg-text-primary text-white rounded-full font-semibold hover:bg-black transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-gray-200 hover:shadow-xl hover:-translate-y-1"
              >
                Hire Me
                <HiOutlineArrowRight />
              </a>
              <a
                href="/cv.pdf"
                download
                className="px-8 py-4 border border-gray-200 text-text-primary bg-white rounded-full font-semibold hover:border-gray-400 transition-all duration-300 flex items-center justify-center gap-2 hover:bg-gray-50"
              >
                Download CV
                <FaDownload className="text-sm text-text-secondary" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex justify-center lg:justify-start gap-5 pt-6 border-t border-gray-100 mt-8"
            >
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-2xl text-text-secondary transition-colors duration-300 ${social.color}`}
                    aria-label={social.label}
                  >
                    <Icon />
                  </a>
                )
              })}
            </motion.div>
          </motion.div>

          {/* Right Image area - simplified & cleaner */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative flex justify-center items-center"
          >
            <div className="relative w-full max-w-[500px] aspect-square">
              {/* Abstract clean background shape */}
              <div className="absolute inset-0 bg-gradient-to-tr from-accent-purple/20 to-accent-cyan/20 rounded-[40px] rotate-3 transform scale-95 opacity-50 blur-xl" />

              {/* Main Card */}
              <div className="relative z-10 w-full h-full bg-white rounded-[40px] shadow-2xl border border-white/50 overflow-hidden flex flex-col items-center justify-center p-8">
                {/* Placeholder for Profile - improved typography placeholder */}
                <div className="w-56 h-56 rounded-full p-2 bg-gradient-to-tr from-accent-purple to-accent-pink mb-6 shadow-inner">
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-white relative">
                    <img
                      src="/profile.jpg"
                      alt="Minhajul Islam"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-text-primary mb-2">Minhajul Islam</h3>
                <p className="text-accent-purple font-medium text-lg mb-6">Full Stack Developer</p>

                <div className="flex gap-3">
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-600">React</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-600">Next.js</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-600">Node.js</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
