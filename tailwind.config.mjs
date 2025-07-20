/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./pages/**/*.{html,js}',
    	'./components/**/*.{html,js}'
	],
	theme: {
		colors: {
			'primary': '#219EBC',
			'secondary': '#023047',
			'black': '#0E1111',
			'white': '#E9F5F8',
			'black-secondary': '#08202B',
		},
		extend: {
			fontFamily: {
				space: "'Space Grotesk', sans-serif",
				sans: "'DM Sans', sans-serif",
			},
			boxShadow: {
				'dark': '11px 9px 4px 0px rgba(0, 0, 0, 0.10)',
				'light': '11px 10px 4px rgba(153, 220, 236, 0.48)',
				'img-light': '20px 20px 0px #219EBC',
				'm-light': '22px 20px 8px rgba(0, 0, 0, 0.25)',
				'm-dark': '22px 20px 8px 0px #219EBC',
			}
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
