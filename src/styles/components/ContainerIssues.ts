import { styled } from '../theme/default';

export const ContainerIssues = styled('div', {
	maxWidth: 1000,
	margin: '0 auto',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	padding: 20,
	flexWrap: 'wrap',
	gap: 32,

	span: {
		width: '100%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between'
	}
});
