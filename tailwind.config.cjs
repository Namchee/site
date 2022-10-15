/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    fontFamily: {
      sans: ['"Nacelle"', '"Roboto"', '"Arial"', 'sans-serif'],
      mono: ['JetBrains Mono'],
    },
		fontSize: {
      'sm': '12px',
      'lg': '21.33px',
      'xl': '28.43px',
      '2xl': '37.9px',
      '3xl': '50.52px',
      '4xl': '67.34px',
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
