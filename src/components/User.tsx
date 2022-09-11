/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from 'react';
import { FaBuilding, FaGithub, FaUserFriends } from 'react-icons/fa';
import { api } from '../lib/axios';
import { CardUser, DataUser } from '../styles/components/CardUser';
import { Link } from '../styles/components/Link';
import { Typography } from '../styles/components/Typography';
import { Avatar } from './Avatar';

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
		<CardUser>
			<div>
				<Avatar />
			</div>
			<DataUser>
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
				<div>
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
			</DataUser>
		</CardUser>
	);
}
