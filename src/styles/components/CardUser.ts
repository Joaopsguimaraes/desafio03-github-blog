import { styled, theme } from '../theme/default';

export const CardUser = styled('div', {
	display: 'flex',
	background: theme.colors.basePost,
	border: '1px solid transparent',
	padding: 30,
	borderRadius: 10,
	marginTop: 300,
	gap: 20,
	maxWidth: 900,
	maxHeight: 250,
	position: 'relative'
});

export const DataUser = styled('div',{
	display: 'flex',
	gap: 10,
	flexDirection: 'column',
	alignItems: 'flex-start',

	div:{
		display: 'flex',
		marginTop: 'auto',
		gap: 20,
		alignItems: 'center'
	}
});
