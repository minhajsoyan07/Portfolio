/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          primary: '#FFFFFF', // White background
          secondary: '#F3F4F6', // Light gray secondary
          surface: '#F9FAFB', // Slightly off-white surface
        },
        text: {
          primary: '#111827', // Dark gray text
          secondary: '#4B5563', // Medium gray text
        },
        accent: {
          orange: '#FF4D00', // Vibrant Orange
          cyan: '#00A8E8', // Slightly darker cyan for contrast on white
          purple: '#9333EA', // Vivid Purple
          pink: '#DB2777', // Deep Pink
        },
        border: 'rgba(0, 0, 0, 0.1)',
      },
      fontFamily: {
        poppins: ['var(--font-poppins)', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #FF6B00, 0 0 10px #FF6B00' },
          '100%': { boxShadow: '0 0 10px #FF6B00, 0 0 20px #FF6B00, 0 0 30px #FF6B00' },
        },
      },
    },
  },
  plugins: [],
}

