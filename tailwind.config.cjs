/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],

  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
          DEFAULT: '#f97316', // 500
          on: '#fff7ed', // 50
          dark: {
            DEFAULT: '#fdba74',
            on: '#9a3412', // 800
          },
        },
        midnight: '#0f172a', // slate-900
        midnight_light: '#1f2937',
        midnighthover: '#1f2937', // slate-800
      },
    },
    // eslint-disable-next-line no-undef
    plugins: [require('flowbite/plugin')],
  },
};
