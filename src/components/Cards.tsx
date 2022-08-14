/* eslint-disable react/react-in-jsx-scope */
import { ComponentProps, ElementType, ReactNode } from 'react';
import { styled, theme } from '../styles/theme/default';

const StyledCard = styled('div', {
	display: 'flex',
	background: theme.colors.basePost,
	border: '1px solid transparent',
	padding: 30,
	borderRadius: 10,
});

type CardProps = ComponentProps<typeof StyledCard> & {
  children: ReactNode;
  as?: ElementType;
}

export function Card({children, as = 'div', ...props}: CardProps){
	return(
		<StyledCard as={as} {...props}>
			{children}
		</StyledCard>
	);
}