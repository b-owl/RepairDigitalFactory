/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        TitrPlus: "TitrPlus",
      },
      borderWidth: {
        1: "1px",
      },
      colors: {
        "main-color": "#001c30",
        "second-color": "#176b87",
        "third-color": "#64ccc5",
        "txt-color": "#dafffb",
      },
    },
  },
  plugins: [],
};
