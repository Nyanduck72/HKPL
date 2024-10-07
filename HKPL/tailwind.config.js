/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        right: "10px 0 15px -3px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
