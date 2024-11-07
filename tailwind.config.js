/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/*.{html,js}",
    "./*.{html,js}"
  ],
  theme: {
    fontFamily: {
      sans: ['DM sans', 'sans-serif'],
    },
    colors: {
      "purple": {
        100: "#DBD1FC",
        500: "#7551DC"
      },
      "yellow": {
        100: "#F9EEE2",
        500: "#FFCC6A"
      },
      "white": "FFFFFF",
      "black": "121212"
    },
    extend: {},
  },
  plugins: [],
}

