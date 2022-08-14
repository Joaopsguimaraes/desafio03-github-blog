/* eslint-disable react/react-in-jsx-scope */
import { ComponentProps, ElementType, ReactNode } from 'react';
import { styled, theme } from '../styles/theme/default'; 

const StyledTypography = styled('p', {
	color: theme.colors.baseText,
	fontFamily: theme.fonts.nunito,
	lineHeight: '160%',
	display: 'flex',
	alignItems: 'center',
	variants:{
		size:{
			12:{
				fontSize: '$xs',
			},
			14:{
				fontSize: '$sm',
			},
			16:{
				fontSize: '$md',
			},
			18:{
				fontSize: '$lg',
			},
			20:{
				fontSize: '$xl',
			},
			24:{
				fontSize: '$xxl',
			}
		},
		weight:{
			regular:{
				fontWeight: '400',
			},
			bold:{
				fontWeight: '600',
			},
		}
	}});

  type TypographyProps = ComponentProps<typeof StyledTypography> & {
    children: ReactNode;
    as?: ElementType;
  }

export function Typography({children, as = 'p', ...props}: TypographyProps){
	return(
		<StyledTypography as={as} {...props}>
			{children}
		</StyledTypography>
	);
}