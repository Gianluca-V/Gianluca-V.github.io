/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	daisyui: {
		themes: [
		  {
			myTheme: {
			  "primary": "#a63cc3",
			  "secondary": "#691a7f",
			  "accent": "#ff2097",
			  "neutral": "#490445",
			  "base-100": "#0F0F0F", //374151
			  "info": "#f3f4f6",
			  "success": "#84cc16",
			  "warning": "#eab308",
			  "error": "#ef4444",
			},
		  },
		],
	  },
	plugins: [
		daisyui,
	  ],
}
