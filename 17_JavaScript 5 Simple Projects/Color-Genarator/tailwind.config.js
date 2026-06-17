module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                primaryColor: "#4f46e5",
                backgroundColor: "#f8fafc",
                cardColor: "#ffffff",
                textColor: "#0f172a",
                textColorLight: "#64748b",
            },
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'],
                playwrite: ["Playwrite Argentina", "cursive"],
            },
            screens: {
                mobile: '480px',
                tab: '768px',
                desktop: '1024px',
            },
        }
    }
}

