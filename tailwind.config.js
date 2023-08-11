/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "15px",
      screens: {
        // xs: "360px",
        sm: "640px",
        md: "768px",
        lg: "991px",
        xl: "1129px",
      },
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
