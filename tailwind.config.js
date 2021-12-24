
module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"], // remove unused styles in production
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': {
          'red': '#C22C0D',
          'yellow': '·F7C700',
          'black': '#333333',
          'white': '#FFFFFF',
          'input': '#FFF7F4',
          'home': '#F3D0C1'
        },
        'text': {
          'primary': '#222222',
          'secundary': '#767676',
          'disabled': '#D4D5D6',
          'linked': '#D4D5D6',
          'info': '#FAA151'
        },
        'status': {
          'success': '#00CB6F',
          'warning': '#FFBC2C',
          'coral': '#EE7764'
        }
      }
    },
    fontFamily: {
      primary: ['Lato', 'sans-serif']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
