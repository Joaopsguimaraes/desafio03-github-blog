/* eslint-disable react/react-in-jsx-scope */
import { Input } from '../../../components/Input';
import { Typography } from '../../../components/Typography';
import { css } from '../../../styles/theme/default';

const searchContainer = css({
	width: 900,
	margin: '0 auto',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'flex-start',
	justifyContent: 'start',
	marginTop: 150,
	gap: 6
});

const headerSearch = css({
	width: '100%',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between'
});

export function SearchContent() {
	return (
		<div className={searchContainer()}>
			<div className={headerSearch()}>
				<Typography>Publicações</Typography>
				<Typography>6 publicações</Typography>
			</div>
			<Input label="Buscar Conteúdo" css={{ width: '100%', marginTop: 4 }} />
		</div>
	);
}
