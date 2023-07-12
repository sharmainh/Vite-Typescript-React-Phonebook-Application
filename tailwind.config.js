/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // because were writing in typescrip we need the ts, and tsx here so it looks in thos files or else it will not work
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

