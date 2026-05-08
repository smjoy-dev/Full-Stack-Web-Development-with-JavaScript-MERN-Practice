module.exports = {
    // bundle size komanor jonno amra content diye tailwind ke bolbo
    // kon kon file gulo te tailwind use kora hoise, 
    // jate kore tailwind sudhu oi file gulo theke css generate kore, 
    // baki file gulo theke css generate korbe na, jate kore bundle size kome jai
    content: ["./src/**/*.{html,js}"],
    theme: {
        // override default css here, but it will remove all the default colors,
        //  so we have to add all the default colors again if we want to use them
        // colors:{    
        //     // eigula add korle css er default color gula chole jabe, tai extend kore add korte hobe
        //     // 'primary':'#3490dc',
        //     // 'secondary':'#ffed4a',

        // },
        // override default screen size here, 
        // screen:{
        //     'sm':'480px',
        //     'md':'768px',
        //     'lg':'1024px',},

        extend: {
            // always use extend to add new colors, 
            // otherwise it will override the default colors
            colors: {
                warning: "#e60b0b",
                band: "#e60b99",
            },
            fontFamily: {
                popopins: ['Poppins', 'sans-serif'],
                playwrite: ["Playwrite Argentina", "cursive"],
            },
            mobile: {
                'sm': '480px',
                'md': '768px',
                'lg': '1024px',
            },
        }
    }
}

