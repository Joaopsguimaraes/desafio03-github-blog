/* eslint-disable react/react-in-jsx-scope */
import { ReactNode } from 'react';
import coverImage from '../assets/cover-header.png';
import { styled } from '../styles/theme/default';

const StyledBox = styled('div', {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	width: '100%',
	height: 296,
	minWidth: '100vw',
	backgroundImage: `url(${coverImage})`
});

interface HeaderProps {
	children?: ReactNode;
}

export function Header({ children }: HeaderProps) {
	return (
		<StyledBox>
			{children}
		</StyledBox>
	);
}
