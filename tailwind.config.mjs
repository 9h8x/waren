/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['Consolas', 'Monaco', 'monospace'],
      },
      colors: {
        dark: '#000000',
        accent: '#6D28D9',
      },
    },
  },
  plugins: [],
}