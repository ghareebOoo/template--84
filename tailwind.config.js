/** @type {import('tailwindcss').Config} */
export default {
  content: [  "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
    darkMode: "class",
  theme: {
    extend: {
      transitionDuration:{
        '3000': '3000ms',
      },
      rotate:{
        "360": "360deg"
      }
    },
  },
  plugins: [],
}

