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
        "text-1": "#fff",
        "text-2": "#d9d9d9",
        link: "#0091f7",
        em: "#fc5894",
        thead: "#cfcfcf",
        tbody: "#b3b3b3",
        li: "#b3b3b3",
        h1: "#fff",
        h2: "#f0f0f0",
        h3: "#ededed",
        quote: "#c658fc",
        p: "#b3b3b3",
        tborder: "#f7701f",
        "accent-1": "#555dfa",
      },
    },
    fontSize: {
      table: "16px",
      article: "18px",
    },
    spacing: {
      gap: "1rem",
      "x-pad": "8rem",
    },
    height: {
      nav: "5rem",
    },
  },
  plugins: [],
};
