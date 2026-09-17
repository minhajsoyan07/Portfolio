import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Minhajul Islam | Software Developer | Portfolio',
  description: 'Portfolio website of Minhajul Islam - CSE Student at IUBAT, Software Developer, and Problem Solver',
  keywords: 'Minhajul Islam, Software Developer, Web Developer, CSE Student, IUBAT, Portfolio',
  authors: [{ name: 'Minhajul Islam' }],
  openGraph: {
    title: 'Minhajul Islam | Software Developer',
    description: 'Portfolio website of Minhajul Islam - CSE Student at IUBAT',
    type: 'website',
  },
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.variable} font-poppins antialiased bg-dark-primary text-text-primary`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}

