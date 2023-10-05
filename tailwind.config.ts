import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        orbitron: ["var(--font-orbitron)", "sans-serif"],
        montserrat: ["var(--font-montserrat)", "sans-serif"],
        roboto: ["var(--font-roboto)", "sans-serif"],
      },

      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: "hsl(var(--primary))",
        primary_foreground: "hsl(var(--primary-foreground))",

        secondary: "hsl(var(--secondary))",
        secondary_foreground: "hsl(var(--secondary-foreground))",

        destructive: "hsl(var(--destructive))",
        destructive_foreground: "hsl(var(--destructive-foreground))",

        muted: "hsl(var(--muted))",
        muted_foreground: "hsl(var(--muted-foreground))",

        accent: "hsl(var(--accent))",
        accent_foreground: "hsl(var(--accent-foreground))",

        popover: "hsl(var(--popover))",
        popover_foreground: "hsl(var(--popover-foreground))",

        card: "hsl(var(--card))",
        card_foreground: "hsl(var(--card-foreground))",
      },
    },
  },
  plugins: [],
};
export default config;
