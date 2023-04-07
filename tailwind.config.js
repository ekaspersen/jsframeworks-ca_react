/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        fontFamily: {
            montserrat: ["Montserrat", "sans-serif"],
        },
        extend: {
            colors: {
                primary: "#adff8f",
                black: "#121212",
            },
        },
    },
    plugins: [],
};
