/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }
      md: "768px",
      // => @media (min-width: 768px) { ... }
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
      xxl: "1440px",
      // => @media (min-width: 1440px) { ... }
      xxxl: "1600px",
      // => @media (min-width: 1600px) { ... }
      "2xl": "2048px",
      // => @media (min-width: 2048px) { ... }
      "3xl": "2560px",
      // => @media (min-width: 2560px) { ... }
      "4xl": "3072px",
      // => @media (min-width: 3072px) { ... }
    },
  },
  plugins: [],
};
