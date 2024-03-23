/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "auto-fit-250": "repeat(auto-fit, minmax(250px, 1fr))",
      },
      gridTemplateRows: {
        "auto-rows": "auto auto 1fr auto",
      },
    },
  },
  plugins: [],
};
