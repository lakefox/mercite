/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#00F0B5',
					secondary: '#23C9FF',
					accent: '#EF767A',
					neutral: '#2A2B2E',
					'base-100': '#EFF1F3',
					info: '#3F84E5',
					success: '#23CE6B',
					warning: '#FFCF00',
					error: '#FF6663'
				}
			}
		]
	}
};
