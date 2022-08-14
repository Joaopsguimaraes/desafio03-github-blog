import { createStitches, defaultThemeMap } from '@stitches/react';

export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } =   createStitches({
	themeMap: {
		...defaultThemeMap,
		opacity: 'opacity'
	},
	theme:{
		colors:{
			blue: '#3294f8',
			baseTitle: '#e7edf4',
			baseSubtitle: '#c4d4e3',
			baseText: '#afc2d4',
			baseSpan: '#7b96b2',
			baseLabel: '#3a536b',
			baseBorder: '#1c2f41',
			basePost: '#112131',
			baseProfile: '#0b1b2b',
			baseBackground: '#071422',
			baseInput: '#040f1a'
		},
		fonts:{
			nunito:'"Nunito", sans-serif',
		},
		fontSizes:{
			xs: '0.75rem',
			sm: '0.875rem',
			md: '1rem',
			lg: '1.125rem',
			xl: '1.25rem',
			xxl: '1.5rem',
		}
	}
});