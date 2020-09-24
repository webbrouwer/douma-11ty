module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    content: ["_src/**/*.html"],
    options: {
      whitelist: [],
    },
  },
  theme: {
    extend: {
      spacing: {
        '2/3': '66.666667%',
      },
      colors: {
        gray: {
          lighter: '#5e5e5e',
          default: '#4d4d4d',
          dark: '#454545',
        },
        orange: {
          lighter: '#EC9648',
          default: '#ea8b34',
          dark: '#D27D2E',
        },
        green: '#82a84d',
        lightgray: '#f1f1f1',
      },
      borderRadius: {
        'lg': '2rem',
      },
    },
  },
  variants: {},
  plugins: [],
};
