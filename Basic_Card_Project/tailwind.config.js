export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textShadow: {
        sm: "1px 1px 2px rgba(0,0,0,0.5)",
        DEFAULT: "2px 2px 4px rgba(0,0,0,0.6)",
        lg: "3px 3px 8px rgba(0,0,0,0.8)",
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      const newUtilities = {
        ".text-shadow-sm": {
          textShadow: theme("textShadow.sm"),
        },
        ".text-shadow": {
          textShadow: theme("textShadow.DEFAULT"),
        },
        ".text-shadow-lg": {
          textShadow: theme("textShadow.lg"),
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
