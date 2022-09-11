import { styled, theme } from '../theme/default';

export const CardIssues = styled('div', {
	maxWidth: 450,
	height: 320,
	padding: 30,
	display: 'flex',
	flexDirection: 'column',
	gap: 10,
	background: theme.colors.basePost,
	border: '1px solid transparent',
	borderRadius: 10
});
