import tailwindAnimate from 'tailwindcss-animate';
import tailwindScrollbarHide from 'tailwind-scrollbar-hide';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1e3a8a',
          light: '#2563eb',
        },
        secondary: '#0f172a',
        accent: '#d97706',
        'bg-main': '#f8fafc',
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        premium: '0 20px 40px -10px rgba(15, 23, 42, 0.15)',
      }
    },
  },
  plugins: [
    tailwindAnimate,
    tailwindScrollbarHide,
  ],
}


