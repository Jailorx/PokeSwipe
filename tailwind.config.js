/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Comic Sans MS", "sans"], // Replace 'YourCustomFont' with your font name
      },
    },
  },
  plugins: [],
};
