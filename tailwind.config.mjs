/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/pages/**.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
				'./src/components/**.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	mode: "jit",
	theme: {
	  extend: {
		keyframes: {
		  typing: {
			"0%": {
			  width: "0%",
			  visibility: "hidden"
			},
			"100%": {
			  width: "100%"
			}  
		  },
		  blink: {
			"50%": {
			  borderColor: "transparent"
			},
			"100%": {
			  borderColor: "white"
			}  
		  },
		},
		animation: {
		  typing: "typing 2s steps(20) alternate, blink 1s infinite",
		}
	  },
	},
	plugins: [],
  }