/* eslint-disable react/react-in-jsx-scope */
import { formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/esm/locale/pt-BR';
import { useIssues } from '../hooks/useIssues';
import { CardIssues } from '../styles/components/CardIssues';
import { ContainerIssues } from '../styles/components/ContainerIssues';
import { Typography } from '../styles/components/Typography';

export function Issues() {
	const { issuesData } = useIssues();
	return (
		<ContainerIssues>
			{issuesData?.map((issue, index) => (
				<CardIssues
					css={{ flexDirection: 'column', maxWidth: '450px', gap: 10 }}
					key={index}
				>
					<span>
						<Typography size="20" weight="bold">
							{issue.title}
						</Typography>
						<Typography size="14">
							{formatDistanceToNow(new Date(issue.updated_at), {
								locale: ptBR,
								addSuffix: true
							})}
						</Typography>
					</span>
					<Typography>{issue.body}</Typography>
				</CardIssues>
			))}
		</ContainerIssues>
	);
}
