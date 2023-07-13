/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {},
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
