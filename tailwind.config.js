/* eslint-disable */
module.exports = {
    mode: "jit",
    content: ["./src/**/*.liquid", "./src/**/*.{js,jsx,ts,tsx,vue}"],
    darkMode: "class",
    theme: {
        screens: {
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "xl-product": "1340px",
            "2xl": "1536px",
        },
        container: {
            padding: "15.575px",
        },
        fontFamily: {
            sans: ["Montserrat", "sans-serif"],
        },
        extend: {
            padding: {
                "mobile-header": "69px",
            },
            margin: {
                "mobile-header": "39px",
            },
            zIndex: {
                negative: -1,
            },
            boxShadow: {
                sm: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            },
            fontSize: {
                xxs: [
                    ".625rem",
                    {
                        lineHeight: "0.875rem",
                    },
                ],
                "3xl": [
                    "1.75rem",
                    {
                        lineHeight: "2.25rem",
                    },
                ],
            },
            colors: {
                alabaster: "#F7F7F7",
                "alizarin-crimson": "#ED2E33",
                "black-coral": "#56646F",
                blue: "#0159A1",
                "dark-green": "#2D2D2D",
                "dark-orange": "#C55320",
                "dimmed-blue": "#F4F9FF",
                "granite-gray": "#626367",
                green: "#2A3E2F",
                grey: "#5D5D5B",
                gunmetal: "#252B37",
                lima: "#57C024",
                mercury: "#E8E6E6",
                onyx: "#353945",
                orange: "#FF5000",
                "pewter-blue": "#87AEBF",
                "prussian-blue": "#003A58",
                silver: "#ADB2B5",
                shark: "#2E2F36",
                "dove-gray": "#6F6E6E",
                pomegranate: "#EF4B25",
                flamingo: "#EF552E",
            },
            rotate: {
                360: "360deg",
            },
            transitionProperty: {
                accordion: "opacity, max-height",
            },
        },
    },
    variants: {},
    plugins: [
        require('@tailwindcss/typography'),
        function ({ addComponents }) {
            addComponents({
                ".container": {
                    maxWidth: "100%",
                    "@screen sm": {
                        maxWidth: "540px",
                    },
                    "@screen md": {
                        maxWidth: "720px",
                    },
                    "@screen lg": {
                        maxWidth: "960px",
                    },
                    "@screen xl": {
                        maxWidth: "1176px",
                    },
                    "@screen 2xl": {
                        maxWidth: "1176px",
                    },
                },
            });
        },
    ]
};
