/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        popience: "'Poppins', sans-serif"
      }
    },
  },
  plugins: [require("daisyui")],
}

