/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: 'raleway',
        seasons: 'the-seasons'
      },
      colors: {
        beige: '#E5DCCF',
        pink: '#DEC7BD',
        dark: '#665E5A'
      }
    },
  },
  plugins: [],
}