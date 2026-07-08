/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'upside-down': {
          dark: '#0a0a0a',
          red: '#dc2626',
          orange: '#ea580c',
        },
      },
      fontFamily: {
        'horror': ['Creepster', 'cursive'],
        'retro': ['Press Start 2P', 'cursive'],
      },
      animation: {
        'flicker': 'flicker 2s infinite alternate',
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },
      keyframes: {
        flicker: {
          '0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%': {
            opacity: '1',
            textShadow: '0 0 10px #ef4444, 0 0 20px #ef4444, 0 0 30px #ef4444',
          },
          '20%, 24%, 55%': {
            opacity: '0.8',
            textShadow: 'none',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(220, 38, 38, 0.5)' },
          '50%': { boxShadow: '0 0 40px rgba(220, 38, 38, 0.8)' },
        },
      },
    },
  },
  plugins: [],
}
