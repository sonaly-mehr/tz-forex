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
      primary: "#003FDB",
      dark: "#02001A",
      black: "#1D242D"
    },
  },
  container: {
    center: "true",

  },
};
