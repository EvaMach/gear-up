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
        accent: '#EF7B6A',
        bgColor: '#EFFFFE',
        textColor: '#0C1639',
      }
    },
  },
  plugins: [],
}

