module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    backgroundImage: {
      'emphasis': "linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(180deg, rgba(0, 0, 0, 0) 41.15%, rgba(0, 0, 0, 0.8) 100%), url(./assets/banner-image.png);",
      'emphasis-desktop': "linear-gradient(180deg, rgba(0, 0, 0, 0) 41.15%, rgba(0, 0, 0, 0.8) 100%), url(./assets/banner-image.png)"
    },
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
