/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        azyellow: "#FF9900",
        azblue: "#146EB4",
        azblack: "#000000",
        azwhite: "#FFFFFF",
      },
    },
  },
  plugins: [],
}
