/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0D0E15",
        secondary: "#0965C0",
      },
      boxShadow: {
        informationShadow: "0 12px 54px rgba(255, 255, 255, .02)",
      },
    },
  },
  plugins: [],
};
