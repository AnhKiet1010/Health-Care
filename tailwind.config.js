/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      inter: ['"Inter"'],
      noto: ['"NotoSansJP"'],
    },
    fontSize: {
      xs: "12px",
      sm: "14px",
      base: "15px",
      lg: "18px",
      xl: "20px",
      xxl: "22px",
      "2xxl": "25px",
    },
    colors: {
      light: "#FFFFFF",
      yellow: "#FFCC21",
      orange: "#FF963C",
      "orange-dark": "#EA6C00",
      "green-light": "#8FE9D0",
      "gray-dark": "#2E2E2E",
      gray: "#414141",
      "gray-light": "#777777",
      "gray-b": "#707070",
      "gray-mirror": "rgba(0,0,0,0.5)",
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "960px",
        xl: "1280",
        "2xl": "1536",
      },
    },
  },
  plugins: [],
};
