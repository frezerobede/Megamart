/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
     
        backgroundImage: {
          'hero-pattern': "url('https://img.freepik.com/free-photo/abstract-digital-grid-black-background_53876-97647.jpg')",
         
        }
    },
  },
  plugins: [],
}

