/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",  // Include layouts directory
    "!./layouts/mobile-header.{js,ts,jsx,tsx}", // Exclude specific file
  ],
  theme: {
    extend: {
      maxHeight: {
        '0': '0',
        '96': '24rem',
      },
    },
  },
  plugins: [],
};
