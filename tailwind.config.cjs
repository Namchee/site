/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    fontFamily: {
      sans: ['"Nacelle"', '"Roboto"', '"Arial"', 'sans-serif'],
      mono: ['JetBrains Mono'],
    },
		fontSize: {
      'sm': '13.5px',
      'base': '18px',
      'lg': '23.99px',
      'xl': '31.98px',
      '2xl': '42.63px',
      '3xl': '56.83px',
      '4xl': '75.76px',
      '5xl': '100.98px',
    },
    colors: {
      surface: {
        DEFAULT: '#FDFCFD',
        dark: '#F4F2F4',
        darker: '#EEEDEF',
      },
      content: {
        light: '#7E7D86',
        DEFAULT: '#504F57',
        dark: '#34343A',
      },
      accent: {
        light: '#5D7CE9',
        DEFAULT: '#4164E5',
        dark: '#1E48DF',
      }
    },
	},
	plugins: [],
};
