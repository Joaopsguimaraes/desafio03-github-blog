/* eslint-disable react/react-in-jsx-scope */
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';
import { globalStyles } from './styles/theme/global';

export function App(){

	globalStyles();
	return (
		<BrowserRouter>
			<Router />	
		</BrowserRouter>
	);
}