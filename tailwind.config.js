/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          green200: "hsl(148, 38%, 91%)",
          green600: "hsl(169, 82%, 27%)",
          red: "hsl(0, 66%, 54%)",
        },

        neutral: {
          white: "hsl(0, 0%, 100%)",
          grey500: "hsl(186, 15%, 59%)",
          grey900: "hsl(187, 24%, 22%)",
        }
      },


      fontFamily: {
        body: ["Karla"],
      }
    },
  },
  plugins: [],
}