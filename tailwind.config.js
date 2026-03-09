/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
        serif: ['Instrument Serif', 'serif'],
      },
      colors: {
        bg: '#050508',
        surface: '#0d0d14',
        card: '#111119',
        accent: '#00e5ff',
        accent2: '#7c3aed',
        accent3: '#f59e0b',
        muted: '#6b6b80',
        border: 'rgba(255,255,255,0.07)',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease forwards',
        'pulse-dot': 'pulseDot 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'glitch': 'glitch 0.15s ease',
        'scroll-line': 'scrollLine 2s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.4', transform: 'scale(0.7)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        scrollLine: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '1' },
        },
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(rgba(0,229,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.03) 1px, transparent 1px)",
        'glow-accent': 'radial-gradient(circle, rgba(0,229,255,0.15), transparent 70%)',
        'glow-accent2': 'radial-gradient(circle, rgba(124,58,237,0.12), transparent 70%)',
      },
      backgroundSize: {
        'grid': '80px 80px',
      },
    },
  },
  plugins: [],
};
