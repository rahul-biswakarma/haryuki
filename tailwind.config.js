/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        white: "#ffffff",
        "gray-100": "#bfbfbf",
        "gray-200": "#d1d5db",
        "gray-300": "#9ca3af",
        "gray-500": "#797a7d",
        "gray-600": "#4e4e4f",
        "gray-800": "#252525",
        "gray-900": "#1a191b",
        "gray-1000": "#1a1a1a",
      },
    },
    spacing: {
      gap: "1rem",
      "x-pad": "8rem",
    },
    height: {
      nav: "4rem",
    },
  },
  plugins: [],
};
