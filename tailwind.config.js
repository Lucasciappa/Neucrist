
module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"], // remove unused styles in production
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow: {
      "shadow-top":
        "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 -10px 15px -3px rgba(0, 0, 0, 0.1)",
      "shadow-bottom":
        "rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px",
      "shadow-bot": "rgba(0, 0, 0, 0.20) 0px 10px 7px -7px;",
      "shadow-none": "0",
      "shadow-search-bar": "0 3px 10px rgb(0 0 0 / 10%)"
    },
    extend: {
      colors: {
        'primary': {
          'red': '#C22C0D',
          'red-hover': '#C22C0Dea',
          'red-light': '#C22C0Ddd',
          'yellow': '·F7C700',
          'black': '#2a2a2a',
          'white': '#FFFFFF',
          'input': '#FFF7F4',
          'home': '#F3D0C1',
          'gray': "#636363",
          "gray-light": "#EDEDED",
          'brown': "#953F3F",
          'dark':"#DDDDDD"
        },
        backgroundImage: {
          "about": "url('/images/productos/neumaticos2.jpg')"
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
      },
      spacing: {
        "18": "68px",
        "19": "72px",
        "21": "80px",
        "112": "29rem",
        "128": "32rem",
        "152": "38rem",
        "172": "43rem",
        "192": "48rem"
      },
    },
    fontFamily: {
      primary: ['Lato', 'sans-serif'],
      secondary: ['Market Deco', 'sans-serif']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
