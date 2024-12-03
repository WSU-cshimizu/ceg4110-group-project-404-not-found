/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
            borderColor: '#494F55',
            borderColorBottom: '#494F5554',
            mainBackgroundColor: "#F0EAD6",
          },
      },
    },
    plugins: [],
  }