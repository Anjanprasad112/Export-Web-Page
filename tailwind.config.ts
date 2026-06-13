import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        peach: "#f5f7f3",
        navyFooter: "#10211e",
        ink: "#17211f",
        bodyText: "#52605a",
        tealAccent: "#2f766b"
      },
      fontFamily: {
        sans: ["Inter", "Arial", "sans-serif"],
        serif: ["Fraunces", "Georgia", "serif"]
      },
      boxShadow: {
        soft: "0 18px 45px rgba(21, 42, 37, 0.1)"
      }
    }
  },
  plugins: []
};

export default config;
