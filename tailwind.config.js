/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
            rubik: ['Rubik', 'sans-serif'],
        }, 
        screens: {
            '2xs': '385px',
            'md-2': '800px'
        },
        color: {
            'coral-red': "#FA5757"
        }
    },
  },
  plugins: [],
}