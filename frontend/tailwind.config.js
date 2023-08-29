/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#365E63',
        accent: '#EF7B6A',
        bgColor: '#EEF5F8',
        textColor: '#180806',
      }
    },
  },
  plugins: [],
}

