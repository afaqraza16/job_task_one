/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    backgroundColor: {
      black: "#000",
      white: "#fff",
      red: "#D91E27",
    },
    extend: {
      fontFamily: {
        // poppne family
        poppins: ["Poppins", "sans-serif"],

        // neue plak
        neuePlak: ["Neue Plak", "sans-serif"],
      },
      fontSize: {
        font_flow: [
          "clamp(3.6rem , 1.5rem + 4vw , 7.3rem)",
          {
            letterSpacing: "clamp(0.025rem, 0.04rem + 0.02vw , 0.09rem)",
            fontWeight: "900",
          },
        ],
        font_para: {
          fontSize: "clamp(1.2rem , 0.9rem + 0.5vw , 1.8rem)",
        },
      },
    },
  },
  plugins: [],
};
