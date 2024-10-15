/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'screen-xl': '1280px',
      },
    },
  },
  plugins: [require('daisyui'),],
  daisyui: {
    themes: ["light"],
  },
}