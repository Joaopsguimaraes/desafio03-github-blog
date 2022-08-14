/* eslint-disable react/react-in-jsx-scope */
import { ComponentProps } from 'react';
import { styled, theme } from '../styles/theme/default';


const StyledInput = styled('input', {
	display: 'flex',
	width: 317,
	height: 50,
	padding: '12px 16px',
	gap: 8,
	background: theme.colors.baseInput,
	border: `1px solid ${theme.colors.baseBorder}`,
	'&::placeholder': {
		color: theme.colors.baseLabel
	},
	'&:active, &:focus, &:hover': {
		border: `1px solid ${theme.colors.blue}`,
		color: theme.colors.baseText
	}
});

type InputProps = ComponentProps<typeof StyledInput> & {
  label: string;
}

export function Input({label, ...props}: InputProps){
	return(
		<StyledInput placeholder={label} {...props}  />
	);
}