/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'regal-blue': '#000000' // custom color
            }
        },
        fontFamily: {
            display: ['Roboto', 'sans-serif'] // custom font
        }
    },
    plugins: []
};
