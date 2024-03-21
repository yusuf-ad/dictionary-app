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
        textColor: withOpacity("--color-text"),
        primary: withOpacity("--color-primary"),
      },
      backgroundColor: {
        bgColor: withOpacity("--color-background"),
        inputColor: withOpacity("--input-background"),
        primary: withOpacity("--color-primary"),
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
