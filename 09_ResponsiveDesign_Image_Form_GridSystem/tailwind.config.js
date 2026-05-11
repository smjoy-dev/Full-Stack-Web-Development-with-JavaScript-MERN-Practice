module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                warning: "#e60b0b",
                band: "#e60b99",
            },
            fontFamily: {
                popopins: ['Poppins', 'sans-serif'],
                playwrite: ["Playwrite Argentina", "cursive"],
            },
            mobile: {
                mobile: '480px',
                tab: '768px',
                desktop: '1024px',
            },
        }
    }
}

