/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        inconsolata: ["Inconsolata", "monospace"],
        lora: ["Lora", "serif"],
      },
      backgroundColor: {
        bgColor: "rgb(var(--color-background))",
        inputColor: "rgb(var(--input-background))",
        primary: "rgb(var(--color-primary))",
      },
      textColor: {
        textColor: "rgb(var(--color-text))",
        primary: "rgb(var(--color-primary))",
      },
    },
  },
  plugins: [],
};
