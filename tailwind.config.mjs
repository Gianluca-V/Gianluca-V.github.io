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
			mytheme: {
			"primary": "#db2777",
			"secondary": "#5b21b6",
			"accent": "#fbcfe8",
			"neutral": "#374151",
			"base-100": "#111827",
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
