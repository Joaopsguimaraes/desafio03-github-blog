/* eslint-disable react/react-in-jsx-scope */
import * as AspectRatioPrimitive from '@radix-ui/react-aspect-ratio';
import { styled } from '../styles/theme/default';

export const AspectRatio = AspectRatioPrimitive;

const Box = styled('div', {
	maxWidth: 150,
	maxHeight: 150
});
const Img = styled('img', {
	objectFit: 'cover',
	width: '100%'
});

export function Avatar() {
	return (
		<Box
			css={{
				width: 300,
				borderRadius: 6,
				overflow: 'hidden',
				boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
			}}
		>
			<AspectRatio.Root ratio={1}>
				<Img
					src="https://github.com/Joaopsguimaraes.png"
					alt="Joao Guimaraes"
				/>
			</AspectRatio.Root>
		</Box>
	);
}
