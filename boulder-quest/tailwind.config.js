/** @type {import('tailwindcss').config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        'boulder-green': '#4CAF50',
        'boulder-dark-green': '#1A2A1A',
        'boulder-border-dark': '#2A3A2A',
      },
    },
  },
  plugins: [],
};
