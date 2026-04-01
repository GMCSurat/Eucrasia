/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
         display: ['"Rye"', 'serif'],
  body: ['"DM Sans"', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      colors: {
        void: '#050508',
        'void-2': '#0a0a12',
        red: {
          glow: '#ff2244',
          deep: '#8b0020',
        },
        teal: {
          glow: '#00ffe4',
          deep: '#006b5f',
        },
        mist: '#b8c0cc',
      },
      animation: {
        'flicker': 'flicker 3s infinite',
        'float': 'float 6s ease-in-out infinite',
        'scanline': 'scanline 8s linear infinite',
        'pulse-red': 'pulseRed 2s ease-in-out infinite',
        'glitch': 'glitch 5s infinite',
      },
      keyframes: {
        flicker: {
          '0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%': { opacity: '1' },
          '20%, 24%, 55%': { opacity: '0.4' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        pulseRed: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255,34,68,0.4)' },
          '50%': { boxShadow: '0 0 60px rgba(255,34,68,0.9)' },
        },
        glitch: {
          '0%, 90%, 100%': { transform: 'translateX(0)', filter: 'none' },
          '91%': { transform: 'translateX(-3px)', filter: 'hue-rotate(90deg)' },
          '92%': { transform: 'translateX(3px)', filter: 'hue-rotate(-90deg)' },
          '93%': { transform: 'translateX(0)', filter: 'none' },
        },
      },
    },
  },
  plugins: [],
}
