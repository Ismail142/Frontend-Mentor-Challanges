/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./*.{html,js}"],
	theme: {
		fontFamily: {
			publicSans: ['Public Sans', 'sans-serif']
		},
		colors: {
			grayishBlue: "hsl(233, 8%, 62%)",
			lightGrayishBlue: "hsl(220, 16%, 96%)",
			veryLightGray: "hsl(0, 0%, 98%)",
			white: " hsl(0, 0%, 100%)",
			darkBlue: "hsl(233, 26%, 24%)",
			limeGreen: "hsl(136, 65%, 51%)",
			brightCyan: " hsl(192, 70%, 51%)",
		},
		extend: {
		},
	},
	plugins: [],
};
