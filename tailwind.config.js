import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
module.exports = {
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
  plugins: [
    require("tailwindcss-animate"),
    nextui({
      themes: {
        light: {
          layout: {},
          colors: {
            background: "#ffffff",
            foreground: "#121212",
            borderColor: "rgba(69,69,69,0.3)",
            cardColor: "#f1f1f1",
            primary: {
              100: "#ebcccf",
              200: "#d699a0",
              300: "#c26670",
              400: "#ad3341",
              500: "#990011",
              600: "#7a000e",
              700: "#5c000a",
              800: "#3d0007",
              900: "#1f0003",
            },
          },
        },
        dark: {
          layout: {},
          colors: {
            background: "#121212",
            foreground: "#d1d1d1",
            borderColor: "rgba(143,254,255,0.15)",
            cardColor: "#222222",
            primary: {
              100: "#e3ffff",
              200: "#c7ffff",
              300: "#abfeff",
              400: "#8ffeff",
              500: "#73feff",
              600: "#5ccbcc",
              700: "#459899",
              800: "#2e6666",
              900: "#173333",
            },
          },
        },
      },
    }),
  ],
};
