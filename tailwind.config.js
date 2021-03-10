module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontFamily: {
			sans: ['"Forma DJR Banner"', "sans-serif"],
			mono: ['"IBM Plex Mono"'],
		},
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
				darker: "#1F1F1F",
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
