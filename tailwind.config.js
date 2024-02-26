/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},


    screens: {
      'sm': '800px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1345px',
      'xl2': '1440px', // Custom breakpoint
    },
  },
  plugins: [],
};
