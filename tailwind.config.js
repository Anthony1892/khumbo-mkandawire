module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        heading: "var(--heading-color)",
        subheading: "var(--subheading-color)",
        body: "var(--body-color)",
        ink: {
          dark: "var(--color-ink-dark)",
          light: "var(--color-ink-light)",
          wash: "var(--color-ink-wash)",
          blue: "var(--color-ink-blue)",
        },
        eclipse: {
          deep: "var(--color-eclipse-deep)",
          lavender: "var(--color-eclipse-lavender)",
          medium: "var(--color-eclipse-medium)",
          dark: "var(--color-eclipse-dark)",
        }
      },
      fontFamily: {
        sans: ["Inter", "Arial", "sans-serif"],
        display: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
