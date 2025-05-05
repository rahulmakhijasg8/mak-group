/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./public/index.html",
    ],
    theme: {
      extend: {
        colors: {
          primary: "#3490dc",
          secondary: "#ffed4a",
          danger: "#e3342f",
        },
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
        },
        spacing: {
          '72': '18rem',
          '84': '21rem',
          '96': '24rem',
        },
      },
    },
    plugins: [],
    darkMode: 'class', // or 'media' for OS-level preference
  }