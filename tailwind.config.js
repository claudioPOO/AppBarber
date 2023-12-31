module.exports = {
    prefix: '',
    content: [
      './src/**/*.{html,ts}',
    ],
    darkMode: 'media', // or 'media' or 'class'
    theme: {
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [require('@tailwindcss/forms'),require('@tailwindcss/typography')],
};