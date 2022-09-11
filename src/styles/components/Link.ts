import { styled, theme } from '../theme/default';

export const Link = styled('a', {
	cursor: 'pointer',
	display: 'flex',
	color: theme.colors.blue,
	alignItems: 'center',
	padding: 0,
	gap: 8,
	fontSize: '$md',
	fontFamily: '$nunito',
	textDecoration: 'none',
	'&:visited': {
		textDecoration: 'none',
		color: theme.colors.blue
	},
	'&:hover': {
		textDecoration: 'underline'
	}
});
