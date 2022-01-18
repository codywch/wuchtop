module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
    },
    typography: (theme) => ({}),
    extend: {
      backgroundImage: {
        'bgimg': "url('/images/bg.svg')",
      }
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
}
