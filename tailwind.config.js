// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // VERY IMPORTANT: includes App.jsx, main.jsx
  ],
  theme: {
    extend: {
      fontFamily: {
        russo: ['"Russo One"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
