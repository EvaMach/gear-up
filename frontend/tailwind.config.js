/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF7655',
        accent: '#5da0b3',
        blueLight: '#4c9fad66',
        bgColor: '#EFFFFE',
        bgDark: "#d1eceb",
        textColor: '#0C1639',
        inputBg: '#c9e8ed',
        success: '#58bf9866',
      },
      minWidth: {
        '5': '5rem',
      },
    },
  },
  plugins: [],
}

