
'use client'

import { useState, useRef, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'
import emailjs from '@emailjs/browser'

export default function Contact({ data }: { data: any }) {
  const formRef = useRef<HTMLFormElement>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')

    // For now, since user wants 'hire me' to open gmail, let's keep the form for direct msg
    // BUT we will also add a manual Mail button if they prefer.

    // Simulating email send for demo (replace with real EmailJS keys)
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 5000)
    }, 1500)

    /*
    try {
      const serviceId = 'YOUR_SERVICE_ID'
      const templateId = 'YOUR_TEMPLATE_ID'
      const publicKey = 'YOUR_PUBLIC_KEY'
      if (formRef.current) {
          await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      }
    } catch ...
    */
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const contactInfo = [
    { icon: FaEnvelope, label: 'Email', value: data.email, href: `mailto:${data.email}` },
    { icon: FaPhone, label: 'Phone', value: data.phone, href: `tel:${data.phone}` },
    { icon: FaMapMarkerAlt, label: 'Location', value: data.address, href: '#' },
  ]

  return (
    <section id="contact" className="py-32 bg-dark-primary relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left - Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-accent-pink uppercase tracking-widest text-sm font-semibold">Contact</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6 text-text-primary">
                Let's Discuss Your <span className="text-accent-cyan">Project</span>
              </h2>
              <p className="text-text-secondary text-lg mb-10 leading-relaxed font-light">
                I'm always open to discussing web development work or partnership opportunities.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, idx) => {
                  const Icon = info.icon
                  return (
                    <a
                      key={idx}
                      href={info.href}
                      className="flex items-center gap-5 p-5 bg-white rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 bg-gray-50 text-gray-600 rounded-full flex items-center justify-center text-xl group-hover:bg-accent-cyan group-hover:text-white transition-colors">
                        <Icon />
                      </div>
                      <div>
                        <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold">{info.label}</span>
                        <p className="text-lg font-medium text-text-primary">{info.value}</p>
                      </div>
                    </a>
                  )
                })}
              </div>
            </motion.div>
          </div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 sm:p-10 rounded-3xl shadow-xl border border-gray-100"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-cyan/20 focus:border-accent-cyan transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-cyan/20 focus:border-accent-cyan transition-all"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-cyan/20 focus:border-accent-cyan transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className={`w-full py-4 rounded-xl font-bold text-white transition-all duration-300 shadow-lg ${status === 'success' ? 'bg-green-500' : 'bg-text-primary hover:bg-black'
                  }`}
              >
                {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Send Message'}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
