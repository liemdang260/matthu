/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      padding: {
        "1/2": "50%",
        full: "100%",
        "1/3": "33.3333333%",
      },
    },
  },
  plugins: [],
};
