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
        accent: '#147387',
        blueLight: '#cef1f8',
        bgColor: '#EFFFFE',
        textColor: '#0C1639',
      }
    },
  },
  plugins: [],
}

