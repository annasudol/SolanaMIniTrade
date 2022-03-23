module.exports = {
    purge: ["./pages/**/*.tsx", "./src/**/*.tsx"],
    darkMode: false, // or 'media' or 'class'
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
                },
                gray: {
                    0: "#202026",
                    1: "#272730",
                    2: "#32323E",
                    3: "#3D3D49",
                    4: "#575761",
                    5: "#5F5E6C",
                    6: "#8B8A9D",
                    7: "#9A99AD",
                    8: "#424250",
                },
            },
        },
    },
    variants: {},
    plugins: [require("@tailwindcss/aspect-ratio")],
};
