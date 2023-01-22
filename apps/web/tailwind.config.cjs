const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			primary: colors.blue[600],
			success: colors.green[500],
			failure: colors.red[500],
			gray: colors.gray
		},

		extend: {
			spacing: {
				90: '22.5rem'
			}
		}
	},
	plugins: []
};
