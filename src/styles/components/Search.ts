import { styled } from '../theme/default';

export const SearchContainer = styled('div', {
	width: 900,
	margin: '0 auto',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'flex-start',
	justifyContent: 'start',
	marginTop: 150,
	gap: 6,

	span: {
		width: '100%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between'
	}
});
