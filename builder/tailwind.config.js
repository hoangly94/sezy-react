/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    content: ['./src/**/*.tsx'],
  },
  theme: {
    extend: {
      width: {
        500: '500px',
        800: '800px',
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}
