/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "bg-pattern": "url('/background.png')",
      },
      boxShadow: {
        text: "text-shadow: 0px 4px 5px rgba(123,123,123,0.6)",
      },
      letterSpacing: {
        title: "letter-spacing: 4rem",
      },
      content: {
        click: "click here",
      },
      spacing: {
        1.25: "0.3rem",
      },
      translate: {
        hamburgerClosed: "translate(27%, -100%)",
        hamburgerOpen: "translate(0, 0)",
      },
      keyframes: {
        slideInDown: {
          "0%": {
            transform: "translate3d(27%, -100%, 0)",
            visibility: "visible",
          },

          "100%": {
            transform: "translate3d(0, 0, 0)",
          },
        },
        slideOutUp: {
          "0%": {
            transform: "translate3d(0, 0, 0)",
            visibility: "visible",
          },

          "100%": {
            transform: "translate3d(27%, -100%, 0)",
          },
        },
      },
      animation: {
        slideInDown: "slideInDown 0.5s ease-in-out",
        slideOutUp: "slideOutUp 0.5 ease-in-out",
      },
    },
    colors: {
      white: "#ffffff",
      black: "#151515",
      primary: "#50C8E2",
    },
    clipPath: {
      hamburger:
        "clip-path: polygon(65% 0%, 100% 0%, 100% 33%, 84% 100%, 40% 100%);",
    },
  },
  plugins: [],
};
