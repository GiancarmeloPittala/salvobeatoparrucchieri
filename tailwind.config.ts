import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [
    "./**/*.{html, js, ts, vue}", 
  ],
  viewer: false,
  darkMode: 'class',
  theme: {
    fontFamily: {
      'display': ['Roboto', 'sans-serif'],
      'body': ['Roboto', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: 'rgba(140, 58, 80, 1)',
          100: 'rgba(140, 58, 80, .1)',
          200: 'rgba(140, 58, 80, .2)',
          300: 'rgba(140, 58, 80, .3)',
          400: 'rgba(140, 58, 80, .4)',
          500: 'rgba(140, 58, 80, .5)',
          600: 'rgba(140, 58, 80, .6)',
          700: 'rgba(140, 58, 80, .7)',
          800: 'rgba(140, 58, 80, .8)',
          900: 'rgba(140, 58, 80, .9)',
        },
        secondary: {
          DEFAULT: 'rgba(242, 174, 193, 1)',
          100: 'rgba(242, 174, 193, .1)',
          200: 'rgba(242, 174, 193, .2)',
          300: 'rgba(242, 174, 193, .3)',
          400: 'rgba(242, 174, 193, .4)',
          500: 'rgba(242, 174, 193, .5)',
          600: 'rgba(242, 174, 193, .6)',
          700: 'rgba(242, 174, 193, .7)',
          800: 'rgba(242, 174, 193, .8)',
          900: 'rgba(242, 174, 193, .9)',
        },
        black: {
          DEFAULT: 'rgba(38, 38, 38, 1)',
          100: 'rgba(38, 38, 38, .1)',
          200: 'rgba(38, 38, 38, .2)',
          300: 'rgba(38, 38, 38, .3)',
          400: 'rgba(38, 38, 38, .4)',
          500: 'rgba(38, 38, 38, .5)',
          600: 'rgba(38, 38, 38, .6)',
          700: 'rgba(38, 38, 38, .7)',
          800: 'rgba(38, 38, 38, .8)',
          900: 'rgba(38, 38, 38, .9)',
        }
      }
    }
  },
  plugins: []

}