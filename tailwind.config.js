/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
        inconsolata: ["Inconsolata", "monospace"],
      },
      colors: {
        "primary-blue": "#0c0d21",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        buttonShadow: "4px 4px 4px 2px rgb(47,50,126)",
      },
      keyframes: {
        wave: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(20deg)" },
          "50%": { transform: "rotate(-20deg)" },
          "75%": { transform: "rotate(10deg)" },
        },
      },
      animation: {
        wave: "wave 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
