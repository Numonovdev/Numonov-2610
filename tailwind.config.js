/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      sm: "340px",
      md: "540px",
      lg: "768px",
      xl: "1180px",
    },
    extend: {},
    keyframes:{
      move:{
        "50%":{transform:"translateY(-1rem"}
      }
    },
    animation: {
     movingY:"move 3s linear infinite"
    },
    fontFamily:{
      Lobster:["Lobster", "sans-serif"],
      Jost: ["Jost", "sans-serif"]
    },
    container:{
      center: true,
      padding:"12px",
      md:"32px"
    }
  },
  plugins: [require('daisyui'),],
}