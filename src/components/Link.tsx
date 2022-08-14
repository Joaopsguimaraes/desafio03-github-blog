/* eslint-disable react/react-in-jsx-scope */
import { ReactNode } from 'react';
import { ComponentProps } from 'react';
import { styled, theme } from '../styles/theme/default';
import { FaShareSquare}  from 'react-icons/fa';

const StyledLink = styled('a', {
	cursor: 'pointer',
	display: 'flex',
	color: theme.colors.blue,
	alignItems: 'center',
	padding: 0,
	gap:8,
	fontSize: '$md',
	fontFamily: '$nunito',
	textDecoration: 'none',
	'&:visited':{
		textDecoration: 'none',
		color: theme.colors.blue,
	},
	'&:hover': {
		textDecoration: 'underline',
	}
});

type LinkProps = ComponentProps<typeof StyledLink> & {
  children: ReactNode;
}


export function Link({ children, ...props }: LinkProps) {
	return (
		<StyledLink {...props}>
			{children}
			<FaShareSquare />
		</StyledLink>
	);
}