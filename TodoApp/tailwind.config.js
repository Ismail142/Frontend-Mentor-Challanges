/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	darkMode: 'selector',
	theme: {
		extend: {
			colors: {
				brightBlue: "hsl(220, 98%, 61%)",
				veryLightGray: "hsl(0, 0%, 98%)",
				veryLightGrayishBlue: " hsl(236, 33%, 92%)",
				lightGrayishBlue: " hsl(233, 11%, 84%)",
				darkGrayishBlue: "hsl(236, 9%, 61%)",
				veryDarkGrayishBlue: "hsl(235, 19%, 35%)",
				veryDarkBlue: "hsl(235, 21%, 11%)",
				veryDarkDesaturatedBlue: "hsl(235, 24%, 19%)",
				darkLightGrayishBlue: "hsl(234, 39%, 85%)",
				darkLightGrayishBlueHover: "hsl(236, 33%, 92%)",
				darkDarkGrayishBlue: "hsl(234, 11%, 52%)",
				darkVeryDarkGrayishBlue: "hsl(233, 14%, 35%)",
			},

			backgroundImage: {
				bgWhite: "url('../public/assets/images/bg-desktop-light.jpg')",
				bgDark: "url('../public/assets/images/bg-desktop-dark.jpg')",
			},

			fontFamily: {
				'josefin': ['"Josefin Sans"', 'sans-serif']
			}
		},
	},
	plugins: [],
};
