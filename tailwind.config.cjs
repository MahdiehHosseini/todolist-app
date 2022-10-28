/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{ts,tsx}'
	],
	theme: {
		extend: {
			fontFamily: {
				'inter' : ['Inter', 'sans-serif']
			},
			fontSize: {
				'lg-without-lineheigh' : '1.125rem',
				'xl-without-lineheigh' : '1.25rem',
				'4xl-without-lineheigh' : '2.25rem',
				'3xl-without-lineheigh' : '1.875rem'
			},
			borderWidth: {
				'15' : '15px'
			},margin: {
				'1/10' : '10%',
				'2/3' : '66%'
			}
		},
	},
	plugins: []
}
