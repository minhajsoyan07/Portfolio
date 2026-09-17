
'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'
        }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-16">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold font-poppins relative group">
            <span className="text-text-primary">Minhajul</span>
            <span className="text-accent-cyan">.</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-cyan transition-all duration-300 group-hover:w-full"></span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-300 relative group ${pathname === item.href ? 'text-accent-cyan' : 'text-text-primary hover:text-accent-cyan'
                  }`}
              >
                {item.name}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-accent-cyan transition-all duration-300 ${pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                ></span>
              </Link>
            ))}
            {/* Admin Link (Hidden/Subtle) */}
            <Link
              href="/admin/login"
              className="text-xs text-text-secondary hover:text-accent-purple"
            >
              Admin
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-text-primary text-2xl"
            aria-label="Toggle menu"
          >
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden fixed inset-0 bg-white z-40 pt-24 px-4 overflow-hidden"
          >
            <div className="flex flex-col items-center gap-8 text-center">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-2xl font-bold ${pathname === item.href ? 'text-accent-cyan' : 'text-text-primary'
                      }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
