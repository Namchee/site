/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    fontFamily: {
      sans: ['"Nacelle"', '"Roboto"', '"Arial"', 'sans-serif'],
      mono: ['JetBrains Mono'],
    },
		fontSize: {
      'sm': '0.8rem',
      'lg': '1.25rem',
      'xl': '1.563rem',
      '2xl': '1.953rem',
      '3xl': '2.441rem',
      '4xl': '3.052rem',
      '5xl': '3.851rem',
      '6xl': '4.768rem',
      '7xl': '5.96rem',
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
