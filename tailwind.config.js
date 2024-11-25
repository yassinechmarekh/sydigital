/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
	darkMode: 'media',
	// darkMode: 'class',
	theme: {
		extend: {
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			colors: {
				gunmetal: '#142532',
				"blue-100":"#eff6ff",
				turquoise: '#21ebd6',
				'caribbean-current': '#237379',
				darkgradient: "linear-gradient(41deg,rgba(35,115,121,1)_0%,rgba(20,37,50,1)_100%) ",
				lightgradient: "linear-gradient(24deg,rgba(35,115,121,0.6086367652529762)_15%,rgba(33,235,214,0.7879084739364496)_42%,rgba(20,37,50,0.6618580537683824)_100%) "
			
			},
		
			fontFamily: {
				subtitle: ['Manrope', 'sans-serif'],
				title: ['"Montserrat Alternates"', 'sans-serif'],
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
}

