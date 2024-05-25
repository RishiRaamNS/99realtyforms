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
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        bigg: {
          "0%": { transform: "scale(2)" },
          "100%": { transform: "scale(1)" },
        },
        plane: {
          "0%": { transform: "translate(-112px, 18%)" },
          "100%": { transform: "translate(33.5%, 128px)" },
        },
        building: {
          "0%": { transform: "translate(0, 50px)" },
          "100%": { transform: "translate(0, 0px)" },
        },
        bus: {
          "0%": { transform: "translate(-100%, 0)" },
          "100%": { transform: "translate(0, 0)" },
        },

        moveToLeft: {
          from: {},
          to: { transform: "translateX(-100%)" },
        },
        moveFromLeft: {
          from: { transform: "translateX(-100%)" },
          to: {},
        },
        moveToRight: {
          from: {},
          to: { transform: "translateX(100%)" },
        },
        moveFromRight: {
          from: { transform: "translateX(100%)" },
          to: {},
        },
      },
      animation: {
        bigg: "bigg 1s ease-in-out",
        plane: "plane 1s ease-in-out",
        building: "building 1s ease-in-out",
        bus: "bus 1s ease-in-out",
        moveToLeft: "moveToLeft 1s ease",
        moveFromRight: "moveFromRight 2s ease",
        moveToRight: "moveToRight 1s ease",
        moveFromLeft: "moveFromLeft 2s ease",
      },
    },
  },
  plugins: [],
};
