import {  globalCss, theme } from './default';

export const globalStyles = globalCss({
	':focus': {
		outline: 'transparent'
	},
	'*': {
		margin: 0,
		padding: 0,
		boxSizing: 'border-box',
	},
	body: {
		fontFamily: `${theme.fonts.nunito}`,
		color: theme.colors.baseText,
		background: theme.colors.baseBackground,
		'--webkit-font-smoothing': 'antialiased'
	},
	'@font-face': {
		fontFamily: '"Nunito", sans-serif',
		src: 'url(\'https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap\')'
	},
});
