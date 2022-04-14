module.exports = {
  content: ["./pages/**/*.tsx", "./src/**/*.tsx"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
    },
    fontFamily: {
      oswald: ["Oswald", "sans-serif"],
      PTSans: ["PT Sans", "sans-serif"],
    },
    extend: {
      colors: {
        main: {
          yellow: "#FCC419",
          brown: "#793510",
          lightBrown: "#B5530A",
          gray: {
            1: "#181A1F",
            2: "#1B1F22",
            3: "#E9ECEF",
          },
        },
      },
    },
  },
  variants: {},
  base: true,
  utils: true,
  logs: true,
  rtl: false,
};
