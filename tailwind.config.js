/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        main: "#037f9e",
        body: "#050505",
        "selected-text": "#059ebf",
        theme: "#5c318c",
        secondary: "#919aA4",
        badge: "#e3f6f9",
        "badge-text": "#697477",
        inputBorder: "#565666",
        input: "#2A2A33",
        "secondary-title": "#2a3b47",
        title: "#2a3b47",
      },
      fontFamily: {
        poppins: ["Poppins", "serif"],
      },
    },
  },
  plugins: [],
};
