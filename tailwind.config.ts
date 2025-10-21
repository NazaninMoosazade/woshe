import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "0.5rem", // 👈 فقط نیم رِم فاصله
          sm: "0.5rem",
          lg: "1rem",
          xl: "1rem",
        },
      },
      colors: {
        textcolor: "#222",
        green: '#5b775e',
        bg: '#fafaf9',
        bgLightBlue: '#d8eafc',
        textBlue: '#1e87f0',
        textHover : '#666'
      },
      fontFamily: {
        shabnam: ["Shabnam", "sans-serif"],
        theNautigal: ["TheNautigal" , "sans-serif"]
      },
      fontWeight: {
        light: "300",
        medium: "500",
        bold: "700",
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    }),
  ],
};

export default config;
