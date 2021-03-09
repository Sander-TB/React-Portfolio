module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		colors: {
			teal: {
				light: "#00FFE5",
				DEFAULT: "#00bdaa",
				dark: "#1BA093",
			},
			gray: {
				lightest: "#b1abab",
				light: "#525252",
				DEFAULT: "#333333",
			},
			black: {
				DEFAULT: "#020202",
			},
			orange: {
				DEFAULT: "#fd8b25",
			},
			white: {
				DEFAULT: "#ffffff",
			},
		},
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
