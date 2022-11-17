/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        twitGray: "#d6d9db",
        twitBlue: "#1c9bef",
      },
    },
  },
  plugins: [],
};
