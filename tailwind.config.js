module.exports = {
  content: ['./pages/**/*.tsx', './components/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        'primary-green': '#31A389',
        'secondary-orange': '#F65D5B',
        'primary-bg-green': '#E0F4F1',
        'dark-blue': '#37405A'
      },
      fontFamily: {
        logo: ['Send Flowers', 'cursive'],
        'normal-text': ['Roboto Serif', 'serif'],
      },
    },
  },
  plugins: [],
};
