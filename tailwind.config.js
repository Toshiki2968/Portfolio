/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        main: "#037f9e",
        body: "#050505",
        "selected-text": "#059ebf",
        theme: "#5c318c",
        secondary: "#919aA4",
        badge: "#3F3F51",
        inputBorder: "#565666",
        input: "#2A2A33",
      },
      fontFamily: {
        poppins: ["Poppins", "serif"],
      },
    },
  },
  plugins: [],
};
