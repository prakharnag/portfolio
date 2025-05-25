/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'win98': {
          'bg': '#c0c0c0',
          'border': '#000000',
          'highlight': '#ffffff',
          'shadow': '#808080',
          'text': '#000000',
          'blue': '#000080',
        },
      },
      fontFamily: {
        'win98': ['VT323', 'monospace'],
      },
      boxShadow: {
        'win98': '2px 2px 0px 0px #808080',
        'win98-inset': 'inset -1px -1px #0a0a0a, inset 1px 1px #fff, inset -2px -2px grey, inset 2px 2px #dfdfdf',
      },
    },
  },
  plugins: [],
}
