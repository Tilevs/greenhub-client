/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
        "mobile": {
          min: "0px",
          max: "768px",
        },
        "tablet": {
          min: "769px",
          max: "1270px",
        },
        "desktop": {
          min: "1271px",
          max: "1920px",
        },
        "fullscreen": {
          min: "1921px"
        },
      }
    },
  },
  plugins: [],
}