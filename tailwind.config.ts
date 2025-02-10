import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // Enables dark mode switching
  theme: {
    extend: {
      colors: {
        "oslo-blue": "#354F72", 
        "oslo-blue-dark": "#5DA1D6",
        "accent-hover": "#2A3E58",
        "highlight": "#84A9C0",

        // Backgrounds
        "background-light": "#F4F4F4", 
        "background-dark": "#121212", 
        "background-secondary": "#FFFFFF", 

        // Text Colors
        "text-light": "#1C1C1C", 
        "text-dark": "#F4F4F4", 

        // Extra Utility Colors
        "error": "#FF6B6B", 
        "error-dark": "#FF5A5A", 
      },
    },
  },
  plugins: [],
};

export default config satisfies Config;
