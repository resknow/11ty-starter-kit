const _ = require('lodash');
const defaultTheme = require('tailwindcss/defaultTheme');
const theme = require('tailwindcss/theme');
const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./templates/**/**/*.{njk,js,html,md,vue,jsx}'],
	theme: {
		/**
		 * For config where you'd like to override Tailwind's defaults,
		 * nest them in the `theme` object.
		 */
		fontSize: {
			xs: 'clamp(0.65rem, 0.5859rem + 0.2735vw, 0.75rem)',
			sm: 'clamp(0.75rem, 0.6987rem + 0.2188vw, 0.83rem)',
			base: 'clamp(0.75rem, 0.5897rem + 0.6838vw, 1rem)',
			lg: 'clamp(0.83rem, 0.5928rem + 1.012vw, 1.2rem)',
			xl: 'clamp(1rem, 0.7179rem + 1.2034vw, 1.44rem)',
			'2xl': 'clamp(1.2rem, 0.8615rem + 1.4441vw, 1.728rem)',
			'3xl': 'clamp(1.44rem, 1.0336rem + 1.734vw, 2.074rem)',
			'4xl': 'clamp(1.728rem, 1.2408rem + 2.0786vw, 2.488rem)',
			'5xl': 'clamp(2.074rem, 1.4894rem + 2.4944vw, 2.986rem)',
			'6xl': 'clamp(2.986rem, 2.5658rem + 1.7927vw, 4rem)',
		},
		fontWeight: {
			normal: 400,
			bold: 700,
		},
		lineHeight: {
			none: 1,
			tight: 1.1,
			base: 1.65,
			loose: 1.9,
		},
		/**
		 * For config where you'd like to simply extend what Tailwind
		 * is already offering, nest them in the `extend` object.
		 */
		extend: {
			colors: {
				base: theme('colors.gray.950'),
				contrast: theme('colors.white'),
				primary: '#1d4ed8',
				'primary-contrast': '#dbeafe',
				secondary: '#be185d',
				'secondary-contrast': '#fce7f3',
				tertiary: '#6d28d9',
				'tertiary-contrast': '#ede9fe',
				highlight: '#eab308',
				link: '#1d4ed8',
			},
			fontFamily: {
				sans: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol',
				mono: 'JetBrains Mono, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace',
			},
			spacing: {
				xs: 'clamp(0.5rem, 0.3397rem + 0.6838vw, 0.75rem)',
				sm: 'clamp(0.75rem, 0.5428rem + 0.884vw, 1.25rem)',
				md: 'clamp(1rem, 0.5856rem + 1.768vw, 2rem)',
				lg: 'clamp(1.5rem, 0.8785rem + 2.6519vw, 3rem)',
				xl: 'clamp(2rem, 1.1713rem + 3.5359vw, 4rem)',
				'2xl': 'clamp(2.5rem, 1.4641rem + 4.4199vw, 5rem)',
				'3xl': 'clamp(3rem, 1.7569rem + 5.3039vw, 6rem)',
				container: 'max(2rem, 10vw)',
				content: 'clamp(3rem, 1.3974rem + 6.8376vw, 5.5rem)',
			},
		},
	},
	plugins: [
		plugin(function ({ addUtilities, config, e }) {
			const flowSpaceUtilities = _.map(config('theme.spacing'), (value, key) => {
				return {
					[`.${e(`flow-space-${key}`)} > *`]: {
						'--flow-space': `${value}`,
					},
				};
			});

			addUtilities(flowSpaceUtilities);
		}),
	],
};
