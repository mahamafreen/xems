import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
      },
      colors: {
        // XEMS Color System - Dark Infrastructure Theme
        background: '#0a0a0b',
        foreground: '#f5f5f6',
        
        // Primary surfaces
        'surface-primary': '#0f0f11',
        'surface-secondary': '#1a1a1f',
        'surface-tertiary': '#242429',
        
        // Graphite grays
        'graphite-900': '#0a0a0b',
        'graphite-800': '#1a1a1f',
        'graphite-700': '#2a2a30',
        'graphite-600': '#3a3a42',
        'graphite-500': '#4a4a54',
        'graphite-400': '#6a6a78',
        'graphite-300': '#8a8a94',
        'graphite-200': '#b0b0b8',
        'graphite-100': '#d5d5d8',
        
        // Electric cyan accent
        'electric-cyan': '#00d9ff',
        'electric-cyan-dark': '#00a8cc',
        'electric-cyan-light': '#66e6ff',
        
        // Infrastructure gray
        'infrastructure-gray': '#4a4a54',
        
        // Status colors
        'success': '#00d084',
        'warning': '#ffb800',
        'error': '#ff4757',
        'info': '#00d9ff',
        
        // Text colors
        'text-primary': '#f5f5f6',
        'text-secondary': '#b0b0b8',
        'text-tertiary': '#8a8a94',
        'text-disabled': '#4a4a54',
        
        // Alias colors for components
        'default': '#2a2a30',
        'light': '#3a3a42',
        
        // Vibrant Neon Colors
        'purple-neon': '#9d4edd',
        'magenta': '#ff006e',
        'indigo-bright': '#3a86ff',
        'lime': '#06ffa5',
        'orange-neon': '#ff6b35',
        'blue-accent': '#0099ff',
        'pink-bright': '#ff006e',
        'violet-accent': '#a855f7',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in',
        'fade-up': 'fadeUp 0.5s ease-out',
        'glow': 'glow 2s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
        'shimmer': 'shimmer 3s infinite',
        'bounce-soft': 'bounce-soft 2s ease-in-out infinite',
        'scale-in': 'scale-in 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },
      spacing: {
        'section-padding': '80px 20px',
        'section-gap': '64px',
      },
      transitionDuration: {
        '250': '250ms',
        '350': '350ms',
      },
      borderColor: {
        'default': '#2a2a30',
        'light': '#3a3a42',
      },
    },
  },
  plugins: [],
}

export default config
