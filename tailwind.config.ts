import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        StrongCyan: "var(--StrongCyan)",
        colorHover: "hsl(172, 67%, 75%)",
        VeryDarCyan: "var(--VeryDarCyan)",
        DarkGrayishCyan: "var(--DarkGrayishCyan)",
        GrayishCyan: "var(--GrayishCyan)",
        LightGrayishCyan: "var(--LightGrayishCyan)",
        VeryLightGrayishCyan: "var(--VeryLightGrayishCyan)",
        White: "var(--White)",
      },
    },
  },
  plugins: [],
};
export default config;
