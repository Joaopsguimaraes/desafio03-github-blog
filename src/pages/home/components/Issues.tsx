/* eslint-disable react/react-in-jsx-scope */
import { Card } from '../../../components/Cards';
import { Typography } from '../../../components/Typography';
import { css } from '../../../styles/theme/default';

const ISSUES_DATA = [
	{
		title: 'JavaScript data types and data structures',
		publishAt: 'Ha 1 dia',
		description:
      'Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in'
	},
	{
		title: 'JavaScript data types and data structures',
		publishAt: 'Ha 1 dia',
		description:
      'Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in'
	},
	{
		title: 'JavaScript data types and data structures',
		publishAt: 'Ha 1 dia',
		description:
      'Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in'
	},
	{
		title: 'JavaScript data types and data structures',
		publishAt: 'Ha 1 dia',
		description:
      'Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in'
	},
	{
		title: 'JavaScript data types and data structures',
		publishAt: 'Ha 1 dia',
		description:
      'Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in'
	}
];

const Container = css({
	maxWidth: 1000,
	margin: '0 auto',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	padding: 20,
	flexWrap: 'wrap',
	gap: 32
});

const IssueHeader = css({
	width: '100%',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between'
});

export function Issues() {
	return (
		<div className={Container()}>
			{ISSUES_DATA.map((issue, index) => (
				<Card
					css={{ flexDirection: 'column', maxWidth: '450px', gap: 10 }}
					key={index}
				>
					<div className={IssueHeader()}>
						<Typography size="20" weight="bold">
							{issue.title}
						</Typography>
						<Typography size="14">{issue.publishAt}</Typography>
					</div>
					<Typography>{issue.description}</Typography>
				</Card>
			))}
		</div>
	);
}
