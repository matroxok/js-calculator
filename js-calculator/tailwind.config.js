/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				Jakarta: ['Jakarta', 'sans-serif'],
			},
			colors: {
				Lime: '#d7da2f',
				Red: '#d73328',
				CyanGray: '#133040',
			},
		},
	},
	plugins: [],
}
