import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans:  ['var(--font-inter)',       'system-ui', 'sans-serif'],
        tight: ['var(--font-inter-tight)', 'system-ui', 'sans-serif'],
      },
      colors: {
        bg:      '#F5F4F0',
        surface: '#EEECEA',
        fg:      '#111111',
        muted:   '#777777',
        border:  'rgba(17,17,17,0.08)',
        accent:  '#D4FF00',
        dark:    '#111111',
      },
      spacing: {
        'section': 'clamp(96px,12vw,180px)',
        'section-sm': 'clamp(64px,8vw,120px)',
      },
      maxWidth: {
        container: '1440px',
      },
      transitionTimingFunction: {
        'expo-out':   'cubic-bezier(0.16,1,0.3,1)',
        'expo-inout': 'cubic-bezier(0.87,0,0.13,1)',
        'quart-out':  'cubic-bezier(0.25,1,0.5,1)',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
      },
      keyframes: {
        'marquee-fwd': {
          from: { transform: 'translateX(0)' },
          to:   { transform: 'translateX(-50%)' },
        },
        'marquee-rev': {
          from: { transform: 'translateX(-50%)' },
          to:   { transform: 'translateX(0)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%':     { transform: 'translateY(-10px)' },
        },
        'ping-slow': {
          '75%,100%': { transform: 'scale(2)', opacity: '0' },
        },
      },
      animation: {
        'marquee-fwd':  'marquee-fwd 32s linear infinite',
        'marquee-rev':  'marquee-rev 32s linear infinite',
        'marquee-slow': 'marquee-fwd 52s linear infinite',
        float:          'float 6s ease-in-out infinite',
        'ping-slow':    'ping-slow 2.5s cubic-bezier(0,0,0.2,1) infinite',
      },
    },
  },
  plugins: [],
}

export default config
