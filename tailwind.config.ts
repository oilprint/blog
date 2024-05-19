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
        light: "#FFFAE4",
        dark:"#0C2439",
        primary: "#296A89",
        accent: "#F89C1F",
        white: "#FFFFFF",
        grey: "#BDC6CB"
      },
      backgroundImage: {

      },
    },
  },
  plugins: [],
};
export default config;
