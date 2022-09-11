/* eslint-disable react/react-in-jsx-scope */
import { useIssues } from '../hooks/useIssues';
import { SearchContainer } from '../styles/components/Search';
import { TextField } from '../styles/components/TextField';
import { Typography } from '../styles/components/Typography';

export function SearchContent() {
	const { issuesData } = useIssues();
	return (
		<SearchContainer>
			<span>
				<Typography>Publicações</Typography>
				<Typography>{issuesData.length} publicações</Typography>
			</span>
			<TextField
				placeholder="Buscar Conteúdo"
				css={{ width: '100%', marginTop: 4 }}
			/>
		</SearchContainer>
	);
}
