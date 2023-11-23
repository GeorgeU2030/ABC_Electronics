/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        azp: "#164863",
        azs: "#427D9D",
        azt: "#9BBEC8",
        azf: "#DDF2FD",
        butcol: "#1AAF64",
      },
    },
  },
  plugins: [],
}
