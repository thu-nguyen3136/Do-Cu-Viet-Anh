/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      fontFamily: {
        // Đặt 'Be Vietnam Pro' làm font mặc định (sans) thông qua CSS Variable
        sans: ['var(--font-be-vietnam)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}