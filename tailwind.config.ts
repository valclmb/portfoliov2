import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "bg-rotate": "rotate 20s infinite",
      },
      keyframes: {
        "bg-rotate": {
          "0%": {
            rotate: "0deg",
          },
          "50%": {
            scale: "1 1.4",
          },
          "100%": {
            rotate: "360deg",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
