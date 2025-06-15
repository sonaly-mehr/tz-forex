/** @type {import('tailwindcss').Config} */
// @ts-nocheck
export const content = [
  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
];

export const theme = {
  extend: {
    maxWidth: {
      layout: "1596px",
    },
    fontFamily: {
      darkerGrotesque: ["var(--font-darkerGrotesque)"],
      figtree: ["var(--font-figtree)"],
      openSans: ["var(--font-openSans)"],
      poppins: ["var(--font-poppins)"],
    },
    colors: {
      primary: "#0006B1",
      dark: "#02001A",
      black: "#1D242D",
    },
    keyframes: {
      "accordion-down": {
        from: { height: 0 },
        to: { height: "var(--radix-accordion-content-height)" },
      },
      "accordion-up": {
        from: { height: "var(--radix-accordion-content-height)" },
        to: { height: 0 },
      },
    },
    animation: {
      "accordion-down": "accordion-down 0.2s ease-out",
      "accordion-up": "accordion-up 0.2s ease-out",
    },
  },
  container: {
    center: true, // fixed: boolean not string
  },
};

export const plugins = [require("tailwindcss-animate")];
