/* eslint-disable react/react-in-jsx-scope */
import * as AspectRatioPrimitive from '@radix-ui/react-aspect-ratio';
import { FaBuilding, FaGithub, FaUserFriends } from 'react-icons/fa';

import { Card } from '../../../components/Cards';
import { Link } from '../../../components/Link';
import { Typography } from '../../../components/Typography';
import { css, styled } from '../../../styles/theme/default';

export const AspectRatio = AspectRatioPrimitive;

const Box = styled('div', {
	maxWidth: 150,
	maxHeight: 150
});
const Img = styled('img', {
	objectFit: 'cover',
	width: '100%',
	height: '100%'
});

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
	alignItems: 'center',
});

interface AvatarProps {
  src: string;
  alt?: string;
  ratio: number;
}

function Avatar({ src, alt, ratio }: AvatarProps) {
	return (
		<Box
			css={{
				width: 300,
				borderRadius: 6,
				overflow: 'hidden',
				boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
			}}
		>
			<AspectRatio.Root ratio={ratio}>
				<Img src={src} alt={alt} />
			</AspectRatio.Root>
		</Box>
	);
}

export function User(){
	return(
		<Card css={{ marginTop: 300, gap: 20, maxWidth: 900, maxHeight: 250, position: 'relative'}}>
			<div>
				<Avatar src="https://github.com/Joaopsguimaraes.png" ratio={1} />
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
            Joao Guimaraes
					<Link href='https://github.com/Joaopsguimaraes' target='_blank'>GITHUB</Link>
				</Typography>
				<Typography>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
            tempora accusantium voluptatibus maxime eveniet, iure accusamus
            distinctio id fugit provident deleniti nulla ab nam consectetur est
            blanditiis eius culpa sed.
				</Typography>
				<div className={dataSocial()}>
					<Typography css={{gap: 8}}>
						<FaGithub size={18} />
              Joaopsguimaraes
					</Typography>
					<Typography css={{gap: 8}}>
						<FaBuilding size={18} />
              Kingspan Isoeste
					</Typography>
					<Typography css={{gap: 8}}>
						<FaUserFriends size={18} />
              4 seguidores
					</Typography>
				</div>
			</div>
		</Card>
	);
}

