/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				point: '#1DC078',
				black: '#111111',
				dark_gray: '#7d7d7d',
				gray: '#bfbfbf',
				light_gray: '#e7e7e7',
				light_green: '#b7fbdc',
				dark_green: '#16a263',
				red: '#FF0000',
			},
		},
	},
	plugins: [],
};
