/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        secular : "'Secular One'",
        noto : "'Noto Sans'",
      },
      colors: {
        'foreground' : '#E0E1DD',
        'background' : '#0D1B2A',
        'primary' : '#1B263B',
        'secondary' : '#778DA9',
        'tertiary' : '#415A77'
      } 
    },
  },
  plugins: [],
};
