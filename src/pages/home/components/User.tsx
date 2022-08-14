/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from 'react';
import { FaBuilding, FaGithub, FaUserFriends } from 'react-icons/fa';

import { Card } from '../../../components/Cards';
import { Link } from '../../../components/Link';
import { Typography } from '../../../components/Typography';
import { api } from '../../../lib/axios';
import { css } from '../../../styles/theme/default';
import { Avatar } from './Avatar';

const dataUser = css({
	display: 'flex',
	gap: 10,
	flexDirection: 'column',
	alignItems: 'flex-start'
});

const dataSocial = css({
	display: 'flex',
	marginTop: 'auto',
	gap: 20,
	alignItems: 'center'
});

interface User {
  bio: string;
  name: string;
	company: string;
  login: string;
  following: number;
}

export function User() {
	const [userGitHub, setUserGitHub] = useState<User>({} as User);

	useEffect(() => {
		(async () => {
			const { data } = await api.get('/users/Joaopsguimaraes');
			setUserGitHub((state) => ({ ...state, ...data }));
		})();
	}, []);

	return (
		<Card
			css={{
				marginTop: 300,
				gap: 20,
				maxWidth: 900,
				maxHeight: 250,
				position: 'relative'
			}}
		>
			<div>
				<Avatar />
			</div>
			<div className={dataUser()}>
				<Typography
					size="24"
					weight="bold"
					css={{
						width: '100%',
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center'
					}}
				>
					{userGitHub.name}
					<Link href="https://github.com/Joaopsguimaraes" target="_blank">
            GITHUB
					</Link>
				</Typography>
				<Typography>{userGitHub.bio}</Typography>
				<div className={dataSocial()}>
					<Typography css={{ gap: 8 }}>
						<FaGithub size={18} />
						{userGitHub.login}
					</Typography>
					<Typography css={{ gap: 8 }}>
						<FaBuilding size={18} />
						{userGitHub.company}
					</Typography>
					<Typography css={{ gap: 8 }}>
						<FaUserFriends size={18} />
						{userGitHub.following} seguidores
					</Typography>
				</div>
			</div>
		</Card>
	);
}
