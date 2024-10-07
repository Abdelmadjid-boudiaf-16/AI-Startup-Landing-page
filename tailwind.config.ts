import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {},
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "20px",
          lg: "80px",
        },
        screens: {
          sm: "375px",
          md: "768px",
          lg: "960px",
          xl: "1200px",
        },
      },
    },
    screens: {
      sm: "375px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
