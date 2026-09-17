'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaLinkedin, FaFacebook, FaArrowUp } from 'react-icons/fa'

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/minhajul-islam07', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/minhajul-islam07', label: 'LinkedIn' },
    { icon: FaFacebook, href: 'https://facebook.com', label: 'Facebook' },
  ]

  return (
    <footer className="relative bg-dark-secondary border-t border-border py-12">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-16">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <p className="text-text-secondary text-sm md:text-base">
            © 2025 Minhajul Islam. All Rights Reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center space-x-6">
            {socialLinks.map((social, index) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.2, y: -5 }}
                  className="text-text-secondary hover:text-accent-cyan transition-colors duration-300"
                  aria-label={social.label}
                >
                  <Icon className="text-xl" />
                </motion.a>
              )
            })}
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 p-4 bg-gradient-to-r from-accent-orange to-accent-cyan rounded-full glow-effect hover:shadow-lg transition-all duration-300"
            aria-label="Scroll to top"
          >
            <FaArrowUp className="text-white text-lg" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  )
}

