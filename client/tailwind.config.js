/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#913A42",
      },
      fontFamily: {
        primaryText: ['"Helvetica Neue Medium"', "sans-serif"],
        secondaryText: ['"Helvetica Neue Light"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
