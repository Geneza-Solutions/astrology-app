/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'serif': ['Merriweather', 'ui-serif', 'Georgia', 'serif'],
        'mono': ['ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        indigo: {
          950: '#1a1342',
        },
        purple: {
          950: '#170b2e',
        },
      },
      backgroundImage: {
        'cosmic-gradient': 'linear-gradient(to bottom, #1a1342, #170b2e)',
      },
      animation: {
        'twinkle': 'twinkle 3s infinite ease-in-out',
        'float': 'float 4s infinite ease-in-out',
        'float-slow': 'float-slow 6s infinite ease-in-out',
        'float-slow-reverse': 'float-slow-reverse 7s infinite ease-in-out',
        'pulse-slow': 'pulse-slow 2s infinite ease-in-out',
      },
    },
  },
  plugins: [],
};