import { styled, theme } from '../theme/default';

export const Typography = styled('p', {
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