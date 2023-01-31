const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			primary: colors.blue[600],
			'primary-dark': colors.blue[700],
			success: colors.green[500],
			failure: colors.red[500],
			black: colors.black,
			white: colors.white,
			gray: colors.gray
		},

		extend: {
			spacing: {
				90: '22.5rem',
				160: '40rem'
			}
		}
	},
	plugins: [
		// Change Rem to 10px
		plugin(function ({ addBase }) {
			addBase({
				html: { fontSize: '10px' }
			});
		})
	]
};
