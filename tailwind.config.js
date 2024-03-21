function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

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
      textColor: {
        textColor: "rgb(var(--color-text))",
        primary: "rgb(var(--color-primary))",
      },
      backgroundColor: {
        bgColor: "rgb(var(--color-background))",
        inputColor: "rgb(var(--input-background))",
        primary: "rgb(var(--color-primary))",
      },
      boxShadowColor: {
        skin: {
          shadow: withOpacity("--color-shadow"),
        },
      },
    },
  },
  plugins: [],
};
