/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'laila': ['"Laila"', 'Arial', 'sans-serif'],
        'catalish-huntera': ['"CatalishHuntera"', 'Georgia', 'serif'],
        'cedarville-cursive': ['"CedarvilleCursive"', 'Comic Sans MS', 'cursive'],
        'roustel': ['"Roustel"', 'Times New Roman', 'serif'],
      },
      colors: {
        'primary': '#FF5C9D',
        'secondary': '#FF85B6',
        'tertiary': '#FFF0F6',
        'fourth': '#FFADCE',
        'dark': '#3D0018',
      },
      animation: {
        'spin-slow': 'spin 5s linear infinite',
        'spin-medium': 'spin 1.5s linear infinite',
        'spin-fast': 'spin 0.75s linear infinite',
      },
    },
  },
  plugins: [],
}