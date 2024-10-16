/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		screens: {
			sm: '640px',
			// => @media (min-width: 640px) { ... }

			md: '768px',
			// => @media (min-width: 768px) { ... }

			lg: '1024px',
			// => @media (min-width: 1024px) { ... }

			xl: '1280px',
			// => @media (min-width: 1280px) { ... }

			'2xl': '1536px',
			// => @media (min-width: 1536px) { ... }
		},
		extend: {
			fontFamily: {
				Jakarta: ['Jakarta', 'sans-serif'],
			},
			colors: {
				Lime: '#d7da2f',
				Red: '#d73328',
				CyanGray: '#133040',
				Background: '#e3f3fd',
				Text: '#2c4c59',
			},
		},
	},
	plugins: [],
}
