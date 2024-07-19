/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
      screens: {
          'xl': '1440px',
          'md': '1024px'
      },
      extend: {
        backgroundImage: {
          'hero-pattern': "url('images/image.png')",
        },
        buttonImage: {
          'btn-img': "url(images/Mediamodifier-Design (1).svg)"
        },
          colors: {
              'almost-white': 'hsl(0, 0%, 98%)',
              'medium-gray': 'hsl(0, 0%, 41%)',
              'almost-black': 'hsl(0, 0%, 8%)'
          }
      },
      fontFamily: {
        inter: ["Inter Tight", "sans-serif"],
        mabry: ["Mabry Pro", "sans-serif"],
  },

  plugins: [],}}