const plugin = require("tailwindcss/plugin");

module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ps2p: ['"Press Start 2P"', "cursive"],
      },
      colors: {
        "primary-green": "#00E352",
        "primary-green-light": "#A9FA71",
        "primary-grey": "#292929",
        "primary-wine-dark": "#23062C",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities, theme }) {
      const defighter = {
        ".ps2p-8": {
          fontFamily: theme("fontFamily.ps2p"),
          fontStyle: "normal",
          fontWeight: "regular",
          fontSize: "8px",
          lineHeight: "16.5px",
        },
        ".ps2p-11": {
          fontFamily: theme("fontFamily.ps2p"),
          fontStyle: "normal",
          fontWeight: "regular",
          fontSize: "11px",
          lineHeight: "27.5px",
        },
        " .dfTransition": {
          transition: "all 0.2s linear 0s",
        },
      };

      addUtilities(defighter, ["responsive"]);
    }),
  ],
};
