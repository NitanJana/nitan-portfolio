import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '15px',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    fontFamily: {
      primary: 'var(--font-jetbrains-mono)',
    },
    extend: {
      colors: {
        primary: '#1b1e28',
        secondary: '#27272c',
        selection: '#4f4169',
        accent: {
          DEFAULT: '#10b981',
          hover: '#6ee7b7',
        },
        'gray-light': '#232329',
      },
      animation: {
        'spin-15': 'spin 15s linear infinite',
        'spin-18': 'spin 18s linear infinite',
        'spin-15-reverse': 'spin 15s linear infinite reverse',
        'spin-18-reverse': 'spin 18s linear infinite reverse',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
