module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        calm: {
          light: "#E6F0FA",
          DEFAULT: "#3A6EA5",
          dark: "#1C3D5A",
        },
        fiery: {
          light: "#FFB085",
          DEFAULT: "#E63946",
          dark: "#9B2226",
        },
        neutral: {
          light: "#F5F5F5",
          DEFAULT: "#737373",
          dark: "#171717",
        },
      },
      fontFamily: {
        sans: ["Inter", "Arial", "sans-serif"],
        display: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
}