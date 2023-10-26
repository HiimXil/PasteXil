/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'appMidPurple': '#d3d8f9',
				'appPurple': '#5718d6',
				'slackDark': '#222222',
			},
		},
	},
	plugins: [],
}
