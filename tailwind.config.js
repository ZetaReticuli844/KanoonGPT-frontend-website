/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  boxShadow: {
    card: "0px 35px 120px -15px #211e35",
  },
  plugins: [require('flowbite/plugin'),require("daisyui"),require("tailgrids/plugin")],
}