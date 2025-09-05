import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        // 🎨 Raaganjali custom palette
        background: "#0d1b3d", // deep navy
        foreground: "#ffffff", // white
        gold: {
          DEFAULT: "#d67a1e", // gold
          dark: "#a85c14",    // darker gold
        },
        border: "rgba(255,255,255,0.2)",
        card: {
          DEFAULT: "#ffffff",
          foreground: "#0d1b3d",
        },
        muted: {
          DEFAULT: "#f9f9f9",
          foreground: "#333333",
        },
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #d67a1e, #a85c14)",
        "gradient-secondary": "linear-gradient(135deg, #0d1b3d, #1c2a4d)",
      },
      boxShadow: {
        card: "0 4px 12px rgba(0,0,0,0.3)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
