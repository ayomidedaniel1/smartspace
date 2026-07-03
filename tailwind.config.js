module.exports = {
  mode: ['jit'],
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      fontFamily: {
        'dmsans': ['var(--font-dmsans)', 'sans-serif'],
        'inter': ['var(--font-inter)', 'sans-serif'],
        'manrope': ['var(--font-manrope)', 'sans-serif'],
        'roboto': ['var(--font-roboto)', 'sans-serif']
      },
      colors: {
        'text-black': '#31353B',
        'text-orange': '#FF9900',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};