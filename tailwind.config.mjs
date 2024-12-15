/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require("tailwindcss/colors");

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './node_modules/flowbite/**/*.js'],
	daisyui: {
		themes: [
      {
        lightMode: {
          primary: colors.emerald[500],
          secondary: colors.emerald[600],
          accent: colors.emerald[400],
          neutral: colors.emerald[800],
          "base-100": colors.emerald[50], // Light mode background
          "base-content": colors.emerald[900], // Light mode text
        },
      },
      {
        black: {
          primary: colors.emerald[500],
          secondary: colors.emerald[600],
          accent: colors.emerald[400],
          neutral: colors.emerald[100],
          "base-100": colors.emerald[950], // Dark mode background
          "base-content": colors.emerald[100], // Dark mode text
        },
      },
    ],
	},
	theme: {
		extend: {
			fontFamily: {
				'sans': ["DM Sans", "Inter", ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [require("@tailwindcss/typography"), require("daisyui")],
}