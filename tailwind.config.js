/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        back: "url('/src/resources/assets/home/mobile/1.jpg')",
        backm: "url('/src/resources/assets/home/tablet/h1.jpg')",
        backl: "url('/src/resources/assets/home/desktop/h1.jpg')",
      },
    },
  },
  plugins: [],
};
