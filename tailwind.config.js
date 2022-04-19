module.exports = {
  mode: ['jit'],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      fontFamily: {
        'dmsans': ['DM Sans', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'manrope': ['Manrope', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif']
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