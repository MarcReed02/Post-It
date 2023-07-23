/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'Patrick Hand SC': ['Patrick Hand SC', 'sans-serif'],
        'Patrick Hand': ['Patrick Hand', 'sans-serif']
      },
    }
  },
  plugins: [],
}