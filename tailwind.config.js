module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      },

      fontSize: {
        "2sm": "0.75rem",
        "sm": "1rem",
        "base": "1.25rem",
        "lg": "1.50rem",
        "xl": "2rem",
        "2xl": "2.5rem",
        "3xl": "3rem",
      },

      fontFamily: {
        "syne": "Syne",
        "lexend": 'Lexend Deca, sans-serif',
      },
    },

  },
  plugins: [],
}
