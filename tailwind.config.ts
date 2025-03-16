import type { Config } from 'tailwindcss';

const config: Config = {
    prefix: "tw-",
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        screens: {
            xs: "320px",
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            xxl: "1600px",
        },
        colors: {
            "primary-orange": "#f16806",
            "primary-blue": "#1745b9",
            "primary-dark-blue": "#052d90",
            "primary-black": "#171717",
            "primary-gray": "#d3d3d3",
            "primary-white": "#FFFFFF",
            "success": "#369d2a",
            "error": "#d03c3c",
        },
        fontSize: {
            xs: ".6rem",
            sm: ".7rem",
            md: ".875rem",
            base: "1rem",
            lg: "1.125rem",
            xl: "1.25rem",
            "2xl": "1.5rem",
            "3xl": "1.875rem",
            "4xl": "2.25rem",
            "5xl": "3rem",
            "6xl": "4rem",
            "7xl": "5rem",
            "15xl": "10rem",
        },
        extend: {
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
                open: ["Noto", "sans-serif"]
            },

        },
    },
    plugins: [],
};

export default config;
