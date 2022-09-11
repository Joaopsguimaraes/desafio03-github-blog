import { styled, theme } from '../theme/default';

export const TextField = styled('input', {
	display: 'flex',
	width: 317,
	height: 50,
	padding: '12px 16px',
	gap: 8,
	background: theme.colors.baseInput,
	border: `1px solid ${theme.colors.baseBorder}`,
	'&::placeholder': {
		color: theme.colors.baseLabel
	},
	'&:active, &:focus, &:hover': {
		border: `1px solid ${theme.colors.blue}`,
		color: theme.colors.baseText
	}
});