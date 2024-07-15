import type { Config } from "tailwindcss";
/** @type {import('tailwindcss').Config} */


const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-image': "url('/prism/prism/background.png')",
      },
      colors: {
        white: "#fff",
        blue: "#4547a0",
        salmon: {
          "100": "#f67366",
          "200": "rgba(246, 115, 102, 0.39)",
        },
        mediumspringgreen: "#00cf78",
        mediumpurple: {
          "100": "#6b6ec7",
          "200": "rgba(107, 110, 199, 0.09)",
        },
        "button-blue": "#2c2d5b",
        gold: "#ffc700",
        darkslateblue: "rgba(69, 71, 160, 0.46)",
        black: "#000",
        red: "#ff0000",
        steelblue: {
          "100": "#70719c",
          "200": "#5e618f",
        },
        midnightblue: {
          "100": "#060747",
          "200": "#01034e",
        },
        ghostwhite: {
          "100": "#f0f1ff",
          "200": "rgba(243, 243, 255, 0.45)",
        },
        indianred: "#de594d",
        tomato: "#dc3322",
        darkgray: {
          "100": "#a7a7a7",
          "200": "#a4a3a3",
        },
      },
      spacing: {},
      fontFamily: {
        lato: "Lato",
        montserrat: "Montserrat",
      },
      borderRadius: {
        mini: "15px",
        "3xs": "10px",
        "12xs": "1px",
        "8xs": "5px",
        xl: "20px",
        "31xl": "50px",
        "81xl": "100px",
      },
    },
    fontSize: {
      "11xl": "1.875rem",
      "5xl": "1.5rem",
      lg: "1.125rem",
      "21xl": "2.5rem",
      "13xl": "2rem",
      "16xl": "2.188rem",
      "9xl": "1.75rem",
      "2xl": "1.313rem",
      xl: "1.25rem",
      base: "1rem",
      "61xl": "5rem",
      "31xl": "3.125rem",
      xs: "0.75rem",
      sm: "0.875rem",
      "6xl": "1.563rem",
      "3xs": "0.625rem",
      inherit: "inherit",
    },
    screens: {
      mq1650: {
        raw: "screen and (max-width: 1650px)",
      },
      mq1300: {
        raw: "screen and (max-width: 1300px)",
      },
      mq900: {
        raw: "screen and (max-width: 900px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
};
export default config;


