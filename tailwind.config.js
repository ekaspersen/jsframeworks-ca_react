/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        fontFamily: {
            montserrat: ["Montserrat", "sans-serif"],
        },
        extend: {
            colors: {
                primary: "#34D89D",
                danger: "#f00",
                black: "#121212",
            },
            screens: {
                sm: "560px",
                lg: "850px",
            },
        },
    },
    plugins: [],
};
