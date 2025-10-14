import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        shabnam: ["Shabnam", "sans-serif"],
      },
      fontWeight: {
        light: "300",
        medium: "500",
        bold: "700",
      },
    },
  },
  plugins: [],
};

export default config;
