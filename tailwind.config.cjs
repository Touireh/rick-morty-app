/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'rick-blue': '#00B5CC',
        'morty-green': '#BEE5FD',
        'portal-green': '#97CE4C',
        'portal-yellow': '#E4A788'
      },
    },
  },
  plugins: [],
};