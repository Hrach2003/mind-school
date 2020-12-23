module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        red: {
          700: "#CD3D1E",
        },
        blue: {
          900: "#262F41",
        },
        gray: {
          200: "#E3E2DC",
        },
      },
      gridTemplateRows: {
        10: "repeat(10, minmax(0, 1fr))",
      },
      spacing: {
        80: "20rem",
        90: "22.5rem",
        100: "25rem",
        120: "30rem",
        140: "35rem",
        1000: "250rem",
      },
      height: {
        "1/2": "50%",
        "2/3": "66.6666%",
        "3/4": "75%",
      },
      transitionProperty: {
        height: "height, max-height",
        spacing: "margin, padding",
      },
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
    },
  },
  plugins: [],
};
