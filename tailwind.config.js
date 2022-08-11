/* eslint-disable @typescript-eslint/naming-convention */

module.exports = {
	content: [
		'./pages/**/*.{vue,ts}',
		'./components/**/*.{vue,ts}',
		'./layouts/**/*.vue',
	],
	theme: {
		extend: {
			colors: {
				primary: {
					50: '#fff9f9',
					100: '#fff2f5',
					200: '#ffe8ec',
					300: '#ffc2cc',
					400: '#fe9aab',
					500: '#f88094',
					600: '#f36a81',
					700: '#f25872',
					800: '#e73b57',
					900: '#d12945',
				},
			},
      width: {
        fit: 'fit-content;'
      }
		},
	},
	plugins: [
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/forms'),
		require('@tailwindcss/line-clamp'),
		require('tailwindcss-children'),
	],
};
