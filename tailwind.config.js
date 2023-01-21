/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
  ],
  backgroundGradient: {
    bg: "linear-gradient(352deg, rgba(242,218,255,1) 0%, rgba(222,219,252,1) 24%, rgba(227,239,252,1) 100%)",
  },
  theme: {
    extend: {
      keyframes: {
        pulsing: {
          "0%": {
            opacity: 0.1,
          },
          "100%": {
            opacity: 1,
          },
        },
      },
      animation: {
        pulsingOne: "pulsing 2.7s ease-in-out infinite alternate-reverse",
        pulsingTwo: "pulsing 1.9s ease-in-out infinite alternate-reverse",
        pulsingThree: "pulsing 3.3s ease-in-out infinite alternate-reverse",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
