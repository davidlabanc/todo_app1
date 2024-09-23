import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        white: "#ffffff",
        black: "#000000",
        dark: {
          bg: "#18181b",
          border: "#27272a",
          font: "#a1a1aa",
          header: "#e5e5e5",
        },
        light: {
          bg: "#ffffff",
          border: "#e5e5e5",
          font: "#18181b",
          header: "#18181b",
        },
        buttons: {
          submit: "#3b82f6",
          cancel: "#bfdbfe",
          font: "#ffffff",
          green: "",
        },
      },
    },
  },
  plugins: [],
};
export default config;

//bg-light-bg dark:bg-dark-bg dark:dark-border
//button: bg-buttons-submit hover:bg-blue-600 cancel: text-blue-200
//font: dark:text-dark-header, dark:text-dark-font
