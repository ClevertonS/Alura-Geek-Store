module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Raleway', 'sans-serif'],
    },
    extend: {
      colors: {
        blue: {
          100: '#2A7AE4',
          80: '#5595E9',
          20: '#D4E4FA',
          10: '#EAF2FD',
        },
        black: {
          100: '#464646',
          50: '#A2A2A2',
          5: '#F5F5F5',
        },
      },
    },
  },
  plugins: [],
};
