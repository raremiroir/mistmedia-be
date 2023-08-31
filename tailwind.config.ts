import { join } from 'path';
import type { Config } from 'tailwindcss';

// 1. Import the Skeleton plugin
import { skeleton } from '@skeletonlabs/tw-plugin';
import { mistTheme } from './src/lib/styles/mist-theme';
// Import other tailwind stuff and plugins
import defaultTheme from 'tailwindcss/defaultTheme'
import twTypography from '@tailwindcss/typography'
import twForms from '@tailwindcss/forms'

const config = {
	// 2. Opt for dark mode to be handled via the class method
	darkMode: 'class',
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		// 3. Append the path to the Skeleton package
		join(require.resolve(
			'@skeletonlabs/skeleton'),
			'../**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'
		)
	],
	// Style main container
	container: {
      center: true,
      padding: "2rem",
    },
	// Define theme styles
	theme: {
		// Define breakpoints (min-width)
		screens: {
			'xs':  '320px',
			'sm':  '440px',
			'md':  '768px',
			'lg':  '992px',
			'xl':  '1200px',
			'2xl': '1440px',
			'3xl': '1920px',
		},
		// Define Font Size
		fontSize: {
			'xs': "clamp(0.625rem, 0.5867rem + 0.2041vw, 0.75rem)",
			'sm': "clamp(0.75rem, 0.7117rem + 0.2041vw, 0.875rem)",
			base: "clamp(0.875rem, 0.8367rem + 0.2041vw, 1rem)",
			'md': "clamp(0.875rem, 0.8367rem + 0.2041vw, 1rem)",
			'lg': "clamp(0.875rem, 0.7985rem + 0.4082vw, 1.125rem)",
			'xl': "clamp(1rem, 0.9235rem + 0.4082vw, 1.25rem)",
			'2xl': "clamp(0.875rem, 0.6837rem + 1.0204vw, 1.5rem)",
			'3xl': "clamp(1.25rem, 1.0587rem + 1.0204vw, 1.875rem);",
			'4xl': "clamp(1.5rem, 1.2704rem + 1.2245vw, 2.25rem)",
			'5xl': "clamp(1.25rem, 0.7143rem + 2.8571vw, 3rem)",
			'6xl': "clamp(2rem, 1.2347rem + 4.0816vw, 4.5rem)",
			'7xl': "clamp(3.25rem, 2.8673rem + 2.0408vw, 4.5rem)",
			'8xl': "clamp(2.25rem, 1.102rem + 6.1224vw, 6rem)",
			'9xl': "clamp(4.5rem, 3.5816rem + 4.898vw, 7.5rem)",
		},
		extend: {
			// Extend Font Size
			fontSize: {
				'2xs': "clamp(0.5625rem, 0.5242rem + 0.2041vw, 0.6875rem)"
			},
			// Extend Font Family
			fontFamily: {
				body: ['quasimoda', ...defaultTheme.fontFamily.sans],
				title: ['Josefin Sans', ...defaultTheme.fontFamily.sans],
				titlemono: ['attribute-mono', ...defaultTheme.fontFamily.mono],
			},
			// Extend Theme Colors
			colors: {
				primary: {
					DEFAULT: '#14b8a6',
					50: '#dcf4f2',  100: '#d0f1ed',
					200: '#c4ede9', 300: '#a1e3db',
					400: '#5bcdc1', 500: '#14b8a6',
					600: '#12a695', 700: '#0f8a7d',
					800: '#0c6e64', 900: '#0a5a51',
				},
				secondary: {
					DEFAULT: '#F34213',
					50: '#fde3dc',  100: '#fdd9d0',
					200: '#fcd0c4', 300: '#fab3a1',
					400: '#f77b5a', 500: '#F34213',
					600: '#db3b11', 700: '#b6320e',
					800: '#92280b', 900: '#772009',
				},
				tertiary: {
					DEFAULT: '#0891b2',
					50: '#daeff3',  100: '#cee9f0',
					200: '#c1e4ec', 300: '#9cd3e0',
					400: '#52b2c9', 500: '#0891b2',
					600: '#0783a0', 700: '#066d86',
					800: '#05576b', 900: '#044757',
				},
				success: {
					DEFAULT: '#65a30d',
					50: '#e8f1db',  100: '#e0edcf',
					200: '#d9e8c3', 300: '#c1da9e',
					400: '#93bf56', 500: '#65a30d',
					600: '#5b930c', 700: '#4c7a0a',
					800: '#3d6208', 900: '#315006',
				},
				warning: {
					DEFAULT: '#fbbf24',
					50: '#fef5de',  100: '#fef2d3',
					200: '#feefc8', 300: '#fde5a7',
					400: '#fcd266', 500: '#fbbf24',
					600: '#e2ac20', 700: '#bc8f1b',
					800: '#977316', 900: '#7b5e12',
				},
				error: {
					DEFAULT: '#dc2626',
					50: '#fadede',  100: '#f8d4d4',
					200: '#f6c9c9', 300: '#f1a8a8',
					400: '#e76767', 500: '#dc2626',
					600: '#c62222', 700: '#a51d1d',
					800: '#841717', 900: '#6c1313',
				},
				surface: {
					DEFAULT: '#9BA2A6',
					50: "#F7F7F8",
					100: "#F4F5F5",
					200: "#E9EBEC",
					300: "#E2E4E5",
					400: "#BEC3C5",
					500: "#9BA2A6",
					600: "#767F84",
					700: "#575D61",
					800: "#373C3E",
					900: "#161718",
					950: "#070808"
				},
			},
			// Extend Opacity
			opacity: {
				1: '.01', 1.5: '.015', 2: '.02', 2.5: '.025', 3: '.03', 3.5: '.035', 4: '.04', 
				4.5: '.045', 15: '.15', 35: '.35', 45: '.45', 55: '.55', 65: '.65', 
				80: '.8', 85: '.85', 96: '.96', 97: '.97', 98: '.98', 99: '.99',
			},
			// Extend Z-index
			zIndex: { '2': '2', '3': '3', '99': '99', '999': '999' },
			// Extend Spacing
			spacing: {
				13: '3.25rem', 15: '3.75rem', 17: '4.25rem', 18: '4.5rem', 19: '4.75rem',
				21: '5.25rem', 22: '5.5rem', 23: '5.75rem', 25: '6.25rem', 26: '6.5rem',
				27: '6.75rem', 50: '12.5rem', 54: '13.5rem', 58: '14.5rem', 62: '15.5rem',
				66: '16.5rem', 68: '17rem', 70: '17.5rem', 74: '18.5rem', 76: '19rem',
				78: '19.5rem', 84: '21rem', 88: '22rem', 92: '23rem', 100: '25rem',
				104: '26rem', 108: '27rem', 112: '28rem', 116: '29rem', 120: '30rem',
				124: '31rem', 128: '32rem', 132: '33rem', 136: '34rem', 140: '35rem',
				144: '36rem', 148: '37rem', 152: '38rem', 156: '39rem', 160: '40rem',
				180: '45rem', 200: '50rem', 220: '55rem', 240: '60rem', 260: '65rem',
				280: '70rem', 300: '75rem',
			},
			// Extend border radius
			borderRadius: {
				'tile-sm': '0.375rem 0 0.375rem 0',
				'tile-md': '0.5rem 0 0.5rem 0',
				'tile-lg': '0.75rem 0 0.75rem 0',
				'tile-xl': '1rem 0 1rem 0',
				'tile-2xl': '1.5rem 0 1.5rem 0',
				'tile-3xl': '2rem 0 2rem 0',
			},
			// Extend Shadows
			boxShadow: {
				'inner-xs-noblur':      'inset 1px  -1px  0 0 #00000040',
				'inner-sm-noblur':      'inset 2px  -2px  0 0 #00000040',
				'inner-md-noblur':      'inset 4px  -4px  0 0 #00000040',
				'inner-md-noblur-grow': 'inset 5px  -5px  0 0 #00000040',
				'inner-lg-noblur':      'inset 6px  -6px  0 0 #00000040',
				'inner-xl-noblur':      'inset 8px  -8px  0 0 #00000040',
				'inner-xxl-noblur':     'inset 10px -10px 0 0 #00000040',
				'xs-noblur':      '-1px  1px  0 0 #00000040',
				'sm-noblur':      '-2px  2px  0 0 #00000040',
				'md-noblur':      '-4px  4px  0 0 #00000040',
				'md-noblur-grow': '-5px  5px  0 0 #00000040',
				'lg-noblur':      '-6px  6px  0 0 #00000040',
				'xl-noblur':      '-8px  8px  0 0 #00000040',
				'xxl-noblur':     '-10px 10px 0 0 #00000040',
			},
			// Extended Keyframes
			keyframes: {
				zoomInOut: {
					'0%, 100%': { transform: 'scale(100%)'},
					'50%': { transform: 'scale(110%)'},
				},
				zoomOutIn: {
					'0%, 100%': { transform: 'scale(100%)'},
					'50%': { transform: 'scale(90%)'},
				},
				bounceReverse: {
					'0%, 100%': { transform: 'translate(0, 0%)'},
					'50%': { transform: 'translate(0, 7%)'},
				},
				waving: {
					'0%, 100%': { transform: 'translate(0%, 0%) rotate(0) skew(0)'},
					'50%': { transform: 'translate(0%, 5%) rotate(2deg) skew(0, 12deg)'},
				},
				wiggle: {
					'0%, 100%': { transform: 'rotate(0deg)' },
					'33%': { transform: 'rotate(3deg)' },
					'66%': { transform: 'rotate(-3deg)' },
				 },
				slideInRight: {
					'0%': { transform: 'translate(-100%, 0)' },
					'100%': { transform: 'translate(0, 0)' },
				 },
				slideInLeft: {
					'0%': { transform: 'translate(100%, 0)' },
					'100%': { transform: 'translate(0, 0)' },
				 },
				slideInDown: {
					'0%': { transform: 'translate(0%, -100%)' },
					'100%': { transform: 'translate(0, 0)' },
				 },
				slideInUp: {
					'0%': { transform: 'translate(0%, 100%)' },
					'100%': { transform: 'translate(0, 0)' },
				 },
				spinReverse: {
					'to': { transform: 'rotate(-360deg)' }
				}
			},
			// Extended Animation
			animation: {
				bounceReverse: 'bounceReverse 1s ease-in-out infinite',
				waving: 'waving 1s ease-in-out infinite',
				wiggle: 'wiggle 1s ease-in-out infinite',
				spinReverse: 'spin 1s linear infinite',
			},
		},
	},
	plugins: [
		twTypography(),
		twForms(),
		// 4. Append the Skeleton plugin (after other plugins)
		skeleton({
			themes: {
				custom: [ mistTheme ]
			}
		})
	]
} satisfies Config;

export default config;
