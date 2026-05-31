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
        church: {
          primary: "#1e40af", // Deep blue
          secondary: "#f59e0b", // Amber
        },
      },
    },
  },
  plugins: [],
};
export default config;
