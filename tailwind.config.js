module.exports = {
  content: ["./src/**/*.{html,js,css}"],
  theme: {
    extend: {
      keyframes: {
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
      },
      animation: {
        blink: "blink 1.5s infinite",
      },
      grayscale: {
        40: "40%",
      },
    },
    fontFamily: {
      body: ["'Roboto Mono'", "monospace"],
    },
  },
  plugins: [],
};
