/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans:  ['"Space Grotesk"', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
        mono:  ['"DM Mono"', 'monospace'],
      },
      colors: {
        black:  '#050505',
        white:  '#f8f5f0',
        accent: '#c8f53a',
      },
    },
  },
  plugins: [],
}
