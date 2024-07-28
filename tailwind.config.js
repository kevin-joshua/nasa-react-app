/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      zIndex: {
        '-1': '-1',
        '10':'10',
      },
      backgroundImage: {
        'gradient-to-top': 'linear-gradient(to top, #030615, rgba(250, 255, 255,0))',
      },
    },
  },
  plugins: [],
}

